import React, { Component } from 'react';
import './MyDropDown.css';

class MyDropDown extends Component {
  render() {
    return (
              <select>
               {
                  this.props.options.map(i => {
                    return <option value="{i}">{i}</option>
                  })
                }
              </select>
          )
        }
      }
export default MyDropDown;
