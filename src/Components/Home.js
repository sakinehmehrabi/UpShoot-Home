import React, { Component } from 'react';
import MyHeader from './MyHeader/MyHeader';
import MyContent from './MyContent/MyContent';
import MyFooter from './MyFooter/MyFooter';
import './Home.css'
class Home extends Component {
  render() {
    return (
      <div className="bdy">
        <MyHeader/>
        <div className="container">
            <MyContent/>
        </div>
        <MyFooter/>
      </div>
    );
  }
}
export default Home;
