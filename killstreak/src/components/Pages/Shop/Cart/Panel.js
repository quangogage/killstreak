import React, { Component } from "react";
import $ from "jquery";
import "../../../../styles/css/Shop/Panel.css";

import cartIcon from "../../../../images/icons/shopping-cart.png";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: props.isOpen };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  // Check for opening/closing
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen === true && this.state.isOpen === false) {
      this.setState({ isOpen: true });
      this.open();
    } else if (nextProps.isOpen === false && this.state.isOpen === true) {
      this.setState({ isOpen: false });
      this.close();
    }
  }

  // Open up!
  open() {
    var panel = $(".Panel");
    var closedContainer = $(".closed-container");
    var openContainer = $(".open-container");
    var closedHeight = panel.height();

    // Remove horizontal sizing delay
    panel.css({ transitionDelay: "0s" });

    // Hide closed text
    closedContainer.animate(
      {
        opacity: 0
      },
      { duration: 200, queue: false }
    );

    // Reveal open text
    setTimeout(function() {
      openContainer.animate(
        {
          opacity: 1
        },
        { duration: 200, queue: false }
      );
    }, 400);

    // Expand vertically
    setTimeout(function() {
      panel.animate(
        {
          height: "80vh"
        },
        500
      );
    }, 500);
  }

  // Shut 'er down.
  close() {
    var panel = $(".Panel");
    var closedContainer = $(".closed-container");
    var openContainer = $(".open-container");

    // Wait to shrink horizontally
    panel.css({ transitionDelay: "0.6s" });

    // Shrink vertically
    panel.animate({ height: "45px" }, 500);

    // Hide open content
    openContainer.animate({ opacity: 0 }, { duration: 200, queue: false });

    // Reveal closed content
    setTimeout(function() {
      closedContainer.animate({ opacity: 1 }, { duration: 200, queue: false });
    }, 750);
  }

  render() {
    console.log(this.props.isOpen);
    return (
      <div
        className={"Panel" + (this.props.isOpen ? " open" : " closed")}
        onClick={this.state.isOpen === false ? this.props.open : function() {}}
      >
        {/* Content that appears when panel is closed */}
        <div className="closed-container">
          <div className="text">View Cart</div>
          <img src={cartIcon} className="icon" />
          <div className="count">({this.props.itemCount})</div>
        </div>
        {/* Content that appears when panel is open */}
        <div className="open-container">
          <div className="close-button" onClick={this.props.close}>
            &#10006;
          </div>
          <div className="title">Your Cart</div>
        </div>
      </div>
    );
  }
}

export default Panel;
