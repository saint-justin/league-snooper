import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

class Card extends Component {
	constructor(props){
		super(props);

		this.state = {
			splashLink: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg",					// Dimensions: 308x560 rect
			masteryLink: "http://raw.communitydragon.org/latest/game/assets/ux/mastery/mastery_icon_7.png", // Dimensions: 128x128 sq
			champName: "Aatrox",
			experiencePercent:{},
			masteryExp: {
				current: 50,
				total: 200,
				percent: 0
			}
		}

		this.state.masteryExp.percent = this.calcMasteryPercent();

		this.state.experiencePercent = {
			backgroundColor: 'red',
			width: this.calcMasteryPercent()*100
		}
	}

	calcMasteryPercent(){
		return this.state.masteryExp.current / this.state.masteryExp.total;
	}

 render(){
  return (
    // NOTE: Default art size is 308x560
    <div className="card-wrapper">
			<img className="splash-img" src={this.state.splashLink}></img>
			<img className="mastery-img" src={this.state.masteryLink}></img>
			<div className="mastery-stats">
				<h2 className="champ-name">{this.state.champName}</h2>
				<div className="mastery-progress">
					<div className="mastery-xp-complete" style={this.state.experiencePercent}>{this.state.masteryExp.current}</div>
				</div>
			</div>
    </div>
  )
 } 
};

export default Card;