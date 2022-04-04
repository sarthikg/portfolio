import React, { Component } from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';
import { educationDetails } from '../constants/constants';

class Section4 extends Component {
	render() {
		return (
			<Section device={this.props.device}>
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
							{educationDetails.map((education) => <Card details={education} />)}
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section4;
