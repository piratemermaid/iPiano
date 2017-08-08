$(document).foundation()

window.addEventListener('keydown', function(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop function if no audio associated with key hit
  audio.currentTime = 0; //restart audio if already playing
  audio.play();
  key.classList.add('playing');
  audio.onended = function() {
    key.classList.remove('playing');
  }
});

