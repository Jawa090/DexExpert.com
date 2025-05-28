
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const BluebeamPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our Bluebeam Revu estimating services leverage this powerful PDF-based platform for accurate takeoffs, markups, and collaboration. We utilize Bluebeam's advanced measurement tools and markup capabilities to streamline the estimating process.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From quantity takeoffs to collaborative bid review, Bluebeam Revu enhances accuracy and facilitates seamless communication throughout the estimating process.
      </p>
    </>
  );

  const servicePoints = [
    "PDF-based Takeoffs",
    "Measurement Tools",
    "Markup & Collaboration",
    "Quantity Calculations",
    "Cost Database Integration",
    "Report Generation",
    "Cloud Collaboration",
    "Version Control"
  ];

  const features = [
    {
      title: "PDF Integration",
      description: "Direct takeoffs from PDF plans with advanced measurement and markup tools."
    },
    {
      title: "Collaboration Platform",
      description: "Real-time collaboration and markup sharing for improved project communication."
    },
    {
      title: "Comprehensive Toolset",
      description: "Complete suite of estimating tools within a single, integrated platform."
    }
  ];

  const relatedServices = [
    {
      title: "PlanSwift Services",
      description: "Alternative digital takeoff solutions using PlanSwift technology.",
      link: "/services/estimating/planswift"
    },
    {
      title: "BOQ Preparation",
      description: "Bill of quantities preparation using Bluebeam takeoff data.",
      link: "/services/estimating/boq"
    }
  ];

  return (
    <ServiceTemplate
      title="Bluebeam Revu Estimating"
      heroDescription="Professional estimating services using Bluebeam Revu for accurate takeoffs and collaboration."
      heroImage="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default BluebeamPage;
