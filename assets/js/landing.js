
//loading local storage data to landing.html as new button elements with alternating colors
const buttonsBox = document.getElementById('buttons');
const newButton = document.createElement('button');

function buttonBuilder () {
    let showTitles = JSON.parse(localStorage.getItem('show-titles'));
    for (i in showTitles) {
        if (i % 2 === 0) {
            buttonsBox.appendChild(newButton);
        } else {
            buttonsBox.appendChild(newButton);
        }
        buttonsBox.lastChild.textContent = showTitles[i];
    }
}

buttonBuilder();
//<button type="submit" class="btn btn-outline-primary m-2">Show 1</button>
//<button type="submit" class="btn btn-outline-dark m-2">Show 2</button>