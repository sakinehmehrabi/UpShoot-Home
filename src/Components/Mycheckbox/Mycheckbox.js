import React, { Component } from 'react';
import './Mycheckbox.css';
class Mycheckbox extends Component {
  render() {
        return (
          <div className="terms-checkbox">
            <input type="checkbox" id="terms"/>
            <lable for="terms" className="label-for-terms">I have read Terms & conditions.</lable>
          </div>
        );
      }
    }
export default Mycheckbox;
