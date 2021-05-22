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
        const style = {
            width: `${this.props.percent}%`,
            transitionDuration: '0.5s'
        };

        return (
            <li>
                <span>{this.props.name}</span>
                <div className="skills-bar">
                    <div className="bar" ref={this.barRef} style={style}></div>
                </div>
            </li>
        );
    }
}

export default SkillBar;