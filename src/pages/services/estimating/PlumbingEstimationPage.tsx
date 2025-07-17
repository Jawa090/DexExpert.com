import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PlumbingEstimationPage = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Estimation Services | DexExperts</title>
        <meta name="description" content="Professional plumbing estimation services including piping systems, fixture calculations, and complete plumbing infrastructure analysis." />
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
              Plumbing Estimation Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Precise cost estimation for plumbing systems and infrastructure
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
                Comprehensive Plumbing Estimation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our expert team provides detailed and accurate plumbing estimating services using advanced technology and industry best practices. We help contractors, engineers, and construction companies optimize their plumbing systems and costs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">Our Process:</h3>
                <ul className="space-y-3">
                  {[
                    'Drawing and specification review',
                    'System layout analysis',
                    'Fixture and equipment counts',
                    'Piping measurements',
                    'Material specification review',
                    'Installation requirements'
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
                    'Domestic water systems',
                    'Sanitary waste systems',
                    'Storm drainage',
                    'Gas piping calculations',
                    'Fixture unit analysis',
                    'Equipment scheduling',
                    'Insulation takeoffs',
                    'Accessory quantification'
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
                    'Specialized plumbing expertise',
                    'Advanced estimation software',
                    'Code compliance knowledge',
                    'Detailed system analysis',
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
            Contact us today for accurate plumbing estimation services that help you plan and execute your projects efficiently.
          </p>
          <button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Request a Quote
          </button>
        </div>
      </section>
    </>
  );
};

export default PlumbingEstimationPage; 