function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');

  const text = document.createElement('div');
  text.className = 'task-text';
  text.textContent = taskText;

  const buttons = document.createElement('div');
  buttons.className = 'btns';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => text.classList.toggle('completed');

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✕';
  removeBtn.onclick = () => li.remove();

  buttons.appendChild(completeBtn);
  buttons.appendChild(removeBtn);

  li.appendChild(text);
  li.appendChild(buttons);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
