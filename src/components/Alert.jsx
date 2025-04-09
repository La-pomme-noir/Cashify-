import React from 'react';
import '../styles/global.css';

const Alert = ({ message, type = 'success', onClose }) => {
  return (
    <div className={`alert alert--${type}`}>
      <span>{message}</span>
      <button className="alert__close" onClick={onClose}>
        <i className="fa-solid fa-times"></i>
      </button>
    </div>
  );
};

export default Alert;