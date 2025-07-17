import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Shield, Target, Zap, Building2, Calculator, Wrench, Quote, Eye, Download } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="hero-gradient text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand-gold rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 scroll-reveal">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <Star className="w-5 h-5 text-brand-gold mr-3" />
                <span className="text-sm font-semibold">15+ Years of Construction Excellence</span>
                <div className="ml-3 px-3 py-1 bg-brand-gold/20 rounded-full text-xs font-bold">TRUSTED</div>
              </div>
              
              <h1 className="text-6xl sm:text-7xl font-bold mb-8 leading-tight">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold animate-pulse">
                  Tomorrow's
                </span>
                Infrastructure Today
              </h1>
              
              <p className="text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
                We transform visions into reality through cutting-edge design, precise estimation, and expert construction management. Your project success is our commitment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link to="/contact" className="group relative bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navy font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link to="/services/design/architectural-design" className="group bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-brand-gold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center">
                    Explore Services
                    <Building2 className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 text-sm">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-brand-navy" />
                  </div>
                  <span className="font-semibold">500+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-brand-navy" />
                  </div>
                  <span className="font-semibold">50+ Expert Team</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-brand-navy" />
                  </div>
                  <span className="font-semibold">98% Success Rate</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 scroll-reveal">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-brand-gold/30 to-blue-400/30 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Engineering Professional" 
                    className="rounded-2xl shadow-2xl w-full object-cover h-[500px] transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-brand-navy/90 to-blue-900/90 backdrop-blur-lg p-8 rounded-2xl border border-brand-gold/30 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                        <TrendingUp className="w-8 h-8 text-brand-navy" />
                      </div>
                      <div>
                        <div className="text-white text-3xl font-bold">15+</div>
                        <div className="text-brand-gold text-sm font-semibold">Years Excellence</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 bg-gradient-to-br from-brand-gold/90 to-yellow-400/90 backdrop-blur-lg p-6 rounded-2xl border border-white/30 shadow-xl">
                    <div className="text-center">
                      <div className="text-brand-navy text-2xl font-bold">500+</div>
                      <div className="text-brand-navy text-xs font-semibold">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: Building2, color: "from-blue-500 to-blue-600" },
              { number: "15+", label: "Years Experience", icon: Award, color: "from-brand-gold to-yellow-500" },
              { number: "50+", label: "Expert Team", icon: Users, color: "from-green-500 to-green-600" },
              { number: "98%", label: "Success Rate", icon: Target, color: "from-purple-500 to-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="scroll-reveal text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Services Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center bg-brand-gold/10 text-brand-navy rounded-full px-6 py-2 mb-6 font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              Our Core Services
            </div>
            <h2 className="text-5xl font-bold text-brand-navy mb-6 relative">
              Comprehensive Construction Solutions
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide integrated solutions across the entire construction lifecycle, from initial design to project completion, powered by cutting-edge technology and decades of expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quantity Takeoff Services', desc: 'Accurate measurement and quantification for all construction elements.' },
              { title: 'Cost Estimation Services', desc: 'Detailed and reliable cost projections for every project phase.' },
              { title: 'Specialized Estimating', desc: 'Trade-specific and green building estimates for unique project needs.' },
              { title: 'Software-Based Estimating', desc: 'Modern digital takeoff and estimating tools for efficiency.' },
              { title: 'Documentation & Reporting', desc: 'Professional BOQs, cost reports, and bid documentation.' },
              { title: 'Project Support Services', desc: 'Scope gap analysis, benchmarking, and peer review.' },
              { title: 'Construction Management', desc: 'Expert project execution, supervision, and innovation.' },
            ].map((cat, idx) => (
              <Link to="/services" key={cat.title} className="group block bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-t-4 border-brand-navy/30 hover:border-brand-gold overflow-hidden">
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors duration-300">{cat.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.desc}</p>
                <span className="inline-flex items-center text-brand-gold font-semibold group-hover:underline">Explore <ArrowRight className="ml-2 w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow Section */}
      <section className="py-24 bg-gradient-to-br from-brand-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-gold/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center bg-white/10 text-white rounded-full px-6 py-2 mb-6 font-semibold">
              <Clock className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-5xl font-bold mb-6">
              How We Deliver
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-400">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 4-step process ensures your project success from conception to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We understand your vision, requirements, and project goals through detailed consultation.",
                icon: Users,
                color: "from-blue-400 to-blue-600"
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Our experts create detailed designs and comprehensive project plans using advanced technology.",
                icon: Building2,
                color: "from-brand-gold to-yellow-400"
              },
              {
                step: "03",
                title: "Estimation & Approval",
                description: "Precise cost estimation and timeline planning ensure transparent project expectations.",
                icon: Calculator,
                color: "from-green-400 to-green-600"
              },
              {
                step: "04",
                title: "Execution & Delivery",
                description: "Expert project management and quality control deliver exceptional results on time.",
                icon: Target,
                color: "from-purple-400 to-purple-600"
              }
            ].map((process, index) => (
              <div key={index} className="scroll-reveal group">
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-xs font-bold">{process.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors duration-300">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center bg-brand-gold/10 text-brand-navy rounded-full px-6 py-2 mb-6 font-semibold">
              <Quote className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-5xl font-bold text-brand-navy mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies for delivering exceptional construction solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "DECExperts transformed our vision into reality with exceptional precision and professionalism. Their BIM services saved us significant time and costs.",
                author: "Sarah Johnson",
                role: "Project Director",
                company: "Urban Development Corp"
              },
              {
                quote: "The estimating accuracy and attention to detail provided by DECExperts was outstanding. They helped us stay within budget throughout the project.",
                author: "Michael Chen",
                role: "Construction Manager", 
                company: "Metropolitan Builders"
              },
              {
                quote: "Their sustainable design approach and LEED expertise helped us achieve our environmental goals while maintaining cost efficiency.",
                author: "Emma Rodriguez",
                role: "Sustainability Officer",
                company: "Green Construction Solutions"
              }
            ].map((testimonial, index) => (
              <div key={index} className="scroll-reveal group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-brand-gold">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-6">
                    <div className="font-bold text-brand-navy">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-semibold text-brand-gold">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="lg:w-1/2 scroll-reveal">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-brand-navy/20 to-brand-gold/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-3 border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                    alt="Modern Architecture" 
                    className="rounded-2xl shadow-2xl w-full object-cover h-[500px] transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-brand-gold/90 to-yellow-400/90 backdrop-blur-lg p-8 rounded-2xl border border-white/30 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-blue-900 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                        <span className="text-white text-2xl font-bold">15+</span>
                      </div>
                      <div>
                        <div className="text-brand-navy font-bold text-lg">Years of</div>
                        <div className="text-brand-navy font-semibold">Excellence</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -left-8 bg-gradient-to-br from-brand-navy/90 to-blue-900/90 backdrop-blur-lg p-6 rounded-2xl border border-brand-gold/30 shadow-xl">
                    <div className="text-center">
                      <div className="text-brand-gold text-2xl font-bold">AI</div>
                      <div className="text-white text-xs font-semibold">Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 scroll-reveal">
              <div className="inline-flex items-center bg-brand-gold/10 text-brand-navy rounded-full px-6 py-2 mb-8 font-semibold">
                <Shield className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              
              <h2 className="text-5xl font-bold text-brand-navy mb-8 relative">
                Why DECExperts Leads the Industry
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full"></div>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    number: "1",
                    title: "Integrated Technology Solutions",
                    description: "Seamlessly combining AI-powered design tools, advanced BIM modeling, and digital twin technology for unprecedented project accuracy and efficiency."
                  },
                  {
                    number: "2", 
                    title: "Sustainable Innovation",
                    description: "Leading the industry in sustainable construction practices with LEED expertise, carbon footprint analysis, and renewable energy integration."
                  },
                  {
                    number: "3",
                    title: "Client-Centric Excellence", 
                    description: "Dedicated to exceeding expectations with transparent communication, personalized solutions, and unwavering commitment to quality and timely delivery."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                      {feature.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/blog" className="inline-flex items-center bg-transparent border-2 border-brand-navy text-brand-navy font-bold px-8 py-4 rounded-xl hover:bg-brand-navy hover:text-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-24 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-gold/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-reveal">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Zap className="w-5 h-5 text-brand-gold mr-3" />
              <span className="font-semibold">Ready to Transform Your Vision?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Build Your 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold animate-pulse">
                Dream Project Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Contact us today for a consultation and discover how our expertise, innovation, and commitment can bring your vision to life with unmatched precision and quality.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Link to="/contact" className="group relative bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navy font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center text-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link to="/blog" className="group bg-transparent border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl hover:bg-white/10 hover:border-brand-gold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center text-lg">
                  View Our Work
                  <Building2 className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, text: "Free Initial Consultation" },
                { icon: Clock, text: "24/7 Project Support" },
                { icon: Shield, text: "Quality Guaranteed" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Samples Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-8 lg:mb-12 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 lg:mb-6">
              Portfolio & Samples
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our work and download sample documents
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {/* Portfolio Card */}
            <div className="group scroll-reveal w-full">
              <div className="relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-slate-900 overflow-hidden w-full">
                <div className="relative overflow-hidden rounded-xl mb-4 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                    alt="Portfolio Projects" 
                    className="w-full h-40 lg:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 lg:w-10 h-8 lg:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Eye className="w-4 lg:w-5 h-4 lg:h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">View Portfolio</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Browse our portfolio of completed projects including residential, commercial, and infrastructure developments.
                </p>
                
                <Link to="/portfolio" className="inline-flex items-center bg-gradient-to-r from-slate-900 to-blue-800 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                  View Portfolio
                  <Eye size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Samples Card */}
            <div className="group scroll-reveal w-full">
              <div className="relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-amber-400 overflow-hidden w-full">
                <div className="relative overflow-hidden rounded-xl mb-4 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" 
                    alt="Sample Documents" 
                    className="w-full h-40 lg:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 lg:w-10 h-8 lg:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Download className="w-4 lg:w-5 h-4 lg:h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">Download Samples</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Access our collection of sample documents, templates, and project deliverables for reference.
                </p>
                
                <Link to="/samples" className="inline-flex items-center bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                  Download Samples
                  <Download size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
