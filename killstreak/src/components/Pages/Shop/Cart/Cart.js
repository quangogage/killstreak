import React, { Component } from "react";
import Tab from "./Tab";
import "../../../../styles/css/Shop/Cart.css";

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        {/* Cart Tab */}
        <Tab
          amount={this.props.items.length}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

export default Cart;
