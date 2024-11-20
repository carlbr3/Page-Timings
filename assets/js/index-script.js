// Stopwatch elements
const stopwatchEl = document.getElementById('stopwatch');
const startButtonEl = document.getElementById('start');
const stopButtonEl = document.getElementById('stop');
const resetButtonEl = document.getElementById('reset');
const showTitleOutput= document.getElementById('show-title-output'); // Identify the banner element
let getLocal;  // Declare a variable that stores an array of show objects
let currentIndex= 0; // Declare variable to track index of the current show in the array of shows on local storage
let getShow;
const tableEl= document.getElementById('table-container'); // Identify table element
const pageEl= document.getElementById('current-page'); // Identify element for tracking page number
let currentTime;
let currentPage;
let allEntries = [];
let passVar;

function indexInit() {
    entriesReset();
    // Update show title header
    showTitleOutput.innerHTML = localStorage.getItem('page-timings-current-show'); // Replace the banner text with the current show title from local storage
    getCurrentIndex();
    refreshLocalData();
    updateTable();
}
indexInit();


function getCurrentIndex() {
    for (let i in getLocal) { // Identify currentIndex value and assigns it
        if (getLocal[i].title === showTitleOutput.innerHTML) {
            currentIndex= i;
        }
    }
    return currentIndex;
}

function refreshLocalData() {
    getLocal= JSON.parse(localStorage.getItem('page-timings-show-titles'));
    getShow = getLocal[currentIndex];
}

function updateLocalEntries() { // Write local entries into larger variable
    tempShowsData = JSON.parse(localStorage.getItem('page-timings-show-titles'));
    tempShowData = tempShowsData[getCurrentIndex()];
    tempShowData.entries = allEntries;
    localStorage.setItem('page-timings-show-titles', JSON.stringify(tempShowsData));
    console.log(tempShowData);
    console.log(tempShowsData[getCurrentIndex()])
    console.log(tempShowsData);
    console.log(tempShowData);
}

function newEntry () {
    currentPage = parseInt(pageEl.innerHTML); // updates currentpage variable with current value from html
    currentTime = String(document.getElementById('stopwatch').innerHTML); // updates currentTime variable with current stopwatch value as a string from HTML
    currentShow = String(showTitleOutput);
    const currentEntry = [];
    currentEntry.push(currentPage, currentTime); // Save current entries data to an array
    console.log(currentEntry);
    allEntries.push(currentEntry);
    localStorage.setItem('page-timings-current-entries', JSON.stringify(allEntries));
    updateLocalEntries();
    console.log(allEntries);    
    if (allEntries === null || allEntries === ''){
        allEntries = [];
    }
}

function updateTable (){ // Function to update table element
    tableReset(); // Resets table element content
    let allShows = JSON.parse(localStorage.getItem('page-timings-show-titles'));
    let thisShow = allShows[getCurrentIndex()];
    console.log(allShows);
    console.log(thisShow);
    passVar = thisShow.entries;
    console.log(passVar);
    buildTable();
};


function newTableRow() {
    tableEl.appendChild(document.createElement('tr')); // Create a new table row
}

function newTableData(data) {
    tableEl.lastChild.appendChild(document.createElement('td')); // Create a new table data cell
    tableEl.lastChild.lastChild.innerHTML = passVar[data][0];
    tableEl.lastChild.appendChild(document.createElement('td')); // Create a new table data cell
    tableEl.lastChild.lastChild.innerHTML = passVar[data][1];
}

function buildTable() {
    for (let i in passVar){
        newTableRow();
        newTableData(i);
    }
    newTableRow();
}
function pageTurn (){ // Function to increment the page number value
    currentPage = parseInt(pageEl.innerHTML); // Retreieve value and convert to number
    currentPage++; // increment value
    pageEl.innerHTML= String(currentPage); // convert value to string and replace html content
}

function focusHeader() {
    focus(document.querySelector('header'));
}

document.addEventListener('keypress', function(event){
    event.preventDefault();
    startButtonEl.blur();
    focusHeader();
    if (event.code === 'Space'){
        newEntry();
        pageTurn();
        updateTable();
    }
});
// console.log (getLocal);
// console.log (currentIndex);

// Stopwatch Functinoality

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

function pageReset() {
    pageEl.innerHTML = '0';
}

function entriesReset() {
    localStorage.setItem('page-timings-current-entries', JSON.stringify([]));
    allEntries = [];
    updateLocalEntries();
    if (allEntries === null || allEntries === ''){
        allEntries = [];
    }
    console.log(allEntries);    
}

function tableReset() {
    tableEl.innerHTML= ""; // Resets table element content
}
function clickStart () {
    startButtonEl.blur();
    focusHeader();
    watchGo();
}

function indexReset() {
    watchReset();
    pageReset();
    entriesReset();
    tableReset();
}

startButtonEl.addEventListener('click', clickStart);
stopButtonEl.addEventListener('click', watchStop);
resetButtonEl.addEventListener('click', indexReset);








