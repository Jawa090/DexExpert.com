
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const ChangeOrderPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our change order estimating services provide accurate cost analysis for project modifications during construction. We help you evaluate the financial impact of design changes, scope adjustments, and unforeseen conditions.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From minor modifications to major scope changes, our change order estimates ensure fair pricing and support effective project management decisions.
      </p>
    </>
  );

  const servicePoints = [
    "Scope Change Analysis",
    "Cost Impact Assessment",
    "Schedule Impact Review",
    "Pricing Negotiations",
    "Documentation Support",
    "Claims Analysis",
    "Value Engineering",
    "Contract Compliance"
  ];

  const features = [
    {
      title: "Rapid Response",
      description: "Quick turnaround on change order estimates to keep projects moving forward."
    },
    {
      title: "Fair Pricing",
      description: "Objective cost analysis ensures equitable pricing for all parties."
    },
    {
      title: "Complete Documentation",
      description: "Thorough documentation supports contract compliance and dispute resolution."
    }
  ];

  const relatedServices = [
    {
      title: "Bid Estimating",
      description: "Original bid estimates that provide baseline for change order analysis.",
      link: "/services/estimating/bid-estimating"
    },
    {
      title: "Claims Management",
      description: "Construction claims analysis and resolution support.",
      link: "/services/construction/claims-management"
    }
  ];

  return (
    <ServiceTemplate
      title="Change Order Estimates"
      heroDescription="Accurate cost analysis for construction changes and project modifications."
      heroImage="https://images.unsplash.com/photo-1586264752637-56c4b3eced00"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default ChangeOrderPage;
