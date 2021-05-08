import React, {Component} from 'react';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

class MainPage extends Component {
    render () {
        return (
            <React.Fragment>
                <Section1 device={this.props.device}/>
                <Section4 device={this.props.device}/>
                <Section2 device={this.props.device}/>
                <Section3 device={this.props.device}/>
                <Section5 device={this.props.device}/>
			</React.Fragment>
        )
    }
}

export default MainPage