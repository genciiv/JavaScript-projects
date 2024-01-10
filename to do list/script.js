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

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const checkInDate = document.getElementById("checkInDate").value;
  const checkOutDate = document.getElementById("checkOutDate").value;
  const roomType = document.getElementById("roomType").value;

  const bookingDetails = {
    name,
    checkInDate,
    checkOutDate,
    roomType,
  };

  // Ruaj informacionin e rezervimit në localStorage
  localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

  // Përcjell përdoruesin në faqen e detajeve të rezervimit
  window.location.href = "bookingDetails.html";
});
