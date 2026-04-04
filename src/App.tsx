import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AirportToCBD from "./pages/AirportToCBD.tsx";
import MaxiTaxi from "./pages/MaxiTaxi.tsx";
import TaxisMelbourneVictoria from "./pages/TaxisMelbourneVictoria.tsx";
import MelbourneTaxiCBD from "./pages/MelbourneTaxiCBD.tsx";
import HowToBookTaxi from "./pages/HowToBookTaxi.tsx";
import TaxiFareCalculator from "./pages/TaxiFareCalculator.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import DMCA from "./pages/DMCA.tsx";
import LegalNotice from "./pages/LegalNotice.tsx";
import ParentsInfo from "./pages/ParentsInfo.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/taxi-melbourne-airport-to-cbd" element={<AirportToCBD />} />
          <Route path="/maxi-taxi-melbourne" element={<MaxiTaxi />} />
          <Route path="/taxis-melbourne-victoria" element={<TaxisMelbourneVictoria />} />
          <Route path="/melbourne-taxi-cbd" element={<MelbourneTaxiCBD />} />
          <Route path="/how-to-book-taxi-melbourne" element={<HowToBookTaxi />} />
          <Route path="/taxi-fare-calculator-melbourne" element={<TaxiFareCalculator />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/parents-info" element={<ParentsInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
