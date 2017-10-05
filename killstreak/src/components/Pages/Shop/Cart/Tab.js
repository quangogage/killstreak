import React, { Component } from "react";
import $ from "jquery";

import cartIcon from "../../../../images/icons/shopping-cart.png";

class Tab extends Component {
  componentDidMount() {
    this.checkTab();
    $(window).scroll(
      function(e) {
        this.checkTab();
      }.bind(this)
    );
  }

  // Check and adjust if tab is overlapping with navigation menu
  checkTab() {
    var tab = $(".Cart .Tab");
    var nav = $(".Page-Nav");
    if (window.scrollY + tab.offset().top <= nav.height() * 2) {
      tab.css({
        top: nav.height() - window.scrollY + "px"
      });
    } else {
      tab.css({
        top: ""
      });
    }
  }
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