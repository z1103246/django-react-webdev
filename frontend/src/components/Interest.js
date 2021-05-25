import React from 'react';

const Interest = (props) => (
    <div>
        <i className={`fa fa-${props.faIcon}`}></i>
        <span>
            {props.name}
        </span>
    </div>
);

export default Interest;