
import React from 'react';
import { Link } from 'react-router-dom';

const ArchitecturalDesignPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Architectural Design Services
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Creative, functional, and sustainable architectural solutions that transform your vision into reality.
              </p>
              <Link to="/contact" className="bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-block">
                Request a Consultation
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Architectural Design" 
                className="rounded-lg shadow-lg w-full object-cover max-h-96"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Approach to Architectural Design</h2>
              <p className="text-lg text-gray-700 mb-6">
                At DECExperts, we believe that exceptional architecture is born from a deep understanding of our clients' needs, the specific site conditions, and the broader environmental and social context.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our architectural design services blend creativity with technical precision to create spaces that are not only aesthetically pleasing but also functional, sustainable, and tailored to your specific requirements.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're planning a new commercial building, a residential development, or renovating an existing structure, our team of experienced architects will guide you through every phase of the design process.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6">Our Design Process</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-2">Discovery & Programming</h4>
                    <p className="text-gray-700">
                      We begin by understanding your vision, requirements, and constraints through detailed consultations. This phase includes site analysis, budget discussions, and defining the project scope.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-2">Concept Development</h4>
                    <p className="text-gray-700">
                      Our architects develop initial design concepts that respond to your needs while considering spatial relationships, aesthetics, and functionality. We present multiple options with sketches and preliminary 3D visualizations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-2">Design Development</h4>
                    <p className="text-gray-700">
                      Once a concept is selected, we refine the design with detailed floor plans, elevations, and sections. Material selections, MEP systems, and structural considerations are integrated into the design.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-2">Construction Documentation</h4>
                    <p className="text-gray-700">
                      We create detailed construction documents including technical drawings, specifications, and material schedules that contractors will use to build your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-2">Construction Administration</h4>
                    <p className="text-gray-700">
                      During construction, our architects provide oversight to ensure the project is built according to design intentions, addressing any questions or issues that arise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Our Design Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">Master Planning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">Schematic Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">3D Visualization & Rendering</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">Interior Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">Sustainable Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">Construction Documentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span className="text-gray-700">Regulatory Compliance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-navy">Experienced Team</h4>
                    <p className="text-gray-700 text-sm">
                      Our architects bring decades of combined experience across diverse project types.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Integrated Approach</h4>
                    <p className="text-gray-700 text-sm">
                      Seamless coordination with engineering and construction management teams.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Innovative Solutions</h4>
                    <p className="text-gray-700 text-sm">
                      We leverage the latest technologies and design methodologies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Client-Centered</h4>
                    <p className="text-gray-700 text-sm">
                      Your vision and requirements drive our design process.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/contact" className="w-full bg-brand-gold text-brand-navy font-medium py-2 px-4 rounded-md text-center inline-block hover:bg-opacity-90 transition-colors">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore some of our most innovative architectural design projects that showcase our expertise and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
                alt="Commercial Office Building" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Commerce Tower</h3>
                <p className="text-gray-600 mb-4">
                  A modern 18-story commercial office building featuring sustainable design elements and collaborative workspaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Commercial</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Sustainable</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Urban</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                alt="Lakeside Residence" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Lakeside Residence</h3>
                <p className="text-gray-600 mb-4">
                  A luxury residential home that harmonizes with its natural surroundings while providing state-of-the-art amenities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Residential</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Luxury</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Waterfront</span>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                alt="Cultural Arts Center" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Metropolitan Arts Center</h3>
                <p className="text-gray-600 mb-4">
                  A dynamic cultural facility featuring a theater, gallery spaces, and educational areas in an iconic building.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Cultural</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Iconic</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">Public</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/portfolio" className="text-brand-navy font-semibold hover:text-brand-gold transition-colors">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our architectural design team today to schedule a consultation and discuss your project needs.
          </p>
          <Link to="/contact" className="bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-block">
            Get Started
          </Link>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Related Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore these complementary services that can enhance your architectural project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Interior Design</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive interior design services that create cohesive, functional, and aesthetically pleasing spaces.
              </p>
              <Link to="/services/design/interior-design" className="text-brand-navy font-medium hover:text-brand-gold transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">3D Rendering & Visualization</h3>
              <p className="text-gray-600 mb-4">
                Realistic 3D renderings and visualizations that help you see your project before construction begins.
              </p>
              <Link to="/services/design/3d-rendering" className="text-brand-navy font-medium hover:text-brand-gold transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Sustainable Design</h3>
              <p className="text-gray-600 mb-4">
                Green building practices and LEED certification services for environmentally responsible projects.
              </p>
              <Link to="/services/design/sustainable-design" className="text-brand-navy font-medium hover:text-brand-gold transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalDesignPage;
