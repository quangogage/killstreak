import React, { Component } from 'react';
import image from '../../../images/logo/Logo ( Transparent ).png';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">    
        <img src={image} alt='' />
        <img src={image} alt='' />
        <img src={image} alt='' />
        <img src={image} alt='' />
        <img src={image} alt='' />          
      </div>
    );
  }
}

export default Logo;
