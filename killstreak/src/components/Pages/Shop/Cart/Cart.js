import React, { Component } from "react";
import Tab from "./Tab";
import "../../../../styles/css/Shop/Cart.css";

import Panel from "./Panel";

/*
  This component is slightly less straightforward
  than you would think. Basically you can think
  of it as handling everything to do with the cart,
  except the cart itself - The user's cart is 
  maintained within the 'Shop' component's state.

  The main purpose of this is to mediate both the
  cart tab, and the cart window.
*/

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        {/* Cart Tab */}
        <Tab
          amount={this.props.items.length}
          currentPage={this.props.currentPage}
        />

        {/* Cart Panel */}
        <Panel isOpen={this.props.panelIsOpen} />
      </div>
    );
  }
}

export default Cart;
