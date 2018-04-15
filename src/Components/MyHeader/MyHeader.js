import React, { Component } from 'react';
import info from '../../images/info.svg';
import upshoot_logo from '../../images/upshoot_logo.svg';
import './MyHeader.css';
class MyHeader extends Component {
  render() {
    return (
      <div className="navbar-brand">
         <a href="/" className="logo">
            <img src={upshoot_logo}  />
          </a>
        <a href="#" className="info-logo">
               <span>
                  <img src={info} />
               </span>
        </a>
      </div>
    );
  }
}

export default MyHeader;
