import React from 'react';

const ExpList = (props) => (
    <ul>
        {
            props.experience.map((exp, index) =>
                <li key={index}>
                    <span>{exp.title}</span>
                    <small>{exp.institution}</small>
                    <small>{exp.duration}</small>
                </li>
            )
        }
    </ul>
);

export default ExpList;