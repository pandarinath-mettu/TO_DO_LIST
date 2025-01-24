// script.js
document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('todo-input');
  const addButton = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  // Function to add a new task
  function addTask() {
      const taskText = inputField.value.trim();
      if (taskText === '') {
          alert('Please enter a task!');
          return;
      }

      // Create list item
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Delete</button>
      `;

      // Add delete functionality
      listItem.querySelector('.delete-btn').addEventListener('click', () => {
          listItem.remove();
      });

      // Append the task to the list
      todoList.appendChild(listItem);
      inputField.value = '';
  }

  // Event listeners
  addButton.addEventListener('click', addTask);
  inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
  });
});
