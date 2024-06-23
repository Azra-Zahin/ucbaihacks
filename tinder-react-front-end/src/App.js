import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={
            <>
              <Header />
              <SwipeButtons />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header />
              <ProfilePage />
            </>
          } />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;




