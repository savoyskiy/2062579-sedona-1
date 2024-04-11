let menuBatton = document.querySelector('.user-menu-button');
let closeButton = document.querySelector('.close-modal');
let modalContainer = document.querySelector('.modal-container');

menuBatton.onclick = function() {
  modalContainer.classList.remove('modal-hidden');
};

closeButton.onclick = function() {
  modalContainer.classList.add('modal-hidden');
};
