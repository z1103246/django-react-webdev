import React from 'react';
import ReactDOM from 'react-dom';

import Block from './components/Block'
import SkillBar from './components/SkillBar';
import SkillPie from './components/SkillPie';
import ExpList from './components/ExpList';
import Interest from './components/Interest';

import { nanoid } from 'nanoid';

import './resume.scss';

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


const expBlocksElem = expBlocks.map((expBlock) =>
    <Block className={expBlock.className} name={expBlock.name} faIcon={expBlock.faIcon} key={nanoid()} >
        <ExpList experience={expBlock.experience} />
    </Block>
);

const skillBarBlockElem = (
    <Block className={skillBarBlock.className} name={skillBarBlock.name} faIcon={skillBarBlock.faIcon} >
        <ul>
            {
                skillBarBlock.skillBars.map((skillBar) =>
                    <SkillBar percent={skillBar.percent} name={skillBar.name} key={nanoid()} />
                )
            }
        </ul>
    </Block>
);

const skillPieBlockElem = (
    <Block className={skillPieBlock.className} name={skillPieBlock.name} faIcon={skillPieBlock.faIcon} >
        <ul>
            {
                skillPieBlock.skillPies.map((skillPie) =>
                    <SkillPie percent={skillPie.percent} name={skillPie.name} key={nanoid()} />
                )
            }
        </ul>
    </Block>
);

const interestBlockElem = (
    <Block className={interestBlock.className} name={interestBlock.name} faIcon={interestBlock.faIcon}>
        <div className="interests-items">
            {
                interestBlock.interestItems.map((interest) =>
                    <Interest name={interest.name} faIcon={interest.faIcon} key={nanoid()} />
                )
            }
        </div>
    </Block>
);

const profileBlocks = [
    {
        className: 'photo',
        faIcon: 'coffee'
    },
    {
        className: 'info',
        name: 'Daniel Kim',
        job: 'Freelance Consultant'
    }
];

const aboutBlock = {
    className: 'about',

    text: 'I\'m a freelance consultant for Upwork, specializing in backend development,\
            formal verification, and research mathematics. Experienced with Python, Java, C/C++, Rust, \
            theorem provers (e.g., Arend), and technical writing.',
}

const contactBlock = {
    className: 'contact',

    lines: [
        { faIcon:'phone', text:'(480) 717-0165', href:''},
        { faIcon: 'envelope', text:'ddk576@utexas.edu', href:''},
        { faIcon: 'home', text:'', href:''}
    ],

};

const followBlock = {

};



ReactDOM.render(
    <React.StrictMode>
        <div className="resume">
            <div className="base">
                {profileBlockElem}
                {aboutBlockElem}
                {contactBlockElem}
                {followBlockElem}
            </div>
            <div className="func">
                {expBlocksElem}
                {skillBarBlockElem}
                {skillPieBlockElem}
                {interestBlockElem}
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
