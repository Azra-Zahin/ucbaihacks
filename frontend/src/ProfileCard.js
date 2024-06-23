import React from 'react';
import './ProfileCard.css';
import profile from './profile-pic.jpg';
import member1 from './member1.jpg';
import member2 from './member2.png';

const ProfileCard = () => {
  return (
    <div className="container">
      <div className="card">
        <img 
          src={profile} 
          alt="Ethan Feiges" 
          className="profile-image" 
        />
        <div className="text-box">
          <div className="name">Ethan Feiges</div>
          <div className="text">College: UW-Madison</div>
          <div className="text">Major: CS</div>
          <div className="text">Year: Sophomore</div>
          <div className="text">Age: 19</div>
        </div>
        <div className="content">
          <p className="contentHeader">Ethan's Current Project:</p>         
          <p className="contentText"><strong>Focus:</strong> Designing an AI model to predict baseball games.</p>
          <p className="contentText"><strong>Goal:</strong> $1,000 prize</p>
          <p className="contentText">Other members:</p>
          <div className="all-profiles">
            <div className="profile-image">
              <img src={member1} alt="Member 1" data-hover-text="Faroq Role/Info"/>
              <div className="middle">
              
                <div className="text">Faroq Role/Info</div>
              </div>
            </div>
            <div className="profile-image">
              <img src={member2} alt="Member 2" data-hover-text="Jared Role/Info"/>
              <div className="middle">
                <div className="text">Jared Role/Info</div>
              </div>
            </div>
          </div>
        </div>             
          </div>
        <div class="tech-stack">
        <h3>Tech stack:</h3>
        <p>1-2 sentence sales pitch on what you're looking for.</p>
        <h4>Looking for:</h4>
        <div class="looking-for-buttons">
            <button class="button-disabled">Full stack</button>
            <button class="button-disabled">AI</button>
            <button class="button-active">Presenter</button>
            <button class="button-active">NodeJS</button>
            <button class="button-active">API</button>
            <button class="button-disabled">Join project</button>
        </div>
    </div>
    <div class="prior-experience">
        <h3>Prior experience:</h3>
        <ul>
            <li>Node JS - 1 year</li>
            <li>UW-Madison Hackathon</li>
            <li>Transformer Networks</li>
            <li>SWE at Tinder</li>
            <li>Research with Joe Biden</li>
        </ul>
    </div>    
        
    </div>
      
  
  );
};

export default ProfileCard;
