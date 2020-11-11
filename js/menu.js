'use strict';

var navMain = document.querySelector('.nav');
var navToggle = navMain.querySelector('.nav__toggle');
var contactsMenuItem = navMain.querySelector('.nav__item:nth-last-child(2) a');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--opened')) {
    navMain.classList.remove('nav--opened');
    navMain.classList.add('nav--closed');
  } else {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  }
});

contactsMenuItem.addEventListener('click', function() {
  if (navMain.classList.contains('nav--opened')) {
    navMain.classList.remove('nav--opened');
    navMain.classList.add('nav--closed');
  }
});
