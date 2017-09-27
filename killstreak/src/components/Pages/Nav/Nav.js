import React, { Component } from 'react';
import '../../../styles/css/Nav/Nav.css';
import underline from '../../../images/misc/blood underline.png';

class Nav extends Component {

  render() {
    
    /* All pages (except the one you're on!) */

    // White color theme

    var renderedPages=this.props.pages.filter((page,index) => {
      if (page!==this.props.currentPage ) {
        return true
      } else {
        return false;
      }
    })
    console.log(renderedPages)
    

    return (
      <div className="Page-Nav"> 
        <div className='item-container'>
          {
            renderedPages.map((page,index) => {
                return (
                  <div className='item'>
                    {page}
                    {(index!==this.props.pages.length) ? <div className='seperator'>k</div> : <div />}
                  </div>
                );
            })
          }          
        </div>
        <img src={underline} alt='' />
      </div>
    );
  }
}

export default Nav;
