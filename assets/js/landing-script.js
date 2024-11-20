//Step 0: Initialize Landing page
let allTitles = [];
function initLanding() {
    displayButtons();
}
initLanding();
// Step 0.1: Load local storage data to landing.html as new button elements with alternating colors
function displayButtons() {
    let localData = JSON.parse(localStorage.getItem("page-timings-show-titles"));
    const buttonsBox = document.getElementById('buttons');
    buttonsBox.innerHTML = "";
    if (localData !== null && localData !== undefined) {
        allTitles=[];
        for (let i in localData) {
            const newButton = document.createElement('button');
            buttonsBox.appendChild(newButton);
            buttonsBox.lastChild.textContent = localData[i].title;
            allTitles.push(localData[i].title);
            buttonsBox.lastChild.setAttribute('data-bs-toggle', 'modal');
            buttonsBox.lastChild.setAttribute('data-bs-target', '#exampleModal');
            buttonsBox.lastChild.setAttribute('class', 'modal-listener');
            if (i % 2 === 0) {
                buttonsBox.lastChild.classList.add('btn', 'btn-outline-primary', 'm-2');
            } else {
                buttonsBox.lastChild.classList.add('btn', 'btn-outline-dark', 'm-2');
            }
        }
    }
}
// Step 1: Take user input for show title
const showObject = {
    title: "",
    entries: []
}
function show(title, entries) {
    this.title = title;
    this.entries = entries;
}
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('error');
function takeUserInput(event) {
    event.preventDefault();
    if (userInput.value === null || userInput.value === "") {
        errorMessage.classList.replace('d-none', 'd-block');
    } else {
        errorMessage.classList.replace('d-block', 'd-none');
        let userInputValue = userInput.value;
        userInput.value = "";
        console.log(userInputValue);
        const tempShow = new show(userInputValue, []);
        console.log(tempShow);
        let loadLocal = JSON.parse(localStorage.getItem("page-timings-show-titles"));
        if (loadLocal === null) {
            loadLocal = [];
        }
        console.log(loadLocal);
        loadLocal.push(tempShow);
        loadLocal.sort((a, b) => a.title.localeCompare(b.title));
        const saveLocal = JSON.stringify(loadLocal);
        localStorage.setItem("page-timings-show-titles", saveLocal);
        displayButtons();
    }
}
submitButton.addEventListener('click', takeUserInput);
// Step 2: Modal to confirm user input, if user declines, return to Step 1
let currentElement= "";

document.activeElement.addEventListener('click', function () {
    document.getElementById('modal-id-value').innerHTML = document.activeElement.innerHTML;
    currentElement = document.activeElement.innerHTML;
});
// Step 3: After user confirms, redirects to index.html
function redirectIndex(event) {
    event.preventDefault();
    location.assign("index.html");
}
function nameSave (currentName) {
    localStorage.setItem('page-timings-current-show', currentName);
}
function confirmButton (event) {
    nameSave(currentElement);
    redirectIndex(event);
}
document.getElementById("modal-id-confirm").addEventListener('click', confirmButton);

