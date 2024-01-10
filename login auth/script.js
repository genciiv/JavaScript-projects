const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple login validation
  if (username === "user" && password === "password") {
    // Successful login
    alert("Login successful!");
    // Here you can redirect the user to another page or perform other actions
  } else {
    // Failed login
    errorMessage.textContent = "Invalid username or password";
  }
});
