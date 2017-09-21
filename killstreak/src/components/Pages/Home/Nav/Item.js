import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <Link to={`/${this.props.page}`} style={{textDecoration:'none',cursor:'inherit'}}>
          <div className='text'>{this.props.page.toLowerCase()}</div>
          <div className='text after'>{this.props.page.toLowerCase()}</div>
        </Link>
      </div>
    );
  }
}

export default Item;
