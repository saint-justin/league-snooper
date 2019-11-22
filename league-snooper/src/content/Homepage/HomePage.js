import React, { Component } from 'react';
import API_Key from '../../../sensitive_info/key.json';
const https = require('./Caller');

let url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/saint%20sloth?api_key=${API_Key}`;
console.log(url);

class HomePage extends Component {
  constructor(props){
    super(props);
    https.makeCall(url);
  }

  render(){
    return (
      <>
        <h1>
          Goodybye App.js!
        </h1>
        <button>Button beep boop</button>
      </>
    )
  }
};

export default HomePage;