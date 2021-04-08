import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';
// import vhCheck from 'vh-check';
import './styles/style.scss';

// import Navigation from './components/Navigation';
import Section1 from './layouts/Section1';
import Section2 from './layouts/Section2';
import Section3 from './layouts/Section3';
import Section4 from './layouts/Section4';
import Section5 from './layouts/Section5';
import Loading from './layouts/Loading';

import dp from './assets/Photo.png';

const baloo_2_500 = new FontFaceObserver('Baloo 2', {
	weight: 500
});

const baloo_2_600 = new FontFaceObserver('Baloo 2', {
	weight: 600
});

const roboto_slab_400 = new FontFaceObserver('Roboto Slab', {
	weight: 400
});

class App extends Component {

	state = {
		fontsLoaded: false,
		profileLoaded: false,
		iconsLoaded: false,
	};

	// checkProfile = () => {
	// 	let dp = new Image()
	// 	dp.src = 'http://localhost:4000/api/profile-pic'
	// 	dp.onload = () => {
	// 		this.setState({profileLoaded: true})
	// 	}
	// }

	checkIcons = () => {
		this.setState({iconsLoaded: true})
	}

	checkFonts = async () => {
		await Promise.all([ baloo_2_500.load(), baloo_2_600.load(), roboto_slab_400.load()]);
	}

	componentDidMount = async () => {
		let startTime = new Date();
		await this.checkFonts();
		let endTime = new Date();
		let timeDiff = endTime.getTime() - startTime.getTime();
		if (timeDiff < 4655) {
			setTimeout(() => this.setState({
				fontsLoaded: true,
				profileLoaded: true
			}), 4655-timeDiff)
		} else {
			this.setState({
				fontsLoaded: true,
				profileLoaded: true
			})
		}
		console.log(timeDiff)
		// this.checkProfile();
		// this.setState({ fontsLoaded: true });
		// let vh = window.innerHeight * 0.01;
		// document.documentElement.style.setProperty('--vh', `${vh}px`);
		// window.addEventListener('resize', () => {
		// 	let vh = window.innerHeight * 0.01;
		// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
		// });
	};

	render() {
		return (
			<div className="App" id="container" ref={this.container}>
				{this.state.fontsLoaded && this.state.profileLoaded ? (
					<React.Fragment>
						<Section1 profilePic={this.state.profilePic}/>
						<Section4 />
						<Section5 />
						<Section5 />
					</React.Fragment>
				) : (
					<Loading />
				)}
			</div>
		);
	}
}

export default App;
