import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center logo-hover">
      <div className="w-28 h-28 logo-rotate">
        <img src="/lovable-uploads/3186012e-690d-472f-9aa8-9aee10aac758.png" alt="DEC Experts Logo" className="w-full h-full object-contain   -ml-3" />
      </div>
      <div className="text-1xl font-orbitron font-semibold tracking-wide -ml-4">
  <span className="text-brand-gold">DEC</span>
  <span className="text-brand-navy">Experts</span>
</div>

    </Link>
  );
};

export default Logo;
