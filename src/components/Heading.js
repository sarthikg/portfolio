import React, { Component } from 'react';

class Heading extends Component {
    render() {
        return (
            <div className="Component-Heading">
                {this.props.title}
            </div>
        )
    }
}

export default Heading