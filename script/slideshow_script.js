/** @format */

let slideImgArr = [
  {
    imagePath: 'media/temp_numbers_slideshow/product_1.jpg',
    imageDot: document.querySelector('#slideshow_highlight_dot_1'),
  },
  {
    imagePath: 'media/temp_numbers_slideshow/product_2.jpg',
    imageDot: document.querySelector('#slideshow_highlight_dot_2'),
  },
  {
    imagePath: 'media/temp_numbers_slideshow/product_3.jpg',
    imageDot: document.querySelector('#slideshow_highlight_dot_3'),
  },
  {
    imagePath: 'media/temp_numbers_slideshow/product_4.jpg',
    imageDot: document.querySelector('#slideshow_highlight_dot_4'),
  },
];

function update_img(imageNum) {
  let imgContainer = document.querySelector('#slideshow_image');
  let dotSelector = document.querySelectorAll('.slideshow_highlight_dot');
  let slideItem = slideImgArr[imageNum];

  imgContainer.src = slideItem.imagePath;
  if ((dotSelector.classlist = 'slideshow_dot_active')) {
    dotSelector.classlist.remove('slideshow_dot_active');
  }
  slideItem.imageDot.classList.add('slideshow_dot_active');
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
