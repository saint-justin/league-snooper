import React, { Component } from 'react';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Logo from '../../assets/title.png';

class HomePage extends Component {


  render(){
    return (
      <div className="page-wrapper">
        <img src={Logo} id="logo"></img>
        <Search />
        <div className="page-content">
          <div id="info-cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    )
  }
};

export default HomePage;