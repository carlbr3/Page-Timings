
//loading local storage data to landing.html as new button elements with alternating colors
const buttonsBox = document.getElementById('buttons');


function buttonBuilder () {
    let showTitles = JSON.parse(localStorage.getItem('show-titles'));
    for (let i in showTitles) {
        const newButton = document.createElement('button');
        buttonsBox.appendChild(newButton);
        buttonsBox.lastChild.textContent = showTitles[i];
        if (i % 2 === 0) {
            buttonsBox.lastChild.classList.add('btn', 'btn-outline-primary', 'm-2');
        } else {
            buttonsBox.lastChild.classList.add('btn', 'btn-outline-dark', 'm-2');
        }
    }
}

buttonBuilder();