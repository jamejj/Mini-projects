const addButton = document.getElementById('addTask');

const showTaskInput = document.getElementById('secondContainer');
const closeSecondContainer = document.getElementById('closeTaskInput');
let clearInput = document.getElementById('inputTask');

const list = document.getElementById('list');
const addToList = document.getElementById('addTaskToList')

addButton.addEventListener('click', addTask);
closeSecondContainer.addEventListener('click', closeTaskInput);
addToList.addEventListener('click', addTaskToList)
function addTask(){
    showTaskInput.style.visibility = "visible";
}

function closeTaskInput(){
    showTaskInput.style.visibility = "hidden";
    clearInput.value = "";
}

function addTaskToList(){
      const text = clearInput.value.trim();

      if (text === ''){
        alert('Enter your task')
          return;
      }

      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = text;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.style.marginRight = '10px';
      deleteButton.className = 'deleteBtn';

      deleteButton.onclick = function(){
        li.remove();
      };

      li.appendChild(span);
      li.appendChild(deleteButton);

      list.appendChild(li);

     closeTaskInput();
  }