import React, { Component } from 'react';

import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Social from '../components/Social';
import Contact from '../components/Contact'

import linkedin from '../linkedin.svg';
import github from '../github.svg';
import twitter from '../twitter.svg';
import medium from '../medium.svg';

import email from '../email.svg'
import phone from '../phone.svg'

let contacts = [
	{
		alt: 'email',
		icon: email,
		url: 'href="mailto:sarthikg@gmail.com"',
		content: 'sarthikg@gmail.com'
	},
	{
		alt: 'phone',
		icon: phone,
		url: null,
		content: '+91-8872425152'
	},
]

let socials = [
	{
		alt: 'github',
		icon: github,
		url: 'https://www.github.com/sarthikg'
	},
	{
		alt: 'twitter',
		icon: twitter,
		url: 'https://www.twitter.com/sarthikg'
	},
	{
		alt: 'linkedin',
		icon: linkedin,
		url: 'https://www.linkedin.com/in/sarthikg'
	},
	{
		alt: 'medium',
		icon: medium,
		url: 'https://www.medium.com/sarthikg'
	}
];

class Section5 extends Component {
	state = {
		buttonClass: 'Form-Button'
	};

	toggleClass = () => {
		this.state.buttonClass === 'Form-Button'
			? this.setState({ buttonClass: 'Form-Button Active' })
			: this.setState({ buttonClass: 'Form-Button' });
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		setTimeout(this.toggleClass, 1000);
		this.toggleClass();
	};

	render() {
		return (
			<Section>
				<div className="App-Section5-Content">
                    <Heading title="Contact" />
					<div className="App-Section5-Content-Description">
						I'm interested in full-time opportunities in the field of Full-Stack Development, Business
						Analysis and Product Management. Feel free to hit me up by filling the form below. You can also
						ask any question you might have through this form.
					</div>
					<div className="App-Section5-Content-Container">
						<form className="App-Section5-Content-Container-Form" onSubmit={this.handleSubmit}>
							<input type="text" placeholder="Name" className="Form-Input Name" required />
							<input type="email" placeholder="Email" className="Form-Input Email" required />
							<input type="text" placeholder="Subject" className="Form-Input Subject" required />
							<textarea placeholder="Message" className="Form-Input Message" />
							<button type="submit" className={this.state.buttonClass}>
								Send Message
							</button>
						</form>
						<div className="App-Section5-Content-Container-Social">
                        <SubHeading title="Find me at" />
							<div className="App-Section5-Content-Container-Social-Details">
								<Contact contacts={contacts}/>
								<Social socials={socials} />
								<div className="App-Section5-Content-Container-Social-Remarks">
									Design is highly inspired from{' '}
									<a href="https://jacekjeznach.com/">Jack's Website</a>.
									<br/>
									Copyright © 2021 All Rights Reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section5;
