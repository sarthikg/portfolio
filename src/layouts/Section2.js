import React, { Component } from 'react';

import Section from '../components/Section';
import Heading from '../components/Heading';
import Carousel from '../components/Carousel';

let Skills = [
	{ name: 'ReactJS', level: 'bright' },
	{ name: 'NodeJS', level: 'bright' },
	{ name: 'Python', level: 'bright' },
	{ name: 'MySQL', level: 'bright' },
	{ name: 'JavaScript', level: 'bright' },
	{ name: 'Microsoft Excel', level: 'bright' },
	{ name: 'Selenium', level: 'muted' },
	{ name: 'Git', level: 'muted' },
	{ name: 'REST', level: 'muted' },
	{ name: 'Flutter', level: 'muted' },
	{ name: 'Tableau', level: 'muted' },
	{ name: 'Cloud Computing', level: 'muted' },
	{ name: 'Google Analytics', level: 'dim' },
	{ name: 'Microsoft PowerPoint', level: 'dim' },
	{ name: 'Adobe Photoshop', level: 'dim' },
	{ name: 'MongoDB', level: 'dim' },
	{ name: 'Sass', level: 'dim' },
	{ name: 'Statistics', level: 'dim' },
];

class Section2 extends Component {
	render() {
		return (
			<Section device={this.props.device}>
				<div className="App-Section2-Content">
					<div className="App-Section2-Content-Container">
						<div className="App-Section2-Content-Container-Description">
							<div className="App-Section2-Content-Container-Description-Heading">
								<Heading title="Skills" device={this.props.device}/>
							</div>
							<div
								className="App-Section2-Content-Container-Description-Content"
								data-aos="fade-up"
								data-aos-duration={600}
							>
								My journey to this portfolio began in May of 2019 when I first started programming in
								Flutter. Thanks to Android Studio, I could finally experience the peak temperatures of
								my laptop. Anyways, back to the story, by the next month, I had started Python, going
								through an online bootcamp, and boy it was easy and fun. It took me about a month to
								complete the Bootcamp after which I began SQL because after all, everything cannot be
								like Snapchat.
								<br />
								<br />
								Fast-forward to January of 2020, I began my first internship at a startup where I first
								got exposed to Web-Scraping (ahem!) Web-Automation using Selenium. Within a couple of
								months, I pivoted to Web-Development and got my feet wet in this never-ending field.
								<br />
								<br />
								Halfway down the Internship, Covid happened. Most of the time post then was invested in
								learning React & Trading. Well, losses were made, but at least there's this website :)
							</div>
						</div>
						<Carousel skills={Skills} device={this.props.device}/>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section2;
