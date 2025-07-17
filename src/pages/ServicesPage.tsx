import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    category: "Quantity Takeoff Services",
    items: [
      { title: "Concrete Estimating Service (Footings, Slabs, Columns)", path: "/services/quantity-takeoff/concrete-estimating" },
      { title: "Masonry Estimating Services (Brickwork, Blockwork)", path: "/services/quantity-takeoff/masonry-estimating" },
      { title: "Structural & Reinforcing Steel", path: "/services/quantity-takeoff/structural-steel" },
      { title: "Carpentry, Millwork & Cabinetry", path: "/services/quantity-takeoff/carpentry-millwork" },
      { title: "Drywall & Insulation", path: "/services/quantity-takeoff/drywall-insulation" },
      { title: "Roofing & Waterproofing", path: "/services/quantity-takeoff/roofing-waterproofing" },
      { title: "Flooring (Tile, Wood, Carpet)", path: "/services/quantity-takeoff/flooring" },
      { title: "Doors, Windows & Glazing", path: "/services/quantity-takeoff/doors-windows" },
      { title: "MEP Systems (Mechanical, Electrical, Plumbing)", path: "/services/quantity-takeoff/mep-systems" },
      { title: "Sitework, Earthworks, Landscaping, Utilities", path: "/services/quantity-takeoff/sitework" },
    ],
  },
  {
    category: "Cost Estimation Services",
    items: [
      { title: "Preliminary / Budget Estimates", path: "/services/cost-estimation/preliminary-budget" },
      { title: "Detailed Estimates (Schematic, DD, CD)", path: "/services/cost-estimation/detailed" },
      { title: "Bid Estimates (Tendering)", path: "/services/cost-estimation/bid" },
      { title: "Conceptual Estimating", path: "/services/cost-estimation/conceptual" },
      { title: "Labor & Equipment Rate Analysis", path: "/services/cost-estimation/labor-equipment" },
      { title: "Life-Cycle Cost Analysis", path: "/services/cost-estimation/life-cycle" },
      { title: "Value Engineering Support", path: "/services/cost-estimation/value-engineering" },
      { title: "Change Order Estimates", path: "/services/cost-estimation/change-order" },
    ],
  },
  {
    category: "Specialized Estimating",
    items: [
      { title: "Trade-Specific (HVAC, Electrical, Plumbing)", path: "/services/specialized/trade-specific" },
      { title: "Civil & Infrastructure Projects", path: "/services/specialized/civil-infrastructure" },
      { title: "Residential / Commercial / Industrial", path: "/services/specialized/residential-commercial" },
      { title: "Green Building / LEED Estimating", path: "/services/specialized/green-building" },
    ],
  },
  {
    category: "Software-Based Estimating",
    items: [
      { title: "On-Screen Takeoff (OST)", path: "/services/software/on-screen-takeoff" },
      { title: "Bluebeam Revu", path: "/services/software/bluebeam-revu" },
      { title: "Planswift", path: "/services/software/planswift" },
      { title: "RSMeans Integration", path: "/services/software/rsmeans" },
      { title: "Microsoft Excel Estimating Models", path: "/services/software/excel-models" },
      { title: "CostX / Trimble / STACK", path: "/services/software/costx-trimble-stack" },
      { title: "ProEst / CoConstruct / Buildertrend", path: "/services/software/proest-coconstruct" },
    ],
  },
  {
    category: "Documentation & Reporting",
    items: [
      { title: "Bill of Quantities (BOQ)", path: "/services/documentation/boq" },
      { title: "Material Cost Reports", path: "/services/documentation/material-cost" },
      { title: "Vendor Comparison Reports", path: "/services/documentation/vendor-comparison" },
      { title: "Bid Package Preparation", path: "/services/documentation/bid-package" },
      { title: "Cost Breakdown Structures (CBS)", path: "/services/documentation/cbs" },
      { title: "Historical Cost Database", path: "/services/documentation/historical-cost" },
    ],
  },
  {
    category: "Project Support Services",
    items: [
      { title: "Scope Gap Analysis", path: "/services/support/scope-gap" },
      { title: "Subcontractor Quote Review", path: "/services/support/subcontractor-quote" },
      { title: "Estimate Validation & Peer Review", path: "/services/support/estimate-validation" },
      { title: "Project Cost Benchmarking", path: "/services/support/benchmarking" },
      { title: "Cash Flow Forecasting", path: "/services/support/cash-flow" },
    ],
  },
  {
    category: "Construction Management",
    items: [
      { title: "Project Execution", path: "/services/construction/project-execution" },
      { title: "Planning & Scheduling", path: "/services/construction/planning-scheduling" },
      { title: "Site Supervision", path: "/services/construction/site-supervision" },
      { title: "Subcontractor Coordination", path: "/services/construction/subcontractor-coordination" },
      { title: "Technology & Innovation", path: "/services/construction/technology-innovation" },
      { title: "Safety & Compliance", path: "/services/construction/safety-compliance" },
      { title: "Financial & Legal", path: "/services/construction/financial-legal" },
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | DexExperts</title>
        <meta name="description" content="Comprehensive construction services including design, engineering, estimation, and project management." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-gold py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Comprehensive construction solutions tailored to your needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="text-3xl font-bold text-brand-navy"
                >
                  {category.category}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (serviceIndex * 0.1) }}
                    >
                      <Link 
                        to={service.path}
                        className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can help with your construction project needs.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 