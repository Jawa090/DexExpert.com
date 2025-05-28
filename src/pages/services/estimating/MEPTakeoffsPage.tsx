
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const MEPTakeoffsPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our MEP takeoff services provide detailed quantity measurements for mechanical, electrical, and plumbing systems. We ensure accurate calculations for all MEP components to support reliable cost estimates and competitive bidding.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From HVAC equipment to electrical conduits and plumbing fixtures, our comprehensive MEP takeoffs cover all building systems with precision and detail.
      </p>
    </>
  );

  const servicePoints = [
    "HVAC Equipment & Ductwork",
    "Electrical Systems & Conduits",
    "Plumbing Fixtures & Piping",
    "Fire Protection Systems",
    "Control Systems",
    "Equipment Specifications",
    "Material Lists",
    "Labor Hour Calculations"
  ];

  const features = [
    {
      title: "System Integration",
      description: "Comprehensive understanding of MEP system interactions ensures accurate quantity calculations."
    },
    {
      title: "Detailed Breakdowns",
      description: "Separate takeoffs for each MEP discipline with clear documentation and specifications."
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge of MEP systems and current market standards."
    }
  ];

  const relatedServices = [
    {
      title: "MEP Design",
      description: "Complete MEP design services that integrate with takeoff and estimating.",
      link: "/services/design/mep-design"
    },
    {
      title: "BIM Services",
      description: "BIM modeling for accurate MEP coordination and quantity extraction.",
      link: "/services/design/bim-services"
    }
  ];

  return (
    <ServiceTemplate
      title="MEP Takeoffs"
      heroDescription="Comprehensive MEP quantity takeoffs for mechanical, electrical, and plumbing systems."
      heroImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default MEPTakeoffsPage;
