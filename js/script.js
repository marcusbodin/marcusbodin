window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > 0 ? 'add': 'remove'
  ]('scrolled');
});