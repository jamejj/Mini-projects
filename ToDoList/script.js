const addButton = document.getElementById('addTask')
const showTaskInput = document.getElementById('secondContainer')

addButton.addEventListener('click', addTask)

function addTask(){
    showTaskInput.style.visibility = "visible";
    alert('działa')
}