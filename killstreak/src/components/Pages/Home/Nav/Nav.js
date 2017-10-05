/* eslint array-callback-return: 0 */
import React, { Component } from "react";
import "../../../../styles/css/Home/Nav.css";

import Item from "./Item";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        {this.props.pages.map((page, index) => {
          if (index !== 0) {
            return <Item key={index} index={index} page={page} />;
          }
        })}
      </div>
    );
  }
}

export default Nav;
