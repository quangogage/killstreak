import React, { Component } from 'react';
import '../../../styles/css/Gallery/Gallery.css';


class Gallery extends Component {
  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="Gallery") {
      return false;
    }

    return (
      <div className="Gallery page">
        asdf
      </div>
    );
  }
}

export default Gallery;
