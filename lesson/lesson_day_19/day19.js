/* console.log('hello');

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numberArray);

for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}


var maxElement = -1000;
var maxIndex = 0;

for (let i = 0; i < numberArray.length; i++) {
    if(numberArray[i] >= maxElement) {
        maxElement = numberArray[i];
        maxIndex = i;
    }
}

console.log('Max NUMBER IS ' + maxElement);

console.log('Max INDEX IS ' + maxIndex);

var content = document.getElementById('content');
content.innerHTML = 'Hello WORLD';

var ul = document.createElement('ul');

content.appendChild(ul);

var liElements = document.createElement('li');

liElements.innerHTML = 'One';

ul.appendChild(liElements);


 */


		//Write your code here!
		    var todo = document.getElementById('tasks').firstElementChild;
		    var todoEl = todo.appendChild('li');
		    todoEl.innerHTML = 'Clean MY Room'

