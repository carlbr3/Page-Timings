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
    if(seconds>59){
        seconds=0;
        minutes++;
    }
    if(minutes>59){
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

const pageEl2= document.getElementById('current-page'); // Identify element for tracking page number
function firstPageTurn (){ // Function to increment the page number value
    
    console.log(pageEl2);
    if(pageEl2.innerHTML === '0') {
        pageEl2.value= '1';
    } else {
        return;
    }
}

function pageReset() {
    pageEl2.innerHTML = '0';
}

function clickStart () {
    watchGo();
    firstPageTurn();
}

startButtonEl.addEventListener('click', clickStart);
stopButtonEl.addEventListener('click', watchStop);
resetButtonEl.addEventListener('click', watchReset);