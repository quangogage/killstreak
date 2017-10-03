import React, { Component } from "react";
import "../../../styles/css/Nav/Nav.css";
import underline from "../../../images/misc/blood underline black.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    /* All pages (except the one you're on!) */

    // White color theme

    var renderedPages = this.props.pages.filter((page, index) => {
      if (page !== this.props.currentPage) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <div className="Page-Nav">
        <div className="item-container">
          {renderedPages.map((page, index) => {
            return (
              <div className="item">
                <Link to={page} replace style={{ textDecoration: "none" }}>
                  <div className="text">{page}</div>
                </Link>
                {index !== renderedPages.length - 1 ? (
                  <div className="seperator">k</div>
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>
        <img src={underline} alt="" />
      </div>
    );
  }
}

export default Nav;
