
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const MEPDesignPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our MEP (Mechanical, Electrical, and Plumbing) design services provide comprehensive engineering solutions for building systems that ensure comfort, safety, and efficiency. We design integrated systems that work harmoniously with architectural and structural elements to create buildings that function optimally.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From HVAC systems that provide optimal comfort and air quality to electrical systems that ensure reliable power distribution and energy efficiency, our MEP designs emphasize performance, sustainability, and code compliance.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our experienced engineers utilize advanced design tools and building analysis software to create systems that are not only efficient in operation but also cost-effective to install and maintain throughout the building lifecycle.
      </p>
    </>
  );

  const servicePoints = [
    "HVAC System Design",
    "Electrical Systems & Lighting",
    "Plumbing & Fire Protection",
    "Energy Modeling & Analysis",
    "Building Automation Systems",
    "Load Calculations",
    "Commissioning Support",
    "Sustainable MEP Solutions"
  ];

  const features = [
    {
      title: "Integrated System Design",
      description: "Our MEP designs are fully coordinated with architectural and structural elements to prevent conflicts and ensure seamless integration of all building components."
    },
    {
      title: "Energy Efficiency Focus",
      description: "We prioritize energy-efficient solutions that reduce operational costs and environmental impact while maintaining optimal comfort and functionality."
    },
    {
      title: "Advanced Modeling",
      description: "We utilize 3D modeling and building information modeling (BIM) to visualize, analyze, and optimize MEP systems before construction begins."
    },
    {
      title: "Code Compliance",
      description: "Our designs adhere to all applicable building codes, standards, and regulations to ensure safety, functionality, and smooth permitting processes."
    },
    {
      title: "Future-Ready Solutions",
      description: "We design systems with flexibility to accommodate future changes, upgrades, and building expansions, maximizing the long-term value of your investment."
    }
  ];

  const relatedServices = [
    {
      title: "BIM Services",
      description: "Advanced Building Information Modeling for coordinated MEP systems and clash detection.",
      link: "/services/design/bim-services"
    },
    {
      title: "Sustainable Design",
      description: "Green building and energy-efficient design strategies that complement MEP systems.",
      link: "/services/design/sustainable-design"
    },
    {
      title: "MEP Takeoffs",
      description: "Detailed quantity takeoffs for accurate MEP system cost estimation.",
      link: "/services/estimating/mep-takeoffs"
    }
  ];

  return (
    <ServiceTemplate
      title="MEP Design"
      heroDescription="Comprehensive mechanical, electrical, and plumbing engineering solutions for optimal building performance."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default MEPDesignPage;
