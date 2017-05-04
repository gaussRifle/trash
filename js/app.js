function timer() {
	var	date = new Date(), 
		hours = date.getHours(), 
		minutes = date.getMinutes(), 
		seconds  = date.getSeconds();
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

var field = document.querySelector('.field'),
	ball = document.querySelector('.ball');

field.onclick = function(event) {
	//координаты клика в блоке
	var left = event.clientX - field.getBoundingClientRect().left;
	var top = event.clientY - field.getBoundingClientRect().top;

	//смещаем на половину по высоте и шар, чтобы центр мяча был по координатам клика (теперь это новые координаты мяча)
	var leftCurrent = left - ball.clientWidth / 2;
	var topCurrent = top - ball.clientHeight / 2;
	
	//теперь сделаем так чтобы мяч не вылетал в аут
	//проверим координаты левой стороны ежели вдруг они оказались меньше нуля, то принудительно присваиваем нулю
	if(leftCurrent < 0) {
		leftCurrent = 0;
	}
	//Правая граница с новыми координатами мяч вылетает на половину
	//По этому нужно проверить если позиционирование слева больше, чем ширина поля минус радиус мяча
	//то позиционированию слева принудительно присваиваем ширину минус радиус мяча
	if(leftCurrent > field.clientWidth - ball.clientWidth) {
		leftCurrent = field.clientWidth - ball.clientWidth;
	}
	
	//Аналогично для позиционирования по вертикали
	if(topCurrent < 0) {
		topCurrent = 0;
	}
	if(topCurrent > field.clientHeight - ball.clientHeight) {
		topCurrent = field.clientHeight - ball.clientHeight;
	}
	
	ball.style = "top: " + topCurrent +"px; left: " + leftCurrent + "px";
}