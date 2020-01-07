import React, { Component } from 'react';

// Master 2 and 3 icons
import mastery2 from '../../assets/mastery_2.png';
import mastery3 from '../../assets/mastery_3.png';

// Class 
class Card extends Component {
	constructor(props){
		super(props);

		this.state = {
			splashLink: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.formatChampName(this.props.champName)}_0.jpg`,
			masteryLink: this.setMastery(this.props.masteryLevel),
			champName: this.props.champName,
			experiencePercent:{},
			masteryExp: {
				current: this.props.champPoints,
				tillNext: this.props.pointsToNext,
			}
    }
    
    this.checkMasteryMax();
  }

  // Returns out a JSX image coppntaining a formatted link to the mastery image to be used at any given mastery rank
  setMastery = (_masteryLevel) => {
    _masteryLevel = parseInt(_masteryLevel);
    let masteryLink = "";
    switch(_masteryLevel){
      case 1:
        return <></>;
      case 2:
        masteryLink = mastery2;
        break;
      case 3:
        masteryLink = mastery3;
        break;
      default:
        masteryLink = `http://raw.communitydragon.org/latest/game/assets/ux/mastery/mastery_icon_${_masteryLevel}.png`;						
    }		

    // Return out as an JSX image
    return <img className="mastery-img" src={masteryLink} alt="Mastery"></img>;
  }

  // Formats a given champion name to work with DDRAGON naming conventions for static image pulls
  formatChampName = (_string) => {
		const edgeCaseNames = ['VelKos', 'ChoGath', 'KaiSa', 'KhaZix', 'LeBlanc'];
    let replacement = _string.replace(/'/, '').replace(/ /g, '').replace('&', '').replace('.', '');

    // Edge cases for community dragon asset link validation
    if (edgeCaseNames.indexOf(replacement) > -1)
      return replacement.charAt(0).toUpperCase() + replacement.toLowerCase().slice(1);
    else if (replacement === "NunuWillump")
      return "Nunu";
    else if (replacement === "Wukong")
      return "MonkeyKing";
    else
      return replacement;
  }
  
  // Checks of the mastery on this card has maxed out experience for this level and updates the level bar accordingly
  checkMasteryMax = () => {
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