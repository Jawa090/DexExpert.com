
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const QualityAssurancePage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our quality assurance and quality control (QA/QC) services ensure that construction work meets specifications, standards, and regulatory requirements. We implement comprehensive quality management systems that prevent defects and ensure project success.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From material testing to final inspections, our QA/QC programs provide the quality oversight needed for successful project delivery.
      </p>
    </>
  );

  const servicePoints = [
    "Quality Control Plans",
    "Material Testing",
    "Inspection Services",
    "Non-Destructive Testing",
    "Documentation Control",
    "Corrective Actions",
    "Quality Audits",
    "Compliance Verification"
  ];

  const features = [
    {
      title: "Comprehensive Testing",
      description: "Complete material testing and inspection services to verify quality and compliance."
    },
    {
      title: "Preventive Approach",
      description: "Proactive quality management that prevents defects rather than finding them after completion."
    },
    {
      title: "Detailed Documentation",
      description: "Thorough documentation and reporting that supports quality verification and compliance."
    }
  ];

  const relatedServices = [
    {
      title: "Site Supervision",
      description: "On-site management that implements quality control procedures.",
      link: "/services/construction/site-supervision"
    },
    {
      title: "Safety Management",
      description: "Safety programs that complement quality assurance efforts.",
      link: "/services/construction/safety-management"
    }
  ];

  return (
    <ServiceTemplate
      title="Quality Assurance (QA/QC)"
      heroDescription="Comprehensive quality assurance and control services ensuring project excellence."
      heroImage="https://images.unsplash.com/photo-1565688534245-05d6b5be184a"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default QualityAssurancePage;
