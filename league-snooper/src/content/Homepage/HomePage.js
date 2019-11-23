import React, { Component } from 'react';
const https = require('./Caller');

let base_url = `https://urs4qc0abj.execute-api.us-east-2.amazonaws.com/rgapi/summoner`;
let server = `na1`;
let summoner = `dyrus`;
//console.log(url);

class HomePage extends Component {
  constructor(props){
    super(props);

    https.makeCall(base_url, server, summoner);
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