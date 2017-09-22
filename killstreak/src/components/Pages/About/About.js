import React, { Component } from 'react';
import '../../../styles/css/About/About.css';
import $ from 'jquery';
import bg from '../../../images/tron/1.png';


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

          {/* Text */}
          <div className='text title'>Tron Beats</div>
          <div className='underline'></div>

          {/* Guns */}
          <div className='gun-container'>  
            <div className='spinner'>         
              <div className='gun'>e</div>
            </div>
            <div className='spinner'>         
              <div className='gun'>e</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
