import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return <div className="ProductItem cell">{this.props.name}</div>;
  }
}

export default ProductItem;
