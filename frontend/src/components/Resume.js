import React from 'react';

const Resume = (props) => (
    <div className="resume">
        <div className="base">
        </div>
        <div className="func">
            {props.children}
        </div>
    </div>
);

export default Resume;