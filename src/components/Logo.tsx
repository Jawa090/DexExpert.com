import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center logo-hover">
      <div className="w-48 h-48 logo-rotate">
        <img
          src="/uploads/logo.png"
          alt="DEC Experts Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
