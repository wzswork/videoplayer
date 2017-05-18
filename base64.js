var url = {
	play: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjhFQzgyMDY5MThCMTFFNTg2QTRDNzU4RUUyMzQxMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjhFQzgyMDU5MThCMTFFNTg2QTRDNzU4RUUyMzQxMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDk3QzYxRTE5MThCMTFFNUI0QTI5NjQxNEM0MzBEMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDk3QzYxRTI5MThCMTFFNUI0QTI5NjQxNEM0MzBEMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5rcFh2AAAAh0lEQVR42pyS4QmAIBCFVW6F3KwaohYr2qamsF9NYHegIKHdeQ8+wqD3vigbYzSUZ7B02ZAVuY0w7nOekAsZtQUUj+wJrynIIYuTs3HMAGvjhK/atJEWNG16Cqo2mgKKTRhQPHwgCxJ6DejvnJN6yDdBs9rzFaqrZUCzyhmwq38GotUyrwADAFOyICvEROhlAAAAAElFTkSuQmCC";
	pause: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTJDRUQ4MTg5MThDMTFFNUE2NUZDNjQ4OEMxQzQ4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTJDRUQ4MTc5MThDMTFFNUE2NUZDNjQ4OEMxQzQ4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDlEMjA5QTgyOTA2MTFFNTk2NDg4OTk3Rjc0NEFDRjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDlEMjA5QTkyOTA2MTFFNTk2NDg4OTk3Rjc0NEFDRjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zq0uVAAAAOUlEQVR42mL8//8/w0dRRgZyAP/r/wwsSPz/aPLopmKVZ2KgEIwaMGrAqAEQwIIn9zEQyJ1gABBgAIKJCCO+oOX0AAAAAElFTkSuQmCC";
	volumeplay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzMyMkMwOEI5MTkwMTFFNUIwMkNCQzI3REI3MTcyMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzMyMkMwOEE5MTkwMTFFNUIwMkNCQzI3REI3MTcyMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2NDZCRjYyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2NDZCRjcyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71OHQdAAABHElEQVR42qTSMUgCcRTHcRNxCEQHR5sicGgIRJDQaBI0aK+9HAyFAnFxcWmIEgqHahVqrKESx1CQHAUJdJMmJyGiBq3vwQseF3l3+IcP97//vf/v7t7dQrFUds0z3BbXA3LM4RZrTgL8aMh8hG10cGgnwIdHROX8Bit4xikyswIW8YB109obUmiigiXjgkcK9lXxLhKm0ANM5O576CGL4m/ApY1mH+Mer2gjbQS4HX6xlMy7WLbzGc3j2+l/oIfRg7rMV9HXTcyowh1smjZPUcAAYcRwogOuVHENT9hQa+f4hBfX+EL1v1f4wBZaas3YHJLgOPIYzurBu4S8qNfqy1MdyVNYNnGMpMyDuEMEZ7rIY9H5sRwvxJ/xI8AAbOY0dQ4A1dYAAAAASUVORK5CYII=";
	volumeplayhover: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjg0ODhCMTQ5MTkwMTFFNUJCMjRDRjE3OTkwQjM5RTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjg0ODhCMTM5MTkwMTFFNUJCMjRDRjE3OTkwQjM5RTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2NDZCRjYyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2NDZCRjcyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4W5amnAAABDklEQVR42mL8IMJAEWAiIC8ApfOAeAUQG5BiAD8Q74KyXwOxHxCfBuIiYgzgBeJtQGwK5S8HYlUgPgTEvUCcDlPIiCUMuIB4BxDbwtRAxb4BMRsQ7wViYyBWB+LHLFBFaUgGRCFphoEcIP4LtT0ViK8BcTYQV8Bc8B9PWIBcUAHErVBb7wDxMSDmAWI9JhJjzBPKvgzEysREIzr4T2o6QAZ/oYELAjpAfBvEgAViOpLCSCB2QNP8D4jLoP7XAGILIO7GF43bgdgOKRA5gPgHtmjE5gVQfHsD8VEkMZBmGajBNkCcD9KMLwy+QA05heSt21BXFQPxbGIC8SMQu0HZII9ugDq9DyWRUJqdAQIMAOWKNC8Lm2J9AAAAAElFTkSuQmCC";
	volumenonehover: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM0ODQ1OTA5MTkwMTFFNUEyMkJFMjIyNjYxMjA5NDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM0ODQ1OEY5MTkwMTFFNUEyMkJFMjIyNjYxMjA5NDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2NDZCRjYyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2NDZCRjcyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hwgDYAAABLElEQVR42qTTsUsCYRzG8c7EwKGpphbHqJZqbw7CKTOIoMYmhyYDU9L+hIYS14awRYSGhoKGCImgNYLWqIZaIoKy78lj/Hh5LwNf+PAe3vs+nM+9F7yODPQ1Ypp3UPDcT2heQQWjUQFfWlBwNh/relj37rHoCyij5IQsI63rfcziAUfIdgPiJqysuaJ5FxNm3Q3mcIYqLvA4mE92FixhEi8Ywxq+UVTAJqZwiRZy+MB5oLfQjii5qCdaRw3j6uEKQ5iO93hL9m+Fm+exh1usuh30CskjZcqP/Teg5Cl4Bnc2IGs2hAUueJ7Ahpyq5N+AutnQ0AFKOyFtE7KFpD1Idnwig6bz+wmeFbKN96gAX8gGrrX+0IT8WWI3JBxvOhMHeFKBnQ8t6Pdz/hFgAGp/QW4RF7sbAAAAAElFTkSuQmCC";
	volumenone: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVBNTFBODc5MTkwMTFFNUE1NUJFOTdFRkE3QjYzQzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVBNTFBODY5MTkwMTFFNUE1NUJFOTdFRkE3QjYzQzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2NDZCRjYyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2NDZCRjcyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4gP6oRAAABJklEQVR42qSSvUsDQRBHkxBSWKRLbxkstbcOxFSaCCLYWAg2lhFyBhP/hBQqtiJ+NCJYWFhYWIiIVgEJ2Eq0MYVFQM07+C0My54GHHjMsrvzbm920/WolfpPZJS3oRFYzykvQRsKSYIvbWh4xWca57XWg/mQIP6PpidZhIrGuzADL3AMNSfIGplrRlt5B6bMvgeYhWvYhxt4dYKqchduJUnDpuY3YKDCVcnWIXKCk0AD7Yne4UBff4Q7mLOCpLCSIpSgA0+w7PfgL0kdJk3zM+MKmoEGT8OzFdRMwQqUAyewkiv4toJTU3CuB1TxJD9GEt/OhH1INoawABfe/CW8SRLBZ5IgJFmDe+0/NJJfm+gkcXzAFuxBXw3MjXMLQ+WjhKtNjQQYAJMVQimyaKLpAAAAAElFTkSuQmCC";
	full: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzUzREUxNjFBQ0E0MTFFNkE4MkJBNzk4N0UzRTc4QTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzUzREUxNjBBQ0E0MTFFNkE4MkJBNzk4N0UzRTc4QTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDI4NjU2MEE5MThFMTFFNThBNTVCQzAwNkVGRTM5MTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDI4NjU2MEI5MThFMTFFNThBNTVCQzAwNkVGRTM5MTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55YwogAAAAUklEQVR42mL8//8/AyWABURMmbUAw5SctARGZD4uNUwMFAIWfLbikkN2DcUuoNgARkpjYeC9QB0DQNGCLaHgAsjqB94LLLjSOzF5YXAkJIAAAwCjOChPe7VM+gAAAABJRU5ErkJggg==";
	fullhover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTZBMDM5QTFBQ0E0MTFFNjg1NEM5MjQ2RDgxNzdBNTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTZBMDM5QTBBQ0E0MTFFNjg1NEM5MjQ2RDgxNzdBNTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEUyQzA4RDE5MThFMTFFNTk5RkNBMTJBRTJCNTk0OEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEUyQzA4RDI5MThFMTFFNTk5RkNBMTJBRTJCNTk0OEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4KyDucAAAAUklEQVR42mL8//8/AyWABUR8FBXFMIX/9WtGZD4uNUwMFAIWfLbikkN2DcUuoNgARkpjYeC9QB0DQNGCLaHgAsjqB94LLLjSOzF5YXAkJIAAAwB7jCWDVEFbLQAAAABJRU5ErkJggg==";
}