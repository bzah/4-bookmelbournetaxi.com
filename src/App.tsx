import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AirportToCBD from "./pages/AirportToCBD.tsx";
import MaxiTaxi from "./pages/MaxiTaxi.tsx";
import TaxisMelbourneVictoria from "./pages/TaxisMelbourneVictoria.tsx";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
