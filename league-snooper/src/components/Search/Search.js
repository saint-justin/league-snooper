import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CallRGAPI } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//const https = require('../../reducers/Caller');
//let base_url = `https://urs4qc0abj.execute-api.us-east-2.amazonaws.com/rgapi/summoner`;
//let server = `na1`;
//let summoner = `dyrus`;
//console.log(url);


class Search extends Component {
  render(){
    return (
      <>
        <form className="search"> 
          <div className="dropdown">
            <button className="dropdown-btn">NA1</button>
            <div className="dropdown-content">
              <button href="/">NA1</button>
              <button href="/">EU1</button>
              <button href="/">EU2</button>
            </div>
          </div>
          <input type="text" name="summoner-name"></input>
          <button href="/"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </>
    )
  } 
};

export default Search;