import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import { SessionContextProvider } from "@/integrations/supabase/session-context"; // Import SessionContextProvider
import Index from "pages/Index";
import NotFound from "pages/NotFound";
import ViteExplanation from "pages/ViteExplanation";
import WebServicesExplanation from "pages/WebServicesExplanation";
import WebhookExplained from "pages/WebhookExplained";
import GitflowWorkflow from "pages/Git/GitflowWorkflow";
import GitConflictResolution from "pages/Git/GitConflictResolution";
import GitPruneBranches from "pages/Git/GitPruneBranches";
import PRScenariosGuide from "pages/Git/PRScenariosGuide";
import BitbucketDraftPRGuide from "pages/Git/BitbucketDraftPRGuide";
import GitCommitAmGuide from "pages/Git/GitCommitAmGuide";
import GitCommandsReference from "pages/Git/GitCommandsReference";
import LayoutSetup from "pages/CodeIgniter/LayoutSetup";
import LaravelQueueWorkerGuide from "@/pages/Laravel/LaravelQueueWorkerGuide";
import LaravelConcetps from "@/pages/Laravel/LaravelConcepts";
import LaravelUtilityClassGuide from "@/pages/Laravel/LaravelUtilityClassGuide";
import LaravelGraphQLGuide from "@/pages/Laravel/LaravelGraphQLGuide";
import GitFeatureBranchRebase from "@/pages/Git/GitFeatureBranchRebase";
import CommitType from "@/pages/Git/CommitType"; 
import LetEncryptSSLGuide from "@/pages/Devops/LetEncryptSSLGuide";
import ReactRefExplained from "@/pages/React/ReactRefExplained";
import ReactContextExplained from "@/pages/React/ReactContextExplained";
import ReactPortalsExplained from "@/pages/React/ReactPortalsExplained";
import ReactSuspenseExplained from "@/pages/React/ReactSuspenseExplained";
import SupabaseMigrationGuide from "@/pages/Devops/SupabaseMigrationGuide";
import GitPrepNewFeature from "@/pages/Git/GitPrepNewFeature";
import Login from "pages/Login"; // Import Login page

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
            <Route path="/ssl-guide-lets-encrypt" element={<LetEncryptSSLGuide />} />
            <Route path="/supabase-migration-guide" element={<SupabaseMigrationGuide />} />
            <Route path="/gitflow-workflow" element={<GitflowWorkflow />} />
            <Route path="/git-conflict-resolution" element={<GitConflictResolution />} />
            <Route path="/git-prune-branches" element={<GitPruneBranches />} />
            <Route path="/pr-scenarios-guide" element={<PRScenariosGuide />} />
            <Route path="/bitbucket-draft-pr-guide" element={<BitbucketDraftPRGuide />} />
            <Route path="/git-commit-am-guide" element={<GitCommitAmGuide />} />
            <Route path="/git-commands-reference" element={<GitCommandsReference />} />
            <Route path="/git-feature-branch-rebase" element={<GitFeatureBranchRebase />} />
            <Route path="git-commit-types" element={<CommitType />} />
            <Route path="/ci-4" element={<LayoutSetup />} />
            <Route path="/laravel-queue-worker-guide" element={<LaravelQueueWorkerGuide />} />
            <Route path="/laravel-concepts" element={<LaravelConcetps />} />
            <Route path="/laravel-utility-class" element={<LaravelUtilityClassGuide />} />
            <Route path="/laravel-graphql-guide" element={<LaravelGraphQLGuide />} />
            <Route path="/react-ref" element={<ReactRefExplained />} />
            <Route path="/react-context" element={<ReactContextExplained />} />
            <Route path="/react-portal" element={<ReactPortalsExplained />} />
            <Route path="/react-suspense" element={<ReactSuspenseExplained />} />
            <Route path="/git-prep-new-feature" element={<GitPrepNewFeature />} />
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