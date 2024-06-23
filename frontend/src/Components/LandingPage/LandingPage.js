import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1><span className="bold">It Starts</span> <span className="unbold">with a</span> <span className="bold">Swipe</span></h1>
            <div className="content">
                <p className="terms-text">
                    By tapping ‘Create account’ or ‘Sign in’ you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
                </p>
                <div className="buttons">
                    <Link to="/home" className="button create-account">Create account</Link>
                    <Link to="/home" className="button sign-in">Sign In</Link>
                    <Link to="/home" className="trouble-signing-in">Trouble signing in?</Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;




