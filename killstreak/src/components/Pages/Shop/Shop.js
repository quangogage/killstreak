import React, { Component } from "react";
import "../../../styles/css/Shop/Shop.css";
import gageMath from "../../../gagelib/Math";

import Nav from "../Nav/Nav";
import Header from "./Header";
import Products from "./Products/Products";
import Modal from "./Modal/Modal";

// Random list of characters to be placed
// to the left and right of the grid header.
var deathCharacters = ["K", "S", "t", "ò"];

class Shop extends Component {
  render() {
    var deathChar =
      deathCharacters[
        Math.floor(gageMath.getRandom(0, deathCharacters.length - 1))
      ];
    return (
      <div className="Shop">
        <Nav pages={this.props.pages} currentPage={this.props.currentPage} />
        <Header />

        {/* Products */}
        <div className="grid-header">
          <div className="text-container">
            <div className="death">{deathChar}</div>
            <div className="title">Products</div>
            <div className="death flipped">{deathChar}</div>
          </div>
        </div>

        {/* Products */}
        <Products />

        {/* Product Modal */}
        <Modal />
      </div>
    );
  }
}

export default Shop;
