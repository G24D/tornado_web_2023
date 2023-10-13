// Initialize the array with 2 initial tasks
let tasks = ["Do not do something", "Just sleep better as well"];

// Function to render the tasks in the array
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(listItem);
    });
}

// Function to add a new task to the array and render the tasks
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Event listener for the Enter key
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        addTask(event.target.value.trim());
        event.target.value = ""; // Clear the input field
    }
});

// Initial rendering of tasks
renderTasks();