import React, { Component } from "react";
import "../../../styles/css/Contact/Contact.css";
import Nav from "../Nav/Nav";

import Title from "./Title";
import Form from "./Form";
import Success from "./Success";

/*
  Notes:
    - Text field information and values are
      stored in the "Form" component.
*/

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promptIsOpen: false
    };

    this.togglePrompt = this.togglePrompt.bind(this);
  }

  // Open/Close successful message prompt
  togglePrompt(state) {
    var newState = state || !this.state.promptIsOpen;
    this.setState({
      promptIsOpen: newState
    });
  }

  render() {
    return (
      <div className="Contact page">
        <Nav currentPage={this.props.currentPage} pages={this.props.pages} />

        {/* Page Title */}
        <Title />

        {/* Form (text fields, etc) */}
        <Form triggerSuccess={() => this.togglePrompt(true)} />

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
