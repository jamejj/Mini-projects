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
    if (text === '')
        return;

    const li = document.createElement('li');
    li.textContent = text;

    list.appendChild(li);

  /*  closeTaskInput();*/

}




