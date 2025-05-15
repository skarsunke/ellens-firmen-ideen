import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`p-4 bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};
