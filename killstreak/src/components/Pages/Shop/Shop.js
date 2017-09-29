import React, { Component } from "react";
import "../../../styles/css/Shop/Shop.css";

import Nav from "../Nav/Nav";
import Header from "./Header";

class Shop extends Component {
  render() {
    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage !== "Shop") {
      return false;
    }
    return (
      <div className="Shop">
        <Nav pages={this.props.pages} currentPage={this.props.currentPage} />
        <Header />
      </div>
    );
  }
}

export default Shop;
