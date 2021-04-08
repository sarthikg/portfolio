import React, { Component } from 'react';
import Marquee from 'react-marquee-slider';

class Carousel extends Component {
	state = {
		count: 9,
		list0: [ 0 ],
		list1: [ 1 ],
		list2: [ 2 ],
		list3: [ 3 ],
		list4: [ 3 ],
		list5: [ 3 ],
		list6: [ 3 ],
		list7: [ 3 ],
		list8: [ 3 ],
	};

	randomList = (temp_list) => {
		for (let i = temp_list.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ temp_list[i], temp_list[j] ] = [ temp_list[j], temp_list[i] ];
		}
		return temp_list;
	};

	generateLists = () => {
		let cloned_list;
		for (let i = 0; i < this.state.count; i++) {
			cloned_list = this.props.skills;
			cloned_list = this.randomList(cloned_list);
			this.setState({
				[`list${i}`]: [ ...cloned_list ]
			});
		}
	};

	componentDidMount = () => {
		this.generateLists();
	};

	render() {
		return (
			<div className="Component-Carousel">
				<div className="Component-Carousel-Overlay" />
				<div className="Component-Carousel-Text">
					{[ ...Array(this.state.count) ].map((i, j) => (
						<Marquee velocity={Math.floor((Math.random()*(50-40+1)+40))} resetAfterTries={200}>
							{this.state[`list${j}`].map((skill) => (
								<div className={`Component-Carousel-Item ${skill.level}`}>{skill.name}</div>
							))}
						</Marquee>
					))}
					{[ ...Array(this.state.count) ].map((i, j) => (
						<Marquee velocity={Math.floor((Math.random()*(50-40+1)+40))} resetAfterTries={200}>
							{this.state[`list${j}`].map((skill) => (
								<div className={`Component-Carousel-Item ${skill.level}`}>{skill.name}</div>
							))}
						</Marquee>
					))}
					{[ ...Array(this.state.count) ].map((i, j) => (
						<Marquee velocity={Math.floor((Math.random()*(50-40+1)+40))} resetAfterTries={200}>
							{this.state[`list${j}`].map((skill) => (
								<div className={`Component-Carousel-Item ${skill.level}`}>{skill.name}</div>
							))}
						</Marquee>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
