import React, { Component } from 'react';
import '../../../styles/css/Nav/Nav.css';

class Nav extends Component {

  render() {
    var items=this.props.pages.map((page,index) => {
      if (page!==this.props.currentPage) {
        return <div className='item' key={index}>
          {page}
        </div>;
      }
    })
    return (
      <div className="Nav">
        {items}
      </div>
    );
  }
}

export default Nav;
