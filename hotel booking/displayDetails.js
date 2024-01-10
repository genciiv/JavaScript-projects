document.addEventListener("DOMContentLoaded", function () {
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
  const bookingDetailsContainer = document.getElementById("bookingDetails");

  if (bookingDetails) {
    const bookingInfo = `
      <h3>Booking Details</h3>
      <p><strong>Name:</strong> ${bookingDetails.name}</p>
      <p><strong>Check-in Date:</strong> ${bookingDetails.checkInDate}</p>
      <p><strong>Check-out Date:</strong> ${bookingDetails.checkOutDate}</p>
      <p><strong>Room Type:</strong> ${bookingDetails.roomType}</p>
    `;

    bookingDetailsContainer.innerHTML = bookingInfo;
  }
});
