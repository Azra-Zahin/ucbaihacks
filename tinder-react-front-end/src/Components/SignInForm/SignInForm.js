// src/Components/SignInForm/SignInForm.jsx
import React from 'react';
import './SignInForm.css';

function SignInForm({ onClose }) {
  return (
    <div className="signin-form-overlay">
      <div className="signin-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="signin-heading">SIGN IN</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
