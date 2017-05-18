;(function(global, factory){
	if (typeof define === 'function' && define.amd) {
	  define(factory);
	} else if (typeof exports === 'object') {
	  module.exports = factory();
	} else {
	  global.enplayer = factory();
	}
})(typeof window !== 'undefined' ? window : this, function(opts){
	// 默认播放器容器
	var videoBox = document.createElement('div');
	videoBox.className = 'video-box';
	var trackSeleted = 0;
	var enplayer = {
		options: {
			dom: videoBox,
			video: [{src: '', type: 'video/mp4'}],
			track: [{id: 'trackdefaut', src: '', label: '无字幕' ,isDefault: true}],
			width: 800,
			height: 600
		},
		setConfig: function(opts){
			var key, value;
			for(key in opts){
				value = opts[key];
				if (value !== undefined && opts.hasOwnProperty(key)){
					this.options[key] = value;
				} 
			}
			return this;
		},
		// 创建播放器
		initVideo: function(){
			var opts = this.options;
			var defaultTrack;
			var videoHtml = '<video width="'+opts.width+'" height="'+opts.height+'">';
			for(var i = 0; i < opts.video.length; i++){
				videoHtml += '<source src="'+opts.video[i].src+'" type="'+opts.video[i].type+'">';
			}
			for(var j = 0; j < opts.track.length; j++){
				videoHtml += '<track kind="subtitles" id="'+opts.track[j].id+'" label="'+opts.track[j].label+'" src="'+opts.track[j].src+'" '+(opts.track[j].isDefault?"default":"")+'>';
				if(opts.track[j].isDefault){
					defaultTrack = opts.track[j];
				}
			}
			videoHtml += '</video>';
			videoHtml += '<div class="control-box">'+
							'<div class="progress">'+
								'<span class="progress-time"></span>'+
								'<div class="progress-point"></div>'+
								'<div class="progress-cached"></div>'+
								'<div class="progress-played"></div>'+
							'</div>'+
							'<div class="controls-left">'+
								'<div class="play-button"></div>'+
								'<div class="time">00:00/00:00</div>'+
								'<div class="prev-button">上一句</div>'+
								'<div class="next-button">下一句</div>'+
							'</div>'+
							'<div class="controls-right">'+
								'<div class="volume-button"></div>'+
								'<div class="volume-progress">'+
									'<div class="volume-point"></div>'+
									'<div class="volume-now"></div>'+
								'</div>'+
								'<div class="lan-select">'+
									'<div class="lan-button">'+defaultTrack.label+'</div>'+
									'<div class="lan-list" style="display: none;">'+
										'<ul>'+
											(function(){
												var li = '';
												for(var t = 0; t < opts.track.length; t++){
													li += '<li data-index="'+t+'">'+opts.track[t].label+'</li>';
												}
												li += '<li data-index="-">无字幕</li>';
												return li;
											})()+
										'<ul>'+
									'</div>'+
								'</div>'+
								'<div class="full-button"></div>'+
							'</div>'+
						'</div>';
			videoBox.innerHTML = videoHtml;
			opts.dom.appendChild(videoBox);
			return this;
		},
		// 初始化对象
		initObject: function(){
			var dom = this.options.dom;
			this.play = dom.querySelector('.play-button');
			this.timebox = dom.querySelector('.time');
			this.prev = dom.querySelector('.prev-button');
			this.next = dom.querySelector('.next-button');
			this.lan = dom.querySelector('.lan-button');
			this.lanlist = dom.querySelector('.lan-list');
			this.vi = dom.querySelector('video');
			this.trackList = this.vi.textTracks;
			this.progress = dom.querySelector('.progress');
			this.procache = dom.querySelector('.progress-cached');
			this.proplayed = dom.querySelector('.progress-played');
			this.propoint = dom.querySelector('.progress-point');
			this.volumebtn = dom.querySelector('.volume-button');
			this.volpoint = dom.querySelector('.volume-point');
			this.volnow = dom.querySelector('.volume-now');
			this.volprogress = dom.querySelector('.volume-progress');
			this.nowvol = 0;
			return this;
		},
		// 绑定事件
		initEvents: function(){
			var _this = this;
			//字幕选择框
			_this.lan.onclick = function(e){
				if(_this.lanlist.style.display == 'none'){
					_this.lanlist.style.display = 'block';
				}else{
					_this.lanlist.style.display = 'none';
				}
				e.preventDefault();
				e.stopPropagation();
			};

			document.body.onclick = function(){
			    if(_this.lanlist.style.display == 'block'){
					_this.lanlist.style.display = 'none';
				}
			};
			//播放暂停
			_this.play.onclick = function(e){
				if(this.className == 'play-button'){
					_this.vi.play();
					this.className = 'play-button pause-button';
				}else{
					_this.vi.pause();
					this.className = 'play-button';	
				}
			};

			_this.vi.onclick = function(e){
				if(_this.play.className == 'play-button'){
					_this.vi.play();
					_this.play.className = 'play-button pause-button';
				}else{
					_this.vi.pause();
					_this.play.className = 'play-button';	
				}
			};
			// 切换字幕
			_this.lanlist.onclick = function(e){
				var item = e.target;
				trackSeleted = item.dataset.index;
				
				for(var i=0; i<_this.trackList.length; i++){
					_this.trackList[i].mode = "hidden";
				}
				if(index != '-'){
					_this.trackList[parseInt(trackSeleted)].mode = "showing";
				}
				_this.lan.textContent = item.textContent;
			};
			//上一句
			_this.prev.onclick = function (e) {
				if(trackSeleted != '-'){
					trackSeleted = parseInt(trackSeleted);
					for(var i = _this.vi.textTracks[trackSeleted].cues.length-1; i >= 0; i--){
						if(_this.vi.textTracks[trackSeleted].cues[i].startTime <= _this.vi.currentTime){
							_this.vi.currentTime = _this.vi.textTracks[trackSeleted].cues[i-1].startTime;
							break;
						}
					}
				}
			};
			//下一句
			_this.next.onclick = function(e){
				if(trackSeleted != '-'){
					trackSeleted = parseInt(trackSeleted);
					for(var i = 0; i < _this.vi.textTracks[trackSeleted].cues.length; i++){
						if(_this.vi.textTracks[trackSeleted].cues[i].startTime > _this.vi.currentTime){
							_this.vi.currentTime = _this.vi.textTracks[trackSeleted].cues[i].startTime;
							break;
						}
					}
				}
			};

			// 元数据
			_this.vi.onloadedmetadata = function(){
				_this.timebox.textContent = formatTime(0)+'/'+formatTime(_this.vi.duration);
				_this.volpoint.style.left = _this.vi.volume * 60-8 + 'px';
				_this.volnow.style.width = _this.vi.volume * 60-8 + 'px';
			};

			//缓冲条
			_this.vi.onprogress	= function(){
				_this.procache.style.width = (_this.vi.buffered.end/_this.vi.duration)*100+'%';
			};

			_this.vi.oncanplaythrough = function(){
				_this.procache.style.width = '100%';
			};

			// 播放进度条
			_this.vi.ontimeupdate = function(){
				var width = (_this.vi.currentTime/_this.vi.duration)*100;
				_this.propoint.style.left = width*(_this.vi.width-16)/100+'px';
				_this.proplayed.style.width = width+'%';
				_this.timebox.textContent = formatTime(_this.vi.currentTime)+'/'+formatTime(_this.vi.duration);
			};

			// 点击进度条
			_this.progress.onmousedown = function(e){
				var width = 0;
				if(e.target.className == 'progress-point'){
					width = e.offsetX+_this.propoint.offsetLeft;
				}else{
					width = e.offsetX;
				}
				_this.proplayed.style.width = width+'px';
				_this.propoint.style.left = width-8+'px';
				_this.vi.currentTime = (width/_this.vi.width)*_this.vi.duration;
			};

			// 拖动进度条
			_this.propoint.onmousedown=function (e){
				_this.vi.pause();
				_this.play.className = 'play-button';
				var x = e.clientX;
				var l = _this.propoint.offsetLeft;
				var max = _this.progress.offsetWidth - _this.propoint.offsetWidth;
				document.onmousemove = function (e){
					var thisX = e.clientX;
					var to = Math.min(max,Math.max(0,l+(thisX-x)));
					_this.propoint.style.left = to + 'px';
					_this.proplayed.style.width = to + 'px';
					_this.vi.currentTime = to/max*_this.vi.duration;
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				};
				document.onmouseup = function() {
					if(this.onmousemove != null){
						_this.vi.play();
						_this.play.className = 'play-button pause-button';
					}
					
					this.onmousemove = null;
				};
				
			};

			// 音量操作
			_this.volumebtn.onclick = function(){
				if(this.className == 'volume-button'){
					_this.nowvol = _this.vi.volume;
					_this.vi.volume = 0;
					this.className = 'volume-button silence-button';
				}else{
					_this.nowvol = _this.vi.volume;
					_this.vi.volume = 0;
					_this.vi.volume = _this.nowvol;
					this.className = 'volume-button';	
				}
			}

			_this.volpoint.onmousedown = function(e){
				var x = e.clientX;
				var l = _this.volpoint.offsetLeft;
				var max = _this.volprogress.offsetWidth - _this.volpoint.offsetWidth;
				document.onmousemove = function(e){
					var thisX = e.clientX;
					var to = Math.min(max, Math.max(0, l+(thisX-x)));
					_this.volpoint.style.left = to + 'px';
					_this.volnow.style.width = to + 'px';
					_this.vi.volume = Math.floor(to*10/max)/10;
					console.log(_this.vi.volume);
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				};
				document.onmouseup = new Function('this.onmousemove=null');
			}

			_this.volprogress.onclick = function(e){
				var width = 0;
				if(e.target.className == 'volume-point'){
					width = e.offsetX + _this.volpoint.offsetLeft;
				}else{
					width = e.offsetX;
				}
				width = width<52?width:52;
				_this.volnow.style.width = width+'px';
				_this.volpoint.style.left = width+'px';
				_this.vi.volume = Math.floor((width)*10/52)/10;
				console.log(_this.vi.volume);
			}

			return this;
		},
		start: function(opts){
			this.setConfig(opts).initVideo().initObject().initEvents();
		}
	};
	// helpers
	// 时间格式化
	function formatTime(time){
		var m = Math.floor(time/60);
		var s = Math.floor(time%60);
		if(m<10){
			m = '0'+m;
		}
		if(s<10){
			s = '0'+s;
		}
		return m+':'+s;
	}

	// 全屏
	function fullScreen(argument) {
		// body...
	}

	return enplayer;
});