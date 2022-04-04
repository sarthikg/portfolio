import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className="Component__Card">
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
					<ul className="Component__Card__Summary">
						{this.props.details.summary.map((summary) => (
							<li className="Component__Card__Summary__Text">{summary}</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default Card;
