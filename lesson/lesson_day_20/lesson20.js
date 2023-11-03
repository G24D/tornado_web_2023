var content = document.getElementById('content');

var h2El = document.createElement('h2');

h2El.textContent = 'List of TODOS';

content.appendChild(h2El);


var listOfTodos = ['HTML FUNCTIONS', 'JS Events', 'JS DOM Create element'];

var ulEl = document.createElement('ul');

for (let i = 0; i < listOfTodos.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = listOfTodos[i];
    ulEl.appendChild(liEl);
}

content.appendChild(ulEl);

var buttonEl = document.createElement('button');
buttonEl.textContent = 'Click me';
content.appendChild(buttonEl);
buttonEl.style.backgroundColor = 'aqua'

function clickMe() {
    console.log('YOU HAVE CLICKED ME');
    var bgClr = document.getElementById('content');
    bgClr.style.backgroundColor = 'red';
}

buttonEl.addEventListener('click', clickMe);

