import React, { Component } from "react";
import Tab from "./Tab";

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        {/* Cart Tab */}
        <Tab amount={this.props.items.length} />
      </div>
    );
  }
}

export default Cart;
