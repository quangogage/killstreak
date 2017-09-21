import React, { Component } from 'react';
import Logo from './Logo';
import '../../../styles/css/Home/Home.css';
import bulletDecal from '../../../images/misc/decal.png';
import gageMath from '../../../gagelib/Math';
import $ from 'jquery';

import Nav from './Nav/Nav';


class Home extends Component {

  componentDidMount() {
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

    decal.css({
      left:e.pageX,
      top:e.pageY,
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

  render() {
    
    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="Home") {
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
