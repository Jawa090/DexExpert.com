
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const DroneSurveyPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our drone survey services provide accurate, efficient aerial data collection for construction projects. We utilize advanced UAV technology to capture high-resolution imagery, topographic data, and progress documentation from unique perspectives.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From initial site surveys to progress monitoring, drone technology provides cost-effective solutions for data collection and project documentation.
      </p>
    </>
  );

  const servicePoints = [
    "Aerial Site Surveys",
    "Topographic Mapping",
    "Progress Documentation",
    "Volumetric Calculations",
    "Thermal Imaging",
    "3D Modeling",
    "Inspection Services",
    "GIS Integration"
  ];

  const features = [
    {
      title: "Advanced Technology",
      description: "State-of-the-art drone equipment with high-resolution cameras and specialized sensors."
    },
    {
      title: "Rapid Data Collection",
      description: "Efficient aerial surveys that cover large areas quickly and safely."
    },
    {
      title: "Accurate Results",
      description: "Precise measurements and detailed documentation for informed decision-making."
    }
  ];

  const relatedServices = [
    {
      title: "GIS Mapping",
      description: "Geographic information systems that integrate with drone survey data.",
      link: "/services/construction/gis-mapping"
    },
    {
      title: "Digital Twin",
      description: "Digital twin solutions that utilize drone-captured data for modeling.",
      link: "/services/construction/digital-twin"
    }
  ];

  return (
    <ServiceTemplate
      title="Drone Surveys"
      heroDescription="Advanced aerial survey services using drone technology for accurate site data collection."
      heroImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default DroneSurveyPage;
