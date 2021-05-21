import React from 'react';
import ExpBlock from './ExpBlock';

class Resume extends React.Component {
    render() {
        const expBlocks = this.props.expBlocks.map((expBlock) =>
            <ExpBlock expBlock={expBlock} />
        );

        return (
            <div className="resume">
                <div className="base">
                </div>
                <div className="func">
                    {expBlocks}
                </div>
            </div>
        );
    }
}

export default Resume;