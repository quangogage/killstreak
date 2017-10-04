import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="Details section">
        <div className="title">{this.props.name}</div>
        <ol className="note-container">
          {this.props.notes.map((note, index) => {
            return <li className="note">{note}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default Details;
