
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const ConstructionPlanningPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our construction planning and scheduling services provide comprehensive project management solutions that ensure efficient execution from groundbreaking to completion. We develop detailed schedules that optimize resource allocation and minimize project duration.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From critical path analysis to resource leveling, our planning services help you maintain control over project timelines and deliverables.
      </p>
    </>
  );

  const servicePoints = [
    "Project Scheduling",
    "Critical Path Analysis",
    "Resource Planning",
    "Milestone Development",
    "Progress Tracking",
    "Schedule Updates",
    "Risk Analysis",
    "Coordination Planning"
  ];

  const features = [
    {
      title: "Comprehensive Planning",
      description: "Detailed project schedules that account for all activities, dependencies, and resource requirements."
    },
    {
      title: "Advanced Scheduling",
      description: "Industry-standard scheduling software and methodologies for optimal project control."
    },
    {
      title: "Continuous Monitoring",
      description: "Regular schedule updates and progress tracking to maintain project momentum."
    }
  ];

  const relatedServices = [
    {
      title: "Site Supervision",
      description: "On-site project management that implements and monitors planning decisions.",
      link: "/services/construction/site-supervision"
    },
    {
      title: "Cost Control",
      description: "Budget management services that integrate with project scheduling.",
      link: "/services/construction/cost-control"
    }
  ];

  return (
    <ServiceTemplate
      title="Construction Planning & Scheduling"
      heroDescription="Comprehensive project planning and scheduling services for efficient construction execution."
      heroImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default ConstructionPlanningPage;
