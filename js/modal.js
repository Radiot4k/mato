var modalLink = document.querySelector('.modal__link');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');

modalLink.addEventListener('click', onModalLinkClick);

function onModalLinkClick(evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
  overlay.classList.add('modal-overlay--show');
};

if (overlay) {
  overlay.addEventListener("click", onOverlayClick);
};

function onOverlayClick(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  overlay.classList.remove("modal-overlay--show");
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
    if (overlay.classList.contains("modal-overlay--show")) {
      overlay.classList.remove("modal-overlay--show");
    }
  }
});
