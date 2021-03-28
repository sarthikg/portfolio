import React, {Component} from 'react'

class Card extends Component {
    render() {
        return (
            <div className="Component-Card">
                <div className="Component-Card-Details">
                    <div className="Component-Card-Details-Position">
                        {this.props.position}
                    </div>
                    <div className="Component-Card-Details-Institute">
                    {this.props.institute}
                    </div>
                </div>
                <div className="Component-Card-Duration">
                    {this.props.duration}
                </div>
            </div>
        )
    }
}

export default Card
