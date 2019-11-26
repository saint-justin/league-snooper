import React, { Component } from 'react';
import mastery1 from '../../assets/mastery_1.png';
import mastery2 from '../../assets/mastery_2.png';
import mastery3 from '../../assets/mastery_3.png';

class Card extends Component {
	constructor(props){
		super(props);

		/*
		PASSED INFO
		champName={this.state.champ_ids[champNumber]}
    champPoints={this.state.calldata[i].championPoints}
    pointsToNext={this.state.callData[i].championPointsUntilNextLevel}
    masteryLevel={this.state.calldata[i].championLevel}
		*/

		// Format champion names for urls by removing spaces and apastrophes then only making the first letter capitalized
		const formatChampName = (_string) => {
			let replacement = _string.replace(`'`, '').replace(' ', '').replace(' ', '').replace('&', '');

			// Weird edge cases
			if (replacement === "NunuWillump")
				return "Nunu";
			else if (replacement === "VelKoz")
				return "Velkoz";
			else if (replacement === "Wukong")
				return "MonkeyKing";
			else if (replacement === "ChoGath")
				return "Chogath";
			else if (replacement === "KaiSa")
				return "Kaisa";
			else if (replacement === "KhaZix")
				return "Khazix";
			else
				return replacement;
		}

		// Data dragon only has images for master 4-7 so we need to manually load hand-made iamges for 1, 2, or 3
		const setMastery = (_masteryLevel) => {
			_masteryLevel = parseInt(_masteryLevel);

			let masteryLink = "";
			switch(_masteryLevel){
				case 0:
					return <></>;
				case 1:
					masteryLink = mastery1;
					break;
				case 2:
					masteryLink = mastery2;
					break;
				case 3:
					masteryLink = mastery3;
					break;
				case 4:
				case 5:
				case 6:
				case 7:
						masteryLink = `http://raw.communitydragon.org/latest/game/assets/ux/mastery/mastery_icon_${_masteryLevel}.png`;
						break;
				default:
					console.log("ERROR: " + _masteryLevel);
						
			}		

			return <img className="mastery-img" src={masteryLink} alt="Mastery"></img>;
		}

		this.state = {
			splashLink: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${formatChampName(this.props.champName)}_0.jpg`,					// Dimensions: 308x560 rect
			masteryLink: setMastery(this.props.masteryLevel), // Dimensions: 128x128 sq
			champName: this.props.champName,
			experiencePercent:{},
			masteryExp: {
				current: this.props.champPoints,
				tillNext: this.props.pointsToNext,
			}
		}

		if (this.state.masteryExp.tillNext > 1)
		{
			let masteryPercent = 100 * (this.state.masteryExp.current / (this.state.masteryExp.current + this.state.masteryExp.tillNext));
			this.state.experiencePercent = {
				backgroundColor: '#3FD2D1',
				width: `${masteryPercent}%`
			}
		} else {
			this.state.experiencePercent = {
				backgroundColor: '#40DE3C',
				width: `100%`
			}
		}
	}

 render(){
  return (
    // NOTE: Default art size is 308x560
    <div className="card-wrapper" key={this.state.champName}>
			<img className="splash-img" src={this.state.splashLink} alt={`${this.state.champName} Splash`}></img>
			{this.state.masteryLink}
			<div className="mastery-stats">
				<h2 className="champ-name">{this.state.champName}</h2>
				<h3 className="mastery-progress-text">
					{this.state.masteryExp.current} pts.
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