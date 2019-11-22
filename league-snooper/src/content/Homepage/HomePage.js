import React, { Component } from 'react';
//import API_Key from './key.json';

const userAction = async () => {
  const response = await fetch('', {
    method: 'GET',
    //body: myBody, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
}

class HomePage extends Component {
  render(){
    return (
      <>
        <h1>
          Goodybye App.js!
        </h1>
        <button onClick={userAction}>Button beep boop</button>
      </>
    )
  }
};

export default HomePage;