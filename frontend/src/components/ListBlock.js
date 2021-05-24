import React from 'react';

class ListBlock extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <h3>
                    <i className={`fa fa-${this.props.faIcon}`}></i>
                    {this.props.name}
                </h3>
                {this.props.children}
            </div>
        );
    }
}

export default ListBlock;