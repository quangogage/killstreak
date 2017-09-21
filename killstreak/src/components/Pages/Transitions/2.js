/* ...sssshhhhhhhHHHHIIIIIING */
import $ from 'jquery';
import gageMath from '../../../gagelib/Math';
import '../../../styles/css/Transitions/2.css';

import logoImage from '../../../images/logo/white.png';


// ** Animation Variables ** \\
var duration=50000; // Total length of transition ( milliseconds )


// Create the overlay
function createOverlay() {
  var overlay=$('<div class="overlay"></div>');
  var left=$(`<div class="side left"><img src=${logoImage} /></div>`);
  var right=$(`<div class="side right"><img src=${logoImage} /></div>`);

  overlay.append(left, right);

  $('body').append(overlay);

  return overlay;
}


function animation(setPage,newPage) {  
  var overlay=createOverlay();

  setTimeout(function() {
    
  },500);


  // CUT IT!
  setTimeout(function(){
    overlay.empty();
    overlay.remove();
    setPage(newPage);
  },duration);
}

export default { animation }