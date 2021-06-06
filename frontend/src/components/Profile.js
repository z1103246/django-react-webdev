import React from 'react';

const Profile = (props) => {
    return (
        <div className="profile">
            <div className='photo'>
                <i className={`fa fa-${props.faIcon}`}></i>
            </div>
            <div className='info'>
                <h1 className='name'>
                    {props.name}
                </h1>
                <h2 className='job'>
                    {props.job}
                </h2>
            </div>
        </div>
    );
};

export default Profile;