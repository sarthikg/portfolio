import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<div className="Component-Navigation">
				{Array(this.props.total).fill(1).map((i, j) => (
					this.props.active === j ? (
						<div className="Component-Navigation-Dot Active" />
					) : (
						<div className="Component-Navigation-Dot" />
					)
				))}
			</div>
		);
	}
}

export default Navigation;
