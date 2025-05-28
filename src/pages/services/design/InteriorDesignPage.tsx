
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const InteriorDesignPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our interior design services create functional, beautiful, and inspiring spaces that reflect your brand and enhance the user experience. We combine creativity with strategic space planning to deliver interiors that are both aesthetically pleasing and highly functional.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From corporate offices to retail spaces and residential projects, our interior design team works closely with architects and clients to create cohesive environments that support your goals and lifestyle.
      </p>
    </>
  );

  const servicePoints = [
    "Space Planning & Layout",
    "Color & Material Selection",
    "Furniture & Fixture Specification",
    "Lighting Design",
    "Custom Millwork Design",
    "Brand Integration",
    "3D Visualization",
    "Project Management"
  ];

  const features = [
    {
      title: "Comprehensive Design Process",
      description: "From initial concept through final installation, we manage every aspect of your interior design project."
    },
    {
      title: "Sustainable Solutions",
      description: "We prioritize eco-friendly materials and sustainable design practices in all our interior projects."
    },
    {
      title: "Brand Alignment",
      description: "Our designs reflect your brand identity and corporate culture, creating spaces that tell your story."
    }
  ];

  const relatedServices = [
    {
      title: "Architectural Design",
      description: "Coordinated architectural services for complete building design solutions.",
      link: "/services/design/architectural-design"
    },
    {
      title: "3D Rendering",
      description: "Realistic visualizations to preview your interior design before implementation.",
      link: "/services/design/3d-rendering"
    }
  ];

  return (
    <ServiceTemplate
      title="Interior Design"
      heroDescription="Creating beautiful, functional spaces that inspire and enhance your environment."
      heroImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default InteriorDesignPage;
