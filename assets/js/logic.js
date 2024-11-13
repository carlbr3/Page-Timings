//Taking the data from text box and storing it in local storage and displaying on index.html

const showTitle = document.getElementById('show-title');
const showSubmit = document.getElementById('show-submit');
let titleArray = [];


function saveLocal (event) {
    event.preventDefault();
    titleArray = JSON.parse(localStorage.getItem('show-titles'));
    titleArray.push(showTitle.value);
    localStorage.setItem('show-titles', JSON.stringify(titleArray)); 
    showTitle.value = "";
}

showSubmit.addEventListener('click', saveLocal);
