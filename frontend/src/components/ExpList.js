import React from 'react';

class ExpList extends React.Component {
    render() {
        const listItems = this.props.experience.map((exp) =>
            <li>
                <span>{exp.title}</span>
                <small>{exp.institution}</small>
                <small>{exp.duration}</small>
            </li>
        )

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ExpList;