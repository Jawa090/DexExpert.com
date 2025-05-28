
import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface FeaturePoint {
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  title: string;
  heroDescription: string;
  heroImage: string;
  mainDescription: React.ReactNode;
  servicePoints: string[];
  features: FeaturePoint[];
  relatedServices: RelatedService[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  heroDescription,
  heroImage,
  mainDescription,
  servicePoints,
  features,
  relatedServices
}) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                {heroDescription}
              </p>
              <Link to="/contact" className="bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-block">
                Request a Consultation
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <img 
                src={heroImage} 
                alt={title} 
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
              <h2 className="text-3xl font-bold text-brand-navy mb-6">About {title}</h2>
              {mainDescription}
              
              <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6">Key Features</h3>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-brand-navy mb-2">{feature.title}</h4>
                      <p className="text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Our Services</h3>
                <ul className="space-y-3">
                  {servicePoints.map((point, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-brand-gold">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-navy">Expertise</h4>
                    <p className="text-gray-700 text-sm">
                      Our team brings specialized knowledge and years of experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Quality Results</h4>
                    <p className="text-gray-700 text-sm">
                      We deliver accurate, reliable, and high-quality outcomes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Advanced Technology</h4>
                    <p className="text-gray-700 text-sm">
                      We utilize the latest tools and methodologies in the industry.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Timely Delivery</h4>
                    <p className="text-gray-700 text-sm">
                      We understand the importance of meeting project timelines.
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
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our team today to learn more about our {title.toLowerCase()} services and how we can help with your project.
          </p>
          <Link to="/contact" className="bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-block">
            Contact Us
          </Link>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Related Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore these complementary services that can enhance your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link to={service.link} className="text-brand-navy font-medium hover:text-brand-gold transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
