import React, { Component } from "react";
import logo from "../../../images/logo/simple 3d red.png";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {/* Logos */}
        <div className="logo-container">
          <img src={logo} alt="Killstreak" />
          <img src={logo} alt="Killstreak" />
          <img src={logo} alt="Killstreak" />
          <img src={logo} alt="Killstreak" />
        </div>
      </div>
    );
  }
}

export default Header;
