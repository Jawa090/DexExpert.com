import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const serviceCategories = [
  {
    title: 'Quantity Takeoff Services',
    items: [
      { label: 'Concrete Estimating Service (Footings, Slabs, Columns)', path: '/services/quantity-takeoff/concrete-estimating' },
      { label: 'Masonry Estimating Services (Brickwork, Blockwork)', path: '/services/quantity-takeoff/masonry-estimating' },
      { label: 'Structural & Reinforcing Steel', path: '/services/quantity-takeoff/structural-steel' },
      { label: 'Carpentry, Millwork & Cabinetry', path: '/services/quantity-takeoff/carpentry-millwork' },
      { label: 'Drywall & Insulation', path: '/services/quantity-takeoff/drywall-insulation' },
      { label: 'Roofing & Waterproofing', path: '/services/quantity-takeoff/roofing-waterproofing' },
      { label: 'Flooring (Tile, Wood, Carpet)', path: '/services/quantity-takeoff/flooring' },
      { label: 'Doors, Windows & Glazing', path: '/services/quantity-takeoff/doors-windows' },
      { label: 'MEP Systems (Mechanical, Electrical, Plumbing)', path: '/services/quantity-takeoff/mep-systems' },
      { label: 'Sitework, Earthworks, Landscaping, Utilities', path: '/services/quantity-takeoff/sitework' },
    ],
  },
  {
    title: 'Cost Estimation Services',
    items: [
      { label: 'Preliminary / Budget Estimates', path: '/services/cost-estimation/preliminary-budget' },
      { label: 'Detailed Estimates (Schematic, DD, CD)', path: '/services/cost-estimation/detailed' },
      { label: 'Bid Estimates (Tendering)', path: '/services/cost-estimation/bid' },
      { label: 'Conceptual Estimating', path: '/services/cost-estimation/conceptual' },
      { label: 'Labor & Equipment Rate Analysis', path: '/services/cost-estimation/labor-equipment' },
      { label: 'Life-Cycle Cost Analysis', path: '/services/cost-estimation/life-cycle' },
      { label: 'Value Engineering Support', path: '/services/cost-estimation/value-engineering' },
      { label: 'Change Order Estimates', path: '/services/cost-estimation/change-order' },
    ],
  },
  {
    title: 'Specialized Estimating',
    items: [
      { label: 'Trade-Specific (HVAC, Electrical, Plumbing)', path: '/services/specialized/trade-specific' },
      { label: 'Civil & Infrastructure Projects', path: '/services/specialized/civil-infrastructure' },
      { label: 'Residential / Commercial / Industrial', path: '/services/specialized/residential-commercial' },
      { label: 'Green Building / LEED Estimating', path: '/services/specialized/green-building' },
    ],
  },
  {
    title: 'Software-Based Estimating',
    items: [
      { label: 'On-Screen Takeoff (OST)', path: '/services/software/on-screen-takeoff' },
      { label: 'Bluebeam Revu', path: '/services/software/bluebeam-revu' },
      { label: 'Planswift', path: '/services/software/planswift' },
      { label: 'RSMeans Integration', path: '/services/software/rsmeans' },
      { label: 'Microsoft Excel Estimating Models', path: '/services/software/excel-models' },
      { label: 'CostX / Trimble / STACK', path: '/services/software/costx-trimble-stack' },
      { label: 'ProEst / CoConstruct / Buildertrend', path: '/services/software/proest-coconstruct' },
    ],
  },
  {
    title: 'Documentation & Reporting',
    items: [
      { label: 'Bill of Quantities (BOQ)', path: '/services/documentation/boq' },
      { label: 'Material Cost Reports', path: '/services/documentation/material-cost' },
      { label: 'Vendor Comparison Reports', path: '/services/documentation/vendor-comparison' },
      { label: 'Bid Package Preparation', path: '/services/documentation/bid-package' },
      { label: 'Cost Breakdown Structures (CBS)', path: '/services/documentation/cbs' },
      { label: 'Historical Cost Database', path: '/services/documentation/historical-cost' },
    ],
  },
  {
    title: 'Project Support Services',
    items: [
      { label: 'Scope Gap Analysis', path: '/services/support/scope-gap' },
      { label: 'Subcontractor Quote Review', path: '/services/support/subcontractor-quote' },
      { label: 'Estimate Validation & Peer Review', path: '/services/support/estimate-validation' },
      { label: 'Project Cost Benchmarking', path: '/services/support/benchmarking' },
      { label: 'Cash Flow Forecasting', path: '/services/support/cash-flow' },
    ],
  },
  {
    title: 'Construction Management',
    items: [
      { label: 'Project Execution', path: '/services/construction/project-execution' },
      { label: 'Planning & Scheduling', path: '/services/construction/planning-scheduling' },
      { label: 'Site Supervision', path: '/services/construction/site-supervision' },
      { label: 'Subcontractor Coordination', path: '/services/construction/subcontractor-coordination' },
      { label: 'Technology & Innovation', path: '/services/construction/technology-innovation' },
      { label: 'Safety & Compliance', path: '/services/construction/safety-compliance' },
      { label: 'Financial & Legal', path: '/services/construction/financial-legal' },
    ],
  },
];

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-gradient-to-r from-brand-navy to-brand-gold text-white py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-base font-medium">
          <div className="mb-2 sm:mb-0">
            <span className="typewriter-message inline-block">
              We can help you to build your project!
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 group">
              <Mail size={20} className="text-brand-gold group-hover:scale-110 transition-transform duration-300" />
              <a 
                href="mailto:info@decexperts.com" 
                className="hover:text-brand-gold transition-colors duration-300"
              >
                info@decexperts.com
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone size={20} className="text-brand-gold group-hover:scale-110 transition-transform duration-300" />
              <a 
                href="tel:+1234567890" 
                className="hover:text-brand-gold transition-colors duration-300"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-30 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8 w-full">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              {/* Desktop Navigation - moved left, after logo */}
              <div className="hidden lg:flex space-x-2">
                <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
                {/* Services Dropdown - as previously structured */}
                <div className="relative group">
                  <NavLink to="#" className="nav-link flex items-center">
                    <span>Services</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </NavLink>
                  <div className="dropdown w-[900px] max-h-[700px] overflow-y-auto">
                    <div className="p-4 space-y-4">
                      {chunkArray(serviceCategories, 3).map((row, rowIdx) => (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3" key={rowIdx}>
                          {row.map((cat) => (
                            <div className="dropdown-section mb-2" key={cat.title}>
                              <h3 className="dropdown-section-title font-bold text-base mb-1">{cat.title}</h3>
                              {cat.items.slice(0, 3).map((item) => (
                                <NavLink to={item.path} className="dropdown-item py-1 px-2 text-sm" key={item.path}>{item.label}</NavLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-2">
                      <NavLink to="/services" className="bg-brand-gold hover:bg-brand-navy text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md text-sm">Explore All Services</NavLink>
                    </div>
                  </div>
                </div>
                <NavLink to="/portfolio" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Portfolio</NavLink>
                <NavLink to="/samples" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Download Samples</NavLink>
                <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
                <NavLink to="/blog" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Blog</NavLink>
              </div>
            </div>
            {/* Mobile Menu Trigger remains on the right */}
            <div className="lg:hidden">
              <button 
                className="p-2 rounded-md text-brand-navy hover:bg-brand-light"
                onClick={toggleMobileMenu}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : 'closed'} lg:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <Logo />
          <button 
            className="p-2 rounded-md text-brand-navy"
            onClick={toggleMobileMenu}
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => `block py-2 px-3 text-lg ${isActive ? 'text-brand-navy font-semibold' : 'text-brand-dark'}`}
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            
            {/* Services Dropdown - Show only 3 per category, then Explore Services button */}
            <li>
              <button 
                className="flex justify-between items-center w-full py-2 px-3 text-lg text-brand-dark"
                onClick={() => toggleSubmenu('services')}
              >
                <span>Services</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSubmenu === 'services' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-submenu pl-4 ${openSubmenu === 'services' ? 'open' : ''}`}>
                {serviceCategories.map((cat) => (
                  <div className="pt-2" key={cat.title}>
                    <h3 className="font-semibold text-brand-navy mb-2 px-3">{cat.title}</h3>
                    {cat.items.slice(0, 3).map((item) => (
                      <NavLink to={item.path} className="block py-2 px-3 text-gray-700" key={item.path}>{item.label}</NavLink>
                    ))}
                  </div>
                ))}
                <div className="flex justify-center mt-4">
                  <NavLink to="/services" className="bg-brand-gold hover:bg-brand-navy text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md">Explore All Services</NavLink>
                </div>
              </div>
            </li>
            
            <li>
              <NavLink 
                to="/portfolio" 
                className={({isActive}) => `block py-2 px-3 text-lg ${isActive ? 'text-brand-navy font-semibold' : 'text-brand-dark'}`}
                onClick={toggleMobileMenu}
              >
                Portfolio
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/download" 
                className={({isActive}) => `block py-2 px-3 text-lg ${isActive ? 'text-brand-navy font-semibold' : 'text-brand-dark'}`}
                onClick={toggleMobileMenu}
              >
                Download
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/samples" 
                className={({isActive}) => `block py-2 px-3 text-lg ${isActive ? 'text-brand-navy font-semibold' : 'text-brand-dark'}`}
                onClick={toggleMobileMenu}
              >
                Samples
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/contact" 
                className={({isActive}) => `block py-2 px-3 text-lg ${isActive ? 'text-brand-navy font-semibold' : 'text-brand-dark'}`}
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/blog" 
                className={({isActive}) => `block py-2 px-3 text-lg ${isActive ? 'text-brand-navy font-semibold' : 'text-brand-dark'}`}
                onClick={toggleMobileMenu}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
