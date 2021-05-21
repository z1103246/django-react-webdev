import React from 'react';
import ExpList from './ExpList';

class ExpBlock extends React.Component {
    render() {
        return (
            <div className={this.props.expBlock.className}>
                <h3>
                    <i className={`fa fa-${this.props.expBlock.faIcon}`}></i>
                    {this.props.expBlock.name}
                </h3>
                <ExpList experience={this.props.expBlock.experience} />
            </div>
        );
    }
}

export default ExpBlock;