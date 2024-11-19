const showTitleOutput= document.getElementById('show-title-output');
showTitleOutput.innerHTML = localStorage.getItem('page-timings-current-show');
const getLocal= JSON.parse(localStorage.getItem('page-timings-show-titles'));
let currentIndex= 0;
for (let i in getLocal) {
    if (getLocal[i].title === showTitleOutput.innerHTML) {
        currentIndex= i;
    }
}
const pageEl= document.getElementById('current-page');
let currentPage;
let currentTime= [];
function pageTurn (){
    currentPage = parseInt(pageEl.innerHTML);
    currentPage++;
    pageEl.innerHTML= String(currentPage);
}
const tableEl= document.getElementById('table-container');
function updateTable (){
    tableEl.innerHTML= "";
    currentPage= parseInt(pageEl.innerHTML);
    currentTime.push(document.getElementById('stopwatch').innerHTML);
    tableEl.appendChild(document.createElement('tr'));
    tableEl.lastChild.appendChild(document.createElement('td'));
    tableEl.lastChild.lastChild.textContent= [currentPage, currentTime]};

document.addEventListener('keypress', function(event){
    if (event.code === 'Space'){
        pageTurn();
        updateTable();
    }
});

console.log (getLocal);
console.log (currentIndex);