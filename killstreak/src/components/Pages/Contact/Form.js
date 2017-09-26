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
    var email=$('.email');

    // Enter it
    this.setState({
      email:e.target.value
    })

    // If was invalid, check if it no longer is
    if (email.hasClass('invalid') && this.validateEmail(e.target.value)) {
      email.removeClass('invalid');
    }
  }

  // Handling body input
  handleBody(e) {
    var body=$('.body');

    // Enter it
    this.setState({
      body:e.target.value
    })

    // If it was invalid, make it not
    if (body.hasClass('invalid')) {
      body.removeClass('invalid');
    }
  }

  // Validate email field
  validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  // Validate body field
  // Basically, check if it's empty.
  validateBody(body) {
    if (body==='') {
      return false;
    } else {
      return true;
    }
  }

  // Send the message
  sendEmail() {
    var isEmailValid=this.validateEmail(this.state.email);
    var isBodyValid=this.validateBody(this.state.body);

    if (isEmailValid && isBodyValid) { 
        
      // Send it to back-end 
      $.ajax({
        type: 'POST',
        url: '/text',
        data: { q:this.state.body, e:this.state.email },
        dataType: 'json',
        success: function (response) {                  
          
        },
        error: function (xhr, status, error) {
          var err = eval("(" + xhr.responseText + ")");
          alert(err.Message);
        }
      }) 

      // Assuming it goes through 100% of the time.
      this.setState({email:'',body:''});   
      this.props.triggerSuccess();

    } else {
      // If one or more of the fields is not valid
      if (!isBodyValid) {$('.body').addClass('invalid');}      
      if (!isEmailValid) {$('.email').addClass('invalid');}
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
          className='email field input-text'          
        />

        <textarea
          value={this.state.body}
          onChange={(e) => this.handleBody(e)}          
          placeholder="Your Message."
          className='body field input-text'
        />

        <div className='submit-button' onClick={this.sendEmail}>
          <div className='text'>Send <div className='die'>9</div></div>
        </div>

      </div>
    );
  }
}

export default Form;
