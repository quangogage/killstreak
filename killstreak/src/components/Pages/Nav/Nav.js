import React, { Component } from 'react';
import '../../../styles/css/Nav/Nav.css';
import underline from '../../../images/misc/blood underline.png';

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
                    {(this.props.pages[index+1]!==null && this.props.pages[index+1]!==this.props.currentPage) ? <div className='seperator'>k</div> : <div />}
                  </div>
                );
              }
            })
          }          
        </div>
        <img src={underline} alt='' />
      </div>
    );
  }
}

export default Nav;
