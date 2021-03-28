import React, { Component } from 'react';

import Filler from '../components/Filler';
import Section from '../components/Section'
import Heading from '../components/Heading'
import KanbanSection from '../components/Kanban/Section'
import KanbanEntry from '../components/Kanban/Entry'


class Section2 extends Component {
	render() {
		return (
			<Section>
                <div className="App-Section2-Kanban">
                    <KanbanSection title="Used Once"/>
                    <KanbanSection title="Occasional"/>
                    <KanbanSection title="Often"/>
                </div>  
				{/* <Heading title="Skills"/> */}
			</Section>
		);
	}
}

export default Section2;
