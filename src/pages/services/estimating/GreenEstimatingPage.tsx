
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const GreenEstimatingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our green building estimating services provide specialized cost analysis for sustainable construction projects. We understand the unique materials, systems, and processes required for LEED certification and other green building standards.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From renewable energy systems to sustainable materials, our green estimates help you budget for environmentally responsible construction while maintaining cost effectiveness.
      </p>
    </>
  );

  const servicePoints = [
    "LEED Certification Costs",
    "Renewable Energy Systems",
    "Sustainable Materials",
    "Energy Efficient Systems",
    "Water Conservation",
    "Indoor Air Quality",
    "Commissioning Costs",
    "Green Roof Systems"
  ];

  const features = [
    {
      title: "Sustainability Expertise",
      description: "Deep understanding of green building technologies and their cost implications."
    },
    {
      title: "Certification Support",
      description: "Accurate cost projections for LEED and other green building certification processes."
    },
    {
      title: "Lifecycle Analysis",
      description: "Long-term cost considerations including operational savings and maintenance."
    }
  ];

  const relatedServices = [
    {
      title: "Sustainable Design",
      description: "Green building design services that integrate with cost estimating.",
      link: "/services/design/sustainable-design"
    },
    {
      title: "MEP Takeoffs",
      description: "Specialized takeoffs for efficient HVAC and building systems.",
      link: "/services/estimating/mep-takeoffs"
    }
  ];

  return (
    <ServiceTemplate
      title="Green Building Estimating"
      heroDescription="Specialized cost estimates for sustainable construction and LEED certification projects."
      heroImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default GreenEstimatingPage;
