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

const allRegions = ["NA1", "BR1", "EUN1", "EUW1", "JP1", "KR", "LA1", "LA2", "OC1", "TR1", "RU"];

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      region: 'NA1',
      summoner: ''
    }

    this.handleTextUpdate = this.handleTextUpdate.bind(this);
    this.handleRegionUpdate = this.handleRegionUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles updates to the region sectoin
  handleRegionUpdate(event)
  {
    this.setState({region: event.target.value})
  }

  // Handles text being updated on the input field
  handleTextUpdate(event){
    this.setState({summoner: event.target.value});
  }

  // Handles the submit button being pressed firing off api requests
  handleSubmit(event){
    useDispatch(CallRGAPI(this.state.region, this.state.summoner));
  }

  // Generates <option> jsx syntax for each region passed in and returns the set
  generateRegions(_arr){
    let regionJSX = _arr.map((region) => {
      return <option href="/" key={region} value={region}>{region}</option>
    })

    return <>{regionJSX}</>
  }

  render(){
    return (
      <>
        <form className="search"> 
          <select className="search-core search-dropdown" 
            name="region" 
            onChange={this.handleRegionUpdate}
          >
            {this.generateRegions(allRegions)}
          </select>
          <input 
            type="text" 
            name="summoner-name" 
            className="search-core search-input-box" 
            placeholder="Summoner Name"
            value={this.state.value}
            onChange={this.handleTextUpdate}
          ></input>
          <button 
            href="/" className="search-core search-button" 
            onClick={this.handleSubmit}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </>
    )
  } 
};

export default Search;