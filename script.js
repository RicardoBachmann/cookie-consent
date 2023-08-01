const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");

setTimeout(function () {
  modalContainer.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});
