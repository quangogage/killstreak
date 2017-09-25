import React, { Component } from 'react';
import '../../../styles/css/Contact/Success.css';

class Success extends Component {
  render() {
    return (
      <div className={"Success" + (this.props.isOpen ? "" : " hidden")}>

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
