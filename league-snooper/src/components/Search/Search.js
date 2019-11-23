import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//const https = require('../../reducers/Caller');
//let base_url = `https://urs4qc0abj.execute-api.us-east-2.amazonaws.com/rgapi/summoner`;
//let server = `na1`;
//let summoner = `dyrus`;
//console.log(url);

class Search extends Component {
  render(){
    return (
      <>
        <form> 
          <div className="dropdown">
            <button className="dropdown-btn">Dropdown</button>
            <div className="dropdown-content">
              <a href="/">NA1</a>
              <a href="/">EU1</a>
              <a href="/">EU2</a>
            </div>
          </div>
          <input type="text" name="summoner-name"></input>
        </form>
      </>
    )
  }
};

export default Search;