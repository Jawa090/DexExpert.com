import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

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
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-2">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              
              {/* Design & Engineering Dropdown */}
              <div className="relative group">
                <NavLink to="#" className="nav-link flex items-center">
                  <span>Design & Engineering</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </NavLink>
                <div className="dropdown w-[500px]">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Core Design Services</h3>
                        <NavLink to="/services/design/architectural-design" className="dropdown-item">
                          Architectural Design
                        </NavLink>
                        <NavLink to="/services/design/structural-engineering" className="dropdown-item">
                          Structural Engineering
                        </NavLink>
                        <NavLink to="/services/design/mep-design" className="dropdown-item">
                          MEP Design (HVAC, Electrical, Plumbing)
                        </NavLink>
                        <NavLink to="/services/design/interior-design" className="dropdown-item">
                          Interior Design
                        </NavLink>
                      </div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Advanced Modeling & Tech</h3>
                        <NavLink to="/services/design/bim-services" className="dropdown-item">
                          BIM Services (Revit, Navisworks)
                        </NavLink>
                        <NavLink to="/services/design/3d-rendering" className="dropdown-item">
                          3D Rendering & Visualization
                        </NavLink>
                        <NavLink to="/services/design/virtual-reality" className="dropdown-item">
                          Virtual Reality Walkthroughs
                        </NavLink>
                      </div>
                    </div>
                    <div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Compliance & Feasibility</h3>
                        <NavLink to="/services/design/permitting" className="dropdown-item">
                          Permitting & Code Compliance
                        </NavLink>
                        <NavLink to="/services/design/feasibility" className="dropdown-item">
                          Feasibility Studies
                        </NavLink>
                        <NavLink to="/services/design/sustainable-design" className="dropdown-item">
                          Sustainable Design (LEED, Green Building)
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Estimating Services Dropdown */}
              <div className="relative group">
                <NavLink to="#" className="nav-link flex items-center">
                  <span>Estimating Services</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </NavLink>
                <div className="dropdown w-[500px]">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Quantity Takeoffs</h3>
                        <NavLink to="/services/estimating/concrete-takeoffs" className="dropdown-item">
                          Concrete Takeoffs
                        </NavLink>
                        <NavLink to="/services/estimating/mep-takeoffs" className="dropdown-item">
                          MEP Takeoffs (HVAC, Electrical, Plumbing)
                        </NavLink>
                        <NavLink to="/services/estimating/steel-takeoffs" className="dropdown-item">
                          Steel & Rebar Takeoffs
                        </NavLink>
                      </div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Cost Estimating</h3>
                        <NavLink to="/services/estimating/conceptual-estimating" className="dropdown-item">
                          Conceptual Estimating
                        </NavLink>
                        <NavLink to="/services/estimating/bid-estimating" className="dropdown-item">
                          Bid Estimating
                        </NavLink>
                        <NavLink to="/services/estimating/change-order" className="dropdown-item">
                          Change Order Estimates
                        </NavLink>
                      </div>
                    </div>
                    <div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Specialized Estimating</h3>
                        <NavLink to="/services/estimating/civil-estimating" className="dropdown-item">
                          Civil Estimating (Roads, Bridges)
                        </NavLink>
                        <NavLink to="/services/estimating/green-estimating" className="dropdown-item">
                          Green Building Estimating (LEED)
                        </NavLink>
                        <NavLink to="/services/estimating/labor-equipment" className="dropdown-item">
                          Labor & Equipment Cost Analysis
                        </NavLink>
                      </div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Software & Reporting</h3>
                        <NavLink to="/services/estimating/planswift" className="dropdown-item">
                          Planswift & OST
                        </NavLink>
                        <NavLink to="/services/estimating/bluebeam" className="dropdown-item">
                          Bluebeam Revu Estimating
                        </NavLink>
                        <NavLink to="/services/estimating/boq" className="dropdown-item">
                          BOQ Preparation
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Construction Management Dropdown */}
              <div className="relative group">
                <NavLink to="#" className="nav-link flex items-center">
                  <span>Construction Management</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </NavLink>
                <div className="dropdown w-[500px]">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Project Execution</h3>
                        <NavLink to="/services/construction/planning-scheduling" className="dropdown-item">
                          Construction Planning & Scheduling
                        </NavLink>
                        <NavLink to="/services/construction/site-supervision" className="dropdown-item">
                          Site Supervision
                        </NavLink>
                        <NavLink to="/services/construction/subcontractor" className="dropdown-item">
                          Subcontractor Coordination
                        </NavLink>
                      </div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Technology & Innovation</h3>
                        <NavLink to="/services/construction/drone-surveys" className="dropdown-item">
                          Drone Surveys
                        </NavLink>
                        <NavLink to="/services/construction/digital-twin" className="dropdown-item">
                          Digital Twin Solutions
                        </NavLink>
                        <NavLink to="/services/construction/gis-mapping" className="dropdown-item">
                          GIS Mapping
                        </NavLink>
                      </div>
                    </div>
                    <div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Safety & Compliance</h3>
                        <NavLink to="/services/construction/safety-management" className="dropdown-item">
                          Safety Management (OSHA)
                        </NavLink>
                        <NavLink to="/services/construction/quality-assurance" className="dropdown-item">
                          Quality Assurance (QA/QC)
                        </NavLink>
                      </div>
                      <div className="dropdown-section">
                        <h3 className="dropdown-section-title">Financial & Legal</h3>
                        <NavLink to="/services/construction/contract-admin" className="dropdown-item">
                          Contract Administration
                        </NavLink>
                        <NavLink to="/services/construction/cost-control" className="dropdown-item">
                          Cost Control
                        </NavLink>
                        <NavLink to="/services/construction/claims-management" className="dropdown-item">
                          Claims Management
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
              
              <NavLink to="/blog" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Blog
              </NavLink>
            </div>
            
            {/* Mobile Menu Trigger */}
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
            
            {/* Design & Engineering */}
            <li>
              <button 
                className="flex justify-between items-center w-full py-2 px-3 text-lg text-brand-dark"
                onClick={() => toggleSubmenu('design')}
              >
                <span>Design & Engineering</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSubmenu === 'design' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-submenu pl-4 ${openSubmenu === 'design' ? 'open' : ''}`}>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Core Design Services</h3>
                  <NavLink to="/services/design/architectural-design" className="block py-2 px-3 text-gray-700">
                    Architectural Design
                  </NavLink>
                  <NavLink to="/services/design/structural-engineering" className="block py-2 px-3 text-gray-700">
                    Structural Engineering
                  </NavLink>
                  <NavLink to="/services/design/mep-design" className="block py-2 px-3 text-gray-700">
                    MEP Design
                  </NavLink>
                  <NavLink to="/services/design/interior-design" className="block py-2 px-3 text-gray-700">
                    Interior Design
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Advanced Modeling & Tech</h3>
                  <NavLink to="/services/design/bim-services" className="block py-2 px-3 text-gray-700">
                    BIM Services
                  </NavLink>
                  <NavLink to="/services/design/3d-rendering" className="block py-2 px-3 text-gray-700">
                    3D Rendering
                  </NavLink>
                  <NavLink to="/services/design/virtual-reality" className="block py-2 px-3 text-gray-700">
                    Virtual Reality
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Compliance & Feasibility</h3>
                  <NavLink to="/services/design/permitting" className="block py-2 px-3 text-gray-700">
                    Permitting & Code
                  </NavLink>
                  <NavLink to="/services/design/feasibility" className="block py-2 px-3 text-gray-700">
                    Feasibility Studies
                  </NavLink>
                  <NavLink to="/services/design/sustainable-design" className="block py-2 px-3 text-gray-700">
                    Sustainable Design
                  </NavLink>
                </div>
              </div>
            </li>
            
            {/* Estimating Services */}
            <li>
              <button 
                className="flex justify-between items-center w-full py-2 px-3 text-lg text-brand-dark"
                onClick={() => toggleSubmenu('estimating')}
              >
                <span>Estimating Services</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSubmenu === 'estimating' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-submenu pl-4 ${openSubmenu === 'estimating' ? 'open' : ''}`}>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Quantity Takeoffs</h3>
                  <NavLink to="/services/estimating/concrete-takeoffs" className="block py-2 px-3 text-gray-700">
                    Concrete Takeoffs
                  </NavLink>
                  <NavLink to="/services/estimating/mep-takeoffs" className="block py-2 px-3 text-gray-700">
                    MEP Takeoffs
                  </NavLink>
                  <NavLink to="/services/estimating/steel-takeoffs" className="block py-2 px-3 text-gray-700">
                    Steel & Rebar Takeoffs
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Cost Estimating</h3>
                  <NavLink to="/services/estimating/conceptual-estimating" className="block py-2 px-3 text-gray-700">
                    Conceptual Estimating
                  </NavLink>
                  <NavLink to="/services/estimating/bid-estimating" className="block py-2 px-3 text-gray-700">
                    Bid Estimating
                  </NavLink>
                  <NavLink to="/services/estimating/change-order" className="block py-2 px-3 text-gray-700">
                    Change Order Estimates
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Specialized Estimating</h3>
                  <NavLink to="/services/estimating/civil-estimating" className="block py-2 px-3 text-gray-700">
                    Civil Estimating
                  </NavLink>
                  <NavLink to="/services/estimating/green-estimating" className="block py-2 px-3 text-gray-700">
                    Green Building Estimating
                  </NavLink>
                  <NavLink to="/services/estimating/labor-equipment" className="block py-2 px-3 text-gray-700">
                    Labor & Equipment Analysis
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Software & Reporting</h3>
                  <NavLink to="/services/estimating/planswift" className="block py-2 px-3 text-gray-700">
                    Planswift & OST
                  </NavLink>
                  <NavLink to="/services/estimating/bluebeam" className="block py-2 px-3 text-gray-700">
                    Bluebeam Revu
                  </NavLink>
                  <NavLink to="/services/estimating/boq" className="block py-2 px-3 text-gray-700">
                    BOQ Preparation
                  </NavLink>
                </div>
              </div>
            </li>
            
            {/* Construction Management */}
            <li>
              <button 
                className="flex justify-between items-center w-full py-2 px-3 text-lg text-brand-dark"
                onClick={() => toggleSubmenu('construction')}
              >
                <span>Construction Management</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSubmenu === 'construction' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-submenu pl-4 ${openSubmenu === 'construction' ? 'open' : ''}`}>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Project Execution</h3>
                  <NavLink to="/services/construction/planning-scheduling" className="block py-2 px-3 text-gray-700">
                    Planning & Scheduling
                  </NavLink>
                  <NavLink to="/services/construction/site-supervision" className="block py-2 px-3 text-gray-700">
                    Site Supervision
                  </NavLink>
                  <NavLink to="/services/construction/subcontractor" className="block py-2 px-3 text-gray-700">
                    Subcontractor Coordination
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Technology & Innovation</h3>
                  <NavLink to="/services/construction/drone-surveys" className="block py-2 px-3 text-gray-700">
                    Drone Surveys
                  </NavLink>
                  <NavLink to="/services/construction/digital-twin" className="block py-2 px-3 text-gray-700">
                    Digital Twin Solutions
                  </NavLink>
                  <NavLink to="/services/construction/gis-mapping" className="block py-2 px-3 text-gray-700">
                    GIS Mapping
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Safety & Compliance</h3>
                  <NavLink to="/services/construction/safety-management" className="block py-2 px-3 text-gray-700">
                    Safety Management
                  </NavLink>
                  <NavLink to="/services/construction/quality-assurance" className="block py-2 px-3 text-gray-700">
                    Quality Assurance
                  </NavLink>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-brand-navy mb-2 px-3">Financial & Legal</h3>
                  <NavLink to="/services/construction/contract-admin" className="block py-2 px-3 text-gray-700">
                    Contract Administration
                  </NavLink>
                  <NavLink to="/services/construction/cost-control" className="block py-2 px-3 text-gray-700">
                    Cost Control
                  </NavLink>
                  <NavLink to="/services/construction/claims-management" className="block py-2 px-3 text-gray-700">
                    Claims Management
                  </NavLink>
                </div>
              </div>
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
