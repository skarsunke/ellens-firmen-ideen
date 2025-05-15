import React from 'react';

export const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};
