import React, { Component } from 'react';
import Marquee from 'react-marquee-slider';

class Carousel extends Component {
	state = {
		count: 9,
		carousel_list: [],
		updated: false,
		width : null,
		height: null,
		lower: null,
		upper: null
	};

	randomList = (temp_list) => {
		for (let i = temp_list.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ temp_list[i], temp_list[j] ] = [ temp_list[j], temp_list[i] ];
		}
		return temp_list;
	};

	generateLists = (height) => {
		let rows, times
		let random_numbered_lists = []
		let numbered_list = [...Array(this.props.skills.length).keys()]
		if (this.props.device === 'mobile') {
			rows = 15
			times = 3
		} else if (this.props.device === 'desktop') {
			rows = Math.ceil(height/30)
			times = Math.ceil(rows/(5))
		}
		for (let i = 0; i < 5; i++) {
			let temp_list = [...this.randomList(numbered_list)]
			random_numbered_lists = random_numbered_lists.concat(Array(times).fill(temp_list))
		}
		random_numbered_lists = [...this.randomList(random_numbered_lists)].splice(0, rows)
		this.setState({carousel_list: random_numbered_lists})
	};

	updateDimensions = () => {
		this.setState({lower: (Math.floor(window.innerWidth/28.8) - 5), upper: (Math.floor(window.innerWidth/28.8) + 5)})
	}

	componentDidMount = () => {
		this.updateDimensions()
		this.generateLists((window.innerHeight - 64))
		window.addEventListener('resize', this.updateDimensions)
	};

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateDimensions)
	}

	render() {
		return (
			<div className="Component-Carousel" data-aos="fade-up" data-aos-duration={600}>
				<div className="Component-Carousel-Overlay" />
				<div className="Component-Carousel-Text">
					{this.state.carousel_list.map((sublist, i) => (
						<Marquee key={i}  velocity={Math.floor((Math.random()*(this.state.upper-this.state.lower+1)+this.state.lower))} resetAfterTries={200}>
							{sublist.map((j) => (
								<div key={`${i}-${j}`} className={`Component-Carousel-Item ${this.props.skills[j].level}`}>{this.props.skills[j].name}</div>
							))}
						</Marquee>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
