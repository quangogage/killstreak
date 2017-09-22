import React, { Component } from 'react';
import '../../../styles/css/About/Header.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">

        {/* Title */}
        <div className='header'>
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
      </div>
    );
  }
}

export default Header;