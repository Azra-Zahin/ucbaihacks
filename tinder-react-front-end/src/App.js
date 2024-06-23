import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import './App.css';
import profilePic from './profile-pic.jpg';

const profile = {
  image: profilePic,
  name: 'Ethan Feiges',
  school: 'UW-Madison',
  major: 'CS',
  skills: 'Node JS, Transformer Networks, React, Python, etc.',
  experience: 'Node JS - 1 year, UW-Madison Hackathon, Transformer Networks, SWE at Tinder, Research with Joe Biden',
  interests: 'Designing AI models, Predictive analytics, Baseball statistics, Machine learning' 
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={
            <>
              <Header />
              <div className="content-container">
                <ProfileCard profile={profile} />
              </div>
              <SwipeButtons />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header />
              <ProfilePage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





