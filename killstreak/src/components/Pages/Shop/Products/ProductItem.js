import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var thumbnail = require(`../../../../images/products${this.props
      .images[0]}`);
    return (
      <div className="ProductItem">
        {/* image */}
        <img src={thumbnail} className="thumbnail" alt="" />

        {/* Sub-Text */}
        <div className="text">
          <div className="name">{this.props.name}</div>
          <div className="price">${this.props.price}</div>
        </div>

        {/* Image Overlay */}
        <div className="overlay" />
      </div>
    );
  }
}

export default ProductItem;
