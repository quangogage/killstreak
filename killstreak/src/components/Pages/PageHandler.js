import React, { Component } from "react";
import $ from "jquery";
import gageMath from "../../gagelib/Math";
import Pages from "./Pages";

var transitionCount = 2; // Update this whenever you add a new animation to `./Transitions`

/*
  This component basically acts as a custom
  routing system. 
  
  The current URL gets passed down to it from
  `../index.js` as `location.pathname` - It uses
  this prop to check if the user has just entered,
  or switched URLS, and deals with that information
  accordingly.


  TRANSITION INFO: These are the animations that play
  when you switch pages. They are stored in the 
  `./Transitions/` directory,

  CREATING A TRANSITION:
    - Make a new file in the directory with the 
      appropriate numerical name.

    - Create a stylesheet for the transition and
      import it into your new file ( I did not do
      this for the first transition and it sucked) 

    - Create an `animation` function with `setPage`
      and `newPage` as the first and second arguments.

    - Make your animation inside of that function!

      • To load the next page use `setPage(newPage)`.
        Try to do so when the entire screen is covered.
        
        
*/

class PageHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      pages: ["Home", "Shop", "About", "Contact"]
    };

    this.setPage = this.setPage.bind(this);
  }

  // Set initial page. This is for if you
  // enter a custom URL, click a link, or
  // navigate the site any way besides
  // using the Links within.
  componentDidMount() {
    this.setState({
      currentPage: this.props.location.pathname.substr(1)
    });
  }

  componentWillReceiveProps(nextProps) {
    var currentPath = this.props.location.pathname;
    var newPath = nextProps.location.pathname;
    // Check for URL change
    if (newPath !== currentPath) {
      // Don't do any animation if you're just clicking an item in the shop
      if (
        newPath.substring(0, 5) === "/Shop" &&
        this.state.currentPage === "Shop"
      ) {
      } else {
        this.initTransition(nextProps.location.pathname.substr(1));
      }
    }
  }

  // Initialize page transition animation
  initTransition(page) {
    var animIndex = Math.floor(gageMath.getRandom(1, transitionCount));
    var anim = require(`./Transitions/${animIndex}.js`);

    // Check if one is already running ( if so, stahp! )
    if ($(".transition").length !== 0) {
      $(".transition").empty();
      $(".transition").remove();
    }

    // Run it!
    anim.default.animation(this.setPage, page);
  }

  // Set the current page (used within transitions)
  setPage(page) {
    this.setState({
      currentPage: page
    });
  }

  // required for react Component class extension
  render() {
    return (
      <div className="PageHandler">
        <Pages currentPage={this.state.currentPage} pages={this.state.pages} />
      </div>
    );
  }
}

export default PageHandler;
