import React, { Component } from 'react';

class Card extends Component {
	constructor(props){
		super(props);

		this.state = {
			splashLink: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg",					// Dimensions: 308x560 rect
			masteryLink: "http://raw.communitydragon.org/latest/game/assets/ux/mastery/mastery_icon_7.png", // Dimensions: 128x128 sq
			champName: this.props.champName,
			experiencePercent:{},
			masteryExp: {
				current: 50,
				total: 200,
				percent: 0
			}
		}

		let masteryPercent = 100 * (this.state.masteryExp.current / this.state.masteryExp.total);
		this.state.experiencePercent = {
			backgroundColor: '#3FD2D1',
			width: `${masteryPercent}%`
		}
	}

 render(){
  return (
    // NOTE: Default art size is 308x560
    <div className="card-wrapper">
			<img className="splash-img" src={this.state.splashLink} alt={`${this.state.champName} Splash`}></img>
			<img className="mastery-img" src={this.state.masteryLink} alt="Mastery"></img>
			<div className="mastery-stats">
				<h2 className="champ-name">{this.state.champName}</h2>
				<h3 className="mastery-progress-text">
					{this.state.masteryExp.current} / {this.state.masteryExp.total} pts.
				</h3>
				<div className="mastery-progress">
					<div className="mastery-xp-complete" style={this.state.experiencePercent}></div>
				</div>
			</div>
    </div>
  )
 } 
};

export default Card;