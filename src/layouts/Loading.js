import React, { Component } from 'react';
import dp from '../assets/Photo.png';

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
                this.changeContent(timeout+5)
			}, timeout);
		} else {
            setTimeout(() => this.setState({completed: 'Exit'}), 600)
        }
	};

	componentDidMount = () => {
		setTimeout(() => this.changeContent(50), 800)
	};

	render() {
		return (
			<div className="App-Loading">
                <div className="App-Loading-Container">
                    <div className={`App-Loading-Text ${this.state.completed}`}>{`© ${this.state.year}`}</div>
                    <img className="App-Loading-Image" src={dp} onLoad={this.handleLoad}/>
                </div>
			</div>
		);
	}
}

export default Loading;
