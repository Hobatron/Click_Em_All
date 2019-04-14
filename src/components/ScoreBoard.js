import React from 'react';
import './scoreboard.css';
import Background from './header-bg.jpg';

function ScoreBoard(props) {
	return (
		<div className='score-board'>
			<div className='split'>Click, or die.</div>
			<div className='split'>You gussed correctly!</div>
			<div className='split'>Score: 2 | Top Score: 5</div>
		</div>
	);
};
export default ScoreBoard;