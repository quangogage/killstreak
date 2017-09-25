import React, { Component } from 'react'
import $ from 'jquery';
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
        "Shop",
        "About",
        "Contact"
      ]
    }  
    
    this.setPage=this.setPage.bind(this);
  }

  // Set initial page. This is for if you
  // enter a custom URL, click a link, or
  // navigate the site any way besides
  // using the Links within.
  componentDidMount() {
    this.setState({
      currentPage:this.props.location.pathname.substr(1)
    })
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
    var anim=require(`./Transitions/${animIndex}.js`);

    // Check if one is already running ( if so, stahp! )
    if ($('.transition').length!==0) {
      $('.transition').empty();
      $('.transition').remove();
    }

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
