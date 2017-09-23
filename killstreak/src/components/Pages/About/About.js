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

          {/* Title */}
          <div className='title-container'>
            <img src={logo} alt='Killstreak' />
          </div>          

        </div>

      </div>
    );
  }
}

export default About;
