import React from 'react';

const ExpList = (props) => (
    <ul>
        {
            props.experience.map((exp) =>
                <li>
                    <span>{exp.title}</span>
                    <small>{exp.institution}</small>
                    <small>{exp.duration}</small>
                </li>
            )
        }
    </ul>
);

export default ExpList;