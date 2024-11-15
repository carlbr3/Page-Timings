const inputEl = document.getElementById('show-title');
const backButtonEl = document.getElementById('back-button');

function redirectLanding(event) {
    event.preventDefault();
    location.assign('landing.html');
}
if (window.location.href === "index.html") {
    backButtonEl.addEventListener('click', redirectLanding);
}

const submitEl = document.getElementById('show-submit');
function redirectIndex(event) {
    event.preventDefault();
    location.assign('index.html');
}
function buttonClick(event) {
    if (inputEl.value === null || inputEl.value === "") {
        return;
    } else {
        redirectIndex (event);
    }
}
if (window.location.href === "landing.html") {
    submitEl.addEventListener('click', buttonClick);
}