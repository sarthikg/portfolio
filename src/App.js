import React, { Component } from 'react';
import './styles/style.scss';

import Navigation from './components/Navigation';
import Section1 from './layouts/Section1'
import Section2 from './layouts/Section2'
import Section3 from './layouts/Section3'
import Section4 from './layouts/Section4'
import Section5 from './layouts/Section5'

class App extends Component {


	render() {
		return (
			<div className="App">
				<Navigation/>
				<Section1/>
				<Section4/>
				<Section2/>
				<Section3/>
				<Section5/>
			</div>
		);
	}
}

export default App;
