import gagelib from './gagelib';
import $ from 'jquery';
gagelib.device={};

// Get the current device
gagelib.device.get=function() {
  return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
}

export default gagelib.device;