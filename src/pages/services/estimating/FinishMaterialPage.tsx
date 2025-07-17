import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const FinishMaterialPage = () => {
  return (
    <>
      <Helmet>
        <title>Finish Material Takeoff Services | DexExperts</title>
        <meta name="description" content="Professional finish material takeoff services including interior finishes, exterior materials, and complete building finish analysis." />
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
              Finish Material Takeoffs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Precise quantity takeoffs for interior and exterior finishes
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
                Comprehensive Finish Material Estimation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our expert team provides detailed and accurate finish material takeoff services using advanced technology and industry best practices. We help contractors, architects, and developers optimize their material quantities and costs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">Our Process:</h3>
                <ul className="space-y-3">
                  {[
                    'Detailed finish schedule review',
                    'Material specification analysis',
                    'Surface area calculations',
                    'Pattern matching considerations',
                    'Waste factor assessment',
                    'Installation method analysis'
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
                    'Wall finish takeoffs',
                    'Ceiling material quantities',
                    'Floor finish calculations',
                    'Trim and molding measurements',
                    'Paint area calculations',
                    'Wallcovering quantities',
                    'Cabinet and millwork',
                    'Specialty finishes'
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
                    'Experienced finish specialists',
                    'Advanced measurement software',
                    'Detailed material schedules',
                    'Accurate waste calculations',
                    'Cost optimization expertise'
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
            Contact us today for accurate finish material takeoff services that help you plan and execute your construction projects efficiently.
          </p>
          <button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Request a Quote
          </button>
        </div>
      </section>
    </>
  );
};

export default FinishMaterialPage; 