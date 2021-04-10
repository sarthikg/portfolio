import React, { Component } from 'react';
import {IconGithub, IconLinkedIn, IconMedium, IconTwitter} from '../components/Icon'

class Social extends Component {
	render() {
		let socials = [
			{
				alt: 'github',
				icon: <IconGithub/>,
				url: 'https://www.github.com/sarthikg'
			},
			{
				alt: 'twitter',
				icon: <IconTwitter/>,
				url: 'https://www.twitter.com/sarthikg'
			},
			{
				alt: 'linkedin',
				icon: <IconLinkedIn/>,
				url: 'https://www.linkedin.com/in/sarthikg'
			},
			{
				alt: 'medium',
				icon: <IconMedium/>,
				url: 'https://www.medium.com/sarthikg'
			}
		];
		return (
			<div className="Component-Social">
				{socials.map((social) => {
					return (
						<a href={social.url} target="_blank" rel="noreferrer" key={social.alt} data-aos="zoom-in" data-aos-duration={600} data-aos-easing="ease-in-out">
							{social.icon}
						</a>
					);
				})}
			</div>
		);
	}
}

export default Social;
