import React, { Component } from 'react';
import Heading from '../components/Heading';
import Carousel from '../components/Carousel';
import { journeyContent, skillsList } from '../constants/constants';

class Section2 extends Component {
	render() {
		return (
			<div className="App__Section2">
				<div className="App__Section2__Description">
					<div className="App__Section2__Description__Heading">
						<Heading title="Skills" device={this.props.device} />
					</div>
					<div
						className="App__Section2__Description__Content"
						data-aos="fade-up"
						data-aos-duration={600}
					>
						{journeyContent[0]}
						<br />
						<br />
						{journeyContent[1]}
						<br />
						<br />
						{journeyContent[2]}
					</div>
				</div>
				<Carousel skills={skillsList} device={this.props.device} />
			</div>
		);
	}
}

export default Section2;
