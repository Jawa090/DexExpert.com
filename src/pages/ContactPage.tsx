
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast({
        title: "Form Error",
        description: "Please complete all fields correctly.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your project needs.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${formErrors.name ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-red-500 text-sm">Please enter your name</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${formErrors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-red-500 text-sm">Please enter a valid email address</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${formErrors.subject ? 'border-red-500' : ''}`}
                    placeholder="Project Inquiry"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-red-500 text-sm">Please enter a subject</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input resize-none ${formErrors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">Please enter your message</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-navy text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">Office Address</h3>
                  <p className="text-gray-700">
                    123 Construction Avenue<br />
                    Building 4, Suite 200<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">Contact Details</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Email:</strong> info@decexperts.com
                  </p>
                  <p className="text-gray-700">
                    <strong>Hours:</strong> Monday - Friday: 9am - 5pm
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
                <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden h-64">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620305280574!5m2!1sen!2sca"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Office Location Map"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default ContactPage;