
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Calendar, Users, Award, Eye, ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Metropolitan Office Complex",
      location: "Downtown Seattle",
      year: "2023",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      description: "A state-of-the-art 40-story office complex featuring sustainable design and smart building technology."
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      location: "Miami Beach",
      year: "2023",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      description: "High-end residential development with ocean views and premium amenities."
    },
    {
      id: 3,
      title: "Modern Hospital Facility",
      location: "Portland",
      year: "2022",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
      description: "Advanced medical facility with cutting-edge equipment and patient-centered design."
    },
    {
      id: 4,
      title: "Smart Manufacturing Plant",
      location: "Austin",
      year: "2022",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      description: "Automated manufacturing facility with Industry 4.0 technology integration."
    },
    {
      id: 5,
      title: "University Science Center",
      location: "Boston",
      year: "2021",
      category: "Educational",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
      description: "Modern research and education facility promoting collaborative learning."
    },
    {
      id: 6,
      title: "Green Energy Complex",
      location: "California",
      year: "2021",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
      description: "Renewable energy facility with solar panels and battery storage systems."
    }
  ];

  const categories = ["All", "Commercial", "Residential", "Healthcare", "Industrial", "Educational", "Infrastructure"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-brand-gold hover:text-yellow-300 transition-colors duration-300 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of successful projects across various industries and scales
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white text-brand-navy border-2 border-brand-navy rounded-xl hover:bg-brand-navy hover:text-white transition-all duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-brand-gold text-brand-navy rounded-full text-sm font-bold">
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-brand-gold" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-brand-gold" />
                      Completed in {project.year}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-brand-navy to-blue-800 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center">
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: Building2 },
              { number: "15+", label: "Years Experience", icon: Calendar },
              { number: "50+", label: "Team Members", icon: Users },
              { number: "98%", label: "Client Satisfaction", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-navy" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
