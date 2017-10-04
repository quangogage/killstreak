import React, { Component } from "react";
import "../../../../styles/css/Shop/Modal.css";
import productList from "../Products/list";

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="window">
          <div className="name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
