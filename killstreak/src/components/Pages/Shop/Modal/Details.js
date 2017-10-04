import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="Details section">
        <div className="title full">{this.props.name}</div>
      </div>
    );
  }
}

export default Details;
