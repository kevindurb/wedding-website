function hideDownArrow() {
  var arrow = document.querySelector('.hero .arrow');
  arrow.classList.add('hide');
}

function hideGalleryArrow() {
  var arrow = document.querySelector('.right-arrow');
  arrow.classList.add('hide');
}

function init() {
  console.log('init');
  var gallery = document.querySelector('.images');

  document.addEventListener('scroll', hideDownArrow);

  gallery.addEventListener('scroll', hideGalleryArrow);
};

window.addEventListener('DOMContentLoaded', init, false);
