
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
            <Route path="/tarifs" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            {/* Ancien lien pour compatibilité */}
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
  </QueryClientProvider>
);

export default App;
