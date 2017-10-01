/* BANG BANG BRRRRRRRRRRRAAAAHAP */
import $ from "jquery";
import gageMath from "../../../gagelib/Math";

import decalImage from "../../../images/transitions/shooting/decal.png";
import logoImage from "../../../images/logo/white.png";

// ** Animation Variables ** \\
var duration = 1750; // Length of the entire transition

var fadeInTime = 300; // Milliseconds it takes to fade in initial overlay
var fadeOutTime = 300; // Same as above - But fading out

var bulletAmount = 50; // How many shots?
var bulletRate = 30; // Milliseconds between shots
var bulletSpreadY = 0.05; // Percent ( of screen ) of vertical spread
var bulletSpreadX = 0.6; // Percent ( of screen ) of horizontal spread

var flashTime = 15; // Fade out time in milliseconds
var flashBrightness = 0.5; // Brightness of flash (0-1)

// Create the red overlay element
function createOverlay() {
  var overlay = $(`<div class="overlay"></div>`);
  overlay.css({
    position: "absolute",
    left: 0,
    top: "-100%",
    width: "100%",
    height: "100%",
    zIndex: 10,
    background: "RGB(255,0,0)",
    opacity: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });
  var logo = $(`<img src=${logoImage} />`);
  logo.css({
    zIndex: 2,
    width: "80%"
  });
  overlay.append(logo);

  return overlay;
}

// Create or update a flash effect when "shoot"ing
function flash(overlay) {
  var flash;
  // Create flash if it doesn't already exist
  if ($(".overlay .flash").length === 0) {
    flash = $('<div class="flash"></div>');
    flash.css({
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "white",
      zIndex: 5
    });
    overlay.append(flash);
  } else {
    flash = $(".overlay .flash");
  }
  flash.css({ opacity: flashBrightness });
  flash.animate(
    {
      opacity: 0
    },
    { duration: flashTime, queue: false }
  );
}

// Add a decal
function createDecal(x, overlay) {
  var decal = $(`<img class='decal' src=${decalImage} />`);
  var y = gageMath.getRandom(
    window.innerHeight * (0.5 - bulletSpreadY),
    window.innerHeight * (0.5 + bulletSpreadY)
  );
  var size = gageMath.getRandom(15, 25);
  var rotation = gageMath.getRandom(0, 360);

  // Position and style
  decal.css({
    position: "absolute",
    left: x + "px",
    top: y + "px",
    width: size + "px",
    height: size + "px",
    zIndex: 3,
    transform: `rotate(${rotation}deg)`
  });

  // Add to overlay
  overlay.append(decal);
}

// Begin shooting
function beginShooting(overlay) {
  var x = window.innerWidth / 2 - bulletSpreadX * window.innerWidth / 2;
  var xInc = bulletSpreadX * window.innerWidth / bulletAmount;

  var shooting = setInterval(function() {
    // Shoot
    createDecal(x, overlay);
    flash(overlay);

    // Push next one to the right
    x += xInc;

    // Stop shooting
    if ($(".overlay .decal").length >= bulletAmount) {
      clearInterval(shooting);
    }
  }, bulletRate);
}

// Create container for the entire transition
function createContainer() {
  var container = $("<div class='transition'></div>");
  $("body").append(container);
  return container;
}

// Master Function \\
function animation(setPage, newPage) {
  var container = createContainer();
  var overlay = createOverlay();
  container.append(overlay);

  // No scroll body
  $(".page").addClass("noscroll");

  // Fade overlay in
  overlay.animate(
    {
      opacity: 1,
      top: 0
    },
    fadeInTime,
    function() {
      // Change pages while they can't see it!
      setPage(newPage);

      // BRRRrrrrRRrrrrrrrrrrrRRRRRAAAAAP🔫
      setTimeout(function() {
        beginShooting(overlay);

        // Fade out and clear out!
        setTimeout(function() {
          overlay.animate(
            {
              opacity: 0,
              top: "100%"
            },
            fadeOutTime,
            function() {
              container.empty();
              container.remove();
              $(".page").removeClass("noscroll");
            }
          );
        }, duration);
      }, 400);
    }
  );
}

export default { animation };
