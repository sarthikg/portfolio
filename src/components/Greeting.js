import React, {Component} from 'react'
import Typewriter from 'typewriter-effect';
 
class Greeting extends Component {

    state = {
        greetings: [
            'Hello',
            'Hola',
            'Namaste',
            'Ni hao',
            'Bonjour',
            'Olá',
        ]
    }

    render() {
        return (
            <div className="App-Section1-Content-Left-Name">
                <Typewriter
                    options={{
                        strings: this.state.greetings,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        )
    }
}

export default Greeting