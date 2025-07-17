import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ArchitecturalQSPage = () => {
  return (
    <>
      <Helmet>
        <title>Architectural Quantity Surveying Services | DexExperts</title>
        <meta name="description" content="Professional architectural quantity surveying services including material takeoffs, cost analysis, and complete building component quantification." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-gold py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Architectural Quantity Surveying
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Precise quantity takeoffs for architectural components and finishes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Comprehensive Architectural Quantity Surveying
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our expert team provides detailed and accurate architectural quantity surveying services using advanced technology and industry best practices. We help architects, contractors, and construction companies optimize their material quantities and costs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">Our Process:</h3>
                <ul className="space-y-3">
                  {[
                    'Drawing and specification review',
                    'Material takeoff analysis',
                    'Component quantification',
                    'Assembly calculations',
                    'Cost assessment',
                    'Quality control measures'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Services We Provide
                </h3>
                <ul className="space-y-3">
                  {[
                    'Interior finish takeoffs',
                    'Exterior cladding analysis',
                    'Door and window schedules',
                    'Ceiling system quantities',
                    'Wall finish calculations',
                    'Flooring measurements',
                    'Millwork takeoffs',
                    'Hardware scheduling'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-gold" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Specialized architectural expertise',
                    'Advanced measurement software',
                    'Detailed quantity analysis',
                    'Quality control focus',
                    'Value engineering options'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today for accurate architectural quantity surveying services that help you plan and execute your projects efficiently.
          </p>
          <button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Request a Quote
          </button>
        </div>
      </section>
    </>
  );
};

export default ArchitecturalQSPage; 