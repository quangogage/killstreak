import React, { Component } from "react";
import "../../../../styles/css/Shop/Panel.css";

class Panel extends Component {
  render() {
    console.log(this.props.isOpen);
    return <div className="Panel" />;
  }
}

export default Panel;
