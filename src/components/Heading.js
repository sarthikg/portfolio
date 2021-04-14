import React, { Component } from 'react';

class Heading extends Component {
    render() {
        return (
            <div className="Component-Heading" data-aos="fade-up" data-aos-duration={600}>
                {this.props.title}
            </div>
        )
    }
}

export default Heading