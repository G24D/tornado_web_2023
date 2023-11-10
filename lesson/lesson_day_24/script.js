const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === '') {
        return "Write something"
    }

const listItem = document.createElement('li');
listItem.textContent = taskText;

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
});

listItem.appendChild(removeButton);
taskList.appendChild(listItem);

taskInput.value = '';
}

taskInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
})

