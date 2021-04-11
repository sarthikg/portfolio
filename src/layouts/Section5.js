import React, { Component } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Social from '../components/Social';
import Contact from '../components/Contact';

const recaptchaRef = React.createRef();

class Section5 extends Component {
	state = {
		buttonClass: 'Form-Button'
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();
		this.setState({ buttonClass: 'Form-Button Loading' });
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
		if (response.status === 200) {
			setTimeout(() => this.setState({ buttonClass: 'Form-Button' }), 5000);
			this.setState({ buttonClass: 'Form-Button Success' });
		}
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
		return (
			<Section>
				<div className="App-Section5-Content">
					<Heading title="Contact" />
					<div className="App-Section5-Content-Description" data-aos="fade-up" data-aos-duration={800}>
						I'm interested in full-time opportunities in the field of Full-Stack Web Development & Product
						Management. Feel free to hit me up by filling the form below. You can also ask any question you
						might have through this form.
					</div>
					<div className="App-Section5-Content-Bottom">
						<form className="App-Section5-Content-Form" onSubmit={this.handleSubmit}>
							<div className="App-Section5-Content-Form-Basic" data-aos="fade-up" data-aos-duration={800}>
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
							</div>
							<div
								className="App-Section5-Content-Form-Subject"
								data-aos="fade-up"
								data-aos-duration={800}
							>
								<input
									type="text"
									name="Subject"
									placeholder="Subject"
									className="Form-Input Subject"
									onChange={this.handleChange}
									required
								/>
							</div>
							<textarea
								name="Message"
								placeholder="Message"
								className="Form-Input Message"
								onChange={this.handleChange}
								data-aos="fade-up"
								data-aos-duration={800}
							/>
							<ReCAPTCHA
								ref={recaptchaRef}
								size="invisible"
								sitekey={process.env.REACT_APP_SECRET}
							/>
							<button type="submit" className={this.state.buttonClass}>
								Send Message
								{this.state.buttonClass === 'Form-Button Loading' ? (
									<svg class="SVG-Loading" viewBox="0 0 50 50">
										<circle
											class="SVG-Loading-Path"
											cx="25"
											cy="25"
											r="20"
											fill="none"
											strokeWidth="5"
										/>
									</svg>
								) : this.state.buttonClass === 'Form-Button Success' ? (
									<svg className="SVG-Success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
										<circle className="SVG-Success-Circle" cx="26" cy="26" r="25" fill="none"/>
										<path className="SVG-Sucess-Path" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"/>
									</svg>
								) : (
									undefined
								)}
							</button>
						</form>
						<div className="App-Section5-Content-Social">
							<div className="App-Section5-Content-Social-Heading">
								<SubHeading title="Find me at" />
							</div>
							<Contact />
							<Social />
							<div className="App-Section5-Content-Social-Remarks">
								Copyright © 2021 All Rights Reserved.
							</div>
						</div>
					</div>
				</div>
			</Section>
		);
	}
}

export default Section5;
