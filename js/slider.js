'use strict';

var slider = document.querySelector('.slider');
var radioInputs = document.querySelectorAll('.slider__radio-input');
var timerId;
var firstSlide = 0;
var posInit = 0;
var posX1 = 0;
var posX2 = 0;
var posFinal = 0;
var posThreshold;

if (radioInputs.length > 0) {
  timerId = setInterval(startSlide, 10000);

  for (var i = 0; i < radioInputs.length; i++) {
    radioInputs[i].addEventListener('click', getTarget);
  }

  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);

  posThreshold = slider.offsetWidth * 0.3;
}

function getTarget(evt) {
  firstSlide = evt.target.dataset.index - 1;
  restartSlile();
};

function startSlide() {
  radioInputs[firstSlide].checked = false;

  if (firstSlide === radioInputs.length - 1) {
    firstSlide = -1;
  }

  radioInputs[firstSlide + 1].checked = true;
  firstSlide++;
};

function restartSlile() {
  clearInterval(timerId);
  timerId = setInterval(startSlide, 5000);
};

function swipeStart() {
  var evt = getEvent();
  posInit = posX1 = evt.clientX;

  document.addEventListener('touchmove', swipeAction);
  document.addEventListener('mousemove', swipeAction);
  document.addEventListener('touchend', swipeEnd);
  document.addEventListener('mouseup', swipeEnd);
};

function getEvent() {
  return (event.type.search('touch') !== -1) ? event.touches[0] : event;
};

function swipeAction() {
  var evt = getEvent();
  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;
};

function swipeEnd() {
  posFinal = posInit - posX1;

  document.removeEventListener('touchmove', swipeAction);
  document.removeEventListener('mousemove', swipeAction);
  document.removeEventListener('touchend', swipeEnd);
  document.removeEventListener('mouseup', swipeEnd);

  if (Math.abs(posFinal) > posThreshold) {
    if (posInit < posX1) {
      firstSlide--;
      if (firstSlide < 0) {
        firstSlide = radioInputs.length - 1;
      }
    } else if (posInit > posX1) {
      firstSlide++;
      if (firstSlide > radioInputs.length - 1) {
        firstSlide = 0;
      }
    }
  }

  if (posInit !== posX1) {
    radioInputs[firstSlide].checked = true;
    restartSlile();
  }
};
