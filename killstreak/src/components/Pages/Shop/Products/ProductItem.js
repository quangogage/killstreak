import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var thumbnail = require(`../../../../images/products${this.props
      .images[0]}`);
    return (
      <div className="ProductItem cell">
        <img src={thumbnail} className="thumbnail" alt="" />
      </div>
    );
  }
}

export default ProductItem;
