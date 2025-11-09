import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  Lightbulb,
  Monitor,
  MessageSquare,
  Plug,
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

const ReactPortalsExplained = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={40} />
              <h1 className="text-4xl font-bold">Understanding React Portals</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Learn how <code>React Portals</code> let you render elements
              outside the parent DOM hierarchy while preserving React’s logic and context.
            </p>
          </div>
          
          <div className="p-8 space-y-8">
            {/* What is a Portal */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  What is a React Portal?
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A <strong>React Portal</strong> allows you to render children into a
                different part of the DOM — outside of the component’s main
                hierarchy — but still remain connected in the React component tree.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Commonly used for <strong>modals, tooltips, dropdowns,</strong> and
                other floating UI elements.
              </p>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 1. Basic Modal Example */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  1. Basic Modal using React Portal
                </h2>
              </div>

              <CommandExplanation
                command="Render a modal outside parent DOM"
                explanation="A modal can appear above everything else even if it’s defined deep inside a component tree. Portals render it into another DOM node."
                visual={
                  <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div style={modalStyle}>{children}</div>,
    document.getElementById("modal-root")
  );
}

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
};

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>React Portal Example</h2>
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && (
        <Modal>
          <h3>Hello from Portal!</h3>
          <button onClick={() => setShow(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}`}</pre>
                }
              />
            </section>

            {/* 2. Tooltip Example */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="text-pink-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  2. Tooltip with React Portal
                </h2>
              </div>

              <CommandExplanation
                command="Render tooltips above everything else"
                explanation="Tooltips and dropdowns can escape overflow or z-index clipping by being rendered directly in the document body using portals."
                visual={
                  <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import React from "react";
import ReactDOM from "react-dom";

function Tooltip({ text, targetRef }) {
  if (!targetRef.current) return null;

  const rect = targetRef.current.getBoundingClientRect();

  return ReactDOM.createPortal(
    <div style={{
      position: "absolute",
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
      background: "#333",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "4px",
      fontSize: "12px"
    }}>
      {text}
    </div>,
    document.body
  );
}

export default function App() {
  const buttonRef = React.useRef(null);
  return (
    <div>
      <button ref={buttonRef}>Hover me</button>
      <Tooltip text="This is a tooltip!" targetRef={buttonRef} />
    </div>
  );
}`}</pre>
                }
              />
            </section>

            {/* 3. Context + Portal Example */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Plug className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  3. Using Portals with Context
                </h2>
              </div>

              <CommandExplanation
                command="Portals preserve context and event bubbling"
                explanation="Even though a Portal renders outside the parent DOM node, it still keeps access to React Context, refs, and event bubbling."
                visual={
                  <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import React from "react";
import ReactDOM from "react-dom";

const ThemeContext = React.createContext("light");

function ThemedModal() {
  const theme = React.useContext(ThemeContext);
  return ReactDOM.createPortal(
    <div style={{
      padding: 20,
      background: theme === "dark" ? "#333" : "#fff",
      color: theme === "dark" ? "#fff" : "#000"
    }}>
      Theme: {theme}
    </div>,
    document.getElementById("modal-root")
  );
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedModal />
    </ThemeContext.Provider>
  );
}`}</pre>
                }
              />
            </section>

            {/* 4. Summary / Real Use Cases */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  4. Real-World Use Cases
                </h2>
              </div>

              <CommandExplanation
                command="Where to use React Portals"
                explanation="Portals solve common UI layering problems. Here are real-world situations where they’re most effective."
                visual={
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>🪟 Modals / Dialogs — Avoid z-index and overflow issues.</li>
                    <li>💬 Tooltips / Popovers — Position relative to a target element.</li>
                    <li>📜 Dropdown Menus — Escape clipping from parent containers.</li>
                    <li>🎮 Overlays / Loaders — Global UI overlays independent of layout.</li>
                    <li>🧱 Third-party integration — Render React UI into external DOM nodes.</li>
                  </ul>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Summary
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Create portals with <code>ReactDOM.createPortal(child, container)</code>.
                </li>
                <li>
                  Use them for modals, dropdowns, and floating elements.
                </li>
                <li>
                  Portals preserve React’s context and event bubbling.
                </li>
                <li>
                  Helps avoid z-index, overflow, and positioning issues.
                </li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Tip: Portals are ideal for floating UI elements — they keep your logic
            clean while avoiding complex CSS stacking problems.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ReactPortalsExplained;
