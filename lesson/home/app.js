const listItems = document.querySelectorAll('#list li');
console.log(listItems);

const handleHover = (event, isSelected) => {
   event.target.innerText = isSelected ? 'ON' : 'OFF';
};
if(listItems.length > 1) {
    listItems.forEach(item => {
        item.addEventListener('mouseover', (event) => {handleHover(event, true)} );
        item.addEventListener('mouseout', (event) => {handleHover(event, false)} );
    })
}
