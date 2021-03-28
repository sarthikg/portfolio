import React, {Component} from 'react';

import dp from '../DP-Small.png'
import Greeting from '../components/Greeting'
import Section from '../components/Section'

class Section1 extends Component {
    render() {
        return (
            <Section>
          <div className="App-Section1-Content">
            <div className="App-Section1-Content-Left">
              <Greeting/>
              <div className="App-Section1-Content-Left-Name">I'm Sarthik Gupta!</div>
              <div className="App-Section1-Content-Left-Title">Full-Stack Web Developer</div>
            </div>
            <div className="App-Section1-Content-Right">
              <div className="App-Section1-Content-Right-Container">
                <img src={dp} width="300px"/>
              </div>
            </div>
          </div>
				</Section>
        )
    }
}

export default Section1