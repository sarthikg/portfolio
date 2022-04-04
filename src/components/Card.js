import React, { Component } from 'react';

class Card extends Component {
	state = {
		isCollapsed: true,
	};

	handleClick = () => {
		if (this.props.device === 'mobile' && this.props.details.summary) {
			this.setState((prevState) => ({ isCollapsed: !prevState.isCollapsed }));
		}
	};

	render() {
		return (
			<div
				className={`Component__Card ${this.state.isCollapsed
					? 'Component__Card--Collapsed'
					: ''}`}
				onClick={this.handleClick}
			>
				<div className="Component__Card__Header">
					<div className="Component__Card__Details">
						<div className="Component__Card__Details__Position">
							{this.props.details.position}
						</div>
						<div className="Component__Card__Details__Institute">
							{this.props.details.institute}
						</div>
					</div>
					<div className="Component__Card__Duration">{this.props.details.duration}</div>
				</div>
				{this.props.details.summary && (
					<ul className={`Component__Card__Summary`}>
						{this.props.details.summary.map((summary, index) => (
							<li className="Component__Card__Summary__Text" key={index}>
								{summary}
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default Card;
