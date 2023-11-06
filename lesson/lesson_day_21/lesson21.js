console.log('LESSON DAY 21 - JS DOM this keyword');

const myFavColors = ['blue', 'red', 'green', 'yellow', 'orange'];

let content1header = document.createElement('h3');
content1header.textContent = 'My Favourite Colors';
let content1 = document.getElementById('content1');
content1.appendChild(content1header);

let ulTag = document.createElement('ul');
for (let i = 0; i < myFavColors.length; i++) {
    let liTag = document.createElement('li');
    liTag.textContent = myFavColors[i];
    liTag.addEventListener('click', changeColor);
    ulTag.appendChild(liTag);
}
content1.appendChild(ulTag);



function changeColor(element) {
    console.log(element);
    element.target.style.backgroundColor = element.target.textContent;
}

function textDecorate(element) {
    console.log(element);
    if(element.hasAttribute('style')) {
        element.removeAttribute('style');
    } else {
        element.style.textDecoration = 'line-through';
    }
}

var alpha = ['q','w','e','r','t','y','u','i','o','p','a','s',
'd','f','g','h','j','k','l',';','\'',
'z','x','c','v','b','n','m', ',','.', ' '];

function makeButton(text) {
let btn = document.createElement('button');
btn.innerHTML = text;
if(text == ' ') {
    btn.innerHTML = "Space";
}
return btn;
}


function makeText(text) {
  let textNode = document.createTextNode(text);
  return textNode;
}q

function makeKeyboard() {
  for (let i = 0; i < alpha.length; i++) {
    let text = alpha[i];
    let textbox = document.getElementById('textbox');
    let btn = makeButton(text);
    var keyboard = document.getElementById('keyboard');
    keyboard.appendChild(btn);
    btn.addEventListener('click', function() {
      textbox.appendChild(makeText(text));
    });
  }
}


makeKeyboard();
