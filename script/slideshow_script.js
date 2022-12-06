/** @format */

let slideImgArr = [
  {
    imagePath: 'media/temp_numbers_slideshow/product_1.jpg',
  },
  {
    imagePath: 'media/temp_numbers_slideshow/product_2.jpg',
  },
  {
    imagePath: 'media/temp_numbers_slideshow/product_3.jpg',
  },
  {
    imagePath: 'media/temp_numbers_slideshow/product_4.jpg',
  },
];

function update_img(imageNum) {
  let imgContainer = document.querySelector('#slideshow_image');
  let slideItem = slideImgArr[imageNum];

  imgContainer.src = slideItem.imagePath;
}

let imgCounter = -1;

function next() {
  if (imgCounter === slideImgArr.length - 1) {
    imgCounter = -1;
  }
  update_img((imgCounter = imgCounter + 1));
}

function prev() {
  if (imgCounter === 0) {
    imgCounter = slideImgArr.length - 0;
  }
  update_img((imgCounter = imgCounter - 1));
}

next();

const btnPrev = document.querySelector('#slideshow_prev_button_click');
btnPrev.addEventListener('click', prev);

const btnNext = document.querySelector('#slideshow_next_button_click');
btnNext.addEventListener('click', next);
