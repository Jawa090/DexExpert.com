
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const VirtualRealityPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our Virtual Reality (VR) services provide immersive experiences that allow stakeholders to walk through and interact with architectural designs before construction begins. This cutting-edge technology enhances design communication and enables better decision-making.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From interactive design reviews to marketing presentations, VR technology creates powerful experiences that engage clients and facilitate project approvals.
      </p>
    </>
  );

  const servicePoints = [
    "VR Walkthroughs",
    "Interactive Design Reviews",
    "Real-time Modifications",
    "Multi-user Experiences",
    "VR Marketing Presentations",
    "Design Validation",
    "Client Engagement",
    "Immersive Storytelling"
  ];

  const features = [
    {
      title: "Immersive Experience",
      description: "Full immersion allows clients to experience spaces at actual scale and understand spatial relationships."
    },
    {
      title: "Interactive Design",
      description: "Real-time modifications and material changes during VR sessions streamline the design process."
    },
    {
      title: "Enhanced Communication",
      description: "VR eliminates interpretation gaps and ensures all stakeholders share the same vision."
    }
  ];

  const relatedServices = [
    {
      title: "3D Rendering",
      description: "High-quality renderings complement VR experiences for comprehensive visualization.",
      link: "/services/design/3d-rendering"
    },
    {
      title: "BIM Services",
      description: "BIM models provide the data foundation for accurate VR experiences.",
      link: "/services/design/bim-services"
    }
  ];

  return (
    <ServiceTemplate
      title="Virtual Reality Walkthroughs"
      heroDescription="Immersive VR experiences that transform how you visualize and interact with architectural designs."
      heroImage="https://images.unsplash.com/photo-1592478411213-6153e4ebc696"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default VirtualRealityPage;
