import gagelib from './gagelib';
gagelib.math={};


// Get a random number between two.
gagelib.math.getRandom=function(min, max) {
  return Math.random() * (max - min + 1) + min;
}


export default gagelib.math;