import React, { Component } from 'react';
import '../../../../styles/css/Home/Nav.css';
import Pages from '../../Pages';

import Item from './Item';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        {
          Pages.map((page,index) => {
            if (index!==0) {
              return (
                <Item
                  key={index}
                  index={index}

                  page={page}
                />
              )
            }
          })
        }
      </div>
    );
  }
}

export default Nav;
