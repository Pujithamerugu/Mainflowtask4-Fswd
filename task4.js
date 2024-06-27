// task4.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function toggleComplete(task) {
    task.parentElement.classList.toggle('completed');
}

function deleteTask(task) {
    task.parentElement.remove();
}
