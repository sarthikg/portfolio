import React, { Component } from 'react';

class SubHeading extends Component {
    render() {
        return (
            <div className="Component-SubHeading" data-aos="fade-up" data-aos-duration={600}>
                {this.props.title}
            </div>
        )
    }
}

export default SubHeading