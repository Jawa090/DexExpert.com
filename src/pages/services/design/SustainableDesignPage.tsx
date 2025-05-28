
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const SustainableDesignPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our sustainable design services integrate environmental responsibility with functional excellence to create buildings that minimize environmental impact while maximizing occupant comfort and operational efficiency.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From LEED certification to net-zero energy design, we help you achieve sustainability goals while maintaining project quality and budget requirements.
      </p>
    </>
  );

  const servicePoints = [
    "LEED Certification",
    "Energy Modeling",
    "Renewable Energy Integration",
    "Water Conservation",
    "Material Selection",
    "Indoor Air Quality",
    "Daylight Optimization",
    "Carbon Footprint Analysis"
  ];

  const features = [
    {
      title: "Holistic Approach",
      description: "Comprehensive sustainability strategies that consider all building systems and lifecycle impacts."
    },
    {
      title: "Performance Optimization",
      description: "Advanced modeling and analysis ensure optimal building performance and energy efficiency."
    },
    {
      title: "Certification Support",
      description: "Expert guidance through green building certification processes including LEED and BREEAM."
    }
  ];

  const relatedServices = [
    {
      title: "MEP Design",
      description: "Integrated mechanical, electrical, and plumbing design for sustainable building systems.",
      link: "/services/design/mep-design"
    },
    {
      title: "Green Estimating",
      description: "Cost analysis for sustainable building materials and systems.",
      link: "/services/estimating/green-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="Sustainable Design"
      heroDescription="Environmentally responsible design solutions that create healthier, more efficient buildings."
      heroImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default SustainableDesignPage;
