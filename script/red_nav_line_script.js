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
  }, 700);
});

const orderAlert = () =>
  alert("Thank you for your order! It will ship within: [SHIPPING TIME] days!        And don't worry, we know where you live...");
