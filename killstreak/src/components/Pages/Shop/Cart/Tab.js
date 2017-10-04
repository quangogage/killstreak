import React, { Component } from "react";

import cartIcon from "../../../../images/icons/shopping-cart.png";

class Tab extends Component {
  render() {
    return (
      <div className="Tab">
        <img src={cartIcon} className="icon" alt="" />
        <div className="amount">({this.props.amount})</div>
      </div>
    );
  }
}

export default Tab;
