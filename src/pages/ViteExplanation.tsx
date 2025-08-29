import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const ViteExplanation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Understanding Vite</h1>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">Explain Vite in Simple English</h2>
            <p className="mb-2">Let’s keep it very simple.</p>
            <p className="mb-4">Vite (pronounced like “veet”) is a tool that helps developers build modern web apps faster.</p>
            <h3 className="text-xl font-semibold mb-2">Here’s why it’s useful:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Super fast startup 🚀</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Normally, when you start a project, the tool has to bundle (combine) all your files before you can see the result. That takes time. Vite skips this step during development by using the browser’s built-in support for modern JavaScript. So it starts almost instantly.</p>
              </li>
              <li>
                <strong>Instant updates while coding 🔄</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">When you change your code (like fixing a button color), Vite updates the browser immediately without reloading everything. This is called Hot Module Replacement (HMR), and it makes development much quicker.</p>
              </li>
              <li>
                <strong>Optimized production build 📦</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">When you’re done coding and ready to publish your app, Vite uses a fast bundler called Rollup to create a final, optimized version of your project. This version is smaller and loads faster for your users.</p>
              </li>
              <li>
                <strong>Works with modern frameworks 🛠️</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Vite is commonly used with React, Vue, Svelte, and even plain JavaScript or TypeScript.</p>
              </li>
            </ul>
            <p className="mt-4">👉 <strong>So in short:</strong> Vite = Fast development + Instant updates + Easy optimized builds.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">How Vite Works?</h2>
            <p className="mb-2">Let’s break down how Vite works step by step in simple English:</p>
            <h3 className="text-xl font-semibold mb-2">1. Two Modes: Development & Production</h3>
            <p className="mb-4">Vite behaves differently when you are coding (development) vs when you are ready to deploy (production).</p>

            <h4 className="text-lg font-semibold mb-2">🔹 Development Mode (where speed matters most)</h4>
            <p className="mb-2">Normally, bundlers like Webpack read all your files, bundle them into one big file, and then serve it. That’s slow for large projects.</p>
            <p className="mb-4">Vite takes a shortcut:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>It starts a small dev server.</li>
              <li>It doesn’t bundle everything first. Instead, when your browser asks for a file, Vite sends it on demand.</li>
              <li>Example: If your page only needs App.js, Vite just serves that file right away.</li>
              <li>For files like TypeScript or JSX (React code), Vite quickly transforms them using esbuild (a super-fast compiler written in Go).</li>
              <li>If you change something in your code, Vite updates only that part in the browser using Hot Module Replacement (HMR) — no full reload.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">🔹 Production Mode (where optimization matters most)</h4>
            <p className="mb-2">When you’re ready to publish your app, Vite switches to Rollup (a bundler).</p>
            <p className="mb-4">Rollup bundles all files together, removes unused code (tree-shaking), and makes everything small and optimized. This final version loads faster for your users.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">2. Key Idea</h3>
            <p className="mb-2">Vite works fast in development because it doesn’t bundle first. It only bundles later (in production), when you actually need the optimized code.</p>
            <p className="mt-4">✅ <strong>In short:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Dev mode → Vite serves files instantly using modern browser features + esbuild.</li>
              <li>Prod mode → Vite uses Rollup to bundle and optimize everything.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Diagram: Vite Flow (Dev vs Prod)</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`🔹 Development Mode (fast coding)
Your Code (React/Vue/JS/TS)
        │
        ▼
   Vite Dev Server ──► Transforms code with esbuild (super fast)
        │
        ▼
Browser requests files on demand (no big bundle)
        │
        └──► Hot Module Replacement (HMR) updates only changed parts instantly

👉 Result: Instant startup, fast updates

🔹 Production Mode (final optimized app)
Your Code (React/Vue/JS/TS)
        │
        ▼
      Rollup (bundler)
        │
        ├── Removes unused code (tree-shaking)
        ├── Bundles files together
        └── Minifies & optimizes
        ▼
   Final Build (small, fast, ready to deploy)

👉 Result: Optimized app for users`}
              </code>
            </pre>
            <p className="mt-4">So think of it like this:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Dev mode = fast food kitchen 🍔 (serve quickly, not polished)</li>
              <li>Prod mode = fine dining restaurant 🍽️ (take time, make it perfect)</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">What is a Bundler?</h2>
            <p className="mb-2">Let’s first clear up what a bundler is in very simple words:</p>
            <h3 className="text-xl font-semibold mb-2">🔹 What is a Bundler?</h3>
            <p className="mb-2">When you build a web app, your code isn’t just one file. You have:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Many JavaScript files</li>
              <li>Some CSS files</li>
              <li>Maybe images (png, jpg, svg)</li>
              <li>Sometimes special files (TypeScript, JSX, Vue components, etc.)</li>
            </ul>
            <p className="mt-4">👉 <strong>A bundler is a tool that:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Collects all these files.</li>
              <li>Understands their dependencies (which file uses which).</li>
              <li>Combines them into a smaller number of files (often just 1–2) so the browser can load them faster.</li>
              <li>Optimizes the code by removing unused parts, compressing, and making it efficient.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">Example without bundler:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Your app:
index.html
app.js
utils.js
header.js
style.css
logo.png

The browser would need to request each file separately. That’s slow.`}
              </code>
            </pre>

            <h4 className="text-lg font-semibold mt-4 mb-2">Example with bundler:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Bundler processes all of the above and gives you something like:
bundle.js
bundle.css

✅ Now the browser loads just a couple of optimized files → much faster.`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why bundlers matter</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>They solve compatibility (convert modern JS → works in all browsers).</li>
              <li>They optimize performance (smaller, faster code).</li>
              <li>They manage complexity (handle imports, modules, images, etc.).</li>
            </ul>
            <p className="mt-4">So in short: 👉 A bundler = A packaging machine 📦 that takes your messy project files and outputs a clean, optimized box for the browser.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">Vite vs Webpack Bundling</h2>
            <p className="mb-2">Let’s compare Vite vs Webpack in terms of bundling.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 How Webpack Works (Traditional Bundler)</h3>
            <h4 className="text-lg font-semibold mb-2">Development Mode:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Your Code (JS/TS/CSS/Images)
        │
        ▼
   Webpack Bundler
        │
        └──► Bundles everything FIRST
                  │
                  ▼
           Dev Server serves big bundle
                  │
                  └──► Slow startup, reloads entire bundle on changes`}
              </code>
            </pre>
            <p className="mt-2">👉 Problem: Slow startup (must bundle everything before you see your app).</p>
            <p className="mb-4">👉 Problem: Updates are slower because it rebuilds/reloads big bundles.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 How Vite Works (Modern Approach)</h3>
            <h4 className="text-lg font-semibold mb-2">Development Mode:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Your Code (JS/TS/CSS/Images)
        │
        ▼
   Vite Dev Server
        │
        ├── Uses esbuild (super fast) for transformations
        └── Serves files on-demand (no full bundle first)
                  │
                  ▼
           Browser requests files directly
                  │
                  └──► Hot Module Replacement (only changed parts updated)`}
              </code>
            </pre>
            <p className="mt-2">👉 Advantage: Instant startup (no bundling at the beginning).</p>
            <p className="mb-4">👉 Advantage: Lightning-fast updates because only changed code is sent.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">🔹 Production Mode (Both)</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Webpack → Bundles with Webpack</li>
              <li>Vite → Bundles with Rollup</li>
            </ul>
            <p className="mt-2 mb-4">Both eventually create optimized bundles for deployment, but Vite is much faster in dev while still producing a great production build.</p>

            <p className="mt-4">✅ <strong>Summary:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Webpack = bundles first → slow dev but okay for production.</li>
              <li>Vite = skip bundling in dev → super fast dev, still optimized in production.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">Real-World Example: Code Change Handling</h2>
            <p className="mb-2">Let’s walk through a real-world example with a small React app.</p>
            <h3 className="text-xl font-semibold mb-2">📝 Scenario:</h3>
            <p className="mb-2">You have a React app with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>`App.js` → main app</li>
              <li>`Header.js` → header component</li>
              <li>`Footer.js` → footer component</li>
            </ul>
            <p className="mb-4">Now you change a button color in `Header.js`.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 Webpack Flow (Traditional Bundler)</h3>
            <ul className="list-decimal list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>You save `Header.js`</li>
              <li>Webpack sees a change → rebuilds the entire bundle (App + Header + Footer + CSS + etc.)</li>
              <li>It creates a new "bundle.js"</li>
              <li>Dev server sends the new bundle to browser</li>
              <li>Browser reloads the page (sometimes fully, sometimes HMR but still slower)</li>
            </ul>
            <p className="mt-2">👉 Result: Slower feedback loop ⏳ (you wait a few seconds even for a small change).</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">🔹 Vite Flow (Modern Dev Server)</h3>
            <ul className="list-decimal list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>You save `Header.js`</li>
              <li>Vite knows only `Header.js` changed</li>
              <li>Vite instantly re-compiles just `Header.js` using esbuild</li>
              <li>Vite pushes the new `Header.js` to browser via HMR</li>
              <li>Browser replaces only the header component → page stays as-is</li>
            </ul>
            <p className="mt-2">👉 Result: Instant update ⚡ (you see the new button color immediately).</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">✅ Key Difference in Real Life:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>With Webpack → you feel delays, especially in big projects.</li>
              <li>With Vite → coding feels “live”, like you’re editing directly in the browser.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">Why Vite Skips Bundling in Dev: Modern Browsers + ES Modules</h2>
            <p className="mb-2">This is the secret sauce of Vite → it skips bundling in dev because of modern browsers + ES modules. Let’s break it down:</p>

            <h3 className="text-xl font-semibold mb-2">🔹 Old days (before ES modules in browsers)</h3>
            <p className="mb-2">Browsers couldn’t understand `import / export` directly.</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Example:
import { add } from './math.js'

❌ Old browsers didn’t know how to load math.js.`}
              </code>
            </pre>
            <p className="mt-2 mb-4">So tools like Webpack bundled everything into one big file (`bundle.js`) that the browser could understand. 👉 That’s why bundlers were required in dev.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 Modern days (with ES modules)</h3>
            <p className="mb-4">Modern browsers (Chrome, Edge, Firefox, Safari) can now understand `import / export` directly. This means the browser itself can fetch `math.js` when needed.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 What Vite does</h3>
            <p className="mb-2">You write modern JavaScript (with imports).</p>
            <p className="mb-4">Vite dev server doesn’t bundle everything — it just serves files as ES modules.</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Example:
index.html → loads App.js
App.js → imports Header.js
Browser → directly requests Header.js from Vite server`}
              </code>
            </pre>
            <p className="mt-2 mb-4">If the file is not plain JS (like TypeScript, JSX, Vue, CSS), Vite quickly transforms it using esbuild before serving.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 Why this is fast</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>No bundling step in dev = instant startup ⚡</li>
              <li>Browser handles module loading naturally.</li>
              <li>When you change a file, Vite only re-sends that single file (thanks to HMR).</li>
            </ul>
            <p className="mt-4">✅ <strong>So in short:</strong> Vite’s magic comes from the fact that modern browsers already understand modules, so Vite doesn’t waste time bundling everything in development. It just transforms files and serves them as-is.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">esbuild in Dev, Rollup in Prod</h2>
            <p className="mb-2">This is the heart of Vite’s workflow — let’s break it down step by step.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 Part 1: How esbuild works in Development</h3>
            <p className="mb-2">esbuild is like Vite’s turbo engine during dev mode.</p>
            <h4 className="text-lg font-semibold mb-2">Raw files in your project</h4>
            <p className="mb-2">You might write in TypeScript (TS), JSX (React), Vue single-file components, or even modern JS (ESNext). Browsers don’t always understand these directly.</p>
            <h4 className="text-lg font-semibold mb-2">esbuild transforms instantly</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Example: TypeScript → plain JavaScript</li>
              <li>JSX → React’s `React.createElement()` calls</li>
              <li>Vue/Svelte → compiled JS modules</li>
            </ul>
            <p className="mt-2 mb-4">It does this super fast because esbuild is written in Go (a very fast language).</p>
            <h4 className="text-lg font-semibold mb-2">Vite serves the transformed file directly</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>The browser asks: “Give me App.tsx.”</li>
              <li>Vite: “Here’s the JS version I just transformed with esbuild.”</li>
              <li>No bundling. Just on-demand file serving.</li>
            </ul>
            <p className="mt-2 mb-4">📌 <strong>Example:</strong></p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`You write this in App.tsx:
const App: React.FC = () => <h1>Hello</h1>;
export default App;

Browser doesn’t understand tsx or <>.

esbuild transforms it to:
const App = () => React.createElement("h1", null, "Hello");
export default App;

👉 Now browser can run it.`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-4 mb-2">🔹 Part 2: Why Rollup is used in Production</h3>
            <p className="mb-2">When you finish coding and run `vite build`, Vite switches to Rollup.</p>
            <h4 className="text-lg font-semibold mb-2">Why? Because:</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>In production, you don’t want the browser fetching hundreds of little ES modules (slow).</li>
              <li>Instead, you want a few optimized bundles.</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">What Rollup does:</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Takes all your modules (App.js, Header.js, Footer.js, etc.).</li>
              <li>Bundles them into fewer files. Example: `bundle.js`, `styles.css`.</li>
              <li>Optimizes:
                <ul className="list-circle list-inside ml-4 text-sm text-gray-600 dark:text-gray-400">
                  <li>Tree-shaking (removes unused code).</li>
                  <li>Minification (makes code smaller).</li>
                  <li>Code-splitting (splits only where needed for faster loading).</li>
                </ul>
              </li>
            </ul>
            <p className="mt-2 mb-4">📌 <strong>Example in Production:</strong></p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`Your code:
App.js → imports Header.js, Footer.js
Header.js → imports utils.js

Rollup creates:
bundle.js (App + Header + Footer + utils)
style.css (all CSS merged)

👉 Fewer requests, smaller files, faster load.`}
              </code>
            </pre>

            <p className="mt-4">✅ <strong>Summary</strong></p>
            <h4 className="text-lg font-semibold mb-2">Dev mode (esbuild + Vite):</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>esbuild = super fast transformer ⚡</li>
              <li>Serves files on-demand as ES modules.</li>
              <li>No bundling, instant updates.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4 mb-2">Prod mode (Rollup):</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Bundles all modules into optimized chunks.</li>
              <li>Applies tree-shaking, minification, code-splitting.</li>
              <li>Final build is small, fast, and production-ready.</li>
            </ul>
            <p className="mt-4">👉 Think of it like this:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>esbuild in dev = A super-fast translator who translates only the pages you ask for.</li>
              <li>Rollup in prod = A book editor who collects all pages, removes unnecessary parts, and prints a polished final book.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Diagram: esbuild in Dev → Rollup in Prod</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`🔹 Development Mode (using esbuild)
Your Code (TS / JSX / Vue / Modern JS)
        │
        ▼
   Vite Dev Server
        │
        ├── esbuild transforms files (TS → JS, JSX → JS, etc.)
        └── Serves files as ES modules (on-demand)
                │
                ▼
          Browser runs modules directly
                │
                └──► Hot Module Replacement (only changed files reloaded)

👉 Result: Instant startup + super fast updates ⚡

🔹 Production Mode (using Rollup)
Your Code (TS / JSX / Vue / Modern JS)
        │
        ▼
          Rollup Bundler
        │
        ├── Collects all modules
        ├── Tree-shakes (removes unused code)
        ├── Minifies (shrinks code)
        ├── Code-splits (smart chunking)
        └── Bundles into few optimized files
                │
                ▼
          Final Build (bundle.js, style.css, assets)
                │
                └──► Deployed to server (fast for users)

👉 Result: Optimized, production-ready build 📦`}
              </code>
            </pre>
            <p className="mt-4">✅ <strong>Key Takeaway:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>esbuild (Dev) → Fast transformer, no bundling, instant updates.</li>
              <li>Rollup (Prod) → Smart bundler, optimized output, perfect for deployment.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">Why Not esbuild for Production Too?</h2>
            <p className="mb-2">If esbuild is so fast, why doesn’t Vite just use it for production too? Let’s unpack it.</p>

            <h3 className="text-xl font-semibold mb-2">🔹 Why Vite doesn’t use esbuild for Production Bundling</h3>
            <p className="mb-2">Vite uses esbuild in development (for speed), but switches to Rollup in production (for flexibility and optimization).</p>
            <h4 className="text-lg font-semibold mb-2">Here’s why:</h4>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>esbuild is a “transpiler”, not a full bundler</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">esbuild’s main job = transform code quickly (TS → JS, JSX → JS, etc.). It can bundle, but its bundling features are still limited. Rollup is a mature bundler with many years of plugins and optimizations.</p>
              </li>
              <li>
                <strong>Advanced optimizations needed in production</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rollup supports features that esbuild doesn’t fully handle yet:</p>
                <ul className="list-circle list-inside ml-4 text-sm text-gray-600 dark:text-gray-400">
                  <li>Code-splitting (split into smart chunks for lazy loading).</li>
                  <li>Dynamic imports (`import()` support across chunks).</li>
                  <li>Better tree-shaking (removing unused exports deeply).</li>
                  <li>CSS handling (extracting, minifying, optimizing).</li>
                  <li>Plugins ecosystem (for Vue, React, Svelte, etc.).</li>
                </ul>
                <p className="mt-2">👉 Rollup = more fine-grained control.</p>
              </li>
              <li>
                <strong>Ecosystem and plugins</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rollup has a massive plugin ecosystem. Example: Handling images (.png, .svg), Replacing environment variables, Optimizing legacy browser support. esbuild doesn’t have such a mature ecosystem yet.</p>
              </li>
              <li>
                <strong>Trade-off: Speed vs. Quality</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">esbuild = 🏎️ super fast, but fewer optimization features. Rollup = 🛠️ slower, but gives highly optimized production output.</p>
              </li>
            </ol>
            <p className="mt-4">So Vite chooses the best of both worlds: Dev mode → esbuild (speed). Prod mode → Rollup (optimized output).</p>
            <p className="mt-4">✅ <strong>In short:</strong> Vite doesn’t use esbuild for production because:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>esbuild is blazing fast, but not as powerful as Rollup for final optimizations and advanced bundling.</li>
              <li>Rollup ensures the output is smaller, better optimized, and compatible for production apps.</li>
            </ul>
            <p className="mt-4">👉 Think of it like this:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
              <li>esbuild = speed painter 🎨 (quick sketches).</li>
              <li>Rollup = master craftsman 🪚 (polished final product).</li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ViteExplanation;