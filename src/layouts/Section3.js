import React, { Component } from 'react';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import {ProjectCard, AchievementCard} from '../components/Card2';

class Section3 extends Component {
	render() {
		return (
			<Section>
				<div className="App-Section3-Content">
					<div className="App-Section3-Content-Projects">
						<SubHeading title="Projects" />
						<div className="App-Section3-Content-Projects-List" data-aos="fade-up" data-aos-duration={600}>
							<ProjectCard name="Cache-em" description="Autofill Input Forms with Cached Data from MySQL Databases with Auto-Refresh." link="https://www.npmjs.com/package/cache-em" />
							<ProjectCard name="Pool-me" description="Promise Wrapper for Async/Await with MySQL Pools along with Series & Parallel Execution." link="https://www.npmjs.com/package/pool-me" />
							<ProjectCard name="Google SERP" description="Accessing Google Search Results without the need of external proxy pool." link="https://github.com/sarthikg/Google-Scrape" />
						</div>
					</div>
					<div className="App-Section3-Content-Achievements">
						<SubHeading title="Achievements" />
						<div className="App-Section3-Content-Projects-List" data-aos="fade-up" data-aos-duration={600}>
							<AchievementCard name="ISB BAC Scholarship" description="Selected for a fully sponsored course in Finance, Marketing and Leadership." link="" />
							<AchievementCard name="Cloud Computing Scholarship" description="Selected by Nutanix for a fully sponsored course on Hybrid Cloud Computing." link="" />
							<AchievementCard name="Institute COA" description="Honoured with Certificate of Appreciation for outstanding performance." link="" />
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section3;
