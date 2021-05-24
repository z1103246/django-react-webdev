import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <div className="base">
                </div>
                <div className="func">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Resume;