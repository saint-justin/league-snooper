import React, { Component } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ChampIDs from './champions-default.json';
import Parent from '../../content/Homepage'

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
    }
    // Bind all action handlers
    this.handleTextUpdate = this.handleTextUpdate.bind(this);
    this.handleRegionUpdate = this.handleRegionUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateWrapper = this.updateWrapper.bind(this);
  }

  // Update the parent wrapper's bg height
  updateWrapper = () => {
    this.props.updateWrapper()
  }

  // Handles updates to the region sectoin
  handleRegionUpdate(event){
    this.setState({region: event.target.value})
  }

  // Handles text being updated on the input field
  handleTextUpdate(event){
    this.setState({summoner: event.target.value});
  }

  // Handles the submit button being pressed and firing off api requests
  handleSubmit(event){
    event.preventDefault();

    // Make the URL then call and get info from it
    let fullURL = `${this.state.base_url}summoner/${this.state.region}/${this.state.summoner}`;
    fetch(fullURL)
    .then(response => response.json())
    .then(data => this.setState({summonerdata: data}))

    // Once we have the player info, use that to get their mastery info
    .then(() => {
      let masteryURL = `${this.state.base_url}mastery/${this.state.region}/${this.state.summonerdata.id}`;
      console.log("MASTERY URL: " + masteryURL);
      fetch(masteryURL)
      .then(response => response.json())
      .then(data => this.setState({calldata: data}))

      // Once we have mastery info set into the state, make and populate the cards with all that information
      .then(() => {
        let newCardSet = [];
        for(let i=0; i<8; i++){
          let champNumber = this.state.calldata[i].championId;
          newCardSet.push(<Card
            champName={this.state.champ_ids[champNumber]}
            champPoints={this.state.calldata[i].championPoints}
            pointsToNext={this.state.calldata[i].championPointsUntilNextLevel}
            masteryLevel={this.state.calldata[i].championLevel}
          />)
        }
        // Set the card list into the cards prop
        this.setState({cards: newCardSet})
      })
    })

    this.state.updateParentStyle();
  }

  // Generates <option> jsx syntax for each region passed in and returns the set
  generateRegions(_arr){
    let regionJSX = _arr.map((region) => {
      return <option href="/" key={region} value={region}>{region.toUpperCase()}</option>
    })

    return <>{regionJSX}</>
  }

  // Generates all <Card /> elements that go into the hotloaded cards section
  generateCards(){

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
        <div id="info-cards">
          {this.state.cards}
        </div>
      </>
    )
  } 
};

export default Search;