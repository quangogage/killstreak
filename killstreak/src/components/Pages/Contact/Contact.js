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

    this.togglePrompt=this.togglePrompt.bind(this);

    setTimeout(function() {
      this.togglePrompt();
    }.bind(this),500)
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
        <Form 
        open={() => this.togglePrompt(true)}
        />
        
        {/* Successful Send */}
        <Success 
          isOpen={this.state.promptIsOpen} 
          close={() => this.togglePrompt(false)}
        />
      </div>
    );
  }
}

export default Contact;
