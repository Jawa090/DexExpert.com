
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const LaborEstimatingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our labor and equipment cost analysis provides detailed estimates for workforce and machinery requirements. We analyze productivity rates, skill requirements, and equipment needs to deliver accurate labor cost projections.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From craft labor rates to equipment rental costs, our analysis helps you budget accurately for the human and mechanical resources required for project success.
      </p>
    </>
  );

  const servicePoints = [
    "Craft Labor Analysis",
    "Productivity Calculations",
    "Equipment Requirements",
    "Crew Composition",
    "Work Hour Estimates",
    "Skill Level Assessment",
    "Regional Rate Analysis",
    "Efficiency Factors"
  ];

  const features = [
    {
      title: "Market Intelligence",
      description: "Current labor rates and equipment costs based on regional market conditions."
    },
    {
      title: "Productivity Analysis",
      description: "Detailed productivity assessments based on project complexity and conditions."
    },
    {
      title: "Resource Optimization",
      description: "Efficient crew compositions and equipment utilization strategies."
    }
  ];

  const relatedServices = [
    {
      title: "Construction Planning",
      description: "Scheduling services that integrate with labor and equipment analysis.",
      link: "/services/construction/planning-scheduling"
    },
    {
      title: "Bid Estimating",
      description: "Complete bid estimates that incorporate detailed labor analysis.",
      link: "/services/estimating/bid-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="Labor & Equipment Cost Analysis"
      heroDescription="Detailed analysis of workforce and equipment costs for accurate project budgeting."
      heroImage="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default LaborEstimatingPage;
