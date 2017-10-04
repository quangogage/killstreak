import React, { Component } from "react";

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }
  render() {
    var selectedPath = this.props.list[this.state.selected];
    var selectedImage = require("../../../../images/products" + selectedPath);
    return (
      <div className="Images section">
        <img src={selectedImage} className="selected" alt="" />
      </div>
    );
  }
}

export default Images;
