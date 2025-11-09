import { useState, createContext, useContext } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Globe,
  Palette,
  Repeat,
  Layers,
  Lightbulb,
  Plug,
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
            <p className="text-gray-700 dark:text-gray-700">{explanation}</p>
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

const ReactContextExplained = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={40} />
              <h1 className="text-4xl font-bold">Understanding React Context</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Learn how <code>React Context</code> helps you share data across
              your app without prop drilling.
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* What is Context */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  What is React Context?
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-700 mb-4">
                React Context allows you to share data (like theme, user info, or
                language) between components <strong>without passing props
                manually</strong> through every level of the component tree.
              </p>
              <p className="text-gray-700 dark:text-gray-700">
                Think of it as a way to create <strong>global state</strong> that
                any component can read.
              </p>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 1. Creating and Using Context */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  1. Creating and Using Context
                </h2>
              </div>

              <CommandExplanation
                command="Basic context example"
                explanation="Create a context with createContext, wrap the app in a Provider, and use useContext inside child components."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`import { createContext, useContext } from 'react';

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Pavan", role: "Admin" }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return <p>Hello, {user.name} ({user.role})</p>;
}`}
                  </pre>
                }
              />
            </section>

            {/* 2. Theme Context Example */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="text-pink-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  2. Theme Toggle Example
                </h2>
              </div>

              <CommandExplanation
                command="Dark/Light mode using Context"
                explanation="You can use Context to share UI preferences like dark mode or light mode across components."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </>
  );
}`}
                  </pre>
                }
              />
            </section>

            {/* 3. Counter with Global Context */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  3. Global Counter Example
                </h2>
              </div>

              <CommandExplanation
                command="Sharing counter value between components"
                explanation="Context can share a global counter or any state across components, useful for dashboards, notifications, etc."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Incrementer />
      <Display />
    </CounterContext.Provider>
  );
}

function Incrementer() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

function Display() {
  const { count } = useContext(CounterContext);
  return <p>Current Count: {count}</p>;
}`}
                  </pre>
                }
              />
            </section>

            {/* 4. Nested Context Example */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  4. Multiple Contexts Example
                </h2>
              </div>

              <CommandExplanation
                command="Combining multiple contexts"
                explanation="You can combine multiple contexts (like UserContext and ThemeContext) to handle different data domains."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Ravi" }}>
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <Dashboard />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

function Dashboard() {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  return <p>{user.name}'s dashboard - Theme: {theme}</p>;
}`}
                  </pre>
                }
              />
            </section>

            {/* 5. Custom Hook for Context */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Plug className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  5. Creating a Custom Hook for Context
                </h2>
              </div>

              <CommandExplanation
                command="Encapsulating context logic with a hook"
                explanation="You can simplify code by creating a custom hook that wraps useContext. This makes your components cleaner."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`const UserContext = createContext();

export const useUser = () => useContext(UserContext);

function App() {
  return (
    <UserContext.Provider value={{ name: "Arjun", role: "Editor" }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useUser();
  return <p>User: {user.name} - {user.role}</p>;
}`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Summary
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-700">
                <li>
                  Use <code>createContext()</code> to create a context object.
                </li>
                <li>
                  Wrap your components in a <code>Provider</code> to supply
                  shared data.
                </li>
                <li>
                  Access the data using <code>useContext()</code> anywhere in the
                  tree.
                </li>
                <li>
                  Context is best for <strong>global, shared data</strong> like
                  user info, theme, or app state.
                </li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Tip: Context is perfect for data you need across many components,
            but don’t overuse it for everything — local state with useState is
            often simpler.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ReactContextExplained;