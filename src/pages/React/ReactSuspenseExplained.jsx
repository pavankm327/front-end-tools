import { useState, lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  Lightbulb,
  Monitor,
  Zap,
  Database,
  Globe,
} from "lucide-react";

const CommandExplanation = ({ command, explanation, visual }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
          {command}
        </code>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Explanation:
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{explanation}</p>
          </div>
          {visual && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Example:
              </h4>
              {visual}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ReactSuspenseExplained = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={40} />
              <h1 className="text-4xl font-bold">Understanding React Suspense</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Learn how <code>React Suspense</code> lets you handle lazy loading
              and asynchronous rendering elegantly in your components.
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* What is Suspense */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  What is React Suspense?
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>React Suspense</strong> is a mechanism that allows React
                to "pause" rendering a part of the UI until something (like a lazy-loaded
                component or data) is ready, while showing a fallback UI meanwhile.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                It simplifies asynchronous operations like <strong>code splitting</strong> or
                <strong> data fetching</strong> by wrapping components in a
                <code> &lt;Suspense&gt;</code> boundary.
              </p>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 1. Basic Lazy Loading Example */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  1. Lazy Loading a Component
                </h2>
              </div>

              <CommandExplanation
                command="Lazy load a component using React.lazy and Suspense"
                explanation="React.lazy dynamically imports a component only when it’s needed. Suspense shows a fallback until it’s loaded."
                visual={
                  <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import React, { lazy, Suspense } from "react";

const LazyProfile = lazy(() => import("./Profile"));

export default function App() {
  return (
    <div>
      <h2>React Suspense Example</h2>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <LazyProfile />
      </Suspense>
    </div>
  );
}

// Profile.jsx
export default function Profile() {
  return <h3>User Profile Component Loaded!</h3>;
}`}</pre>
                }
              />
            </section>

            {/* 2. Multiple Suspense Components */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-pink-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  2. Multiple Components with Separate Fallbacks
                </h2>
              </div>

              <CommandExplanation
                command="Use multiple Suspense boundaries for better control"
                explanation="By using multiple Suspense boundaries, each section can independently handle its own loading state."
                visual={
                  <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import React, { Suspense, lazy } from "react";

const LazyHeader = lazy(() => import("./Header"));
const LazyFooter = lazy(() => import("./Footer"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <LazyHeader />
      </Suspense>

      <main>Main content always visible</main>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}`}</pre>
                }
              />
            </section>

            {/* 3. Suspense for Data Fetching (React 18) */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  3. Suspense for Data Fetching
                </h2>
              </div>

              <CommandExplanation
                command="Use Suspense to wait for asynchronous data"
                explanation="With React 18 concurrent rendering and data APIs, Suspense can also be used to fetch data asynchronously."
                visual={
                  <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import React, { Suspense } from "react";

// Fake data loader
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Pavan Kumar" }), 2000);
  });
}

// Wrap data fetching logic
function createResource(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    r => { status = "success"; result = r; },
    e => { status = "error"; result = e; }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
}

const userResource = createResource(fetchUser());

function User() {
  const user = userResource.read();
  return <h3>User: {user.name}</h3>;
}

export default function App() {
  return (
    <Suspense fallback={<h4>Loading user...</h4>}>
      <User />
    </Suspense>
  );
}`}</pre>
                }
              />
            </section>

            {/* 4. Real-World Use Cases */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  4. Real-World Use Cases
                </h2>
              </div>

              <CommandExplanation
                command="Where to use React Suspense"
                explanation="Suspense is commonly used with code-splitting and async rendering. Here are practical use cases."
                visual={
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>💤 Lazy-load large components to improve performance.</li>
                    <li>📦 Split bundles using <code>React.lazy</code> for faster initial load.</li>
                    <li>📡 Combine with <code>useDeferredValue</code> for concurrent UI updates.</li>
                    <li>🧠 Use with React Server Components for async data.</li>
                    <li>⚡ Fallback loading UI for routes or widgets.</li>
                  </ul>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Summary
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <code>React.lazy()</code> allows dynamic imports for components.
                </li>
                <li>
                  <code>&lt;Suspense&gt;</code> wraps those components with a fallback UI.
                </li>
                <li>
                  You can nest multiple Suspense boundaries for better UX.
                </li>
                <li>
                  Suspense works with concurrent rendering and async data in React 18+.
                </li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            ⚙️ <strong>Tip:</strong> Use Suspense for smoother loading transitions and
            cleaner async handling in React.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ReactSuspenseExplained;