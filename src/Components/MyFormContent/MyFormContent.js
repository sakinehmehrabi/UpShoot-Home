import React, { Component } from 'react';
import {Circle} from 'rc-progress';
import './MyFormContent.css';

class MyFormContent extends Component{
  constructor() {
    super();
    this.state = { value: 0 };
    this.changeCircle=this.changeCircle.bind(this) ;
  } 
  changeCircle (){
    console.log( this.state.value);
    var a= this.state.value;
    a+=11;
    this.setState({
      value: a
    });
        console.log( this.state.value);
  }
  render(){
      return (
        <div>

          <ul>
            <li>        
              <Circle percent={this.state.value} strokeWidth="8" strokeColor="#939393" className="circl"/>
            </li>
            <li><input type="text" placeholder="Username *" onBlur={this.changeCircle}/> </li>
            <li><input type="text" placeholder="Email Address *" onBlur={this.changeCircle} /> </li>
            <li><input type="text" placeholder="Password *" onBlur={this.changeCircle}/> </li>
            <li><input type="text" placeholder="Firstname" onBlur={this.changeCircle}/> </li>
            <li><input type="text" placeholder="Lastname" onBlur={this.changeCircle}/> </li>
            <li>
              <select onBlur={this.changeCircle}>
                  <option value="Gender">Select Your Gender *</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
            </li>
            <li><textarea placeholder="Bio" onBlur={this.changeCircle}></textarea></li>
            <li><input type="text" placeholder="Facebook Profile URL" onBlur={this.changeCircle}/> </li>
            <li><input type="text" placeholder="LinkedIn Profile URL" onBlur={this.changeCircle}/> </li>
            <li><input type="submit" value="Register" onBlur={this.changeCircle}/></li>
            </ul>
        </div>
    );
  }
}
export default MyFormContent;
