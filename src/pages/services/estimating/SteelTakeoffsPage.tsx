
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const SteelTakeoffsPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our steel takeoff services provide precise quantity measurements for structural steel components, ensuring accurate material calculations for fabrication and construction. We handle all types of steel structures from simple frames to complex industrial facilities.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Using advanced software and industry expertise, we deliver detailed steel takeoffs that support competitive bidding and efficient project execution.
      </p>
    </>
  );

  const servicePoints = [
    "Structural Steel Framing",
    "Reinforcement Calculations",
    "Connection Details",
    "Miscellaneous Metals",
    "Weight Calculations",
    "Fabrication Lists",
    "Erection Sequences",
    "Material Specifications"
  ];

  const features = [
    {
      title: "Precision Calculations",
      description: "Accurate weight and quantity calculations for all steel components and connections."
    },
    {
      title: "Fabrication Support",
      description: "Detailed lists and specifications that support efficient fabrication processes."
    },
    {
      title: "Industry Standards",
      description: "Compliance with AISC standards and current industry best practices."
    }
  ];

  const relatedServices = [
    {
      title: "Structural Engineering",
      description: "Complete structural design services that integrate with steel takeoffs.",
      link: "/services/design/structural-engineering"
    },
    {
      title: "Concrete Takeoffs",
      description: "Complementary concrete quantity services for complete structural estimates.",
      link: "/services/estimating/concrete-takeoffs"
    }
  ];

  return (
    <ServiceTemplate
      title="Steel Takeoffs"
      heroDescription="Accurate steel quantity takeoffs for structural projects and fabrication planning."
      heroImage="https://images.unsplash.com/photo-1580788516241-25d22a3c982a"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default SteelTakeoffsPage;
