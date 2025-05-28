
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const ConcreteTakeoffsPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our concrete takeoff services provide accurate quantity measurements for all concrete elements in your construction project. We utilize advanced software and proven methodologies to ensure precise calculations that support reliable cost estimates.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From foundations to structural elements, our detailed concrete takeoffs help contractors bid competitively while maintaining accurate project budgets.
      </p>
    </>
  );

  const servicePoints = [
    "Foundation Takeoffs",
    "Structural Concrete",
    "Reinforcement Calculations",
    "Formwork Quantities",
    "Concrete Volume Calculations",
    "Digital Takeoff Software",
    "Detailed Reports",
    "Cost Database Integration"
  ];

  const features = [
    {
      title: "Advanced Software",
      description: "We use industry-leading takeoff software for accurate and efficient quantity calculations."
    },
    {
      title: "Detailed Documentation",
      description: "Comprehensive reports with clear breakdowns support informed decision-making."
    },
    {
      title: "Quality Assurance",
      description: "Multiple review processes ensure accuracy and reliability of all quantity calculations."
    }
  ];

  const relatedServices = [
    {
      title: "Steel Takeoffs",
      description: "Comprehensive steel quantity takeoffs for structural projects.",
      link: "/services/estimating/steel-takeoffs"
    },
    {
      title: "Bid Estimating",
      description: "Complete bid preparation services using accurate takeoff data.",
      link: "/services/estimating/bid-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="Concrete Takeoffs"
      heroDescription="Precise concrete quantity takeoffs for accurate project estimates and competitive bidding."
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default ConcreteTakeoffsPage;
