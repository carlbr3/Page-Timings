

const tableEl = document.getElementById('table-container');
const pageNumberEl = document.getElementById('current-page');
const stopWatchEl = document.getElementById('stopwatch');
let headerField = document.getElementById('show-title-output'); // Create variable to edit content
let showTitleValue; // Variable to hold the show title
let allShows;
let currentIndex;
let thisShow;
let pageNumber;
let timeStamp;
let allEntries = [];
let entry;

//Index Init

function indexInit() {
    refreshAllShows();
    refreshShowTitle();
    getCurrentIndex();
    refreshPageNumber();
    initData();
}

indexInit();



// Initialize show info
function refreshAllShows() {
    allShows = JSON.parse(localStorage.getItem('page-timings-show-titles'));
    return(allShows);
}

function refreshShowTitle() {
    showTitleValue = localStorage.getItem('page-timings-current-show'); // Retrieve Title from storage and update variable with title
    headerField.innerHTML = showTitleValue; // update headerfield with current show title
    return(showTitleValue);
}

function getCurrentIndex() {
    refreshAllShows();
    for (let i in allShows) { // Identify currentIndex value and assigns it
        if (allShows[i].title === headerField.innerHTML) {
            currentIndex = i;
        }
    }
    return(currentIndex);
}

function refreshPageNumber() {
    return(pageNumberEl.innerHTML);
}

function refreshStopWatch() {
    return(stopWatchEl.innerHTML);
}

// Buttons and Event Listeners
const elStart = document.getElementById('start');
const elStop = document.getElementById('stop');
// const elReset = document.getElementById('reset');
// const elExport = document.getElementById('export');
const elChange = document.getElementById('back-button');
elStart.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Start');
    tableReset();
    watchReset();
    watchGo();
});
elStop.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Stop');
    watchStop();
});
// elReset.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Reset');
//     watchReset();
// });
// elExport.addEventListener('click', function(){
//     console.log('Export');
// });
elChange.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Change');
    location.assign('index.html');
});
document.addEventListener('keypress', function(event){
    event.preventDefault();
    document.activeElement.blur();
    focus(document.querySelector('header'));
    if (event.code === 'Space'){
        spaceBar();
    }
});

function pageTurn (){ // Function to increment the page number value
    currentPage = parseInt(pageNumberEl.innerHTML); // Retreieve value and convert to number
    currentPage++; // increment value
    pageNumberEl.innerHTML= String(currentPage); // convert value to string and replace html content
}


// Stopwatch 


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
    stopWatchEl.innerHTML = `${h}:${m}:${s}`
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
    stopWatchEl.innerHTML = '00:00:00'
}



// Data Processing

function spaceBar(){
    refreshEntry();
    refreshEntries();
    pageTurn();
    updateTable();
}

function refreshEntry() {
    let pageNow = refreshPageNumber();
    let timeNow = refreshStopWatch();
    entry = [pageNow, timeNow];
    allEntries.push(entry);
    console.log(entry);
    // return(entry);
}




function refreshEntries(){ // puts entries into show storage, and that into the larger storage
    indexNow = getCurrentIndex();
    fullArr = refreshAllShows();
    thisShow = fullArr[indexNow];
    saveEntries = allEntries;
    thisShow.entries = allEntries;
    fullArr[indexNow] = thisShow;
    localStorage.setItem('page-timings-show-titles', JSON.stringify(fullArr));
    // console.log(saveEntries);
    // console.log(thisShow);
    return(saveEntries);
}


//Table Construction 


function updateTable (){ // Function to update table element
    tableReset(); // Resets table element content
    buildTable();
}

function newTableRow() {
    tableEl.appendChild(document.createElement('tr')); // Create a new table row
}

function newTableData(data) {
    tableEl.lastChild.appendChild(document.createElement('td')); // Create a new table data cell
    tableEl.lastChild.lastChild.innerHTML = allEntries[data][0];
    tableEl.lastChild.appendChild(document.createElement('td')); // Create a new table data cell
    tableEl.lastChild.lastChild.innerHTML = allEntries[data][1];
}

function buildTable() {
    for (let i in allEntries){
        newTableRow();
        newTableData(i);
    }
    newTableRow();
}

function tableReset() {
    tableEl.innerHTML= ""; // Resets table element content
}


function initData() {
    allData = refreshAllShows();
    thisObj = allData[getCurrentIndex()];
    tableData = thisObj.entries;
    allEntries = tableData;
    buildTable();
    // console.log(tableData);
    // console.log(allData);
    // pageNumberEl.innerHTML = tableData[tableData.length-1][0] ||;
    // stopWatchEl.innerHTML = tableData[tableData.length-1][1] ||;
}
