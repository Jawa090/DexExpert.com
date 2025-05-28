
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const PlanswiftPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our PlanSwift and OST (On-Screen Takeoff) services utilize advanced digital takeoff software to provide accurate quantity measurements directly from digital plans. This technology-driven approach ensures precision while reducing turnaround time.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From simple area calculations to complex assemblies, our digital takeoff services deliver accurate quantities with detailed documentation and supporting calculations.
      </p>
    </>
  );

  const servicePoints = [
    "Digital Plan Takeoffs",
    "Automated Calculations",
    "Assembly Takeoffs",
    "Multi-layered Drawings",
    "Quantity Databases",
    "Reporting Tools",
    "Markup & Annotations",
    "Integration Capabilities"
  ];

  const features = [
    {
      title: "Advanced Software",
      description: "Industry-leading takeoff software for accurate and efficient quantity calculations."
    },
    {
      title: "Digital Accuracy",
      description: "Precise measurements from digital plans eliminate scaling errors and improve accuracy."
    },
    {
      title: "Detailed Reports",
      description: "Comprehensive takeoff reports with supporting documentation and calculations."
    }
  ];

  const relatedServices = [
    {
      title: "Bluebeam Services",
      description: "Complementary digital construction services using Bluebeam technology.",
      link: "/services/estimating/bluebeam"
    },
    {
      title: "BIM Services",
      description: "Building Information Modeling for enhanced quantity extraction and coordination.",
      link: "/services/design/bim-services"
    }
  ];

  return (
    <ServiceTemplate
      title="PlanSwift & OST Services"
      heroDescription="Advanced digital takeoff services using PlanSwift and On-Screen Takeoff technology."
      heroImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default PlanswiftPage;
