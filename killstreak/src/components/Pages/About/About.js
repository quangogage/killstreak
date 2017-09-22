import React, { Component } from 'react';
import '../../../styles/css/About/About.css';
import bg from '../../../images/tron/2.jpg';
import title from '../../../images/misc/tron beats.png'


class About extends Component {
  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="About") {
      return false;
    }

    return (
      <div className="About"> 
        
        {/* Background Image */}
        <div className='background-image' style={{backgroundImage:`url(${bg})`}}/>

        {/* Title */}
        <div className='title-container'>
          <img src={title} className='title' />
          <div className='underline'></div>
        </div>

      </div>
    );
  }
}

export default About;
