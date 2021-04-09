import React, { Component } from 'react';

import Section from '../components/Section';
import Heading from '../components/Heading';
import Carousel from '../components/Carousel';

let Skills = [
	{ name: 'ReactJS', level: 'bright' },
	{ name: 'NodeJS', level: 'bright' },
	{ name: 'Python', level: 'bright' },
	{ name: 'ReactJS', level: 'bright' },
	{ name: 'MySQL', level: 'bright' },
	{ name: 'JavaScript', level: 'dim' },
	{ name: 'Selenium', level: 'bright' },
	{ name: 'Sass', level: 'muted' },
	{ name: 'Git', level: 'muted' },
	{ name: 'REST', level: 'muted' },
	{ name: 'Flutter', level: 'muted' },
	{ name: 'Microsoft Excel', level: 'dim' },
	{ name: 'Cloud Computing', level: 'muted' },
	{ name: 'Google Analytics', level: 'dim' },
	{ name: 'Microsoft PowerPoint', level: 'dim' },
	{ name: 'Adobe Photoshop', level: 'dim' },
	{ name: 'Tableau', level: 'dim' },
	{ name: 'MongoDB', level: 'dim' }
];

class Section2 extends Component {
	render() {
		return (	
			<Section>
				<div className="App-Section2-Content">
					<div className="App-Section2-Content-Container">
						<div className="App-Section2-Content-Container-Description">
							<Heading title="Skills" />
							<div className="App-Section2-Content-Container-Description-Content" data-aos="fade-up" data-aos-duration={600}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
							</div>
						</div>
						<Carousel skills={Skills} />
					</div>
				</div>
			</Section>
		);
	}
}

export default Section2;
