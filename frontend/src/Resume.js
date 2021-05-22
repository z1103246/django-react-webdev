import React from 'react';
import ExpBlock from './ExpBlock';
import SkillBarBlock from './SkillBarBlock';
import SkillPieBlock from './SkillPieBlock';

class Resume extends React.Component {
    render() {
        const expBlocks = this.props.expBlocks.map((expBlock) =>
            <ExpBlock expBlock={expBlock} />
        );
        const skillBarBlock = <SkillBarBlock skillBarBlock={this.props.skillBarBlock} />;
        const skillPieBlock = <SkillPieBlock skillPieBlock={this.props.skillPieBlock} />;

        return (
            <div className="resume">
                <div className="base">
                </div>
                <div className="func">
                    {expBlocks}
                    {skillBarBlock}
                    {skillPieBlock}
                </div>
            </div>
        );
    }
}

export default Resume;