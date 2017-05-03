function timer(){
	var	date = new Date(), hours = date.getHours(), minutes = date.getMinutes(), seconds  = date.getSeconds();
	if(hours < 10){
		hours = '0' + hours;
	}
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	var str = hours + ":" + minutes + ':' + seconds;
	document.body.querySelector('.timer').innerHTML = str;
}

setInterval(timer, 1000);