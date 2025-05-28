
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const BOQPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our Bill of Quantities (BOQ) preparation services provide detailed, organized lists of all materials, labor, and equipment required for your construction project. We create comprehensive BOQs that support accurate bidding and effective project management.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From material specifications to work descriptions, our BOQs provide the detailed foundation for successful project procurement and cost control.
      </p>
    </>
  );

  const servicePoints = [
    "Detailed Material Lists",
    "Work Item Descriptions",
    "Quantity Measurements",
    "Unit Rate Applications",
    "Cost Summaries",
    "Trade Breakdown",
    "Specification References",
    "Format Standardization"
  ];

  const features = [
    {
      title: "Standardized Format",
      description: "BOQs prepared in industry-standard formats for easy use by contractors and suppliers."
    },
    {
      title: "Detailed Descriptions",
      description: "Clear, comprehensive descriptions that eliminate ambiguity in bidding and procurement."
    },
    {
      title: "Accurate Quantities",
      description: "Precise quantity calculations based on detailed takeoffs and measurements."
    }
  ];

  const relatedServices = [
    {
      title: "Bluebeam Services",
      description: "Digital takeoff services that provide data for BOQ preparation.",
      link: "/services/estimating/bluebeam"
    },
    {
      title: "Bid Estimating",
      description: "Complete bid preparation services using BOQ data.",
      link: "/services/estimating/bid-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="BOQ Preparation"
      heroDescription="Comprehensive Bill of Quantities preparation for accurate project procurement and bidding."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default BOQPage;
