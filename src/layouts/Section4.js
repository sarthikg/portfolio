import React, { Component } from 'react';
import Filler from '../components/Filler';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';

class Section4 extends Component {
	render() {
		return (
			<Section>
				<div className="App-Section4-Content">
					<div className="App-Section4-Content-Experience">
						<SubHeading title="Experience" />
						<Card
							position="Business Analyst Intern"
							institute="Collegedunia Web Pvt Ltd, Gurugram"
							start="Jan 2020"
							end="Jul 2020"
							duration="Jan 2020 - Jul 2020"
						/>
					</div>
					<div className="App-Section4-Content-Education">
						<SubHeading title="Education" />
						<Card
							position="Bachelor of Technology - Civil Engineering"
							institute="Punjab Engineering College, Chandigarh"
							duration="Aug 2017 - Jun 2021"
						/>
						<Card
							position="Secondary High School - Science"
							institute="Bhavan Vidyalaya, Panchkula"
							duration="Apr 2016 - Mar 2017"
						/>
						<Card
							position="High School"
							institute="Bhavan Vidyalaya, Panchkula"
							duration="Apr 2014 - Mar 2015"
						/>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section4;
