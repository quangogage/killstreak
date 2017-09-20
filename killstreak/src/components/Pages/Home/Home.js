import React, { Component } from 'react';
import Logo from './Logo';
import '../../../styles/css/Home/Home.css';


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
