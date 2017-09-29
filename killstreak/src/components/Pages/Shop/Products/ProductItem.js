import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var thumbnail = require(`../../../../images/products${this.props
      .images[0]}`);
    return (
      <div className="ProductItem">
        <img src={thumbnail} className="thumbnail" alt="" />
        <div className="text">
          <div className="name">{this.props.name}</div>
          <div className="price">${this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
