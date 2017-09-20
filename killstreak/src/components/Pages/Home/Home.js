import React, { Component } from 'react';
import Logo from './Logo';
import DropHandler from './Drops/DropHandler';
import '../../../css/Home/Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home page"> 

        {/* Logo */}
        <Logo />

        {/* Drops */}
        <DropHandler />

      </div>
    );
  }
}

export default Home;
