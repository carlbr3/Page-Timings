const stopwatchEl = document.getElementById('stopwatch');
const startButtonEl = document.getElementById('start');
const stopButtonEl = document.getElementById('stop');
const resetButtonEl = document.getElementById('reset');

let [seconds, minutes, hours]=[0,0,0]
let timeInterval = null;

function timePrint() {
    let h=hours;
    if (hours < 10){
        h = '0'+hours;
    }
    let m=minutes;
    if (minutes < 10){
        m = '0'+minutes;
    }
    let s=seconds;
    if (seconds < 10){
        s = '0'+seconds;
    }
    stopwatchEl.innerHTML = `${h}:${m}:${s}`
}

function counter() {
    seconds++;
    if(seconds>60){
        seconds=0;
        minutes++;
    }
    if(minutes>60){
        seconds=0;
        hours++;
    }
    timePrint();
}

function watchGo() {
    if (timeInterval != null) {
        clearInterval(timeInterval);
    }
    timeInterval = setInterval(counter, 1000);
}

function watchStop() {
    clearInterval(timeInterval);
}

function watchReset() {
    clearInterval(timeInterval);
    [seconds, minutes, hours]=[0,0,0]
    stopwatchEl.innerHTML = '00:00:00'
}

startButtonEl.addEventListener('click', watchGo);
stopButtonEl.addEventListener('click', watchStop);
resetButtonEl.addEventListener('click', watchReset);