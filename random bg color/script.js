const colorBtn = document.getElementById("colorBtn");
const colorDisplay = document.getElementById("colorDisplay");

colorBtn.addEventListener("click", function () {
  const randomColor = generateRandomColor();
  colorDisplay.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
