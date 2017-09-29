import React, { Component } from "react";
import "../../../../styles/css/Shop/Products.css";

import list from "./list.js";
import ProductItem from "./ProductItem";

class Products extends Component {
  render() {
    return (
      <div className="Products">
        {list.map((product, index) => {
          return (
            <ProductItem
              key={index}
              index={index}
              name={product.name}
              images={product.images}
              tags={product.tags}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
