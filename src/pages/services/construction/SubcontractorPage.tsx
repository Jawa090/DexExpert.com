
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const SubcontractorPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our subcontractor coordination services ensure seamless integration of all trades and specialty contractors on your construction project. We manage communication, scheduling, and quality standards across all subcontracted work.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From initial procurement to final delivery, our coordination services optimize subcontractor performance and project outcomes.
      </p>
    </>
  );

  const servicePoints = [
    "Subcontractor Selection",
    "Scope Coordination",
    "Schedule Integration",
    "Quality Standards",
    "Communication Management",
    "Performance Monitoring",
    "Conflict Resolution",
    "Payment Coordination"
  ];

  const features = [
    {
      title: "Comprehensive Coordination",
      description: "Seamless integration of all subcontractor activities with overall project objectives."
    },
    {
      title: "Performance Management",
      description: "Continuous monitoring and evaluation of subcontractor performance and quality."
    },
    {
      title: "Efficient Communication",
      description: "Streamlined communication processes that keep all parties informed and coordinated."
    }
  ];

  const relatedServices = [
    {
      title: "Site Supervision",
      description: "On-site management that oversees subcontractor work and coordination.",
      link: "/services/construction/site-supervision"
    },
    {
      title: "Contract Administration",
      description: "Contract management services for subcontractor agreements.",
      link: "/services/construction/contract-admin"
    }
  ];

  return (
    <ServiceTemplate
      title="Subcontractor Coordination"
      heroDescription="Professional coordination services for seamless subcontractor integration and performance."
      heroImage="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default SubcontractorPage;
