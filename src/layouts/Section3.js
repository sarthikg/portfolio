import React, { Component } from 'react';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import Card2 from '../components/Card2';

class Section3 extends Component {
	render() {
		return (
			<Section>
				<div className="App-Section3-Content">
					<div className="App-Section3-Content-Projects">
						<SubHeading title="Projects" />
						<div className="App-Section3-Content-Projects-List">
							<Card2 name="Cache-em" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="" />
							<Card2 name="Cache-em" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="" />
							<Card2 name="Cache-em" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="" />
						</div>
					</div>
					<div className="App-Section3-Content-Articles">
						<SubHeading title="Articles" />
						<div className="App-Section3-Content-Projects-List">
							<Card2 name="Intro to Programming" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="" />
							<Card2 name="Intro to Programming" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="" />
							<Card2 name="Intro to Programming" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="" />
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section3;
