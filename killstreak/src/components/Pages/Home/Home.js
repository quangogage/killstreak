import React, { Component } from 'react';
import Logo from './Logo';
import '../../../styles/css/Home/Home.css';
import bulletDecal from '../../../images/misc/decal.png';
import gageMath from '../../../gagelib/Math';
import $ from 'jquery';

import Nav from './Nav/Nav';

class Home extends Component {
  
  componentDidMount() {
    // Blood
    this.splat();
    
    // Shoot
    window.addEventListener('click',function(e) {
      this.createDecal(e)
      this.flash();
    }.bind(this))
  }

  // Make a decal when you click anywhere
  createDecal(e) {
    var decal=$(`<img class="decal" src=${bulletDecal} />`);    
    var rotation=gageMath.getRandom(-360,360);
    var size=gageMath.getRandom(10,20);
    var mouseX=e.pageX;
    var mouseY=e.pageY;    
    
    decal.css({
      left:mouseX,
      top:mouseY,
      transform:`translateX(-50%) translateY(-50%) rotate(${rotation}deg)`,
      width:`${size}px`,
      height:`${size}px`    
    })
    $('.Home').append(decal);
  }  

  // Shooting flash
  flash() {
    var flash=$('<div class="flash"></div>');
    $('.Home').append(flash);
    flash.animate({
      opacity:0,
    },250, function() {
      flash.remove();
    });    
  }

  // Generate blood splatters
  splat() {
    var splatters=[
      require('../../../images/splatters/1.png'),
      require('../../../images/splatters/2.png'),
      require('../../../images/splatters/3.png'),
      require('../../../images/splatters/4.png')
    ]
    var amount=gageMath.getRandom(2,4);

    for(var i=0;i<amount;i++) {
      var imageIndex=Math.floor(gageMath.getRandom(0,splatters.length-1));
      var size=gageMath.getRandom(75,225);      
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
      $('.Home').append(splat);
    }
  }


  render() {
    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="Home" && this.props.currentPage!=='') {
      return false;
    }

    return (
      <div className="Home page"> 

        {/* Logo */}
        <Logo />

        {/* Navigation Menu */}
        <Nav pages={this.props.pages} />
                      
      </div>    
    );    
  }
}

export default Home;
