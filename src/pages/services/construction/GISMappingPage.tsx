
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const GISMappingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our GIS mapping services provide comprehensive geographic information systems for construction and infrastructure projects. We create detailed spatial databases that support planning, analysis, and decision-making throughout the project lifecycle.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From site analysis to utility mapping, our GIS solutions provide the spatial intelligence needed for successful project development and management.
      </p>
    </>
  );

  const servicePoints = [
    "Spatial Data Analysis",
    "Utility Mapping",
    "Site Planning",
    "Environmental Analysis",
    "Asset Management",
    "Network Analysis",
    "Web GIS Solutions",
    "Data Integration"
  ];

  const features = [
    {
      title: "Comprehensive Mapping",
      description: "Detailed geographic databases that support all aspects of project planning and management."
    },
    {
      title: "Advanced Analysis",
      description: "Sophisticated spatial analysis tools for informed decision-making and planning."
    },
    {
      title: "Integration Capabilities",
      description: "Seamless integration with other project systems and data sources."
    }
  ];

  const relatedServices = [
    {
      title: "Drone Surveys",
      description: "Aerial survey services that provide data for GIS mapping applications.",
      link: "/services/construction/drone-surveys"
    },
    {
      title: "Civil Estimating",
      description: "Infrastructure cost estimating that utilizes GIS data for accuracy.",
      link: "/services/estimating/civil-estimating"
    }
  ];

  return (
    <ServiceTemplate
      title="GIS Mapping"
      heroDescription="Comprehensive GIS mapping services for spatial analysis and project intelligence."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default GISMappingPage;
