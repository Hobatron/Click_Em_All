import React, {
	Component
} from 'react';
import './scoreboard.css';

class ScoreBoard extends Component {

	render() {
		return (
			<div className='score-board'>
				<div className='split'>Click, or die.</div>
				<div className={`split ${this.props.guess}`}>{this.props.guess}!</div>
				<div className='split'>Score: {this.props.score} | Top Score: {this.props.topscore}</div>
			</div>
		);
	}

};
export default ScoreBoard;