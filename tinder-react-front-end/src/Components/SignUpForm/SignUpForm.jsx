// src/Components/SignUpForm/SignUpForm.jsx
import React from 'react';
import './SignUpForm.css';

function SignUpForm({ onClose }) {
  return (
    <div className="signup-form-overlay">
      <div className="signup-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="signup-heading">SIGN UP</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

