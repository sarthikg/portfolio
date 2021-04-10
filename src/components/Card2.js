import React, { Component } from 'react';

class ProjectCard extends Component {
	render() {
		return (
			<a className="Component-Card2" href={this.props.link} target="_blank" rel="noreferrer">
				<div className="Component-Card2-Name">{this.props.name}</div>
				<div className="Component-Card2-Description">{this.props.description}</div>
			</a>
		);
	}
}

class AchievementCard extends Component {
	render() {
		return (
			<div className="Component-Card2">
				<div className="Component-Card2-Name">{this.props.name}</div>
				<div className="Component-Card2-Description">{this.props.description}</div>
			</div>
		);
	}
}

export {ProjectCard, AchievementCard};
