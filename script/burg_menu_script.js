let burgContent = document.querySelector('#burg_menu_content');
let burgContentOpen = () =>
  burgContent.classList.contains('burg_content_slide');

let openBurg = () => burgContent.classList.add('burg_content_slide');

let closeBurg = () => burgContent.classList.remove('burg_content_slide');

document
  .querySelector('#burg_menu_icon')
  .addEventListener('click', function () {
    burgContentOpen() ? closeBurg() : openBurg();
  });
