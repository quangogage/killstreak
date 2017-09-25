import React, { Component } from 'react';
import '../../../styles/css/Contact/Success.css';

class Success extends Component {
  constructor(props) {
    super(props);

    this.state={
      isOpen:props.isOpen
    }
  }

  render() {
    return (
      <div className="Success">

        <div className='content'>
          <div className='die'>ú</div>
          <div className='text'>Your message has been sent.</div>

          <div className='button'>Okay</div>
        </div>

      </div>
    );
  }
}

export default Success;
