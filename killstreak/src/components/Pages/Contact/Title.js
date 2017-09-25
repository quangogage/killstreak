import React, { Component } from 'react';
import underline from '../../../images/misc/blood underline.png';

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <div className='title-container'>
          <div className='death'>c</div>
          <div className='text'>Contact Us</div>
          <img src={underline} alt='' />
        </div>
      </div>
    );
  }
}

export default Title;