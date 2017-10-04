import React, { Component } from "react";
import "../../../../styles/css/Shop/Products.css";

import list from "./list.js";
import ProductItem from "./ProductItem";

class Products extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Clicking a product
  handleClick(index) {
    this.props.selectProduct(index);
    this.props.openModal();
  }

  render() {
    return (
      <div className="Products">
        <div className="grid">
          {list.map((product, index) => {
            return (
              <ProductItem
                key={index}
                index={index}
                name={product.name}
                images={product.images}
                price={product.price}
                tags={product.tags}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
