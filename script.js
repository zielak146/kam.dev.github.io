const toggler = document.querySelector('.toggler');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const drop = document.querySelector('.drop');

toggler.addEventListener('change', function() {
  if (this.checked) {
    menu.style.visibility = 'visible';
    overlay.style.transform = 'scale(1)';
    overlay.style.transition = 'all 0.4s ease';
    drop.style.opacity = 1;
    drop.style.transition = 'opacity 0.4s ease';
  } else {
    menu.style.visibility = 'hidden';
    overlay.style.transform = 'scale(0)';
    overlay.style.transition = 'all 0.3s ease';
    drop.style.opacity = 0;
    drop.style.transition = 'opacity 0.4s ease';
  }
});