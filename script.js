const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");

setTimeout(function () {
  modalContainer.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

consentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submitted");
});
