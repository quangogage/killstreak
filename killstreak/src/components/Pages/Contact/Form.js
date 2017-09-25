import React, { Component } from 'react';
import $ from 'jquery';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state={
      email:'',
      body:''
    }

    this.validateEmail=this.validateEmail.bind(this);
    this.sendEmail=this.sendEmail.bind(this);
  }

  // Handling email input
  handleEmail(e) {
    this.setState({
      email:e.target.value
    })
  }

  // Handling body input
  handleBody(e) {
    this.setState({
      body:e.target.value
    })
  }

  // Validate email field
  validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  // Send the message
  sendEmail() {
    var isEmailValid=this.validateEmail(this.state.email);

    if (isEmailValid) { 

      // Send it to back-end
      $.ajax({
        type: 'POST',
        url: '/text',
        data: { q:this.state.body, e:this.state.email },
        dataType: 'json',
        success: function (response) {
          
          // Clear the fields
          this.setState({email:'',body:''})          

        },
        error: function (xhr, status, error) {
          var err = eval("(" + xhr.responseText + ")");
          alert(err.Message);
        }
      })      

    } else {
      alert('Invalid email address');
    }
  }

  render() {
    return (
      <div className="Form">

        <input 
          type='text' 
          value={this.state.email} 
          onChange={(e) => this.handleEmail(e)} 
          placeholder="Your Email Address."
          className='field input-text'
        />

        <textarea
          value={this.state.body}
          onChange={(e) => this.handleBody(e)}
          className='field input-text'
          placeholder="Your Message."
        />

        <div className='submit-button' onClick={this.sendEmail}>
          <div className='text'>Send <div className='die'>9</div></div>
        </div>

      </div>
    );
  }
}

export default Form;
