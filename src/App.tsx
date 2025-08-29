import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ViteExplanation from "./pages/ViteExplanation";
import WebServicesExplanation from "./pages/WebServicesExplanation";
import WebhookExplained from "./pages/WebhookExplained";
import GitflowWorkflow from "./pages/Git/GitflowWorkflow";
import LayoutSetup from "./pages/CodeIgniter/LayoutSetup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vite-explanation" element={<ViteExplanation />} />
          <Route path="/web-services-explanation" element={<WebServicesExplanation />} />
          <Route path="/webhook" element={<WebhookExplained />} />
          <Route path="/gitflow-workflow" element={<GitflowWorkflow />} />
          <Route path="/ci-4" element={<LayoutSetup />} />
          {/* Add more routes as needed */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;