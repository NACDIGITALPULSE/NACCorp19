
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creer-compte" element={<CreateAccount />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription-nif-rccm" element={<Registration />} />
          <Route path="/visibilite-en-ligne" element={<OnlineVisibility />} />
          <Route path="/website-service" element={<WebsiteService />} />
          <Route path="/logo-service" element={<LogoService />} />
          <Route path="/tarifs" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Ancien lien pour compatibilité */}
          <Route path="/inscription" element={<Registration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
