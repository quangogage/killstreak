import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className='text'>{this.props.page}</div>
      </div>
    );
  }
}

export default Item;
