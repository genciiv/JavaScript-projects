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
