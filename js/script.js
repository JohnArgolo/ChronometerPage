
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let ms = 0;



startBtn.addEventListener('click',function () {
	timer = true;
    stopWatch();

});

stopBtn.addEventListener('click', function () {
	timer = false;

	
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	ms = 0;
	document.getElementById('hr').innerText = "00";
	document.getElementById('min').innerText = "00";
	document.getElementById('sec').innerText = "00";
	document.getElementById('ms').innerText = "000";
});

function stopWatch() {
	if (timer) {
		ms+=5;

		if (ms == 1000) {
			second++;
			ms = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let msString = ms;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}
		
		if(ms < 10){
			msString = "00" + msString;
		}
		if((ms >= 10) && (ms < 100)){
			msString = "0"+ msString;
			
		}
		
		
		


		document.getElementById('hr').innerText = hrString;
		document.getElementById('min').innerText = minString;
		document.getElementById('sec').innerText = secString;
		document.getElementById('ms').innerText = msString;

		setTimeout(stopWatch,1)
	}
		

}
