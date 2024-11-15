//Taking the data from text box and storing it in local storage and displaying on index.html

const showTitle = document.getElementById('show-title');
const showSubmit = document.getElementById('show-submit');
const errorMessage = document.getElementById('error');
let titleArray = [];


function saveLocal (event) {
    event.preventDefault();
    if (showTitle.value === null || showTitle.value === "") {
        errorMessage.classList.replace('d-none','d-block');
    } else {
        titleArray = JSON.parse(localStorage.getItem('show-titles'));
        if (titleArray === null) {
            titleArray = [];
        }
        titleArray.push(showTitle.value);
        localStorage.setItem('show-titles', JSON.stringify(titleArray)); 
        showTitle.value = "";
    }
}

showSubmit.addEventListener('click', saveLocal);

