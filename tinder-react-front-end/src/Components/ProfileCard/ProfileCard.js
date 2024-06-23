import React from 'react';
import './ProfileCard.css'; // Ensure you import the CSS

const ProfileCard = ({ profile, swipeClass }) => {
  return (
    <div className={`profile-card ${swipeClass}`}>
      <div className="top-section">
        <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-image" />
        <div className="profile-description">
          <h3>{profile.name}</h3>
          <p>{profile.school} - {profile.major}</p>
        </div>
      </div>
      <div className="bottom-section">
        <h3>Skills</h3>
        <p className="tech-stack">{profile.skills}</p>
        <h3>Experience</h3>
        <div className="experience">
          <ul>
            {profile.experience.split(',').map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>
        <h3>Interests</h3>
        <p>{profile.interests}</p>
      </div>
    </div>
  );
};

export default ProfileCard;