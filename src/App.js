import React, { Component } from 'react';
import WebFont from 'webfontloader';
import './styles/style.scss';

// import Navigation from './components/Navigation';
import Section1 from './layouts/Section1';
import Section2 from './layouts/Section2';
import Section3 from './layouts/Section3';
import Section4 from './layouts/Section4';
import Section5 from './layouts/Section5';
import Loading from './layouts/Loading';

const config = {
	google: {
		families: [ 'Baloo 2:500,600', 'Roboto Slate:400' ]
	},
	classes: false
};

class App extends Component {
	state = {
		fontsLoaded: false
	};

	componentDidMount = () => {
		WebFont.load({...config, active: () => this.setState({ fontsLoaded: true })})
	}

	render() {
		return (
				<div className="App">
					{this.state.fontsLoaded ? (
						<div>
							<Section1 />
							<Section4 />
							<Section2 />
							<Section3 />
							<Section5 />
						</div>
					) : (
						<Loading />
					)}
				</div>
		);
	}
}

export default App;

// "proxy": "http://localhost:4000",
