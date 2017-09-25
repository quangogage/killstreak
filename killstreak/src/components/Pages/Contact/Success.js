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
      this.close();
    }
  }

  // Open 'er up.
  open() {
    var contactPage=$('.Contact');
    var container=$('.Success');
    var content=$('.Success .content');

    // Disable scrolling on contact page
    contactPage.addClass('noscroll');

    // Fade in container
    container.css({display:'block'}); // Must set this before any sort of transition can happen.
    setTimeout(function() {
      container.addClass('shown');
    },50)

    // Content
    setTimeout(function() {
      content.addClass('shown');
    },250)
  }

  // Shut it down!!
  close() {
    var contactPage=$('.Contact');
    var skull=$('.Success .skull');
    var container=$('.Success');
    var content=$('.Success .content');

    //Enable scrolling on contact page
    contactPage.removeClass('noscroll');

    // Show skull
    skull.addClass('shown');

    // Hide Content
    content.removeClass('shown');

    // Hide container
    setTimeout(function() {      
      container.removeClass('shown');
      container.on('transitionend',function() {
        container.css({display:'none'});
      })
    },1500)
  }

  render() {
    return (
      <div className="Success">

        <div className='content'>
          <div className='die'>ú</div>
          <div className='text'>Your message has been sent.</div>

          <div className='button' onClick={this.props.close}>Okay</div>          

        </div>

        <div className='skull'>(</div>

      </div>
    );
  }
}

export default Success;
