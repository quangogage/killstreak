import React, { Component } from 'react';
import Drop from './Drop';
import '../../../../css/Home/Drops.css';

class DropHandler extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      drops:[]
    }

    this.createDrop=this.createDrop.bind(this);
  }

  // Make a drop
  createDrop() {
    var dropsCopy=this.state.drops.slice();
    dropsCopy[dropsCopy.length]={
      x:300
    }

    this.setState({drops:dropsCopy});
  }


  render() {
    return (
      <div className="DropHandler"> 
        {
          this.state.drops
        }
      </div>
    );
  }
}

export default DropHandler;
