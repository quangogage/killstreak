import gagelib from './gagelib';
gagelib.string={};


// Place a string into another string at a
// specific index.
gagelib.string.insertAt=function(position,str,add) {
  var error;
  if (!position) {
    error='position';
  } else if (!str) {
    error='str';
  } else if (!add) {
    error='add';
  }


  if (error) {
    return `gagelib.string.insertAt() - '${error}' not specified.`
  } else {
    return [str.slice(0, position), add, str.slice(position)].join('')
  }  
}

export default gagelib.string;