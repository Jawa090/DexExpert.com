import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const DrywallEstimationPage = () => {
  return (
    <>
      <Helmet>
        <title>Drywall Estimation Services | DexExperts</title>
        <meta name="description" content="Professional drywall estimation services including material takeoffs, labor costs, and complete wall system analysis." />
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
              Drywall Estimation Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Precise cost estimation for drywall and wall system projects
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
                Comprehensive Drywall Estimation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our expert team provides detailed and accurate drywall estimating services using advanced technology and industry best practices. We help contractors, developers, and construction companies optimize their wall system costs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">Our Process:</h3>
                <ul className="space-y-3">
                  {[
                    'Wall system analysis',
                    'Material specification review',
                    'Surface area calculations',
                    'Opening deductions',
                    'Labor cost assessment',
                    'Accessory quantification'
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
                    'Drywall board takeoffs',
                    'Metal stud calculations',
                    'Insulation quantities',
                    'Finishing material estimates',
                    'Ceiling system takeoffs',
                    'Corner bead measurements',
                    'Joint treatment calculations',
                    'Fire-rated system analysis'
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
                    'Specialized drywall expertise',
                    'Advanced takeoff software',
                    'Up-to-date material pricing',
                    'Detailed assembly analysis',
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
            Contact us today for accurate drywall estimation services that help you plan and execute your projects efficiently.
          </p>
          <button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Request a Quote
          </button>
        </div>
      </section>
    </>
  );
};

export default DrywallEstimationPage; 