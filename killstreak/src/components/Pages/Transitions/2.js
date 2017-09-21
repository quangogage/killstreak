/* ...sssshhhhhhhHHHHIIIIIING */
import $ from 'jquery';
import gageMath from '../../../gagelib/Math';
import '../../../styles/css/Transitions/2.css';

import logoImage from '../../../images/logo/white.png';


// ** Animation Variables ** \\
var duration=1500; // Total length of transition ( milliseconds )


// Create the overlay
function createOverlay() {
  var overlay=$('<div class="overlay"></div>');
  var left=$('<div class="side left"></div>');
  var right=$('<div class="side right"></div>');

  overlay.append(left, right);

  $('body').append(overlay);
}

function animation(setPage,newPage) {  
  var overlay=createOverlay();

  setTimeout(function(){
    setPage(newPage);
  },duration);
}

export default { animation }