import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
  This component renders it's corresponding
  product thumbnail + other basic information.

  It doesn't do much besides render info. Something
  that may be helpful to note though - It is
  responsable for linking to product URL' within the
  shop ie, "/Shop/White Shirt".
*/

class ProductItem extends Component {
  render() {
    var thumbnail = require(`../../../../images/products${this.props
      .images[0]}`);
    return (
      <div className="ProductItem">
        {/* image */}
        <Link to={`/Shop/${this.props.name}`}>
          <img
            src={thumbnail}
            className="thumbnail"
            alt=""
            onClick={() => this.props.handleClick(this.props.index)}
          />
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
