import React, { Component } from 'react';
import '../../../styles/css/Contact/Contact.css';


class Contact extends Component {
  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="Contact") {
      return false;
    }


    return (
      <div className="Contact page">
        what is up.
      </div>
    );
  }
}

export default Contact;
