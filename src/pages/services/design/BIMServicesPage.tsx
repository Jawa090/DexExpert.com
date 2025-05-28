
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const BIMServicesPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our Building Information Modeling (BIM) services provide comprehensive 3D modeling solutions that enhance collaboration, reduce errors, and improve project outcomes. We utilize industry-leading software to create detailed, data-rich models that serve as the foundation for successful construction projects.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From initial design through construction and facility management, our BIM models provide valuable insights and coordination capabilities that streamline the entire building lifecycle.
      </p>
    </>
  );

  const servicePoints = [
    "3D Modeling & Visualization",
    "Clash Detection & Resolution",
    "4D Scheduling Integration",
    "5D Cost Estimation",
    "Revit Modeling",
    "Navisworks Coordination",
    "Model Management",
    "BIM Implementation"
  ];

  const features = [
    {
      title: "Advanced Coordination",
      description: "Our BIM models enable seamless coordination between architectural, structural, and MEP systems."
    },
    {
      title: "Error Reduction",
      description: "Clash detection and virtual construction reduce costly errors and rework during construction."
    },
    {
      title: "Data-Rich Models",
      description: "Our models contain comprehensive data that supports informed decision-making throughout the project."
    }
  ];

  const relatedServices = [
    {
      title: "3D Rendering",
      description: "Photorealistic renderings from BIM models for enhanced visualization.",
      link: "/services/design/3d-rendering"
    },
    {
      title: "Virtual Reality",
      description: "Immersive VR experiences generated from BIM models.",
      link: "/services/design/virtual-reality"
    }
  ];

  return (
    <ServiceTemplate
      title="BIM Services"
      heroDescription="Advanced Building Information Modeling for enhanced collaboration and project coordination."
      heroImage="https://images.unsplash.com/photo-1558618666-fbd2c4ff2ba9"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default BIMServicesPage;
