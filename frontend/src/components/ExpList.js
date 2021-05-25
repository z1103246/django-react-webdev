import React from 'react';
import { nanoid } from 'nanoid';

const ExpList = (props) => (
    <ul>
        {
            props.experience.map((exp) =>
                <li key={nanoid()}>
                    <span>{exp.title}</span>
                    <small>{exp.institution}</small>
                    <small>{exp.duration}</small>
                </li>
            )
        }
    </ul>
);

export default ExpList;