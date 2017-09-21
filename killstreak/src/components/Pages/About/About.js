import React, { Component } from 'react';
import '../../../styles/css/About/About.css';


class About extends Component {
  render() {
    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="About") {
      return false;
    }

    return (
      <div className="About"> 
        asdf       
      </div>
    );
  }
}

export default About;
