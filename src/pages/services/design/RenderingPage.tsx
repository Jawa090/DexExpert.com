
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const RenderingPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our 3D rendering and visualization services bring your designs to life with photorealistic images and animations that help stakeholders visualize the final project before construction begins. We create compelling visual narratives that communicate design intent and support project approvals.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From architectural exteriors to detailed interior spaces, our rendering team produces high-quality visualizations for presentations, marketing, and design development.
      </p>
    </>
  );

  const servicePoints = [
    "Photorealistic Renderings",
    "Architectural Visualization",
    "Interior Renderings",
    "Exterior Perspectives",
    "Animation & Walkthroughs",
    "Virtual Staging",
    "Lighting Studies",
    "Material & Texture Mapping"
  ];

  const features = [
    {
      title: "Photorealistic Quality",
      description: "Our renderings achieve exceptional realism with advanced lighting and material techniques."
    },
    {
      title: "Fast Turnaround",
      description: "Efficient workflow and experienced team deliver high-quality results on tight schedules."
    },
    {
      title: "Multiple Formats",
      description: "We deliver renderings in various formats suitable for presentations, marketing, and web use."
    }
  ];

  const relatedServices = [
    {
      title: "Virtual Reality",
      description: "Immersive VR experiences that complement traditional renderings.",
      link: "/services/design/virtual-reality"
    },
    {
      title: "BIM Services",
      description: "BIM models provide the foundation for accurate and detailed renderings.",
      link: "/services/design/bim-services"
    }
  ];

  return (
    <ServiceTemplate
      title="3D Rendering & Visualization"
      heroDescription="Photorealistic visualizations that bring your architectural designs to life."
      heroImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default RenderingPage;
