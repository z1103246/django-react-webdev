import React from 'react';

class SkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.barRef = React.createRef();
    }

    componentDidMount() {
        this.barRef.current.animate(
            [{ width: 0 }, { width: `${this.props.percent}%` }], 1000, 'linear'
        );
    }

    render() {
        return (
            <li>
                <span>{this.props.name}</span>
                <div className="skills-bar">
                    <div className="bar" ref={this.barRef} style={{ width: `${this.props.percent}%` }}></div>
                </div>
            </li>
        );
    }
}

export default SkillBar;