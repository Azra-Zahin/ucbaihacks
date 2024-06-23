import React from 'react';
import './ProfileCard.css';
// import profile from './profile-pic.jpg';
// import member1 from './member1.jpg';
// import member2 from './member2.png';


const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="top-section">
        <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-image" />
        <div className="profile-description">
          <h2>{profile.name}</h2>
          <p>{profile.school} - {profile.major}</p>
        </div>
      </div>
      <div className="bottom-section">
        <h3>Current Skills</h3>
        <p>{profile.skills}</p>
        <h3>Prior Experience</h3>
        <p>{profile.experience}</p>
        <h3>Interests/Focus</h3>
        <p>{profile.interests}</p>
      </div>
    </div>
  );
};

export default ProfileCard;