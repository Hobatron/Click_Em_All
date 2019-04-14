import React, {
	Component
} from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import './components/reset.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Cards />
			</div>
		);
	}
}

export default App;