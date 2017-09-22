import gagelib from './gagelib';
gagelib.math={};


// Get a random number between two.
gagelib.math.getRandom=function(min, max) {
  return Math.random() * (max - min + 1) + min;
}

// Convert a radian angle to degrees
gagelib.math.toDegrees=function(angle) {
  return angle * (180/ Math.PI);
}


export default gagelib.math;