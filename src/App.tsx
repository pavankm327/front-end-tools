import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import { SessionContextProvider } from "@/integrations/supabase/session-context"; // Import SessionContextProvider
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ViteExplanation from "./pages/ViteExplanation";
import WebServicesExplanation from "./pages/WebServicesExplanation";
import WebhookExplained from "./pages/WebhookExplained";
import GitflowWorkflow from "./pages/Git/GitflowWorkflow";
import GitConflictResolution from "./pages/Git/GitConflictResolution";
import GitPruneBranches from "./pages/Git/GitPruneBranches";
import PRScenariosGuide from "./pages/Git/PRScenariosGuide";
import BitbucketDraftPRGuide from "./pages/Git/BitbucketDraftPRGuide";
import GitCommitAmGuide from "./pages/Git/GitCommitAmGuide";
import LayoutSetup from "./pages/CodeIgniter/LayoutSetup";
import Login from "./pages/Login"; // Import Login page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <SessionContextProvider> {/* Wrap the entire app with SessionContextProvider */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vite-explanation" element={<ViteExplanation />} />
            <Route path="/web-services-explanation" element={<WebServicesExplanation />} />
            <Route path="/webhook" element={<WebhookExplained />} />
            <Route path="/gitflow-workflow" element={<GitflowWorkflow />} />
            <Route path="/git-conflict-resolution" element={<GitConflictResolution />} />
            <Route path="/git-prune-branches" element={<GitPruneBranches />} />
            <Route path="/pr-scenarios-guide" element={<PRScenariosGuide />} />
            <Route path="/bitbucket-draft-pr-guide" element={<BitbucketDraftPRGuide />} />
            <Route path="/git-commit-am-guide" element={<GitCommitAmGuide />} />
            <Route path="/ci-4" element={<LayoutSetup />} />
            <Route path="/login" element={<Login />} /> {/* Add the Login route */}
            {/* Add more routes as needed */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SessionContextProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;