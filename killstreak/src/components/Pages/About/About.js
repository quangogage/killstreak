import React, { Component } from 'react';
import '../../../styles/css/About/About.css';
import logo from '../../../images/logo/simple white.png';


class About extends Component {
  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="About") {
      return false;
    }

    return (
      <div className="About">      

        {/* Header */}
        <div className='header'>

          <div className='drip' />

          {/* Title */}
          <div className='title-container'>
            <img src={logo} alt='Killstreak' />
          </div>          

        </div>

        {/* Content */}
        <div className='content'>

          I started Killstreak to help create a platform
          for underground artsits such as myself to be
          heard and have a voice. <br />
          <br />

          We are an independently owned brand based out
          of the pacific northwest providing a versatile
          set of products.<br />
          <br />

          By incorporating a lot of everyday life into
          my work, I try to focus on capturing the smaller
          things in life that people tend to pass up by 
          bringing them into the bigger picture.        

        </div>

      </div>
    );
  }
}

export default About;
