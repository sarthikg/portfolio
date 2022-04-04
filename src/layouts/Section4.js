import React, { Component } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';
import { educationDetails } from '../constants/constants';

class Section4 extends Component {
	render() {
		return (
				<div className="App__Section4">
					<div className="App__Section4__Education">
						{this.props.device === 'desktop' ? (
							<SubHeading title="Education" device={this.props.device} />
						) : (
							<Heading title="Education" device={this.props.device} />
						)}
						<div
							className="App-Section4__Education__List"
							data-aos="fade-up"
							data-aos-duration={600}
						>
							{educationDetails.map((education) => (
								<Card
									details={education}
									key={`${education.institute}-${education.position}`}
									device={this.props.device}
								/>
							))}
						</div>
					</div>
				</div>
		);
	}
}

export default Section4;
