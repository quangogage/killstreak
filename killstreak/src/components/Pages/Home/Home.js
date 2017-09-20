import React, { Component } from 'react';
import Logo from './Logo';
import '../../../css/Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home page"> 

        {/* Logo */}
        <Logo />
        
      </div>
    );
  }
}

export default Home;
