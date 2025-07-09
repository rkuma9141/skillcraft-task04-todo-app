script.js
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dateInput = document.getElementById('dateInput');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();
  const taskTime = dateInput.value;

  if (taskText === '' || taskTime === '') {
    alert("Please enter both task and time!");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>
      <strong>${taskText}</strong> 
      <br/><small>${new Date(taskTime).toLocaleString()}</small>
    </span>
    <div>
      <button onclick="markDone(this)">✔</button>
      <button onclick="editTask(this)">✏</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
  dateInput.value = '';
}

function markDone(btn) {
  const task = btn.closest('li');
  task.classList.toggle('completed');
}

function editTask(btn) {
  const li = btn.closest('li');
  const oldText = li.querySelector('strong').innerText;
  const newText = prompt("Edit your task:", oldText);
  if (newText) {
    li.querySelector('strong').innerText = newText;
  }
}

function deleteTask(btn) {
  const li = btn.closest('li');
  li.remove();
}
