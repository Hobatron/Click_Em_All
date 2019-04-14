/*
Improvments I'd like to make:
Edit scoreboard image to not repeat,
larger scoreboard and larger resolutions:
	variable line hight?
*/

import React, {
	Component
} from 'react';
import './cards.css'
import ScoreBoard from './ScoreBoard';


class Card extends Component {

	state = {
		imgFile: {
			dir: 'imgs/',
			ext: '.jpg',
			names: [
				'arya', 'bran', 'bronn',
				'cersei', 'daenerys', 'hound',
				'jaime', 'jon', 'samwell',
				'sansa', 'tyrion', 'varys'
			],
		},
		tracker: {
			char: [
				'arya', 'bran', 'bronn',
				'cersei', 'daenerys', 'hound',
				'jaime', 'jon', 'samwell',
				'sansa', 'tyrion', 'varys'
			],
			isClicked: [false, false, false, false, false, false, false, false, false, false, false, false],
		},
		score: 0,
		topScore: 0,
		guess: 'Click an image to begin!',
		shake: false,
	};

	componentDidMount() {
		this.setState({
			[this.state.imgFile.names]: this.randomizer(this.state.imgFile.names)
		})
	}

	randomizer = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		};
	};

	lost = (clickedArray) => {
		console.log('get a life')
		for (let i = 0; i < clickedArray.length; i++) {
			clickedArray[i] = false;
		};
		this.setState({
			[this.state.imgFile.names]: this.randomizer(this.state.imgFile.names),
			[this.state.tracker.isClicked]: clickedArray,
			score: 0,
			guess: 'incorrect',
			shake: 'shake'
		});
	};

	handleClick = (event) => {
		const state = this.state;
		event.preventDefault()
		const clickedArray = state.tracker.isClicked;
		const indexOfClick = state.tracker.char.indexOf(event.target.getAttribute('alt'))
		if (clickedArray[indexOfClick]) {
			this.lost(clickedArray);
		} else {
			const updatedArray = clickedArray[indexOfClick] = true;
			let updatedTopScore = (state.score === state.topScore) ? state.topScore + 1 : state.topScore;
			console.log(updatedTopScore)
			this.setState({
				[state.tracker.isClicked]: updatedArray,
				[state.imgFile.names]: this.randomizer(state.imgFile.names),
				topScore: updatedTopScore,
				score: state.score + 1,
				guess: 'correct',
				shake: false,
			})
		}

	}

	render() {

		return (
			<div className='wrapper'>
				<div className={`cardContainer ${this.state.shake}`}>
					{this.state.imgFile.names.map(name => (
						<img className='card' onClick={this.handleClick} alt={name} key={name} src={this.state.imgFile.dir + name + this.state.imgFile.ext} />
					))}
				</div>
				<ScoreBoard score={this.state.score} topscore={this.state.topScore} guess={this.state.guess} />

			</div>

		);
	}
};
export default Card