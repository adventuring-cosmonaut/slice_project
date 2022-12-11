let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slideshow_image');
  let dots = document.querySelectorAll('.slideshow_dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// nav red line effect

// Get the nav and .triangle-top elements
const nav = document.querySelector('nav');
const triangleTop = document.querySelector('.triangle-top');

// position of the .triangle-top element
triangleTop.style.top = '100px';

// Listen for the scroll event
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset;

  if (scrollTop > 100) {
    triangleTop.style.top = '0';
  } else {
    triangleTop.style.top = '100px';
  }

  setTimeout(() => {
    triangleTop.style.top = '100px';
  }, 800);
});
