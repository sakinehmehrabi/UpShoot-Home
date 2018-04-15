import React, { Component } from 'react';
import './MyContent.css';
import MyDropDown from '../MyDropDown/MyDropDown';
import MySearch from '../MySearch/MySearch';
import MainContent from '../MainContent/MainContent';
import Mycheckbox from '../Mycheckbox/Mycheckbox';
class MyContent extends Component {
  render() {
    return (
    <div>
      <MainContent/>
      <div className="my-form">
        <MySearch/>
        <div className="dropdown">
              <MyDropDown options={[1,2,3,4]}/>
              <MyDropDown options={['choice 1','choice 2']}/>
              <MyDropDown options={[1,2]}/>
              <MyDropDown options={[1]}/>
              <MyDropDown options={[1]}/>
              <input type="text" className="postcode" placeholder="postcode"/>
        </div>

      </div>
      <Mycheckbox/>
    </div>
    );
  }
}

export default MyContent;
