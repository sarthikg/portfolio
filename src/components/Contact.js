import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="Component-Contact">
                {this.props.contacts.map((contact) => {
					return (
                        <div className="Component-Contact-Object" key={contact.alt}>
                            <a href={contact.url ? contact.url : undefined} target="_blank" rel="noreferrer">
							    <img className="Component-Contact-Object-Logo" src={contact.icon} alt={contact.alt} height="20px"/>
						    </a>
                            <div className="Component-Contact-Object-Separator"/>
                                {contact.content}   
                        </div>
					);
				})}
            </div>
        )
    }
}

export default Contact