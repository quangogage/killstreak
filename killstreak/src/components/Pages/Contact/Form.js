import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state={
      email:'',
      body:''
    }
  }

  // Handling email input
  handleEmail(e) {
    this.setState({
      email:e.target.value
    })
  }

  render() {
    return (
      <div className="Form">

        <input 
          type='text' 
          value={this.state.email} 
          onChange={(e) => this.handleEmail(e)} 
          placeholder="Your Email Address"
        />

        <textarea
          value={this.state.body}
        />

      </div>
    );
  }
}

export default Form;
