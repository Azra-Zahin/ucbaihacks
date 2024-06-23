// src/Components/LandingPage/LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import SignUpForm from '../SignUpForm/SignUpForm';

const LandingPage = () => {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleCreateAccountClick = () => {
        setShowSignUp(true);
    };

    const handleClose = () => {
        setShowSignUp(false);
    };

    return (
        <div className="landing-page">
            <h1><span className="bold">It Starts</span> <span className="unbold">with a</span> <span className="bold">Swipe</span></h1>
            <div className="content">
                <p className="terms-text">
                    By tapping ‘Create account’ or ‘Sign in’ you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
                </p>
                <div className="buttons">
                    <button onClick={handleCreateAccountClick} className="button create-account">Create account</button>
                    <Link to="/home" className="button sign-in">Sign In</Link>
                    <Link to="/home" className="trouble-signing-in">Trouble signing in?</Link>
                </div>
            </div>
            {showSignUp && <SignUpForm onClose={handleClose} />}
        </div>
    );
}

export default LandingPage;





