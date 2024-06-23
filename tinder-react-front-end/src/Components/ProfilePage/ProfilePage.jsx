// src/Components/ProfilePage/ProfilePage.jsx

import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [currentSkills, setCurrentSkills] = useState('');
  const [desiredSkills, setDesiredSkills] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [interests, setInterests] = useState('');
  const [linkedinURL, setLinkedinURL] = useState('');
  const [githubURL, setGithubURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-input">
          <label>Current Skills</label>
          <textarea 
            value={currentSkills} 
            onChange={(e) => setCurrentSkills(e.target.value)} 
            disabled={!isEditing} 
            placeholder="E.g., JavaScript, React, Node.js" 
          />
        </div>
        <div className="profile-input">
          <label>School & Major</label>
          <textarea 
            value={desiredSkills} 
            onChange={(e) => setDesiredSkills(e.target.value)} 
            disabled={!isEditing} 
            placeholder="E.g., San Jose State University, Design 24'" 
          />
        </div>
        <div className="profile-input">
          <label>Prior Experience</label>
          <textarea 
            value={workExperience} 
            onChange={(e) => setWorkExperience(e.target.value)} 
            disabled={!isEditing} 
            placeholder="E.g., CalHacks 2024 runner up, 2 years at ABC Ltd" 
          />
        </div>
        <div className="profile-input">
          <label>Interests / Focus Area</label>
          <textarea 
            name="interests" 
            value={interests} 
            onChange={(e) => setInterests(e.target.value)} 
            disabled={!isEditing} 
            placeholder="E.g., Designing AI Models, Front End Web Development" 
          />
        </div>
        <div className="profile-input">
          <label>LinkedIn URL</label>
          <input 
            type="text" 
            value={linkedinURL} 
            onChange={(e) => setLinkedinURL(e.target.value)} 
            disabled={!isEditing} 
            placeholder="https://www.linkedin.com/in/yourprofile" 
          />
        </div>
        <div className="profile-input">
          <label>GitHub URL</label>
          <input 
            type="text" 
            value={githubURL} 
            onChange={(e) => setGithubURL(e.target.value)} 
            disabled={!isEditing} 
            placeholder="https://github.com/yourusername" 
          />
        </div>
        <div className="profile-buttons">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;




