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

  // Handling body input
  handleBody(e) {
    this.setState({
      body:e.target.value
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
          className='field input-text'
        />

        <textarea
          value={this.state.body}
          onChange={(e) => this.handleBody(e)}
          className='field input-text'
        />

      </div>
    );
  }
}

export default Form;
