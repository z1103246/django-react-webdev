import React from 'react';

class Interest extends React.Component {
    render() {
        return (
            <div>
                <i className={`fa fa-${this.props.faIcon}`}></i>
                <span>
                    {this.props.name}
                </span>
            </div>
        );
    };
}

export default Interest;