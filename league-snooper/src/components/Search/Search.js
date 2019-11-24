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
          <select className="search-core search-dropdown" name="region">
            <option href="/" value="NA1">NA1</option>
            <option href="/" value="EU1">EU2</option>
            <option href="/" value="EU2">EU3</option>
          </select>
          <input type="text" name="summoner-name" className="search-core search-input-box"></input>
          <button href="/" className="search-core search-button"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </>
    )
  } 
};

export default Search;