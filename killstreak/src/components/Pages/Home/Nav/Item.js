import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className='text'>{this.props.page.toLowerCase()}</div>
        <div className='text after'>{this.props.page.toLowerCase()}</div>
      </div>
    );
  }
}

export default Item;
