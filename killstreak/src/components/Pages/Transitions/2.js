/* ...sssshhhhhhhHHHHIIIIIING */
import $ from 'jquery';
import gageMath from '../../../gagelib/Math';
import '../../../styles/css/Transitions/2.css';
import mojs from 'mo-js';

import logoImage from '../../../images/logo/white.png';


// ** Animation Variables ** \\
var duration=2500; // Total length of transition ( milliseconds )

var sliceDuration=1000; // How long does the slice take?

var flashDelay=950; // How long after slice should it flash?
var flashDuration=500; // How long does the flash last?


// Create the overlay
function createOverlay() {
  var overlay=$('<div class="overlay" id="transition"></div>');
  var left=$(`<div class="side left"><img src=${logoImage} /></div>`);
  var right=$(`<div class="side right"><img src=${logoImage} /></div>`);

  overlay.append(left, right);

  $('body').append(overlay);

  return overlay;
}


// SHINK! ⚔️
function createSlice() {
  const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
  const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
  const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
  const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };
  var screenWidth=window.innerWidth;
  var screenHeight=window.innerHeight;
  const circle = new mojs.Shape({
    parent:        '#transition',
    shape:        'circle',
    fill:         { '#FFFFFF' : '#FFFFFF', curve: scaleCurve },
    radius:       10,
    rx:           3,
    x:            { [screenWidth/2] : -screenWidth/2, easing: shiftCurve},
    y:            { [-screenHeight/2]: screenHeight/2, easing : shiftCurve},
    scaleX:       { 10 : 10, curve: scaleCurve },
    scaleY:       { 1 : 1, curve: nScaleCurve },
    origin:       { '0 50%' : '100% 50%', easing: shiftCurve },
    angle:[-30],
    
    isYoyo:       false,
    delay:        500,
    duration:     sliceDuration,
    repeat:       999,
  }).play();
  circle.el.style.zIndex='6';
}

// 📸
function createFlash(overlay) {
  var flash=$(`<div class='flash'></div>`);
  var delay=flashDelay/1000+'s';
  var duration=flashDuration/1000+'s';

  flash.css({
    animationDelay:delay,
    animationDuration:duration
  })

  overlay.append(flash);
}


function animation(setPage,newPage) {  
  var overlay=createOverlay();

  setTimeout(function() {
    createSlice();
    createFlash(overlay);

    setTimeout(function() {
      var sides=$('.side');

      // Move the sides apart
      sides.addClass('sliced');        

      // Change page
      setPage(newPage);      

    },flashDelay+(flashDuration/2))
  },500);


  // CUT IT!
  setTimeout(function(){
    overlay.empty();
    overlay.remove();
    setPage(newPage);
  },duration);
}

export default { animation }