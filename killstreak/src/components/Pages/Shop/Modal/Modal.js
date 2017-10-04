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
    this.images.resetImage();

    // Invisible
    container.css({ opacity: 0 });

    // Fade in
    setTimeout(function() {
      container.css({ display: "flex" });
      container.animate({ opacity: 1 }, 150);
    });

    // Don't allow scrolling
    $("body").addClass("noscroll");

    this.setState({ isOpen: true });
  }
  close() {
    var container = $(".Modal");

    // Fade Out
    container.animate(
      {
        opacity: 0
      },
      250,
      function() {
        container.css({ display: "none" });
        this.images.resetImage();
      }.bind(this)
    );

    // Reallow scrolling
    $("body").removeClass("noscroll");
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="Modal">
        <div className="background-overlay" onClick={this.props.close} />
        <div className="window">
          <div className="close-button" onClick={this.props.close}>
            &#10006;
          </div>
          <div className="background-image" />
          <div className="section-container">
            <Images
              ref={instance => {
                this.images = instance;
              }}
              list={this.props.images}
            />
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
