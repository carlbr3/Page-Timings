// Step 4: Intialize Index page
const showTitleOutput= document.getElementById('show-title-output');
showTitleOutput.innerHTML = localStorage.getItem('page-timings-current-show');
const getLocal= JSON.parse(localStorage.getItem('page-timings-show-titles'));
let currentIndex= 0;
for (let i in getLocal) {
    if (getLocal[i].title === showTitleOutput.innerHTML) {
        currentIndex= i;
    }
}
//Step 4.1: Load table with 3 columns: Page Number, Time Stamp, Page Time
const tableEl= document.getElementById('table-container');
let currentPage= 0;
let currentTime= [];
function updateTable (){
    tableEl.innerHTML= "";
    tableEl.appendChild(document.createElement('tr'));
    for (i=3; i<= getLocal[currentIndex].entries.length-1; i++){ {
        tableEl.lastChild.appendChild(document.createElement('td'));
        tableEl.lastChild.lastChild.textContent= getLocal[currentPage].entries[i];
    }
}
}
updateTable();
//Step 4.2: Load page data
//Step 4.3: Load time data
//Step 5: Maintain updates to table as user interacts with page
//Step 5.1: When user presses spacebar, log entry to object in local storage.
const stopWatch= document.getElementById('stopwatch');

function spaceBar (){

    currentTime= stopWatch.textContent;
    console.log(getLocal);
    getLocal[currentIndex].entries.push([currentPage, currentTime]);
    localStorage.setItem('page-timings-show-titles', JSON.stringify(getLocal));
    currentPage++;
}
document.addEventListener('keypress', function(event){
    if (event.code === 'Space'){
        spaceBar();
    }
});
//Step 5.2: Update the table data.
//Step 6: If user clicks export button, save data to a txt file on hard drive.
//Step 7: If user clicks Change Show button, redirects to landing page.
//Step 8: Test