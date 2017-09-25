import React, { Component } from 'react';
import '../../../styles/css/Contact/Contact.css';

import Title from './Title';
import Form from './Form';


class Contact extends Component {

  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="Contact") {
      return false;
    }


    return (
      <div className="Contact page">     

        {/* Page Title */}
        <Title />       

        {/* Form (text fields, etc) */}
        <Form />
        
      </div>
    );
  }
}

export default Contact;
