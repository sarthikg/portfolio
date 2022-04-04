import React, { Component } from 'react';

class ProjectCard extends Component {
	render() {
		return (
			<a
				className="Component-Card2 Project"
				href={this.props.details.link}
				target="_blank"
				rel="noreferrer"
			>
				<div className="Component-Card-2-Header">
					<div className="Component-Card2-Header-Name">{this.props.details.name}</div>
				</div>
				<div className="Component-Card2-Description">{this.props.details.description}</div>
			</a>
		);
	}
}

class AchievementCard extends Component {
	render() {
		return (
			<div className="Component-Card2 Achievement">
				<div className="Component-Card-2-Header">
					<div className="Component-Card2-Header-Name">{this.props.details.name}</div>
				</div>
				<div className="Component-Card2-Description">{this.props.details.description}</div>
			</div>
		);
	}
}

export { ProjectCard, AchievementCard };
