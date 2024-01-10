const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function () {
  const messageText = messageInput.value.trim();
  if (messageText !== "") {
    sendMessage(messageText);
    messageInput.value = "";
  }
});

function sendMessage(messageText) {
  const message = document.createElement("div");
  message.classList.add("message");
  message.textContent = messageText;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}
