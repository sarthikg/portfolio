import React, { Component } from 'react';

class Loading extends Component {
	state = {
		year: 1999,
		current: 2021,
        completed: 'Enter'
	};

    handleLoad = () => {
        this.props.handleProfileLoad()	
    }

	changeContent = (timeout) => {
		if (this.state.year < this.state.current) {
				setTimeout(() => {
					this.setState(
						(oldState) => ({
							year: oldState.year + 1
						}));
					this.changeContent(timeout+4)
				}, timeout);
		} else {
            setTimeout(() => this.setState({completed: 'Exit'}), 200)
        }
	};

	componentDidMount = () => {
		setTimeout(() => this.changeContent(10), 300)
	};

	render() {
		return (
			<div className="App-Loading">
                <div className="App-Loading-Container">
                    <div className={`App-Loading-Text ${this.state.completed}`}>{`© ${this.state.year}`}</div>
					<img
						src={process.env.PUBLIC_URL + '/Photo.webp'}
						alt="Loading"
						className="App-Loading-Image"
						onLoad={this.handleLoad}
					/>
                </div>	
			</div>
		);
	}
}

export default Loading;
