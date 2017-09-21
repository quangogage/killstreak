import React, { Component } from 'react'

import Home from './Home/Home';

class PageHandler extends Component {
  constructor(props) {
    super(props);
    this.state={      
      currentPage:"Home",
      pages:[
        "Home",
        "Gallery",        
        "Shop",
        "About",
        "Contact"
      ]
    }    
  }


  // required for react Component class extension
  render() {
    return (
      <div className="PageHandler">
        <Home
          currentPage={this.state.currentPage}
          pages={this.state.pages}
        />        
      </div>
    );
  }
}

export default PageHandler;
