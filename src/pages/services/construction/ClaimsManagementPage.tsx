
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const ClaimsManagementPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our claims management services provide expert analysis and resolution support for construction disputes and claims. We help protect your interests through thorough documentation, analysis, and negotiation strategies.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From claim preparation to dispute resolution, our experienced team provides the expertise needed to achieve favorable outcomes in construction claims situations.
      </p>
    </>
  );

  const servicePoints = [
    "Claims Analysis",
    "Documentation Review",
    "Cost Impact Assessment",
    "Schedule Analysis",
    "Expert Testimony",
    "Negotiation Support",
    "Dispute Resolution",
    "Litigation Support"
  ];

  const features = [
    {
      title: "Expert Analysis",
      description: "Thorough technical and financial analysis of construction claims and disputes."
    },
    {
      title: "Documentation Support",
      description: "Comprehensive documentation and evidence compilation for claim support."
    },
    {
      title: "Resolution Focus",
      description: "Strategic approach aimed at achieving fair and efficient dispute resolution."
    }
  ];

  const relatedServices = [
    {
      title: "Contract Administration",
      description: "Contract management services that help prevent claims and disputes.",
      link: "/services/construction/contract-admin"
    },
    {
      title: "Change Order Estimates",
      description: "Accurate change order analysis that supports claims evaluation.",
      link: "/services/estimating/change-order"
    }
  ];

  return (
    <ServiceTemplate
      title="Claims Management"
      heroDescription="Expert construction claims analysis and dispute resolution services."
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default ClaimsManagementPage;
