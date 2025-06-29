import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from '@/contexts/AppContext';
import { ShopProvider } from '@/components/shop/ShopContext';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import HousingSupport from "./pages/services/HousingSupport";
import CareerAssistance from "./pages/services/CareerAssistance";
import HealthWellness from "./pages/services/HealthWellness";
import CommunityPrograms from "./pages/services/CommunityPrograms";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";
import BuildsPage from "./pages/BuildsPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import DonationPage from "./pages/DonationPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="light">
      <AppProvider>
        <ShopProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/housing-support" element={<HousingSupport />} />
                  <Route path="/services/career-assistance" element={<CareerAssistance />} />
                  <Route path="/services/health-wellness" element={<HealthWellness />} />
                  <Route path="/services/community-programs" element={<CommunityPrograms />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/builds" element={<BuildsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/donate" element={<DonationPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </ShopProvider>
      </AppProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
