
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const ConceptualEstimatingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our conceptual estimating services provide early-stage cost projections that help you make informed decisions during project planning and design development. We use industry data and proven methodologies to deliver reliable budget estimates.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From initial feasibility studies to design development support, our conceptual estimates provide the financial framework for successful project planning.
      </p>
    </>
  );

  const servicePoints = [
    "Order of Magnitude Estimates",
    "Square Foot Pricing",
    "Parametric Estimating",
    "Cost Models",
    "Escalation Analysis",
    "Risk Assessment",
    "Value Engineering",
    "Budget Development"
  ];

  const features = [
    {
      title: "Early Decision Support",
      description: "Rapid cost estimates support critical early-stage project decisions and planning."
    },
    {
      title: "Multiple Methodologies",
      description: "Various estimating approaches ensure appropriate accuracy for different project phases."
    },
    {
      title: "Market Intelligence",
      description: "Current market data and trends inform realistic cost projections."
    }
  ];

  const relatedServices = [
    {
      title: "Feasibility Studies",
      description: "Project feasibility analysis that incorporates conceptual cost estimates.",
      link: "/services/design/feasibility"
    },
    {
      title: "Bid Estimating",
      description: "Detailed estimates for construction bidding based on conceptual foundations.",
      link: "/services/estimating/bid-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="Conceptual Estimating"
      heroDescription="Early-stage cost estimates that support strategic project planning and decision-making."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default ConceptualEstimatingPage;
