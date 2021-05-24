import React from 'react';

class Interest extends React.Component {
    render(){
        return (
            <div className="interests-items">
                <h3>
                    <i className={`fa fa-${this.props.faIcon}`}></i>
                    {this.props.name}
                </h3>
            </div>
        );
    };
}

export default Interest;