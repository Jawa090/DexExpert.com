
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Image, Video, Archive, Star, CheckCircle } from 'lucide-react';

const SamplesPage = () => {
  const sampleCategories = [
    {
      title: "Design Templates",
      icon: Image,
      color: "from-blue-500 to-blue-600",
      samples: [
        { name: "Architectural Floor Plans", size: "2.5 MB", format: "PDF" },
        { name: "3D Rendering Samples", size: "8.1 MB", format: "ZIP" },
        { name: "CAD Drawing Templates", size: "1.8 MB", format: "DWG" },
        { name: "BIM Model Samples", size: "15.2 MB", format: "RVT" }
      ]
    },
    {
      title: "Estimation Documents",
      icon: FileText,
      color: "from-brand-gold to-yellow-500",
      samples: [
        { name: "Cost Estimation Template", size: "850 KB", format: "XLSX" },
        { name: "Quantity Takeoff Sample", size: "1.2 MB", format: "PDF" },
        { name: "Bid Proposal Template", size: "950 KB", format: "DOCX" },
        { name: "Material Cost Analysis", size: "1.5 MB", format: "XLSX" }
      ]
    },
    {
      title: "Project Reports",
      icon: Archive,
      color: "from-green-500 to-green-600",
      samples: [
        { name: "Project Progress Report", size: "3.2 MB", format: "PDF" },
        { name: "Quality Assessment Report", size: "2.8 MB", format: "PDF" },
        { name: "Safety Management Plan", size: "1.9 MB", format: "DOCX" },
        { name: "Construction Schedule", size: "1.1 MB", format: "MPP" }
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      color: "from-purple-500 to-purple-600",
      samples: [
        { name: "BIM Modeling Basics", size: "125 MB", format: "MP4" },
        { name: "Site Planning Guide", size: "89 MB", format: "MP4" },
        { name: "Construction Management", size: "156 MB", format: "MP4" },
        { name: "Safety Procedures", size: "67 MB", format: "MP4" }
      ]
    }
  ];

  const handleDownload = (fileName: string) => {
    // Simulate download
    console.log(`Downloading: ${fileName}`);
    // In a real application, this would trigger the actual file download
  };

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
              Download Samples
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive collection of templates, documents, and resources to help you understand our work quality
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Why Download Our Samples?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a detailed preview of our work quality and methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Star, title: "Quality Assurance", description: "Review our high-standard deliverables and attention to detail" },
              { icon: CheckCircle, title: "Professional Templates", description: "Access industry-standard templates and formats" },
              { icon: Download, title: "Free Resources", description: "Download valuable resources at no cost for evaluation" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Categories */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy">{category.title}</h3>
                    <p className="text-gray-600">{category.samples.length} samples available</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.samples.map((sample, sampleIndex) => (
                    <div key={sampleIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                          <FileText className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-navy">{sample.name}</h4>
                          <p className="text-sm text-gray-500">{sample.size} • {sample.format}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload(sample.name)}
                        className="bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navy font-bold px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-brand-navy to-blue-800 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                    Download All {category.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            After reviewing our samples, contact us to discuss your specific requirements
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
            <ArrowLeft className="ml-2 w-5 h-5 transform rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SamplesPage;
