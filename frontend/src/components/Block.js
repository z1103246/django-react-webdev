import React from 'react';

const Block = (props) => (
    <div className={props.className}>
        <h3>
            <i className={`fa fa-${props.faIcon}`}></i>
            {props.name}
        </h3>
        {props.children}
    </div>
);

export default Block;