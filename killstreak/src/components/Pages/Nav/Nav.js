import React, { Component } from 'react';
import '../../../styles/css/Nav/Nav.css';

class Nav extends Component {

  render() {
    
    /* All pages (except the one you're on!) */

    // White color theme

    return (
      <div className="Page-Nav"> 
        <div className='item-container'>
          {
            this.props.pages.map((page,index) => {
              if (page!==this.props.currentPage) {
                return (
                  <div className='item'>
                    {page}
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default Nav;
