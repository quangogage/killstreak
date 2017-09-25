import React, { Component } from 'react';
import $ from 'jquery';
import '../../../styles/css/Contact/Success.css';

class Success extends Component {
  constructor(props) {
    super(props);

    this.state={
      isOpen:props.isOpen
    }
  }

  // Checking if it's getting closed or opened
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.props.isOpen) {
      this.open();
    } else if (!nextProps.isOpen && this.props.isOpen) {
      // Close
    }
  }

  // Open 'er up.
  open() {
    var contactPage=$('.Contact');
    var container=$('.Success');

    // Disable scrolling on contact page
    contactPage.addClass('noscroll');
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
