import React, { Component } from 'react';
import MyHeader from '../MyHeader/MyHeader';
import MyFooter from '../MyFooter/MyFooter';
import MyFormContent from '../MyFormContent/MyFormContent';
import './ApplicationForm.css';

class ApplicationForm extends Component{
  render(){
      return (
        <div className="bdy">
          <MyHeader/>
          <MyFormContent/>
          <MyFooter/>
        </div>
    );
  }
}
export default ApplicationForm;
