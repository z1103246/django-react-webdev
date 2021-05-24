import React from 'react';
import ReactDOM from 'react-dom';
import './resume.scss';

import Resume from './Resume';
import ListBlock from './ListBlock'
import SkillBar from './SkillBar';
import SkillPie from './SkillPie';
import ExpList from './ExpList';

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

<<<<<<< HEAD
const interestBlock = {
    interest_items: [
        { name: 'Art', faIcon: 'fas fa-palette'},
        { name: 'Books', faIcon: 'book'},
        { name: 'Movies', faIcon: 'film'},
        { name: 'Music', faIcon: 'headphones'},
        { name: 'Games', faIcon: 'gamepad'}
    ],
    name: 'Interests',
    faIcon: 'star'
};

ReactDOM.render(
    <React.StrictMode>
        <Resume expBlocks={expBlocks} skillBarBlock={skillBarBlock} skillPieBlock={skillPieBlock} interestBlock={interestBlock} />
=======
const expBlocksElem = expBlocks.map((expBlock) =>
    <ListBlock className={expBlock.className} name={expBlock.name} faIcon={expBlock.faIcon} >
        <ExpList experience={expBlock.experience} />
    </ListBlock>
);

const skillBarBlockElem = (
    <ListBlock className={skillBarBlock.className} name={skillBarBlock.name} faIcon={skillBarBlock.faIcon} >
        {
            skillBarBlock.skillBars.map((skillBar) =>
                <SkillBar percent={skillBar.percent} name={skillBar.name} />
            )
        }
    </ListBlock>
);

const skillPieBlockElem = (
    <ListBlock className={skillPieBlock.className} name={skillPieBlock.name} faIcon={skillPieBlock.faIcon} >
        {
            skillPieBlock.skillPies.map((skillPie) =>
                <SkillPie percent={skillPie.percent} name={skillPie.name} />
            )
        }
    </ListBlock>
);

ReactDOM.render(
    <React.StrictMode>
        <Resume>
            {expBlocksElem}
            {skillBarBlockElem}
            {skillPieBlockElem}
        </Resume>
>>>>>>> 5a51ded3b014fc1882289664f2aa22292d5dde01
    </React.StrictMode>,
    document.getElementById('root')
);
