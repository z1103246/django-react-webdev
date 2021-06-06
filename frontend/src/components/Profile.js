import React from 'react';

const Profile = (props) => {

    if (props.faIcon) {
        return  <div className='photo'>
                    <i className={`fa fa-${props.faIcon}`}></i>
                </div>
    } else {
        return <div className='info'>
                    <h1 className='name'>
                        {props.name}
                    </h1>
                    <h2 className='job'>
                        {props.job}
                    </h2>
               </div>
    }
};

export default Profile;