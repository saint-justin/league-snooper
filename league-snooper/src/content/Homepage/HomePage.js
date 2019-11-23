import React, { Component } from 'react';
import Search from '../../components/Search';
import Logo from '../../assets/title.png';

class HomePage extends Component {


  render(){
    return (
      <div className="page-wrapper">
        <img src={Logo} id="logo"></img>
        <div className="page-content">
          <Search />
          {/* Put in the gallery of all different assets here */}
        </div>
      </div>
    )
  }
};

export default HomePage;