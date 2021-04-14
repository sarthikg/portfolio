import React, { Component } from 'react';

class SubHeading extends Component {
    render() {
        return (
            <div className="Component-SubHeading">
                {this.props.title}
            </div>
        )
    }
}

export default SubHeading