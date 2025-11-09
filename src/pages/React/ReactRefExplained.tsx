import { useState, useRef, useEffect, forwardRef } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, Eye, MousePointerClick, Layers, Repeat, Zap, Focus, Plug } from 'lucide-react';

const CommandExplanation = ({ command, explanation, visual }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{command}</code>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Explanation:</h4>
            <p className="text-gray-700 dark:text-gray-700">{explanation}</p>
          </div>
          {visual && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Visual:</h4>
              {visual}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ReactRefExplained = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Eye size={40} />
              <h1 className="text-4xl font-bold">Understanding React Refs</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Learn how <code>useRef</code> helps you access DOM elements, persist values, and manage focus in function components.
            </p>
          </div>

          <div className="p-8 space-y-8">

            {/* What is a Ref */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="text-blue-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">What is a Ref?</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-700 mb-4">
                A <strong>ref</strong> in React is like a "reference" to a DOM node or a mutable value that survives re-renders.
                It’s created with <code>useRef()</code> and can be used to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-700">
                <li>Directly access DOM elements (like focusing an input).</li>
                <li>Store mutable values that don’t trigger re-renders.</li>
                <li>Integrate with non-React libraries (like charts or animations).</li>
              </ul>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 1. Accessing DOM Elements */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <MousePointerClick className="text-purple-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1. Accessing DOM Elements</h2>
              </div>

              <CommandExplanation
                command="useRef to access a DOM element"
                explanation="You can attach a ref to a DOM element using the ref attribute. The current DOM node will be available as ref.current after render."
                visual={
                  <div className="text-sm space-y-2 font-mono text-gray-700">
                    <pre>{`import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Directly accesses the DOM node
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}`}</pre>
                    <div className="text-green-400">→ inputRef.current points to the &lt;input&gt; element</div>
                  </div>
                }
              />
            </section>

            {/* 2. Persisting Values Without Re-render */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2. Persisting Values Without Causing Re-render</h2>
              </div>

              <CommandExplanation
                command="useRef for persistent variables"
                explanation="Unlike useState, changing ref.current does not trigger a re-render. Perfect for keeping track of mutable data like previous values, timers, etc."
                visual={
                  <div className="text-sm space-y-2 font-mono text-gray-700">
                    <pre>{`import { useRef, useState, useEffect } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <p>Rendered {renderCount.current} times</p>
  );
}`}</pre>
                    <div className="text-yellow-400">→ renderCount.current changes without re-rendering component</div>
                  </div>
                }
              />
            </section>

            {/* 3. Forwarding Refs */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Plug className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">3. Forwarding Refs to Child Components</h2>
              </div>

              <CommandExplanation
                command="forwardRef for reusable components"
                explanation="When you build reusable components (like custom input fields), you can forward refs so the parent can still access the internal DOM node."
                visual={
                  <div className="text-sm space-y-2 font-mono text-gray-700">
                    <pre>{`const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function Parent() {
  const inputRef = useRef(null);

  return (
    <>
      <CustomInput ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}`}</pre>
                    <div className="text-green-400">→ Ref “forwards” through CustomInput to the &lt;input&gt;</div>
                  </div>
                }
              />
            </section>

            {/* 4. Managing Focus or Scroll */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Focus className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">4. Managing Focus or Scroll Programmatically</h2>
              </div>

              <CommandExplanation
                command="useRef to control focus or scrolling"
                explanation="Refs can be used to control UI elements like focusing, scrolling, or selecting text — especially useful for accessibility and user experience."
                visual={
                  <div className="text-sm space-y-2 font-mono text-gray-700">
                    <pre>{`function ScrollToBottom() {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div style={{ height: '200px', overflowY: 'scroll' }}>
        {/* Messages */}
        <div ref={messagesEndRef} />
      </div>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
}`}</pre>
                    <div className="text-green-400">→ Perfect for chat or log viewer UIs</div>
                  </div>
                }
              />
            </section>

            {/* 5. Integrating with Third-Party Libraries */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-yellow-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5. Using Refs with Third-Party Libraries</h2>
              </div>

              <CommandExplanation
                command="Integrate non-React libraries using refs"
                explanation="Refs let you hand over control of a DOM element to external libraries like Chart.js, D3, or animations, which operate outside React’s virtual DOM."
                visual={
                  <div className="text-sm space-y-2 font-mono text-gray-700">
                    <pre>{`import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function ChartExample() {
  const canvasRef = useRef(null);

  useEffect(() => {
    new Chart(canvasRef.current, {
      type: 'bar',
      data: { labels: ['A', 'B'], datasets: [{ data: [3, 7] }] },
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}`}</pre>
                    <div className="text-green-400">→ Ref provides a real DOM node for Chart.js to render into</div>
                  </div>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-700">
                <li><strong>Refs ≠ State:</strong> Updating a ref does not re-render your component.</li>
                <li><strong>Refs are great</strong> for accessing DOM nodes and persisting mutable values.</li>
                <li><strong>Use carefully:</strong> Avoid using refs for general data flow or replacing state logic.</li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Tip: Think of <code>useRef</code> as a “persistent box” — it keeps what you put inside, without causing re-renders.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ReactRefExplained;