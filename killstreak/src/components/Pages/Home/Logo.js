import React, { Component } from 'react';
import image from '../../../images/Logo ( Transparent ).png';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">    
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <img src={image} />          
      </div>
    );
  }
}

export default Logo;
