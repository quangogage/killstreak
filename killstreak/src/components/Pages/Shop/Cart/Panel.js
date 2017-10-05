import React, { Component } from "react";
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
      this.open();
    } else if (nextProps.isOpen === false && this.state.isOpen === true) {
      this.close();
    }
  }

  // Open up!
  open() {}

  // Shut 'er down.
  close() {}

  render() {
    return (
      <div className="Panel" onClick={this.props.open}>
        <div className="closed-container">
          <img src={cartIcon} className="icon" />
        </div>
      </div>
    );
  }
}

export default Panel;
