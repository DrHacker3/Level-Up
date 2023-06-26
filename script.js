var backToTopBtn = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 10) {
    backToTopBtn.classList.add('show-back-to-top-btn');
  } else {
    backToTopBtn.classList.remove('show-back-to-top-btn');
  }
});

backToTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});