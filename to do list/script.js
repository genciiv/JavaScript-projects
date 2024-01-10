const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
  } else {
    alert("Ju lutem, shtypni një detyrë!");
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

function createTask(taskText) {
  const task = document.createElement("li");
  task.textContent = taskText;
  taskList.appendChild(task);
}
