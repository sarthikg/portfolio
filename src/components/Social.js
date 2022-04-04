import React, { Component } from 'react';
import { socialAccounts } from '../constants/constants';

class Social extends Component {
	render() {
		return (
			<div className="Component-Social">
				{socialAccounts.map((social) => {
					return (
						<a
							href={social.url}
							target="_blank"
							rel="noreferrer"
							key={social.alt}
							data-aos="zoom-in"
							data-aos-duration={600}
							data-aos-anchor-placement="bottom-bottom"
							data-aos-easing="ease-in-out"
							aria-label={social.alt}
						>
							{social.icon}
						</a>
					);
				})}
			</div>
		);
	}
}

export default Social;
