import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="Details section">
        <div className="title">{this.props.name}</div>
        <ul className="note-container">
          {this.props.notes.map((note, index) => {
            return <li className="note">{note}</li>;
          })}
        </ul>
        <div className="price">${this.props.price}</div>
        <div className="button-container">
          <div className="button">Add To Cart</div>
        </div>
      </div>
    );
  }
}

export default Details;
