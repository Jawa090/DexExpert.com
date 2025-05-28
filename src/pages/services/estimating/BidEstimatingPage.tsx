
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const BidEstimatingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our bid estimating services provide comprehensive, detailed cost estimates for construction bidding. We combine accurate quantity takeoffs with current market pricing to deliver competitive yet profitable bid proposals.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From material costs to labor calculations, our bid estimates include all project elements with detailed breakdowns that support informed bidding strategies.
      </p>
    </>
  );

  const servicePoints = [
    "Detailed Cost Breakdowns",
    "Material & Labor Pricing",
    "Subcontractor Quotes",
    "Overhead & Profit Analysis",
    "Risk Contingencies",
    "Schedule Integration",
    "Bid Comparison",
    "Proposal Support"
  ];

  const features = [
    {
      title: "Competitive Accuracy",
      description: "Precise estimates that enable competitive bidding while maintaining profitability."
    },
    {
      title: "Comprehensive Coverage",
      description: "All project elements included with detailed cost breakdowns and supporting documentation."
    },
    {
      title: "Market Pricing",
      description: "Current market rates and subcontractor pricing ensure realistic cost projections."
    }
  ];

  const relatedServices = [
    {
      title: "Concrete Takeoffs",
      description: "Detailed quantity takeoffs that form the foundation of accurate bid estimates.",
      link: "/services/estimating/concrete-takeoffs"
    },
    {
      title: "Change Order Estimates",
      description: "Post-contract change order pricing and negotiation support.",
      link: "/services/estimating/change-order"
    }
  ];

  return (
    <ServiceTemplate
      title="Bid Estimating"
      heroDescription="Detailed construction cost estimates for competitive and profitable project bidding."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default BidEstimatingPage;
