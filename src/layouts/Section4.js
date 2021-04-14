import React, { Component } from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';

class Section4 extends Component {
	render() {
		return (
			<Section device={this.props.device}>
				<div className="App-Section4-Content">
					<div className="App-Section4-Content-Heading" />
					<div className="App-Section4-Content-Experience">
						{this.props.device === 'desktop' ? (
							<SubHeading title="Experience" device={this.props.device} />
						) : (
							<Heading title="Experience" device={this.props.device} />
						)}

						<div
							className="App-Section4-Content-Experience-List"
							data-aos="fade-up"
							data-aos-duration={600}
						>
							<Card
								position="Business Analyst Intern"
								institute="Collegedunia Web Pvt Ltd, Gurugram"
								start="Jan 2020"
								end="Jul 2020"
								duration="Jan 2020 - Jul 2020"
								device={this.props.device}
							/>
						</div>
					</div>
					<div className="App-Section4-Content-Education">
						{this.props.device === 'desktop' ? (
							<SubHeading title="Education" device={this.props.device} />
						) : (
							<Heading title="Education" device={this.props.device} />
						)}
						<div className="App-Section4-Content-Education-List" data-aos="fade-up" data-aos-duration={600}>
							<Card
								position="Bachelor of Technology - Civil Engineering"
								institute="Punjab Engineering College, Chandigarh"
								duration="Aug 2017 - Jun 2021"
								device={this.props.device}
							/>
							<Card
								position="Secondary High School - Science"
								institute="Bhavan Vidyalaya, Panchkula"
								duration="Apr 2016 - Mar 2017"
								device={this.props.device}
							/>
							<Card
								position="High School"
								institute="Bhavan Vidyalaya, Panchkula"
								duration="Apr 2014 - Mar 2015"
								device={this.props.device}
							/>
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section4;
