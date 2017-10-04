import React, { Component } from "react";
import "../../../../styles/css/Shop/Modal.css";
import productList from "../Products/list";
import $ from "jquery";

import Images from "./Images";
import Details from "./Details";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Check if the modal has been closed
    // or opened.
    if (nextProps.isOpen !== this.state.isOpen) {
      if (nextProps.isOpen === false) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  open() {
    var container = $(".Modal");
    container.css({ display: "flex" });
    this.setState({ isOpen: true });
  }
  close() {
    var container = $(".Modal");
    container.css({ display: "none" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="Modal">
        <div className="background-overlay" onClick={this.props.close} />
        <div className="window">
          <div className="background-image" />
          <div className="section-container">
            <Images list={this.props.images} />
            <Details
              name={this.props.name}
              notes={this.props.notes}
              price={this.props.price}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
