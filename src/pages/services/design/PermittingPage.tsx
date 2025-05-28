
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const PermittingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our permitting and code compliance services ensure your project meets all regulatory requirements and obtains necessary approvals efficiently. We navigate complex building codes and zoning regulations to streamline the approval process.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From initial code analysis through permit acquisition, our experienced team manages all aspects of regulatory compliance to keep your project on schedule.
      </p>
    </>
  );

  const servicePoints = [
    "Building Code Analysis",
    "Zoning Compliance",
    "Permit Applications",
    "Plan Review Coordination",
    "Code Consulting",
    "Variance Applications",
    "Inspection Coordination",
    "Regulatory Navigation"
  ];

  const features = [
    {
      title: "Regulatory Expertise",
      description: "Deep knowledge of local building codes and zoning requirements ensures compliance from design through construction."
    },
    {
      title: "Streamlined Process",
      description: "Efficient permit processing and proactive communication with authorities minimize delays."
    },
    {
      title: "Risk Mitigation",
      description: "Early code analysis identifies potential issues before they become costly problems."
    }
  ];

  const relatedServices = [
    {
      title: "Architectural Design",
      description: "Integrated design services that consider code compliance from the start.",
      link: "/services/design/architectural-design"
    },
    {
      title: "Feasibility Studies",
      description: "Pre-design analysis to identify potential regulatory challenges.",
      link: "/services/design/feasibility"
    }
  ];

  return (
    <ServiceTemplate
      title="Permitting & Code Compliance"
      heroDescription="Expert navigation of building codes and regulations to ensure smooth project approvals."
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default PermittingPage;
