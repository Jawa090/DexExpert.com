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
import ServicesPage from "./pages/ServicesPage";

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
// Civil Estimating
import RoadConstructionPage from "./pages/services/estimating/RoadConstructionPage";
import BridgeEstimatingPage from "./pages/services/estimating/BridgeEstimatingPage";
import SiteworkTakeoffsPage from "./pages/services/estimating/SiteworkTakeoffsPage";
import EarthworksEstimationPage from "./pages/services/estimating/EarthworksEstimationPage";

// Structure/Shell Estimating
import StructuralEstimatingPage from "./pages/services/estimating/StructuralEstimatingPage";
import MetalWoodFramingPage from "./pages/services/estimating/MetalWoodFramingPage";
import RebarEstimatingPage from "./pages/services/estimating/RebarEstimatingPage";
import FoundationEstimatingPage from "./pages/services/estimating/FoundationEstimatingPage";
import ShellConstructionPage from "./pages/services/estimating/ShellConstructionPage";
import ConcreteTakeoffsPage from "./pages/services/estimating/ConcreteTakeoffsPage";

// Architectural Estimating
import ArchitecturalQSPage from "./pages/services/estimating/ArchitecturalQSPage";
import FlooringTilingPage from "./pages/services/estimating/FlooringTilingPage";
import FinishMaterialPage from "./pages/services/estimating/FinishMaterialPage";
import DrywallEstimationPage from "./pages/services/estimating/DrywallEstimationPage";
import RoofingCladdingPage from "./pages/services/estimating/RoofingCladdingPage";
import DoorWindowPage from "./pages/services/estimating/DoorWindowPage";

// MEP Estimating
import MEPTakeoffsPage from './pages/services/estimating/MEPTakeoffsPage';
import HVACEstimatingPage from './pages/services/estimating/HVACEstimatingPage';
import ElectricalEstimatingPage from './pages/services/estimating/ElectricalEstimatingPage';
import PlumbingEstimationPage from './pages/services/estimating/PlumbingEstimationPage';
import MechanicalEstimatingPage from './pages/services/estimating/MechanicalEstimatingPage';

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
            <Route path="services" element={<ServicesPage />} />
            
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
            
            {/* Estimating Services Routes - Civil */}
            <Route path="services/estimating/road-construction" element={<RoadConstructionPage />} />
            <Route path="services/estimating/bridge-estimating" element={<BridgeEstimatingPage />} />
            <Route path="services/estimating/sitework-takeoffs" element={<SiteworkTakeoffsPage />} />
            <Route path="services/estimating/earthworks-estimation" element={<EarthworksEstimationPage />} />
            {/* Estimating Services Routes - Structure/Shell */}
            <Route path="services/estimating/structural-estimating" element={<StructuralEstimatingPage />} />
            <Route path="services/estimating/metal-wood-framing" element={<MetalWoodFramingPage />} />
            <Route path="services/estimating/rebar-estimating" element={<RebarEstimatingPage />} />
            <Route path="services/estimating/foundation-estimating" element={<FoundationEstimatingPage />} />
            <Route path="services/estimating/shell-construction" element={<ShellConstructionPage />} />
            <Route path="services/estimating/concrete-takeoffs" element={<ConcreteTakeoffsPage />} />
            {/* Estimating Services Routes - Architectural */}
            <Route path="services/estimating/architectural-qs" element={<ArchitecturalQSPage />} />
            <Route path="services/estimating/flooring-tiling" element={<FlooringTilingPage />} />
            <Route path="services/estimating/finish-material-takeoffs" element={<FinishMaterialPage />} />
            <Route path="services/estimating/drywall-estimation" element={<DrywallEstimationPage />} />
            <Route path="services/estimating/roofing-cladding" element={<RoofingCladdingPage />} />
            <Route path="services/estimating/door-window-takeoffs" element={<DoorWindowPage />} />
            
            {/* MEP Estimating Routes */}
            <Route path="services/estimating/mep-takeoffs" element={<MEPTakeoffsPage />} />
            <Route path="services/estimating/hvac-estimating" element={<HVACEstimatingPage />} />
            <Route path="services/estimating/electrical-estimating" element={<ElectricalEstimatingPage />} />
            <Route path="services/estimating/plumbing-estimation" element={<PlumbingEstimationPage />} />
            <Route path="services/estimating/mechanical-estimating" element={<MechanicalEstimatingPage />} />
            
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
