const time_el = document.querySelector('.crono .crono__tiempo');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let segundos = 0;
let intervalo = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function tiempo () {
	segundos++;

	let hrs = Math.floor(segundos / 3600);
	let mins = Math.floor((segundos - (hrs * 3600)) / 60);
	let segs = segundos % 60;

	if (segs < 10) segs = '0' + segs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${segs}`;
}

function start () {
	if (intervalo) {
		return
	}

	intervalo = setInterval(tiempo, 1000);
}

function stop () {
	clearInterval(intervalo);
	intervalo = null;
}

function reset () {
	stop();
	segundos = 0;
	time_el.innerText = '00:00:00';
}
