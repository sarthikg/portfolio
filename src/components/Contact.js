import React, { Component } from 'react';
import { contactDetails } from '../constants/constants';

class Contact extends Component {
	render() {
		return (
			<div className="Component-Contact">
				{contactDetails.map((contact) => {
					return (
						<div
							className="Component-Contact-Object"
							key={contact.type}
							data-aos="fade-up"
							data-aos-duration={600}
						>
							{contact.url ? (
								<a href={contact.url} target="_blank" rel="noreferrer">
									{contact.icon}
								</a>
							) : (
								<span>{contact.icon}</span>
							)}
							<div className="Component-Contact-Object-Separator" />
							{contact.content}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Contact;
