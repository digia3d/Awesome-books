const input = document.querySelector('#title');
const author = document.querySelector('#Author');
const taskDiv = document.querySelector('#list');
const Add = document.querySelector('.add');

// Empty Array To store The Tasks
let arrayOfTasks = [];

// Check If theres Tasks In Local Storge
if (localStorage.getItem('tasks')) {
  arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
}
const addElementToPageFrom = (arrayOfTasks) => {
  // Empty Taskk Div
  taskDiv.innerHTML = '';
  // Looping on Array of Tasks
  arrayOfTasks.forEach((task) => {
    // create Main Div
    const div = document.createElement('div');
    div.className = 'task';
    div.setAttribute('data-id', task.id);
    // Add Title to the main div
    const title = document.createElement('div');
    title.className = 'titleTask';
    title.textContent = task.title;
    div.appendChild(title);
    // Add Author to the main div
    const Author = document.createElement('div');
    Author.className = 'AuthorTask';
    Author.textContent = task.author;
    div.appendChild(Author);
    // create remove button
    const span = document.createElement('button');
    span.className = 'del';
    span.type = 'button';
    span.appendChild(document.createTextNode('remove'));
    // Append Button To main Div
    div.appendChild(span);
    // Add task Div To Tasks container
    taskDiv.appendChild(div);
  });
};

const AddToStorge = (arrayOfTasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
};

const getData = () => {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    const tasks = JSON.parse(data);
    addElementToPageFrom(tasks);
  }
};
// use filter method
const deleteTask = (taskId) => {
  // eslint-disable-next-line eqeqeq
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  AddToStorge(arrayOfTasks);
};

// click on task Element
taskDiv.addEventListener('click', (e) => {
  // remove Element from page
  if (e.target.classList.contains('del')) {
    // remove task from Local storage
    deleteTask(e.target.parentElement.getAttribute('data-id'));
    // Remove Element from page
    e.target.parentElement.remove();
  }
});

// Trigger Get Data From Local Stroge Function
getData();
const addTaskToArray = (taskTitle, taskAuthor) => {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskTitle,
    author: taskAuthor,
  };
  // Push Task to Array of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To page
  addElementToPageFrom(arrayOfTasks);
  // Add Tasks to  Local Storage
  AddToStorge(arrayOfTasks);
};

// Add task
Add.onclick = () => {
  if (input.value !== '' && author.value !== '') {
    addTaskToArray(input.value, author.value); // Add task To Array of Tasks
    author.value = '';
    input.value = ''; // Empty Input Feild
  }
};