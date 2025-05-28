
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';

const CostControlPage = () => {
  const mainDescription = (
    <>
      <p className="text-lg text-gray-700 mb-6">
        Our cost control services provide ongoing budget management and financial oversight throughout the construction process. We monitor expenses, track budget performance, and implement controls to keep projects within approved budgets.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        From budget development to final cost reporting, our cost control services ensure financial accountability and project success.
      </p>
    </>
  );

  const servicePoints = [
    "Budget Development",
    "Cost Tracking",
    "Variance Analysis",
    "Cash Flow Management",
    "Progress Billing",
    "Cost Reporting",
    "Budget Forecasting",
    "Financial Controls"
  ];

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Continuous cost tracking provides up-to-date budget status and early warning of issues."
    },
    {
      title: "Variance Analysis",
      description: "Detailed analysis of budget variances helps identify trends and implement corrective actions."
    },
    {
      title: "Comprehensive Reporting",
      description: "Regular financial reports keep stakeholders informed of project financial status."
    }
  ];

  const relatedServices = [
    {
      title: "Contract Administration",
      description: "Contract management services that support cost control objectives.",
      link: "/services/construction/contract-admin"
    },
    {
      title: "Change Order Estimates",
      description: "Accurate change order pricing that supports budget management.",
      link: "/services/estimating/change-order"
    }
  ];

  return (
    <ServiceTemplate
      title="Cost Control"
      heroDescription="Comprehensive cost control services for effective construction budget management."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
      mainDescription={mainDescription}
      servicePoints={servicePoints}
      features={features}
      relatedServices={relatedServices}
    />
  );
};

export default CostControlPage;
