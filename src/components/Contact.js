import React, {Component} from 'react';
import {IconEmail, IconPhone} from '../components/Icon'

class Contact extends Component {
    render() {

        let contacts = [
            {
                alt: 'email',
                icon: <IconEmail/>,
                url: 'href="mailto:sarthikg@gmail.com"',
                content: 'sarthikg@gmail.com'
            },
            {
                alt: 'phone',
                icon: <IconPhone/>,
                url: null,
                content: '+91-8872425152'
            }
        ];

        return (
            <div className="Component-Contact">
                {contacts.map((contact) => {
					return (
                        <div className="Component-Contact-Object" key={contact.alt} data-aos="fade-up" data-aos-duration={600}>
                            {contact.url ? <a href={contact.url} target="_blank" rel="noreferrer">{contact.icon}</a>: <span>{contact.icon}</span>}
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