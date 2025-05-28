
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const FeasibilityPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our feasibility studies provide comprehensive analysis to evaluate project viability from technical, financial, and regulatory perspectives. We help you make informed decisions before significant design investment.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From site analysis to cost projections, our feasibility studies identify opportunities and constraints that impact project success.
      </p>
    </>
  );

  const servicePoints = [
    "Site Analysis",
    "Zoning & Code Review",
    "Cost-Benefit Analysis",
    "Market Research",
    "Risk Assessment",
    "Alternative Evaluation",
    "Financial Modeling",
    "Recommendation Reports"
  ];

  const features = [
    {
      title: "Comprehensive Analysis",
      description: "Thorough evaluation of all factors affecting project viability and success potential."
    },
    {
      title: "Risk Identification",
      description: "Early identification of potential challenges allows for proactive planning and mitigation strategies."
    },
    {
      title: "Data-Driven Decisions",
      description: "Detailed analysis and clear recommendations support informed decision-making."
    }
  ];

  const relatedServices = [
    {
      title: "Permitting Services",
      description: "Regulatory compliance services that build on feasibility findings.",
      link: "/services/design/permitting"
    },
    {
      title: "Conceptual Estimating",
      description: "Cost analysis services that support feasibility conclusions.",
      link: "/services/estimating/conceptual-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="Feasibility Studies"
      heroDescription="Comprehensive project analysis to evaluate viability and guide strategic decisions."
      heroImage="https://images.unsplash.com/photo-1460472178825-e5240623afd5"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default FeasibilityPage;
