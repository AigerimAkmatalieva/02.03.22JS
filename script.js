document.querySelectorAll('.accordion').forEach(accordion => {
  accordion.querySelector('accordion__header').addEventListener('click', function() {
    accordion.classList.toggle('accordion--open');
  })
})