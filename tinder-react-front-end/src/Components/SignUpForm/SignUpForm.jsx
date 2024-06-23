// src/SignUpForm.js
import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm({ onClose }) {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [hasProject, setHasProject] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');
  const [projectMembers, setProjectMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);

  // Hypothetical existing members
  const existingMembers = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5'
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSkillChange = (event) => {
    const selectedSkill = event.target.value;
    if (skills.includes(selectedSkill)) {
      setSkills(skills.filter(skill => skill !== selectedSkill));
    } else {
      setSkills([...skills, selectedSkill]);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = existingMembers.filter(member =>
        member.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMembers(filtered);
    } else {
      setFilteredMembers([]);
    }
  };

  const handleMemberSelect = (member) => {
    if (!projectMembers.includes(member) && projectMembers.length < 3) {
      setProjectMembers([...projectMembers, member]);
    }
    setSearchTerm('');
    setFilteredMembers([]);
  };

  const handleMemberRemove = (member) => {
    setProjectMembers(projectMembers.filter(m => m !== member));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, including file upload and skills
    if (file) {
      console.log('File:', file);
    } else {
      console.log('No file selected');
    }
    console.log('Selected Skills:', skills);
    if (hasProject) {
      console.log('Project Description:', projectDescription);
      console.log('Project Members:', projectMembers);
    }
    // Other form data handling logic
  };

  return (
    <div className="signup-form-overlay">
      <div className="signup-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="signup-heading">CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Name" required />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <label>Upload Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <label>List your skills</label>
          <div className="skills-container">
            {[
              "Web Development",
              "Machine Learning",
              "Data Science",
              "Cybersecurity",
              "Mobile App Development",
              "Cloud Computing",
              "Blockchain",
              "AI/Deep Learning",
              "Game Development",
              "DevOps",
            ].map((skill) => (
              <label key={skill} className="skill-label">
                <input
                  type="checkbox"
                  value={skill}
                  checked={skills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </div>
          <label>Do you have a project?</label>
          <div className="project-option">
            <label>
              <input
                type="radio"
                value="yes"
                checked={hasProject === true}
                onChange={() => setHasProject(true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={hasProject === false}
                onChange={() => setHasProject(false)}
              />
              No
            </label>
          </div>
          {hasProject && (
            <>
              <label>Project Description</label>
              <textarea
                placeholder="Describe your project"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
              <label>Project Members</label>
              <input
                type="text"
                placeholder="Search members"
                value={searchTerm}
                onChange={handleSearchChange}
                className="project-members-search"
              />
              <ul className="project-members-dropdown">
                {filteredMembers.map((member) => (
                  <li key={member} onClick={() => handleMemberSelect(member)}>
                    {member}
                  </li>
                ))}
              </ul>
              <div className="project-members-list">
                {projectMembers.map((member) => (
                  <div key={member} className="project-member">
                    {member} <button onClick={() => handleMemberRemove(member)}>Remove</button>
                  </div>
                ))}
              </div>
            </>
          )}
          <button type="submit">SIGN UP</button>
        </form>
        {file && (
          <div className="file-details">
            <h3>File Details:</h3>
            <p>Name: {file.name}</p>
            <p>Type: {file.type}</p>
            <p>Size: {file.size} bytes</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpForm;
