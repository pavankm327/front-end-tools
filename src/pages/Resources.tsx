// src/pages/Resources.tsx
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Resources = () => {
  const { category } = useParams<{ category: string }>();

  const resourcesMap: Record<string, { title: string; items: { name: string; path: string; description: string }[] }> = {
    react: {
      title: "React Resources",
      items: [
        { name: "React Ref", path: "/react-ref", description: "Understanding useRef and ref forwarding" },
        { name: "React Context", path: "/react-context", description: "State management with Context API" },
        { name: "React Portal", path: "/react-portal", description: "Rendering outside component hierarchy" },
        { name: "React Suspense", path: "/react-suspense", description: "Loading states and code splitting" },
        { name: "React Naming Conventions", path: "/react-naming-conventions", description: "Best practices for naming" },
      ],
    },
    laravel: {
      title: "Laravel Resources",
      items: [
        { name: "Laravel Concepts", path: "/laravel-concepts", description: "Core Laravel concepts and patterns" },
        { name: "Laravel Layouts Guide", path: "/laravel-layouts-guide", description: "Setting up layouts in Laravel" },
        { name: "Utility Classes", path: "/laravel-utility-class", description: "Reusable utility classes" },
        { name: "Queue Worker Guide", path: "/laravel-queue-worker-guide", description: "Managing background jobs" },
        { name: "Laravel GraphQL Guide", path: "/laravel-graphql-guide", description: "Implementing GraphQL APIs" },
        { name: "Laravel Performance Guide", path: "/laravel-performance-guide", description: "Optimizing Laravel applications" },
      ],
    },
    git: {
      title: "Git Resources",
      items: [
        { name: "Git Commands", path: "/git-commands-reference", description: "Essential Git commands reference" },
        { name: "Gitflow Workflow", path: "/gitflow-workflow", description: "Branching strategy guide" },
        { name: "Git Conflict Resolution", path: "/git-conflict-resolution", description: "Resolving merge conflicts" },
        { name: "Clean Up Stale Branches", path: "/git-prune-branches", description: "Maintaining clean repositories" },
        { name: "PR Scenarios Guide", path: "/pr-scenarios-guide", description: "Pull request best practices" },
        { name: "Bitbucket Draft PR Guide", path: "/bitbucket-draft-pr-guide", description: "Creating draft PRs" },
        { name: "Fix Unintended Commits", path: "/git-commit-am-guide", description: "Amending commits" },
        { name: "Feature Branch Management", path: "/git-feature-branch-rebase", description: "Rebasing strategies" },
        { name: "Prep for New Feature", path: "/git-prep-new-feature", description: "Starting new features" },
        { name: "Commit Types", path: "/git-commit-types", description: "Conventional commits guide" },
        { name: "GitHub to Bitbucket Guide", path: "/github-to-bitbucket-guide", description: "GitHub to Bitbucket Migration" },
      ],
    },
    devops: {
      title: "DevOps & Integrations",
      items: [
        { name: "Vite", path: "/vite-explanation", description: "Modern build tool explained" },
        { name: "Web Services", path: "/web-services-explanation", description: "API and web services basics" },
        { name: "Webhook", path: "/webhook", description: "Understanding webhooks" },
        { name: "SSL - Let's Encrypt", path: "/ssl-guide-lets-encrypt", description: "Free SSL certificates setup" },
        { name: "Supabase Migration Guide", path: "/supabase-migration-guide", description: "Database migration strategies" },
        { name: "Synk Supabase Migrations", path: "/sync-supabase-migration", description: "Understanding how migrations work when multiple developers collaborate" },
        { name: "React Deployment & Security", path: "/react-deployment-and-security-hardening", description: "Production deployment best practices" },
        { name: "Apache React Redirection Guide", path: "/apache-react-redirection", description: "Practical steps to force HTTP→HTTPS, configure VirtualHosts and others" },
      ],
    },
    codeigniter: {
      title: "CodeIgniter Resources",
      items: [
        { name: "CodeIgniter 4", path: "/ci-4", description: "Layout setup and configuration" },
      ],
    },
    nodejs: {
      title: "Node.js Resources",
      items: [
        { name: "Coming Soon", path: "#", description: "Node.js resources are being prepared" },
      ],
    },
    python: {
      title: "Python Resources",
      items: [
        { name: "Coming Soon", path: "#", description: "Python resources are being prepared" },
      ],
    },
    mongodb: {
      title: "MongoDB Resources",
      items: [
        { name: "Coming Soon", path: "#", description: "MongoDB resources are being prepared" },
      ],
    },
    sql: {
      title: "SQL Resources",
      items: [
        { name: "Coming Soon", path: "#", description: "SQL resources are being prepared" },
      ],
    },
    tailwind: {
      title: "Tailwind CSS Resources",
      items: [
        { name: "Coming Soon", path: "#", description: "Tailwind CSS resources are being prepared" },
      ],
    },
    docker: {
      title: "Docker Resources",
      items: [
        { name: "Coming Soon", path: "#", description: "Docker resources are being prepared" },
      ],
    },
  };

  const currentResources = resourcesMap[category || ""] || {
    title: "Resources Not Found",
    items: [],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />

      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          {currentResources.title}
        </h1>

        {/* Resources Grid */}
        {currentResources.items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentResources.items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition transform hover:scale-105 ${
                  item.path === "#" ? "opacity-60 cursor-not-allowed" : ""
                }`}
                onClick={(e) => item.path === "#" && e.preventDefault()}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {item.name}
                  </h3>
                  {item.path !== "#" && (
                    <ExternalLink className="text-blue-600 dark:text-blue-400" size={20} />
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No resources found for this category.
            </p>
          </div>
        )}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Resources;