
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const StructuralEngineeringPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our structural engineering services provide the essential foundation for safe, efficient, and resilient building designs. We combine technical expertise with innovative solutions to ensure your structures can withstand all anticipated loads and forces while optimizing material usage and construction efficiency.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From high-rise buildings to complex industrial facilities, our team of experienced structural engineers delivers comprehensive analysis, design, and documentation services tailored to your specific project requirements.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        We work closely with architects, contractors, and other stakeholders to develop structural systems that not only meet code requirements but also accommodate architectural vision and construction realities.
      </p>
    </>
  );

  const servicePoints = [
    "Structural Analysis & Design",
    "Seismic & Wind Engineering",
    "Foundation Design",
    "Retrofitting & Rehabilitation",
    "Structural Inspection & Assessment",
    "Connection Design",
    "Building Code Compliance",
    "Construction Administration"
  ];

  const features = [
    {
      title: "Advanced Structural Analysis",
      description: "We utilize state-of-the-art software and analytical methods to model complex structural systems and evaluate their performance under various loading conditions."
    },
    {
      title: "Material Optimization",
      description: "Our designs optimize the use of structural materials to reduce costs and environmental impact while maintaining safety and performance requirements."
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with architects and other disciplines to develop integrated structural solutions that support architectural vision and functional requirements."
    },
    {
      title: "Constructability Focus",
      description: "Our designs consider construction methods, sequencing, and practical implementation to streamline the building process and reduce construction challenges."
    },
    {
      title: "Comprehensive Documentation",
      description: "We provide clear, detailed structural drawings and specifications that facilitate accurate bidding, permitting, and construction."
    }
  ];

  const relatedServices = [
    {
      title: "BIM Services",
      description: "Building Information Modeling for improved coordination and visualization of structural systems with other building components.",
      link: "/services/design/bim-services"
    },
    {
      title: "Architectural Design",
      description: "Integrated architectural design services that work in harmony with structural engineering requirements.",
      link: "/services/design/architectural-design"
    },
    {
      title: "MEP Design",
      description: "Mechanical, electrical, and plumbing design services coordinated with structural systems.",
      link: "/services/design/mep-design"
    }
  ];

  return (
    <ServiceTemplate
      title="Structural Engineering"
      heroDescription="Expert structural engineering solutions for safe, efficient, and innovative building designs."
      heroImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default StructuralEngineeringPage;
