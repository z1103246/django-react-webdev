import React from 'react';
import ReactDOM from 'react-dom';
import './resume.scss';

import Resume from './components/Resume';
import Block from './components/Block'
import SkillBar from './components/SkillBar';
import SkillPie from './components/SkillPie';
import ExpList from './components/ExpList';
import Interest from './components/Interest';

const expBlocks = [
    {
        className: 'work',
        faIcon: 'briefcase',
        name: 'Experience',
        experience: [
            { title: 'Technical Consultant', institution: 'Prudential', duration: 'Apr 2018 - Now' },
            { title: 'Frontend Engineer', institution: 'NeuraFlash', duration: 'Apr 2018 - Now' },
            { title: 'Backend Engineer', institution: 'PANYNJ', duration: 'Apr 2018 - Now' }
        ]
    },
    {
        className: 'edu',
        faIcon: 'graduation-cap',
        name: 'Education',
        experience: [
            { title: 'Technical Consultant', institution: 'Prudential', duration: 'Apr 2018 - Now' },
            { title: 'Frontend Engineer', institution: 'NeuraFlash', duration: 'Apr 2018 - Now' },
            { title: 'Backend Engineer', institution: 'PANYNJ', duration: 'Apr 2018 - Now' }
        ]
    }
];

const skillBarBlock = {
    className: 'skills-prog',
    skillBars: [
        { percent: 95, name: 'React' },
        { percent: 15, name: 'Erlang' },
        { percent: 80, name: 'Python' },
        { percent: 95, name: 'React' },
        { percent: 15, name: 'Erlang' },
        { percent: 80, name: 'Python' }
    ],
    faIcon: 'code',
    name: 'Programming Skills'
};

const skillPieBlock = {
    className: 'skills-soft',
    skillPies: [
        { percent: 50, name: 'React' },
        { percent: 60, name: 'Erlang' },
        { percent: 70, name: 'Python' },
        { percent: 95, name: 'React' }
    ],
    faIcon: 'keyboard-o',
    name: 'Software Skills'
};

const interestBlock = {
    className: 'interests',
    interestItems: [
        { name: 'Art', faIcon: 'fas fa-palette' },
        { name: 'Books', faIcon: 'book' },
        { name: 'Movies', faIcon: 'film' },
        { name: 'Music', faIcon: 'headphones' },
        { name: 'Games', faIcon: 'gamepad' }
    ],
    name: 'Interests',
    faIcon: 'star'
};


const expBlocksElem = expBlocks.map((expBlock, index) =>
    <Block className={expBlock.className} name={expBlock.name} faIcon={expBlock.faIcon} key={index} >
        <ExpList experience={expBlock.experience} />
    </Block>
);

const skillBarBlockElem = (
    <Block className={skillBarBlock.className} name={skillBarBlock.name} faIcon={skillBarBlock.faIcon} >
        <ul>
            {
                skillBarBlock.skillBars.map((skillBar, index) =>
                    <SkillBar percent={skillBar.percent} name={skillBar.name} key={index} />
                )
            }
        </ul>
    </Block>
);

const skillPieBlockElem = (
    <Block className={skillPieBlock.className} name={skillPieBlock.name} faIcon={skillPieBlock.faIcon} >
        <ul>
            {
                skillPieBlock.skillPies.map((skillPie, index) =>
                    <SkillPie percent={skillPie.percent} name={skillPie.name} key={index} />
                )
            }
        </ul>
    </Block>
);

const interestBlockElem = (
    <Block className={interestBlock.className} name={interestBlock.name} faIcon={interestBlock.faIcon}>
        <div className="interests-items">
            {
                interestBlock.interestItems.map((interest, index) =>
                    <Interest name={interest.name} faIcon={interest.faIcon} key={index} />
                )
            }
        </div>
    </Block>
);

ReactDOM.render(
    <React.StrictMode>
        <Resume>
            {expBlocksElem}
            {skillBarBlockElem}
            {skillPieBlockElem}
            {interestBlockElem}
        </Resume>
    </React.StrictMode>,
    document.getElementById('root')
);
