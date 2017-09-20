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

    setTimeout(function() {
      this.createDrop();
    }.bind(this),500)
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
          this.state.drops.map((drop,index) => {
            return (
              <Drop
                key={index}
                index={index}

                x={drop.x}
              />
            )
          })
        }
      </div>
    );
  }
}

export default DropHandler;
