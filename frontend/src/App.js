import React from 'react';
import ProfileCard from './ProfileCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={
            <>
              <Header />
              <ProfileCard />
              <SwipeButtons />
            </>
          } />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;