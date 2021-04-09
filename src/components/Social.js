import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<div className="Component-Social">
				{this.props.socials.map((social) => {
					return (
						<a href={social.url} target="_blank" rel="noreferrer" key={social.alt} data-aos="zoom-in" data-aos-duration={600} data-aos-easing="ease-in-out">
							<img src={social.icon} alt={social.alt} className="Component-Social-Logo"/>
						</a>
					);
				})}
			</div>
		);
	}
}

export default Social;
