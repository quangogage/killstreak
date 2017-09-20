import React, { Component } from 'react';
import Logo from './Logo';
import '../../../styles/css/Home/Home.css';

import Nav from './Nav/Nav';


class Home extends Component {
  render() {
    return (
      <div className="Home page"> 

        {/* Logo */}
        <Logo />

        {/* Navigation Menu */}
        <Nav />
                      
      </div>    
    );    
  }
}

export default Home;
