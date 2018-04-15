import React, { Component } from 'react';
import './Mycheckbox.css';
class Mycheckbox extends Component {
  render() {
        return (
          <div className="terms-checkbox">
              <div className="input-wrapper">
                <input type="checkbox" id="terms"/>
                <span className="label-for-terms">I have read Terms & conditions.</span>
              </div>
          </div>
        );
      }
    }
export default Mycheckbox;
