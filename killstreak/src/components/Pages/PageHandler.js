import React, { Component } from 'react'

/* Pages */
import Home from './Home/Home';
import About from './About/About';


/* Transitions
import Shootup from './Transitions/Shootup.js';
var transitions=[
  Shootup
]
*/

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

  componentWillReceiveProps(nextProps) {
    
    // Check for URL change
    if (nextProps.location.pathname !== this.props.location.pathname) {
      console.log('new path');
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
        <About
          currentPage={this.state.currentPage}
          pages={this.state.pages}
        />        
      </div>
    );
  }
}

export default PageHandler;
