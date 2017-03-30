var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
var gallery = document.querySelector('.images');
var rightArrow = document.querySelector('.right-arrow');
var leftArrow = document.querySelector('.left-arrow');
var heroArrow = document.querySelector('.hero .arrow');

function hideDownArrow() {
  var currentScroll = window.scrollY;

  if (currentScroll > 0) {
    heroArrow.classList.add('hide');
  }
  else {
    heroArrow.classList.remove('hide');
  }
}

function hideGalleryArrow() {
  var currentScroll = gallery.scrollLeft;
  var maxScroll = gallery.scrollWidth - gallery.offsetWidth;

  if (currentScroll === 0) {
    rightArrow.classList.remove('hide');
    leftArrow.classList.add('hide');
  }
  else if (currentScroll ===  maxScroll) {
    rightArrow.classList.add('hide');
    leftArrow.classList.remove('hide');
  }
  else {
    rightArrow.classList.remove('hide');
    leftArrow.classList.remove('hide');
  }
}

function stopGalleryFlash() {
  rightArrow.classList.add('static');
  leftArrow.classList.add('static');
}

function scrollGalleryLeft() {
  gallery.scrollLeft -= 4;
}

function scrollGalleryRight() {
  gallery.scrollLeft += 4;
}

function setupMouseScrolling() {
  var scrollLeftInterval = 0;
  var scrollRightInterval = 0;

  rightArrow.classList.add('mouse');
  leftArrow.classList.add('mouse');

  leftArrow.addEventListener('mousedown', function() {
    scrollLeftInterval = setInterval(scrollGalleryLeft, 1);
  });

  leftArrow.addEventListener('mouseup', function() {
    clearInterval(scrollLeftInterval);
  });

  rightArrow.addEventListener('mousedown', function() {
    scrollRightInterval = setInterval(scrollGalleryRight, 1);
  });

  rightArrow.addEventListener('mouseup', function() {
    clearInterval(scrollRightInterval);
  });
}

function init() {
  console.log('init');

  document.addEventListener('scroll', hideDownArrow);

  gallery.addEventListener('scroll', hideGalleryArrow);
  hideGalleryArrow();

  if (!isTouchDevice) {
    stopGalleryFlash();
    setupMouseScrolling();
  }
};

window.addEventListener('DOMContentLoaded', init, false);
