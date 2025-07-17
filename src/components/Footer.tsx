
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="footer-title">About Us</h3>
            <div className="flex items-center mb-4">
              {/* <img 
                src="/lovable-uploads/3186012e-690d-472f-9aa8-9aee10aac758.png" 
                alt="DEC Experts Logo" 
                className="w-10 h-10 mr-2"
              /> */}
   <div className="text-1xl font-orbitron font-semibold tracking-wide">
  <span className="text-white">DEC</span>
  <span className="text-brand-gold ml-1">Experts</span>
</div>


</div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for design, estimating, and construction management solutions, delivering excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
        <div>
  <h3 className="footer-title">Our Services</h3>
  <ul className="space-y-2">
    <li>
      <Link to="/services/design/architectural-design" className="footer-link">Design & Engineering</Link>
    </li>
    <li>
      <Link to="/services/estimating/concrete-takeoffs" className="footer-link">Estimating Services</Link>
    </li>
    <li>
      <Link to="/services/construction/planning-scheduling" className="footer-link">Construction Management</Link>
    </li>

    {/* Add more popular services */}
    <li>
      <Link to="/services/design/interior-design" className="footer-link">Interior Design</Link>
    </li>
    <li>
      <Link to="/services/estimating/structural-estimating" className="footer-link">Structural Estimating</Link>
    </li>
    <li>
      <Link to="/services/construction/safety-management" className="footer-link">Safety Management</Link>
    </li>

    {/* "View All Services" link */}
    <li>
      <Link to="/services" className="footer-link font-semibold text-primary hover:underline">
        View All Services →
      </Link>
    </li>
  </ul>
</div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 bg-slate-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 border border-slate-700 transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-medium py-2 rounded-md hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
  <p className="text-gray-500 text-sm mb-4 md:mb-0">
    © {new Date().getFullYear()} DECExperts. All rights reserved.
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors" aria-label="Privacy Policy">
      Privacy Policy
    </a>
    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors" aria-label="Terms of Service">
      Terms of Service
    </a>
    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors" aria-label="Cookie Policy">
      Cookie Policy
    </a>
  </div>
</div>
      </div>
    </footer>
  );
};
export default Footer;
