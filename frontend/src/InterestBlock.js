import React from 'react';
import Interests from './Interest';

class InterestBlock extends React.Component{
    render(){
        const interest_items = this.props.interestBlock.interest_items.map((Interest) =>
            <Interests faIcon={Interest.faIcon} name={Interest.name} />
        );

        return (
            <div className="interests">
                <h3>
                    <i className={`fa fa-${this.props.faIcon}`}></i>
                    {this.props.interestBlock.name}
                </h3>
                <ul>
                    {interest_items}
                </ul>
            </div>
        );
    };
}

export default InterestBlock;