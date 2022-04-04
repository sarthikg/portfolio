import React, { Component } from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';
import { experienceDetails } from '../constants/constants';

class Section3 extends Component {
	render() {
		return (
			<Section device={this.props.device}>
				<div className="App__Section3">
					<div className="App__Section3__Heading" />
					<div className="App__Section3__Experience">
						{this.props.device === 'desktop' ? (
							<SubHeading title="Experience" device={this.props.device} />
						) : (
							<Heading title="Experience" device={this.props.device} />
						)}

						<div
							className="App__Section3__Experience__List"
							data-aos="fade-up"
							data-aos-duration={600}
						>
							{experienceDetails.map((experience) => <Card details={experience} />)}
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section3;
