import React, { Component } from 'react';
import gageMath from '../../../gagelib/Math';
import $ from 'jquery';
import '../../../styles/css/About/About.css';
import logo from '../../../images/logo/simple white.png';


class About extends Component {

  componentDidMount() {
    this.splat();
  }

  componentWillReceiveProps(nextProps) {

    // Check for new load
    if (nextProps.currentPage==='About') {
      if (nextProps.currentPage!==this.props.currentPage) {
        setTimeout(function() {
          this.splat();
        }.bind(this),100)        
      }
    }
  }
  
  // Generate blood splatters
  splat() {
    var splatters=[
      require('../../../images/splatters/thin/1.png'),
      require('../../../images/splatters/thin/2.png')
    ]
    var amount=gageMath.getRandom(2,4);

    for(var i=0;i<amount;i++) {
      var imageIndex=Math.floor(gageMath.getRandom(0,splatters.length-1));
      var size=gageMath.getRandom(125,200);      
      var x=gageMath.getRandom(0,window.innerWidth-size);
      var y=gageMath.getRandom(0,window.innerHeight-size);      
      var rotation=gageMath.getRandom(-360,360);
      var splat=$(`<img class='splatter' src=${splatters[imageIndex]}>`)                  
      splat.css({
        left:x+'px',
        top:y+'px',
        transform:`rotate(${rotation}deg)`,
        width:size+'px'
      })

      // Add to DOM
      $('.About').append(splat);
    }
  }

  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="About") {
      return false;
    }

    return (
      <div className="About">      

        {/* Header */}
        <div className='header'>

          <div className='drip' />

          {/* Title */}
          <div className='title-container'>
            <img src={logo} alt='Killstreak' />
          </div>          

        </div>

        {/* Content */}
        <div className='content'>

          I started Killstreak to help create a platform
          for underground artsits such as myself to be
          heard and have a voice. <br />
          <br />

          We are an independently owned brand based out
          of the pacific northwest providing a versatile
          set of products.<br />
          <br />

          By incorporating a lot of everyday life into
          my work, I try to focus on capturing the smaller
          things in life that people tend to pass up by 
          bringing them into the bigger picture.        

        </div>

      </div>
    );
  }
}

export default About;
