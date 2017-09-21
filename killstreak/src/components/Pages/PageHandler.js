import React, { Component } from 'react'
import gageMath from '../../gagelib/Math';

/* Pages */
import Home from './Home/Home';
import About from './About/About';

var transitionCount=2; // Update this whenever you add a new animation to `./Transitions`

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
    
    this.setPage=this.setPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    
    // Check for URL change
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.initTransition(nextProps.location.pathname.substr(1));
    }
  }

  // Initialize page transition animation
  initTransition(page) {
    var animIndex=Math.floor(gageMath.getRandom(1,transitionCount));
    animIndex=2; // TESTING *!!!!*!*!*!(*!02-9381-2039812-03489)
    var anim=require(`./Transitions/${animIndex}.js`);

    // Run it!
    anim.default.animation(this.setPage,page);
  }

  // Set the current page (used within transitions)
  setPage(page) {
    this.setState({
      currentPage:page
    })
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
