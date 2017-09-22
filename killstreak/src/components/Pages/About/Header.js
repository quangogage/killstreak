import React, { Component } from 'react';
import $ from 'jquery';
import '../../../styles/css/About/Header.css';


var waveDensity=25; // How many bars in the wave?
var waveDelay=0.1; // Delay between each bars wave animation.
var waveTime='2.25s' // Time for each bar to go up and down once

class Header extends Component {

  componentDidMount() {
    this.createWave();
  }

  //Generate the wave elements
  createWave() {
    var container=$('.wave-container');
    for(var i=0;i<waveDensity;i++) {
      var bar=$('<div class="bar"></div>');
      bar.css({
        width:(window.innerWidth/waveDensity)+'px',
        animationDelay:i*waveDelay+'s',
        animationDuration:waveTime
      })
      container.append(bar);
    }
  }


  render() {
    return (
      <div className="Header">

        <div className='wave-container'>
        </div>

        {/* Title */}
        <div className='title-container'>         

          {/* Text */}
          <div className='text title'>Tron Beats</div>

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

export default Header;