import React, { Component } from 'react';

import dp from '../assets/Photo.png';
import Greeting from '../components/Greeting';
import Section from '../components/Section';

class Section1 extends Component {

	render() {
		return (
			<Section>
				<div className="App-Section1-Content">
					<div className="App-Section1-Content-Left" data-aos="fade-up" data-aos-duration={600}>
						<Greeting />
						<div className="App-Section1-Content-Left-Name">I'm Sarthik Gupta!</div>
						<div className="App-Section1-Content-Left-Title">Full-Stack Web Developer</div>
					</div>
					<div className="App-Section1-Content-Right" data-aos="fade-up" data-aos-duration={600}>
						<div className="App-Section1-Content-Right-Container">
							<img
								src={dp}
								width="300px"
								alt="Profile"
								className="App-Section1-Content-Right-Container-Image"
							/>
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section1;
