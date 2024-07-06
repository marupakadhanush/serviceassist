import React from 'react';
import logo from '../SideBar/image.png';
import './index.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          <i className="fas fa-times"></i>
        </button>
        <img src={logo} alt="Logo" className="modal-logo" />
        <h2>The Voice Interface of AI</h2>
        <p>Create an account for a free 30 minutes of conversation time.</p>
        <div className="modal-buttons">
          <button className="google-button">Continue with Google</button>
          <span>or</span>
          <button className="login-button">Log in</button>
          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;