import React, {
	Component
} from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Cards />
				<Footer />
			</div>
		);
	}
}

export default App;