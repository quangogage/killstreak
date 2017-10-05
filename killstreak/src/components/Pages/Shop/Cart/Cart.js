import React, { Component } from "react";
import "../../../../styles/css/Shop/Cart.css";

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
    return <div className="Cart" />;
  }
}

export default Cart;
