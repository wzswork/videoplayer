
var page = {
	init:function(){
		this.initObject();
		this.initEvents();
	},
	initObject: function(){
		this.play = document.querySelector('.play-button');
		this.timebox = document.querySelector('.time');
		this.prev = document.querySelector('.prev-button');
		this.next = document.querySelector('.next-button');
		this.lan = document.querySelector('.lan-button');
		this.lanlist = document.querySelector('.lan-list');
		this.vi = document.getElementById('video');
		this.trackList = this.vi.textTracks;
		this.tr = document.getElementById('enTrack');
		this.progress = document.querySelector('.progress');
		this.procache = document.querySelector('.progress-cached');
		this.proplayed = document.querySelector('.progress-played');
		this.propoint = document.querySelector('.progress-point');
		this.volumebtn = document.querySelector('.volume-button');
		this.volpoint = document.querySelector('.volume-point');
		this.volnow = document.querySelector('.volume-now');
		this.volprogress = document.querySelector('.volume-progress');
		this.nowvol = 0;
	},
	formatTime: function(time){
		var m = Math.floor(time/60);
		var s = Math.floor(time%60);
		if(m<10){
			m = '0'+m;
		}
		if(s<10){
			s = '0'+s;
		}
		return m+':'+s;
	},
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
				_thisvi.pause();
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
			var index = item.dataset.index;
			
			for(var i=0; i<_this.trackList.length; i++){
				_this.trackList[i].mode = "hidden";
			}
			if(index != '-'){
				_this.trackList[parseInt(index)].mode = "showing";
			}
			_this.lan.textContent = item.textContent;
		};
		//上一句
		_this.prev.onclick = function (e) {
			for(var i = _this.vi.textTracks[lan].cues.length-1; i >= 0; i--){
				if(_this.vi.textTracks[lan].cues[i].startTime <= _this.vi.currentTime){
					_this.vi.currentTime = _this.vi.textTracks[lan].cues[i-1].startTime;
					break;
				}
			}
		};
		//下一句
		_this.next.onclick = function(e){
			for(var i = 0; i < _this.vi.textTracks[lan].cues.length; i++){
				if(_this.vi.textTracks[lan].cues[i].startTime > _this.vi.currentTime){
					_this.vi.currentTime = _this.vi.textTracks[lan].cues[i].startTime;
					break;
				}
			}
		};

		// 元数据
		_this.vi.onloadedmetadata = function(){
			_this.timebox.textContent = _this.formatTime(0)+'/'+_this.formatTime(_this.vi.duration);
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
			_this.propoint.style.left = width*_this.vi.width/100-8+'px';
			_this.proplayed.style.width = width+'%';
			_this.timebox.textContent = _this.formatTime(_this.vi.currentTime)+'/'+_this.formatTime(_this.vi.duration);
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
			document.onmouseup = new Function('this.onmousemove=null');
		};

		// 音量操作
		_this.volumebtn.onclick = function(){
			if(this.className == 'volume-button'){
				_this.nowvol = vi.volume;
				vi.volume = 0;
				this.className = 'volume-button silence-button';
			}else{
				_this.nowvol = vi.volume;
				vi.volume = 0;
				vi.volume = _this.nowvol;
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
			_this.volnow.style.width = width+'px';
			_this.volpoint.style.left = width-4+'px';
			_this.vi.volume = Math.floor((width-8)*10/52)/10;
			console.log(_this.vi.volume);
		}

	}
}

page.init();

