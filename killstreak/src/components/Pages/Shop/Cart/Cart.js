import React, { Component } from "react";
import "../../../../styles/css/Shop/Cart.css";

import Panel from "./Panel";

/*
  This component is slightly less straightforward
  than you would think. Basically you can think
  of it as handling everything to do with the cart,
  except the cart itself - The user's cart is 
  maintained within the 'Shop' component's state.

  The main purpose is to act as a middle man between
  the 'Panel' component and the 'Shop' component.
  Handling higher level cart functionalities, while
  leaving the interface stuff to the 'Panel'.
*/

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <Panel
          itemCount={this.props.items.length}
          isOpen={this.props.panelIsOpen}
          open={this.props.openPanel}
          close={this.props.closePanel}
        />
      </div>
    );
  }
}

export default Cart;
