import React from 'react';
import SkillPie from './SkillPie';

class SkillPieBlock extends React.Component {
    render() {
        const skillPies = this.props.skillPieBlock.skillPies.map((skillPie) =>
            <SkillPie percent={skillPie.percent} name={skillPie.name} />
        );

        return (
            <div className="skills-soft">
                <h3>
                    <i className={`fa fa-${this.props.skillPieBlock.faIcon}`}></i>
                    {this.props.skillPieBlock.name}
                </h3>
                <ul>
                    {skillPies}
                </ul>
            </div>
        );
    }
}

export default SkillPieBlock;