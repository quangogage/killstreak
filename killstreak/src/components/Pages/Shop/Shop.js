import React, { Component } from "react";
import "../../../styles/css/Shop/Shop.css";
import gageMath from "../../../gagelib/Math";

import Nav from "../Nav/Nav";
import Header from "./Header";
import Products from "./Products/Products";

var deathCharacters = ["@"];

class Shop extends Component {
  render() {
    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage !== "Shop") {
      return false;
    }

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
      </div>
    );
  }
}

export default Shop;
