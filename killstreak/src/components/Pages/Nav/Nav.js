import React, { Component } from 'react';
import '../../../styles/css/Nav/Nav.css';

class Nav extends Component {

  render() {
    
    /* All pages (except the one you're on!) */
    var items=this.props.pages.map((page,index) => {
      if (page!==this.props.currentPage) {
        return <div className='item' key={index}>
          {page}
        </div>;
      }
    })

    // White color theme
    var theme=(this.props.currentPage==='About' ? 'white' : '')

    return (
      <div className={"Page-Nav" + theme}> 
        {items}
      </div>
    );
  }
}

export default Nav;