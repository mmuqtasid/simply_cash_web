import React from 'react';
import './Profile.css';

const Profile = ({ username, profilePicture  }) => {
  return (
    <div className="profile">
        <span className='username'>{username}</span>
      <img src={profilePicture} alt="Profile" />
      
    </div>
  );
};

export default Profile;
