import React, { Component } from "react";

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    this.setState({ selected: index });
  }

  render() {
    var selectedPath = this.props.list[this.state.selected];
    var selectedImage = require("../../../../images/products" + selectedPath);
    return (
      <div className="Images section">
        <img src={selectedImage} className="selected" alt="" />

        <div className="thumb-container">
          {this.props.list.map((image, index) => {
            return (
              <img
                src={require("../../../../images/products" + image)}
                className={
                  "thumb" + (this.state.selected === index ? " selected" : "")
                }
                alt=""
                onClick={() => this.handleClick(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Images;
