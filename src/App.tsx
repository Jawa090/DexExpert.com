import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PortfolioPage from "./pages/PortfolioPage";
import SamplesPage from "./pages/SamplesPage";

// Service Pages - Design & Engineering
import ArchitecturalDesignPage from "./pages/services/design/ArchitecturalDesignPage";
import StructuralEngineeringPage from "./pages/services/design/StructuralEngineeringPage";
import MEPDesignPage from "./pages/services/design/MEPDesignPage";
import InteriorDesignPage from "./pages/services/design/InteriorDesignPage";
import BIMServicesPage from "./pages/services/design/BIMServicesPage";
import RenderingPage from "./pages/services/design/RenderingPage";
import VirtualRealityPage from "./pages/services/design/VirtualRealityPage";
import PermittingPage from "./pages/services/design/PermittingPage";
import FeasibilityPage from "./pages/services/design/FeasibilityPage";
import SustainableDesignPage from "./pages/services/design/SustainableDesignPage";

// Service Pages - Estimating
import ConcreteTakeoffsPage from "./pages/services/estimating/ConcreteTakeoffsPage";
import MEPTakeoffsPage from "./pages/services/estimating/MEPTakeoffsPage";
import SteelTakeoffsPage from "./pages/services/estimating/SteelTakeoffsPage";
import ConceptualEstimatingPage from "./pages/services/estimating/ConceptualEstimatingPage";
import BidEstimatingPage from "./pages/services/estimating/BidEstimatingPage";
import ChangeOrderPage from "./pages/services/estimating/ChangeOrderPage";
import CivilEstimatingPage from "./pages/services/estimating/CivilEstimatingPage";
import GreenEstimatingPage from "./pages/services/estimating/GreenEstimatingPage";
import LaborEstimatingPage from "./pages/services/estimating/LaborEstimatingPage";
import PlanswiftPage from "./pages/services/estimating/PlanswiftPage";
import BluebeamPage from "./pages/services/estimating/BluebeamPage";
import BOQPage from "./pages/services/estimating/BOQPage";

// Service Pages - Construction Management
import ConstructionPlanningPage from "./pages/services/construction/ConstructionPlanningPage";
import SiteSupervisionPage from "./pages/services/construction/SiteSupervisionPage";
import SubcontractorPage from "./pages/services/construction/SubcontractorPage";
import DroneSurveyPage from "./pages/services/construction/DroneSurveyPage";
import DigitalTwinPage from "./pages/services/construction/DigitalTwinPage";
import GISMappingPage from "./pages/services/construction/GISMappingPage";
import SafetyManagementPage from "./pages/services/construction/SafetyManagementPage";
import QualityAssurancePage from "./pages/services/construction/QualityAssurancePage";
import ContractAdminPage from "./pages/services/construction/ContractAdminPage";
import CostControlPage from "./pages/services/construction/CostControlPage";
import ClaimsManagementPage from "./pages/services/construction/ClaimsManagementPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogPostPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="samples" element={<SamplesPage />} />
            
            {/* Design & Engineering Services Routes */}
            <Route path="services/design/architectural-design" element={<ArchitecturalDesignPage />} />
            <Route path="services/design/structural-engineering" element={<StructuralEngineeringPage />} />
            <Route path="services/design/mep-design" element={<MEPDesignPage />} />
            <Route path="services/design/interior-design" element={<InteriorDesignPage />} />
            <Route path="services/design/bim-services" element={<BIMServicesPage />} />
            <Route path="services/design/3d-rendering" element={<RenderingPage />} />
            <Route path="services/design/virtual-reality" element={<VirtualRealityPage />} />
            <Route path="services/design/permitting" element={<PermittingPage />} />
            <Route path="services/design/feasibility" element={<FeasibilityPage />} />
            <Route path="services/design/sustainable-design" element={<SustainableDesignPage />} />
            
            {/* Estimating Services Routes */}
            <Route path="services/estimating/concrete-takeoffs" element={<ConcreteTakeoffsPage />} />
            <Route path="services/estimating/mep-takeoffs" element={<MEPTakeoffsPage />} />
            <Route path="services/estimating/steel-takeoffs" element={<SteelTakeoffsPage />} />
            <Route path="services/estimating/conceptual-estimating" element={<ConceptualEstimatingPage />} />
            <Route path="services/estimating/bid-estimating" element={<BidEstimatingPage />} />
            <Route path="services/estimating/change-order" element={<ChangeOrderPage />} />
            <Route path="services/estimating/civil-estimating" element={<CivilEstimatingPage />} />
            <Route path="services/estimating/green-estimating" element={<GreenEstimatingPage />} />
            <Route path="services/estimating/labor-equipment" element={<LaborEstimatingPage />} />
            <Route path="services/estimating/planswift" element={<PlanswiftPage />} />
            <Route path="services/estimating/bluebeam" element={<BluebeamPage />} />
            <Route path="services/estimating/boq" element={<BOQPage />} />
            
            {/* Construction Management Routes */}
            <Route path="services/construction/planning-scheduling" element={<ConstructionPlanningPage />} />
            <Route path="services/construction/site-supervision" element={<SiteSupervisionPage />} />
            <Route path="services/construction/subcontractor" element={<SubcontractorPage />} />
            <Route path="services/construction/drone-surveys" element={<DroneSurveyPage />} />
            <Route path="services/construction/digital-twin" element={<DigitalTwinPage />} />
            <Route path="services/construction/gis-mapping" element={<GISMappingPage />} />
            <Route path="services/construction/safety-management" element={<SafetyManagementPage />} />
            <Route path="services/construction/quality-assurance" element={<QualityAssurancePage />} />
            <Route path="services/construction/contract-admin" element={<ContractAdminPage />} />
            <Route path="services/construction/cost-control" element={<CostControlPage />} />
            <Route path="services/construction/claims-management" element={<ClaimsManagementPage />} />
            
            {/* Add the catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
