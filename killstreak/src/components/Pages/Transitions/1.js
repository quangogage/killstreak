/* BANG BANG BRRRRRRRRRRRAAAAHAP */
import $ from 'jquery';
import gageMath from '../../../gagelib/Math';

import decalImage from '../../../images/transitions/shooting/decal.png';
import logoImage from '../../../images/logo/white.png';



var bulletAmount=15; // How many shots?
var bulletRate=250; // Milliseconds between shots

// Create the red overlay element
function createOverlay() {
  var overlay=$(`<div class="overlay"></div>`);
  overlay.css({
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    zIndex:2,
    background:'RGB(255,0,0)',
    opacity:0,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  })
  var logo=$(`<img src=${logoImage} />`);
  logo.css({
    zIndex:2,
    width:'80%'
  })
  overlay.append(logo);
  
  $('body').append(overlay);
  return overlay;
}

// Add a decal
function createDecal(overlay) {
  var decal=$(`<img class='decal' src=${decalImage} />`);
  var x=gageMath.getRandom(0,window.innerWidth);
  var y=gageMath.getRandom(0,window.innerHeight);
  var size=gageMath.getRandom(15,42);
  var rotation=gageMath.getRandom(0,360);

  // Position and style
  decal.css({
    position:'absolute',
    left:x+'px',
    top:y+'px',
    width:size+'px',
    height:size+'px',
    zIndex:3,
    transform:`rotate(${rotation}deg)`
  })

  // Add to overlay
  overlay.append(decal);  
}

// Begin shooting
function beginShooting(overlay) {
  var shooting=setInterval(function() {
    createDecal(overlay);
    if ($(".overlay .decal").length>=bulletAmount) {
      clearInterval(shooting);
    }
  },bulletRate)    
}


// Master Function \\
function animation(newPage) {  
  var overlay=createOverlay();

  // Fade overlay in
  overlay.animate({
    opacity:1
  },500, function() {

    // BRRRrrrrRRrrrrrrrrrrrRRRRRAAAAAP🔫
    setTimeout(function() {    
      beginShooting(overlay);
    },400)
  });
}

export default { animation }