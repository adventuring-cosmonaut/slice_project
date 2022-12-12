// create an audio element
var audiochecked = new Audio('media/uiclick.mp3');
var audioUnchecked = new Audio('media/uiclickreverse.mp3');
(audiochecked.volume = 0.5), (audioUnchecked.volume = 0.5);
// select the checkbox
var checkbox = document.querySelector('input[type="checkbox"]');

// add an event listener for the change event
checkbox.addEventListener(
  'change',
  (checkSound = () =>
    checkbox.checked ? audiochecked.play() : audioUnchecked.play())
);
