const nav = document.querySelector('nav');
const triangleTop = document.querySelector('.triangle-top');

triangleTop.style.top = '100px';

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
