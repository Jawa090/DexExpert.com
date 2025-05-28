
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const SafetyManagementPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our safety management services ensure OSHA compliance and create a culture of safety on your construction projects. We develop comprehensive safety programs that protect workers while maintaining productivity and project schedules.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From safety planning to incident investigation, our programs provide the framework for accident prevention and regulatory compliance.
      </p>
    </>
  );

  const servicePoints = [
    "Safety Program Development",
    "OSHA Compliance",
    "Training & Education",
    "Hazard Assessment",
    "Incident Investigation",
    "Safety Audits",
    "Emergency Planning",
    "Documentation & Reporting"
  ];

  const features = [
    {
      title: "Regulatory Compliance",
      description: "Comprehensive programs that ensure full compliance with OSHA and other safety regulations."
    },
    {
      title: "Proactive Approach",
      description: "Focus on prevention and hazard identification to eliminate accidents before they occur."
    },
    {
      title: "Customized Programs",
      description: "Safety programs tailored to specific project types, risks, and work environments."
    }
  ];

  const relatedServices = [
    {
      title: "Site Supervision",
      description: "On-site management that implements and monitors safety programs.",
      link: "/services/construction/site-supervision"
    },
    {
      title: "Quality Assurance",
      description: "Quality control services that complement safety management efforts.",
      link: "/services/construction/quality-assurance"
    }
  ];

  return (
    <ServiceTemplate
      title="Safety Management (OSHA)"
      heroDescription="Comprehensive safety management programs ensuring OSHA compliance and worker protection."
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default SafetyManagementPage;
