
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const CivilEstimatingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our civil estimating services provide detailed cost analysis for infrastructure projects including roads, bridges, utilities, and site development. We combine engineering expertise with accurate quantity takeoffs to deliver reliable estimates for civil construction projects.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From earthwork calculations to utility installations, our civil estimates cover all aspects of infrastructure development with precision and attention to detail.
      </p>
    </>
  );

  const servicePoints = [
    "Earthwork & Excavation",
    "Road & Pavement Design",
    "Bridge & Structure Costs",
    "Utility Installation",
    "Site Development",
    "Drainage Systems",
    "Traffic Control",
    "Environmental Compliance"
  ];

  const features = [
    {
      title: "Infrastructure Expertise",
      description: "Specialized knowledge of civil construction methods and current market conditions."
    },
    {
      title: "Regulatory Awareness",
      description: "Understanding of civil engineering standards and regulatory requirements."
    },
    {
      title: "Comprehensive Analysis",
      description: "Complete project coverage from site preparation through final installation."
    }
  ];

  const relatedServices = [
    {
      title: "GIS Mapping",
      description: "Geographic information systems that support civil project analysis.",
      link: "/services/construction/gis-mapping"
    },
    {
      title: "Drone Surveys",
      description: "Aerial survey services for accurate site analysis and quantity calculations.",
      link: "/services/construction/drone-surveys"
    }
  ];

  return (
    <ServiceTemplate
      title="Civil Estimating"
      heroDescription="Comprehensive cost estimates for civil infrastructure and site development projects."
      heroImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default CivilEstimatingPage;
