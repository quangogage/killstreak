/* eslint array-callback-return: 0 */
import React, { Component } from "react";

/* Pages */
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Shop from "./Shop/Shop";

class Pages extends Component {
  render() {
    var pages = [
      {
        name: "Home",
        component: (
          <Home
            pages={this.props.pages}
            path={this.props.path}
            currentPage={this.props.currentPage}
          />
        )
      },
      {
        name: "About",
        component: (
          <About
            pages={this.props.pages}
            path={this.props.path}
            currentPage={this.props.currentPage}
          />
        )
      },
      {
        name: "Contact",
        component: (
          <Contact
            pages={this.props.pages}
            path={this.props.path}
            currentPage={this.props.currentPage}
          />
        )
      },
      {
        name: "Shop",
        component: (
          <Shop
            pages={this.props.pages}
            path={this.props.path}
            currentPage={this.props.currentPage}
          />
        )
      }
    ];

    var renderedPage = pages.map((page, index) => {
      // Most Pages
      if (this.props.currentPage.substring(0, page.name.length) === page.name)
        return <div key={index}>{page.component}</div>;
    });
    // Special home page :-)
    if (this.props.currentPage === "") {
      renderedPage = pages[0].component;
    }
    return <div className="Pages">{renderedPage}</div>;
  }
}

export default Pages;
