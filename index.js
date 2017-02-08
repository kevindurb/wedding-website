function hideDownArrow() {
  var arrow = document.querySelector('.hero .arrow');
  var currentScroll = window.scrollY;

  if (currentScroll > 0) {
    arrow.classList.add('hide');
  }
  else {
    arrow.classList.remove('hide');
  }
}

function hideGalleryArrow() {
  var gallery = document.querySelector('.images');
  var arrow = document.querySelector('.right-arrow');
  var currentScroll = gallery.scrollLeft;

  if (currentScroll > 0) {
    arrow.classList.add('hide');
  }
  else {
    arrow.classList.remove('hide');
  }
}

function init() {
  console.log('init');
  var gallery = document.querySelector('.images');

  document.addEventListener('scroll', hideDownArrow);

  gallery.addEventListener('scroll', hideGalleryArrow);
};

window.addEventListener('DOMContentLoaded', init, false);
