var input = document.getElementById("enteredValue")
// const addTask = document.getElementById("addTask");

input.addEventListener("onchange", updateValue)

function updateValue(e) {
  addTask.textContent = e.target.value;
    console.log(e.target.value);
}
