import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import './App.css';
import profilePic from './profile-pic.jpg';
import member1 from './Components/ProfileCard/member1.jpg';
import member2 from './Components/ProfileCard/member2.png';
const profiles = [
  {
    image: profilePic,
    name: 'Ethan Feiges',
    school: 'UW-Madison',
    major: 'CS',
    skills: 'Node JS, Transformer Networks, React, Python, etc.',
    experience: 'Node JS - 1 year, UW-Madison Hackathon, Transformer Networks, SWE at Tinder, Research with Joe Biden',
    interests: 'Designing AI models, Predictive analytics, Baseball statistics, Machine learning'
  },
  {
    image: member1,
    name: 'TEST',
    school: 'UW-Madison',
    major: 'CS',
    skills: 'Node JS, Transformer Networks, React, Python, etc.',
    experience: 'Node JS - 1 year, UW-Madison Hackathon, Transformer Networks, SWE at Tinder, Research with Joe Biden',
    interests: 'Designing AI models, Predictive analytics, Baseball statistics, Machine learning'
  },
  {
    image: member2,
    name: 'TEST',
    school: 'UW-Madison',
    major: 'CS',
    skills: 'Node JS, Transformer Networks, React, Python, etc.',
    experience: 'Node JS - 1 year, UW-Madison Hackathon, Transformer Networks, SWE at Tinder, Research with Joe Biden',
    interests: 'Designing AI models, Predictive analytics, Baseball statistics, Machine learning'
  }
];

function App() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipeClass, setSwipeClass] = useState('');

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setSwipeClass('swipe-left');
      setTimeout(() => {
        setCurrentProfileIndex((prevIndex) => (prevIndex === 0 ? profiles.length - 1 : prevIndex - 1));
        setSwipeClass('');
      }, 500); // Duration of the animation
    } else if (direction === 'right') {
      setSwipeClass('swipe-right');
      setTimeout(() => {
        setCurrentProfileIndex((prevIndex) => (prevIndex === profiles.length - 1 ? 0 : prevIndex + 1));
        setSwipeClass('');
      }, 500); // Duration of the animation
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={
            <>
              <Header />
              <div className="content-container">
                <ProfileCard profile={profiles[currentProfileIndex]} swipeClass={swipeClass} />
              </div>
              <SwipeButtons onSwipe={handleSwipe} />
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