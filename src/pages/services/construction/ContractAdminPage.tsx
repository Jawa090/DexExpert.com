
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const ContractAdminPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our contract administration services provide comprehensive management of construction contracts from award through project completion. We ensure compliance with contract terms while facilitating smooth project execution and stakeholder relationships.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From payment processing to change order management, our contract administration services protect your interests and maintain project momentum.
      </p>
    </>
  );

  const servicePoints = [
    "Contract Management",
    "Payment Processing",
    "Change Order Administration",
    "Compliance Monitoring",
    "Document Control",
    "Communication Coordination",
    "Performance Evaluation",
    "Dispute Resolution"
  ];

  const features = [
    {
      title: "Contract Expertise",
      description: "Deep understanding of construction contracts and industry practices for effective administration."
    },
    {
      title: "Proactive Management",
      description: "Early identification and resolution of contract issues prevents disputes and delays."
    },
    {
      title: "Stakeholder Coordination",
      description: "Effective communication and coordination among all project stakeholders."
    }
  ];

  const relatedServices = [
    {
      title: "Claims Management",
      description: "Specialized services for construction claims analysis and resolution.",
      link: "/services/construction/claims-management"
    },
    {
      title: "Cost Control",
      description: "Budget management services that integrate with contract administration.",
      link: "/services/construction/cost-control"
    }
  ];

  return (
    <ServiceTemplate
      title="Contract Administration"
      heroDescription="Professional contract administration services for effective construction project management."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default ContractAdminPage;
