import React, { Component, Suspense } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import AOS from 'aos';

import './styles/style.scss';
import 'aos/dist/aos.css';

import Loading from './layouts/Loading';

const MainPage = React.lazy(() => {
	return Promise.all([import('./layouts/MainPage'), new Promise(resolve => setTimeout(resolve, 1850))])
	.then(([moduleExports]) => moduleExports);
})

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
		profileLoaded: true,
		device: null
	};

	handleProfileLoad = () => {
		this.setState({profileLoaded: true})
	}

	checkFonts = async () => {
		await Promise.all([ baloo_2_500.load(null, 10000), baloo_2_600.load(null, 10000), roboto_slab_400.load(null, 10000)]);
		this.setState({fontsLoaded: true})
	}

	checkDevice = () => {
		const width = window.innerWidth
		if (width >= 300 && width < 1000) {
			this.setState({device: 'mobile'})
		} else if (width >= 1000) {
			this.setState({device: 'desktop'})
		}
	}

	updateDevice = () => {
		const width = window.innerWidth
		if (this.state.device === 'mobile' && width >= 1000) {
			this.setState({device: 'desktop' })
		} else if (this.state.device === 'desktop' && width < 1000) {
			this.setState({device: 'mobile'})
		}
	}

	componentDidMount = async () => {
		await this.checkFonts();
		AOS.init()
		this.checkDevice()
		window.addEventListener('resize', this.updateDevice);
	};

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateDevice);
	}

	render() {
		return (
			<div className="App" id="container" ref={this.container}>
				<Suspense fallback={<Loading handleProfileLoad={this.handleProfileLoad} device={this.state.device}/>}>
					<MainPage device={this.state.device}/>
				</Suspense>
			</div>
		);
	}
}

export default App;
