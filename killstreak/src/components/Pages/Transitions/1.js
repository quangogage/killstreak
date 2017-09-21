/*
  BANG BANG
  BRRRRRRRRRRRAAAAHAP
*/
import $ from 'jquery';

// Create the red overlay element
function createOverlay() {
  var overlay=$('<div class="overlay"></div>');
  overlay.css({
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    zIndex:5,
    background:'RGB(255,0,0)',
    opacity:0
  })
  overlay.animate({
    opacity:1
  },500);
  $('body').append(overlay);
  return overlay;
}


// Master Function \\
function animation(newPage) {  
  var overlay=createOverlay();
}

export default { animation }