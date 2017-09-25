import React, { Component } from 'react';
import underline from '../../../images/misc/blood underline.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">

        {/* Title */}
        <div className='title-container'>
          <div className='title'>
            Gallery
          </div>
          <img src={underline} alt='' />
        </div>

      </div>
    );
  }
}

export default Header;
