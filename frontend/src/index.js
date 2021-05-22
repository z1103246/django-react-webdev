import React from 'react';
import ReactDOM from 'react-dom';
import './resume.scss';

import Resume from './Resume';

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
    skillPies: [
        { percent: 50, name: 'React' },
        { percent: 60, name: 'Erlang' },
        { percent: 70, name: 'Python' },
        { percent: 95, name: 'React' }
    ],
    faIcon: 'keyboard',
    name: 'Software Skills'
};

ReactDOM.render(
    <React.StrictMode>
        <Resume expBlocks={expBlocks} skillBarBlock={skillBarBlock} skillPieBlock={skillPieBlock} />
    </React.StrictMode>,
    document.getElementById('root')
);
