import React, { Component } from 'react';
import '../../../styles/css/About/About.css';
import Header from './Header';
import photo from '../../../images/tron/1.png';


class About extends Component {
  render() {

    // Don't render if this page isn't
    // the current one.
    if (this.props.currentPage!=="About") {
      return false;
    }

    return (
      <div className="About">         

        {/* Page Header */}
        <Header />

        {/* Content */}
        <div className='content'>

          <div className='background-image' />

          <div className='desc'>
            I started Killstreak to help create a platform
            for underground artists such as myself to be
            heard and have a voice.<br />
            <br />                       
            We are an independently owned brand based out
            of the pacific northwest providing a versatile
            set of products.<br />
            <br />
            By incorporating every day life into my work,
            I try to focus on capturing the smaller things
            in life that people tend to pass up by bringing
            them into the bigger picture.
          </div>

        </div>

      </div>
    );
  }
}

export default About;
