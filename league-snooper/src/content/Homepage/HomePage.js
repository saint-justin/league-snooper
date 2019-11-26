import React, { Component } from 'react';
import Search from '../../components/Search';
import Logo from '../../assets/title.png';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //updateStyle: updateParentStyle,
      wrapperStyle: {
        height: `100vh`
      }
    }
  }

    // Updates bg size when the player uses the call function
  updateParentStyle = () => {
    this.setState({
      wrapperStyle: {
        height: `100%`
    } })
  }

  render(){
    return (
      <div className="page-wrapper" style={this.state.wrapperStyle}>
        <img src={Logo} id="logo" alt="Mastery Snooper Logo"></img>
        <Search />
        <div className="page-content">
        </div>
      </div>
    )
  }
};

export default HomePage;