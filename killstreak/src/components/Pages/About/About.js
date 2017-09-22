import React, { Component } from 'react';
import '../../../styles/css/About/About.css';
import $ from 'jquery';
import bg from '../../../images/tron/1.png';
import Header from './Header';


class About extends Component {
  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="About") {
      return false;
    }

    return (
      <div className="About">         

        {/* Page Header */}
        <Header />

        {/* Content */}
        <div className='content'>
        </div>

      </div>
    );
  }
}

export default About;
