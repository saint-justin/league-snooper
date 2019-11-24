import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';



class Card extends Component {
 render(){
  return (
    // NOTE: Default art size is 308x560
    <div className="card-wrapper">
			<img className="card-img" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"></img>
    </div>
  )
 } 
};

export default Card;