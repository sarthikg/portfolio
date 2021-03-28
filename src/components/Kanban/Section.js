import React, {Component} from 'react';

class KanbanSection extends Component {
    render() {
        return (
            <div className="Component-Kanban-Section">
                <div className="Component-Kanban-Section-Title-Container">
                    <div className="Component-Kanban-Section-Title-Text">
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default KanbanSection