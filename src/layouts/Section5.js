import React, { Component } from 'react';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import { ProjectCard, AchievementCard } from '../components/Card2';
import { projectsList, achievementsList } from '../constants/constants';

class Section5 extends Component {
	render() {
		return (
				<div className="App__Section5">
					<div className="App__Section5__Projects">
						{this.props.device === 'desktop' ? (
							<SubHeading title="Projects" device={this.props.device} />
						) : (
							<Heading title="Projects" device={this.props.device} />
						)}
						<div
							className="App__Section5__Projects__List"
							data-aos="fade-up"
							data-aos-duration={600}
						>
							{projectsList.map((project) => (
								<ProjectCard
									key={project.name}
									details={project}
									device={this.props.device}
								/>
							))}
						</div>
					</div>
					<div className="App__Section5__Achievements">
						{this.props.device === 'desktop' ? (
							<SubHeading title="Achievements" device={this.props.device} />
						) : (
							<Heading title="Achievements" device={this.props.device} />
						)}
						<div
							className="App__Section5__Achievements__List"
							data-aos="fade-up"
							data-aos-duration={600}
						>
							{achievementsList.map((achievement) => (
								<AchievementCard
									key={achievement.name}
									details={achievement}
									device={this.props.device}
								/>
							))}
						</div>
					</div>
				</div>
		);
	}
}

export default Section5;
