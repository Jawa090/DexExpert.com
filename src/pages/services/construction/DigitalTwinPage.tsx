
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const DigitalTwinPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our digital twin solutions create real-time virtual replicas of your construction projects and facilities. These dynamic models integrate live data to provide unprecedented insights into project performance and facility operations.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From construction monitoring to facility management, digital twins enable data-driven decision-making and predictive analytics for optimal project outcomes.
      </p>
    </>
  );

  const servicePoints = [
    "Real-time Modeling",
    "IoT Integration",
    "Performance Analytics",
    "Predictive Maintenance",
    "Progress Visualization",
    "Data Dashboard",
    "Remote Monitoring",
    "Lifecycle Management"
  ];

  const features = [
    {
      title: "Real-time Updates",
      description: "Live data integration provides up-to-the-minute insights into project and facility status."
    },
    {
      title: "Predictive Analytics",
      description: "Advanced analytics enable proactive decision-making and issue prevention."
    },
    {
      title: "Comprehensive Integration",
      description: "Seamless connection with existing systems and data sources for complete visibility."
    }
  ];

  const relatedServices = [
    {
      title: "BIM Services",
      description: "Building Information Modeling that provides the foundation for digital twin development.",
      link: "/services/design/bim-services"
    },
    {
      title: "Drone Surveys",
      description: "Aerial data collection that feeds into digital twin models.",
      link: "/services/construction/drone-surveys"
    }
  ];

  return (
    <ServiceTemplate
      title="Digital Twin Solutions"
      heroDescription="Advanced digital twin technology for real-time project monitoring and facility management."
      heroImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default DigitalTwinPage;
