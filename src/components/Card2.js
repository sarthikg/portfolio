import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className="Component-Card2">
				<div className="Component-Card2-Name">{this.props.name}</div>
				<div className="Component-Card2-Description">{this.props.description}</div>
				<div className="Component-Card2-Link">{this.props.link}</div>
			</div>
		);
	}
}

export default Card;
