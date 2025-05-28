
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const SiteSupervisionPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our site supervision services provide experienced project management professionals who ensure construction projects are executed according to plans, specifications, and quality standards. We maintain constant oversight to keep projects on schedule and within budget.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From daily progress monitoring to quality control inspections, our site supervisors serve as your eyes and ears on the construction site.
      </p>
    </>
  );

  const servicePoints = [
    "Daily Site Inspections",
    "Quality Control",
    "Progress Monitoring",
    "Safety Oversight",
    "Subcontractor Coordination",
    "Problem Resolution",
    "Documentation & Reporting",
    "Schedule Compliance"
  ];

  const features = [
    {
      title: "Experienced Supervisors",
      description: "Qualified construction professionals with extensive field experience and technical knowledge."
    },
    {
      title: "Quality Assurance",
      description: "Continuous monitoring ensures work meets specifications and quality standards."
    },
    {
      title: "Proactive Management",
      description: "Early identification and resolution of issues prevents delays and cost overruns."
    }
  ];

  const relatedServices = [
    {
      title: "Quality Assurance",
      description: "Comprehensive QA/QC services that complement site supervision activities.",
      link: "/services/construction/quality-assurance"
    },
    {
      title: "Safety Management",
      description: "Integrated safety management programs for construction sites.",
      link: "/services/construction/safety-management"
    }
  ];

  return (
    <ServiceTemplate
      title="Site Supervision"
      heroDescription="Professional on-site supervision services ensuring quality construction and project success."
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default SiteSupervisionPage;
