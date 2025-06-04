
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ThemeProvider } from "@/hooks/useTheme";
import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Registration from "./pages/Registration";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import OnlineVisibility from "./pages/OnlineVisibility";
import WebsiteService from "./pages/WebsiteService";
import LogoService from "./pages/LogoService";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import TaxDeclaration from "./pages/TaxDeclaration";
import Accounting from "./pages/Accounting";
import Journal from "./pages/Journal";
import Simulator from "./pages/Simulator";
import AboutUs from "./pages/AboutUs";
import Offshore from "./pages/Offshore";
import CharteGraphique from "./pages/CharteGraphique";
import SupportsMarketing from "./pages/SupportsMarketing";
import PackEntrepreneur from "./pages/PackEntrepreneur";
import CentreAide from "./pages/CentreAide";
import NotreEquipe from "./pages/NotreEquipe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="niger-hub-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accueil" element={<Index />} />
              <Route path="/creer-compte" element={<CreateAccount />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/simulateur" element={<Simulator />} />
              <Route path="/tarifs" element={<Pricing />} />
              <Route path="/a-propos" element={<AboutUs />} />
              <Route path="/offshore" element={<Offshore />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Services */}
              <Route path="/charte-graphique" element={<CharteGraphique />} />
              <Route path="/supports-marketing" element={<SupportsMarketing />} />
              <Route path="/pack-entrepreneur" element={<PackEntrepreneur />} />
              
              {/* Support */}
              <Route path="/centre-aide" element={<CentreAide />} />
              
              {/* Entreprise */}
              <Route path="/notre-equipe" element={<NotreEquipe />} />
              
              {/* Protected Routes */}
              <Route path="/tableau-de-bord" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/inscription-nif-rccm" element={
                <ProtectedRoute>
                  <Registration />
                </ProtectedRoute>
              } />
              <Route path="/visibilite-en-ligne" element={
                <ProtectedRoute>
                  <OnlineVisibility />
                </ProtectedRoute>
              } />
              <Route path="/website-service" element={
                <ProtectedRoute>
                  <WebsiteService />
                </ProtectedRoute>
              } />
              <Route path="/logo-service" element={
                <ProtectedRoute>
                  <LogoService />
                </ProtectedRoute>
              } />
              <Route path="/declaration-fiscale" element={
                <ProtectedRoute>
                  <TaxDeclaration />
                </ProtectedRoute>
              } />
              <Route path="/comptabilite" element={
                <ProtectedRoute>
                  <Accounting />
                </ProtectedRoute>
              } />
              
              {/* Compatibility */}
              <Route path="/inscription" element={
                <ProtectedRoute>
                  <Registration />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
