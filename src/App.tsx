import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import ServicePage from "./pages/ServicePage";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Sitemap from "./pages/Sitemap";
import ComingSoon from "./pages/ComingSoon";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/blog/:blogId" element={<BlogDetail />} />
              {/* Dynamic route for all service pages */}
              <Route path="/services/:serviceId" element={<ServicePage />} />
              
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>            
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
