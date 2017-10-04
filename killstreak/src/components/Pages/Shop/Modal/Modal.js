import React, { Component } from "react";
import "../../../../styles/css/Shop/Modal.css";
import productList from "../Products/list";

import Images from "./Images";
import Details from "./Details";

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="window">
          <div className="background-image" />
          <div className="section-container">
            <Images list={this.props.images} />
            <Details name={this.props.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
