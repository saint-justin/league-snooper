import React, { Component } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ChampIDs from './champions-default.json';

const allRegions = ["na1", "nr1", "eun1", "euw1", "jp1", "kr", "la1", "la2", "oc1", "tr1", "ru"];

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      region: 'na1',
      summoner: '',
      base_url: `https://urs4qc0abj.execute-api.us-east-2.amazonaws.com/rgapi/`,
      summonerdata: {},
      calldata: {},
      champ_ids: ChampIDs,
      cards: [],
      errorMessage: ""
    }
    // Bind all action handlers
    this.handleTextUpdate = this.handleTextUpdate.bind(this);
    this.handleRegionUpdate = this.handleRegionUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles updates to the region sectoin
  handleRegionUpdate(event){
    this.setState({region: event.target.value})
  }

  // Handles text being updated on the input field
  handleTextUpdate(event){
    this.setState({summoner: event.target.value});
  }

  handleBadRequest(event){
    this.setState({errorMessage: <p className="error-msg">Error: Invalid Summoner Name. Please double-check spelling and server.</p>})
  }

  // Handles the submit button being pressed and firing off api requests
  handleSubmit(event){
    event.preventDefault();

    // Make the URL then call and get info from it
    let fullURL = `${this.state.base_url}summoner/${this.state.region}/${this.state.summoner}`;
    fetch(fullURL)
    .then(response => response.json())
    .then(data => this.setState({summonerdata: data}))
    .then(() => {
      let masteryURL = `${this.state.base_url}mastery/${this.state.region}/${this.state.summonerdata.id}`;
      fetch(masteryURL)
      .then(response => response.json())
      .then(data => this.setState({calldata: data}))
  
        // Once we have mastery info set into the state, make and populate the cards with all that information
      .then(() => {
        try {
          let newCardSet = [];
          // Basic pagination but check that the looked-up user has at least this many champs owned/played
          let max = 16;
          if (this.state.calldata.length < max)
            max=this.state.calldata.length;
          for(let i=0; i<max; i++){
            let champNumber = this.state.calldata[i].championId;
            newCardSet.push(
            <Card
              champName={this.state.champ_ids[champNumber]}
              champPoints={this.state.calldata[i].championPoints}
              pointsToNext={this.state.calldata[i].championPointsUntilNextLevel}
              masteryLevel={this.state.calldata[i].championLevel}
              key={this.state.champ_ids[champNumber]}
            />)
          }

          // Update the state of the cards and clear any existing error messages
          this.setState({cards: newCardSet})
          this.setState({errorMessage: ""})

        } catch (error) {
          console.log("ERROR: " + error);
          this.handleBadRequest();
        }
      })
    })
  }

  // Generates <option> jsx syntax for each region passed in and returns the set
  generateRegions(_arr){
    let regionJSX = _arr.map((region) => {
      return <option href="/" key={region} value={region}>{region.toUpperCase()}</option>
    })

    return <>{regionJSX}</>
  }

  render(){
    return (
      <>
        {this.state.errorMessage}
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
        <div id="info-cards">
          {this.state.cards}
        </div>
      </>
    )
  } 
};

export default Search;