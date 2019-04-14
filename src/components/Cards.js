import React, {
	Component
} from 'react';
import './cards.css'

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

	lost = () => {
		console.log('get a life')
		this.state.tracker.isClicked.forEach((v) => {
			v = false;
		})
		this.setState({

		})
		this.setState({
			[this.state.imgFile.names]: this.randomizer(this.state.imgFile.names)
		})
	}

	handleClick = (event) => {
		const clickedArray = this.state.tracker.isClicked;
		if (clickedArray[this.state.tracker.char.indexOf(event.target.getAttribute('keydata'))]) {
			this.lost();
		} else {
			const updatedArray = clickedArray[[this.state.tracker.char.indexOf(event.target.getAttribute('keydata'))]] = true;
			this.setState({
				[this.state.tracker.isClicked]: updatedArray
			});
			this.setState({
				[this.state.imgFile.names]: this.randomizer(this.state.imgFile.names)
			})
		}

	}

	render() {
		return (
			<div className='wrapper'>
				<div className='cardContainer'>
					{this.state.imgFile.names.map(name => (
						<img className='card' onClick={this.handleClick} key={name} keydata={name} src={this.state.imgFile.dir + name + this.state.imgFile.ext} />
					))}
				</div>
			</div>

		);
	}
};
export default Card