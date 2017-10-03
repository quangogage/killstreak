import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    var thumbnail = require(`../../../../images/products${this.props
      .images[0]}`);
    return (
      <div className="ProductItem">
        {/* image */}
        <Link to={`/Shop/${this.props.name}`}>
          <img src={thumbnail} className="thumbnail" alt="" />
        </Link>

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
