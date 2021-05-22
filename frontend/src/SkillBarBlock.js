import React from 'react';
import SkillBar from './SkillBar';

class SkillBarBlock extends React.Component {
    render() {
        const skillBars = this.props.skillBarBlock.skillBars.map((skillBar) =>
            <SkillBar percent={skillBar.percent} name={skillBar.name} />
        );

        return (
            <div className="skills-prog">
                <h3>
                    <i className={`fa fa-${this.props.skillBarBlock.faIcon}`}></i>
                    {this.props.skillBarBlock.name}
                </h3>
                <ul>
                    {skillBars}
                </ul>
            </div>
        );
    }
}

export default SkillBarBlock;