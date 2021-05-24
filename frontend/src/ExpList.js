import React from 'react';

class ExpList extends React.Component {
    render() {
        return (
            this.props.experience.map((exp) =>
                <li>
                    <span>{exp.title}</span>
                    <small>{exp.institution}</small>
                    <small>{exp.duration}</small>
                </li>
            )
        );
    }
}

export default ExpList;