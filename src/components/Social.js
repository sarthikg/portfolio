import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<div className="Component-Social">
				{this.props.socials.map((social) => {
					return (
						<a href={social.url} target="_blank" rel="noreferrer" key={social.alt}>
							<img src={social.icon} alt={social.alt} height="32px"/>
						</a>
					);
				})}
			</div>
		);
	}
}

export default Social;
