import React, { Component } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Social from '../components/Social';
import Contact from '../components/Contact';

import linkedin from '../linkedin.svg';
import github from '../github.svg';
import twitter from '../twitter.svg';
import medium from '../medium.svg';

import email from '../email.svg';
import phone from '../phone.svg';

const recaptchaRef = React.createRef();

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
	}
];

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

	handleSubmit = async (evt) => {
		evt.preventDefault();
		setTimeout(this.toggleClass, 1000);
		this.toggleClass();
		let recaptchaValue = await recaptchaRef.current.executeAsync();
		let response = await axios.request({
			method: 'POST',
			url: '/api/contact',
			data: {
				captcha: recaptchaValue,
				data: {
					name: this.state.Name,
					email: this.state.Email,
					subject: this.state.Subject,
					message: this.state.Message
				}
			}
		});
		console.log(response);
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
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
							<input
								type="text"
								name="Name"
								placeholder="Name"
								className="Form-Input Name"
								onChange={this.handleChange}
								required
							/>
							<input
								type="email"
								name="Email"
								placeholder="Email"
								className="Form-Input Email"
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								name="Subject"
								placeholder="Subject"
								className="Form-Input Subject"
								onChange={this.handleChange}
								required
							/>
							<textarea
								name="Message"
								placeholder="Message"
								className="Form-Input Message"
								onChange={this.handleChange}
							/>
							<ReCAPTCHA
								ref={recaptchaRef}
								size="invisible"
								sitekey="6Lf0vJcaAAAAAIgykfM22T24bS8IH0M1--ZKvC83"
							/>
							<button type="submit" className={this.state.buttonClass}>
								Send Message
							</button>
						</form>
						<div className="App-Section5-Content-Container-Social">
							<SubHeading title="Find me at" />
							<div className="App-Section5-Content-Container-Social-Details">
								<Contact contacts={contacts} />
								<Social socials={socials} />
								<div className="App-Section5-Content-Container-Social-Remarks">
									Design is highly inspired from{' '}
									<a href="https://jacekjeznach.com/">Jack's Website</a>.
									<br />
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
