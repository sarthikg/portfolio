import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import AOS from 'aos';
// import vhCheck from 'vh-check';

import './styles/style.scss';
import 'aos/dist/aos.css';

import Section1 from './layouts/Section1';
import Section2 from './layouts/Section2';
import Section3 from './layouts/Section3';
import Section4 from './layouts/Section4';
import Section5 from './layouts/Section5';
import Loading from './layouts/Loading';


const baloo_2_500 = new FontFaceObserver('Baloo 2', {
	weight: 500
});

const baloo_2_600 = new FontFaceObserver('Baloo 2', {
	weight: 600
});

const roboto_slab_400 = new FontFaceObserver('Roboto Slab', {
	weight: 400
});

let startTime = null
let endTime = null

class App extends Component {

	state = {
		fontsLoaded: false,
		profileLoaded: true,
		greenSignal: false
	};

	handleProfileLoad = () => {
		this.setState({profileLoaded: true})
	}

	checkFonts = async () => {
		await Promise.all([ baloo_2_500.load(null, 10000), baloo_2_600.load(null, 10000), roboto_slab_400.load(null, 10000)]);
		this.setState({fontsLoaded: true})
	}

	componentDidMount = async () => {
		startTime = new Date();
		await this.checkFonts();
		AOS.init()
		// this.checkProfile();
		// this.setState({ fontsLoaded: true });
		// let vh = window.innerHeight * 0.01;
		// document.documentElement.style.setProperty('--vh', `${vh}px`);
		// window.addEventListener('resize', () => {
		// 	let vh = window.innerHeight * 0.01;
		// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
		// });
	};

	componentDidUpdate = () => {
		if(this.state.fontsLoaded && this.state.profileLoaded && !this.state.greenSignal) {
			endTime = new Date();
			let timeDiff = endTime.getTime() - startTime.getTime();
			if (timeDiff < 2975) {
				setTimeout(() => this.setState({
					greenSignal: true,
				}), 2975-timeDiff)
			} else {
				this.setState({
					greenSignal: true,
				})
			}
		}
	}

	render() {
		return (
			<div className="App" id="container" ref={this.container}>
				{this.state.greenSignal ? (
					<React.Fragment>
						<Section1 />
						<Section4 />
						<Section2 />
						<Section3 />
						<Section5 />
					</React.Fragment>
				) : (
					<Loading handleProfileLoad={this.handleProfileLoad}/>
				)}
			</div>
		);
	}
}

export default App;
