const btn = document.getElementById('btn');
const enteredValue = document.getElementById('userVal');
let addList = document.getElementById('addList');


function handleClick(e) {

  if(enteredValue.value === '') {
    alert('Hey Dude, WRITE SOMETHING!!!')
  } else {
    console.log(enteredValue.value);
  e.preventDefault();
  const node = document.createElement("li")
  const textnode = document.createTextNode(enteredValue.value)
  node.appendChild(textnode);
  document.getElementById("addList").appendChild(node);
  console.log(addList);
  enteredValue.value = '';
}
}

btn.addEventListener('click', handleClick);
/* btn.addEventListener('keypress', handleClick(e)
{
  if (e.keypress === 'Enter'){
    handleClick(e)
  }
});
 */