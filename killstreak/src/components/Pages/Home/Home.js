import React, { Component } from 'react';
import Logo from './Logo';
import '../../../styles/css/Home/Home.css';

import Nav from './Nav/Nav';


class Home extends Component {
  render() {
    
    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="Home") {
      return false;
    }

    return (
      <div className="Home page"> 

        {/* Logo */}
        <Logo />

        {/* Navigation Menu */}
        <Nav pages={this.props.pages} />
                      
      </div>    
    );    
  }
}

export default Home;
