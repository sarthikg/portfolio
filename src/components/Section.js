import React, {Component} from 'react';

class Section extends Component {

    render() {
        return (
            <div className={this.props.hero ? "Component-Section Hero" : "Component-Section"} id="Section">
                {this.props.children}
            </div>
        )
    }
}

export default Section