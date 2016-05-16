var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);


function start() {
	watch.start();
    toggleBtn.textContent = 'Pause';
}

function stop() {
	watch.stop();
	toggleBtn.textContent = 'Start';
}


toggleBtn.addEventListener('click', function() {
	(watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function() {
	watch.reset();
});