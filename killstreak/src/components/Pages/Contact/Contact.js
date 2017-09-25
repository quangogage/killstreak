import React, { Component } from 'react';
import '../../../styles/css/Contact/Contact.css';

import Title from './Title';
import Form from './Form';
import Success from './Success';

/*
  Notes:
    - Text field information and values are
      stored in the "Form" component.
*/

class Contact extends Component {  
  constructor(props) {
    super(props);

    this.state={
      promptIsOpen:false
    }
  }


  // Open/Close successful message prompt
  togglePrompt(state) {
    var newState=state || !this.state.promptIsOpen;
    this.setState({
      promptIsOpen:newState
    })
  }

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
        
        {/* Successful Send */}
        <Success isOpen={this.state.promptIsOpen} />
      </div>
    );
  }
}

export default Contact;
