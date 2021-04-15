import React, { Component } from 'react';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import {ProjectCard, AchievementCard} from '../components/Card2';

class Section3 extends Component {
	render() {
		return (
			<Section device={this.props.device}>
				<div className="App-Section3-Content">
					<div className="App-Section3-Content-Projects">
					{this.props.device === 'desktop' ? (
							<SubHeading title="Projects" device={this.props.device} />
						) : (
							<Heading title="Projects" device={this.props.device} />
						)}
						<div className="App-Section3-Content-Projects-List" data-aos="fade-up" data-aos-duration={600}>
							<ProjectCard name="Cache-em" description="Autofill Input Forms with Cached Data from MySQL Databases with Auto-Refresh." link="https://www.npmjs.com/package/cache-em" device={this.props.device}/>
							<ProjectCard name="Pool-me" description="Promise Wrapper for Async/Await with MySQL Pools along with Series & Parallel Execution." link="https://www.npmjs.com/package/pool-me" device={this.props.device}/>
							<ProjectCard name="Google SERP" description="Accessing Google Search Results without the need of external proxy pool." link="https://github.com/sarthikg/Google-Scrape" device={this.props.device}/>
						</div>
					</div>
					<div className="App-Section3-Content-Achievements">
					{this.props.device === 'desktop' ? (
							<SubHeading title="Achievements" device={this.props.device} />
						) : (
							<Heading title="Achievements" device={this.props.device} />
						)}
						<div className="App-Section3-Content-Projects-List" data-aos="fade-up" data-aos-duration={600}>
							<AchievementCard name="ISB BAC Scholarship" description="Selected by Indian School of Business, Mohali for Business Advantage Certification." device={this.props.device}/>
							<AchievementCard name="Cloud Computing Scholarship" description="Selected by Nutanix for a fully sponsored course on Hybrid Cloud Computing." device={this.props.device}/>
							<AchievementCard name="Certificate of Appreciation" description="Honoured with COA for outstanding performance in co-curricular activities during the College." device={this.props.device}/>
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section3;
