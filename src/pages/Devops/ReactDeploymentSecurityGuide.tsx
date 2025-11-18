import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, Layers, ShieldCheck, Database, AlertTriangle, Eye, ListChecks, Lock, GitBranch, FileCode, Server } from 'lucide-react';

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
            <p className="text-gray-700 dark:text-gray-400">{explanation}</p>
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

const ReactDeploymentSecurityGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Server size={40} />
              <h1 className="text-2xl lg:text-4xl font-bold">React Deployment, Security Hardening (CSP, .htaccess, Headers) and Supabase Anon Key Visibility</h1>
            </div>
            <p className="text-sky-100 text-lg">A combined DevOps + Security guide for serving React builds on Apache (or similar) with recommended headers, repository practices, and scenarios.</p>
          </div>

          <div className="p-8 space-y-8">

            {/* Section: Overview */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Overview & Scenario</h2>
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-3">
                You have a React app built with Vite (or similar) and served by Apache. A security scanner reported missing or unsafe HTTP headers (CSP, HSTS, Referrer-Policy) and frontend technologies detection. The goal is to harden the server response headers, place the <code>.htaccess</code> in the repository correctly, and explain the responsibilities across DevOps and Security teams.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                <strong>Scenario:</strong>
                <pre className="text-sm font-mono mt-2 whitespace-pre-wrap">Domain: test.example.com{'\n'}Server: Apache (shared hosting){'\n'}Build: Vite -&gt; dist/{'\n'}Scanner findings: Missing CSP/HSTS/Referrer-Policy, Unsafe CSP with 'unsafe-inline'/'unsafe-eval', Server tech detected (React, Vite, Lucide)</pre>
              </div>
            </section>

            {/* Section: Standard .htaccess placement */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Where to put <code>.htaccess</code> in repo</h2>
              </div>

              <CommandExplanation
                command="Place public/.htaccess"
                explanation="Put the .htaccess file into your React project's public/ folder so it is copied into dist/ when you build. This is standard practice and ensures the server receives the htaccess rules after deployment."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre overflow-x-auto">your-react-app/{'\n'}├── public/{'\n'}│   └── .htaccess   ← add here{'\n'}├── src/{'\n'}├── package.json{'\n'}└── vite.config.js</pre>
                }
              />

              <CommandExplanation
                command="git add -f public/.htaccess && git commit -m 'Add htaccess'"
                explanation="Use -f if your repo or global .gitignore prevents adding dotfiles. Committing .htaccess to public/ is recommended because build tools copy it to dist/. Do not commit dist/ unless you intentionally want to host build artifacts in the repo."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre overflow-x-auto"># Add and commit{'\n'}git add -f public/.htaccess{'\n'}git commit -m "Add Apache rules for SPA and security headers"</pre>
                }
              />
            </section>

            {/* Section: Recommended .htaccess */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileCode className="text-emerald-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Recommended .htaccess (single-line CSP)</h2>
              </div>

              <CommandExplanation
                command="public/.htaccess — recommended content"
                explanation="A robust .htaccess handles SPA routing, HTTPS redirect, and security headers. Note: CSP must be single-line in Apache to avoid 500 errors."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre overflow-x-auto">{`<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Serve index.html for SPA routes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# CSP must be one line in Apache
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'nonce-<RANDOM_NONCE>'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https:; object-src 'none'; frame-ancestors 'none'; base-uri 'self';"

# Optional: Permissions policy
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"`}</pre>
                }
              />

              <div className="text-sm text-gray-700 dark:text-gray-400 mt-4">
                <p className="mb-2"><strong>Notes:</strong> Replace <code>&lt;RANDOM_NONCE&gt;</code> with your nonce value if you use a static nonce. For dynamic nonces, inject the header and script nonce from the server at request time (requires server-side rendering or server logic).</p>
              </div>
            </section>

            {/* Section: Why CSP 'unsafe-inline' and 'unsafe-eval' are bad */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">CSP — unsafe-inline &amp; unsafe-eval</h2>
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-3">Security scanners flagged <code>'unsafe-inline'</code> and <code>'unsafe-eval'</code>. They are dangerous because they allow injected scripts and evaluation functions. Vite/React sometimes require workarounds — the recommended approach is to remove them and use nonces or strict script-src rules.</p>

              <CommandExplanation
                command="Remove 'unsafe-eval' and 'unsafe-inline' for scripts"
                explanation="Remove both where possible. Use a 'nonce-...' approach for scripts and keep 'unsafe-inline' only for styles if unavoidable. Many Vite production builds don't require eval; confirm by testing a production build without 'unsafe-eval'."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono overflow-x-auto"># Example secure script-src{'\n'}script-src 'self' 'nonce-2726c7f26c'</pre>
                }
              />
            </section>

            {/* Section: Nonce explained and how to add it to index.html */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="text-purple-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Nonces — What & How</h2>
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-3">A nonce ties the CSP to the exact scripts you allow. For static hosting you can use a fixed nonce (less ideal) or generate nonces dynamically in server responses (best). The nonce must match both the CSP header and <code>&lt;script nonce="..."&gt;</code> tags.</p>

              <CommandExplanation
                command="Add nonce to script tag in index.html"
                explanation="Edit index.html in your dist (or inject during server response) to add the nonce attribute on the main script tag so CSP allows it."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono overflow-x-auto">&lt;script nonce="2726c7f26c" type="module" crossorigin src="/assets/index-1NhmlgNv.js"&gt;&lt;/script&gt;</pre>
                }
              />

              <div className="text-sm text-gray-700 dark:text-gray-400 mt-4">
                <p className="mb-2"><strong>Dynamic nonce example (Node/Express):</strong></p>
                <pre className="text-sm font-mono bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">{`app.get('/', (req, res) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.setHeader('Content-Security-Policy', "script-src 'self' 'nonce-" + nonce + "';");
  // Render index.html and inject <script nonce="\${nonce}"> or replace placeholder
});`}</pre>
              </div>
            </section>

            {/* Section: Server signature and version hiding */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Server className="text-indigo-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Hide Server Signatures / Versions</h2>
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-3">Scanners report "Server software and technology found" — mostly informational. To reduce noise (and a small attack surface), hide version information from response headers.</p>

              <CommandExplanation
                command="Apache global config (requires root)"
                explanation="These settings go into the Apache main config (not .htaccess) and require server access. They remove version numbers from the Server header and disable server signatures."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre overflow-x-auto"># /etc/apache2/conf-available/security.conf{'\n'}ServerSignature Off{'\n'}ServerTokens Prod{'\n\n'}# PHP (php.ini){'\n'}expose_php = Off</pre>
                }
              />

              <div className="text-sm text-gray-700 dark:text-gray-400 mt-4">
                <p>On shared hosting (cPanel) you may not have access — use hosting control panel toggles or ask provider support.</p>
              </div>
            </section>

            {/* Section: Supabase anon key visibility */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-teal-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Supabase anon key visible in bundle — is it a problem?</h2>
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-3">Short answer: No. The anon key is intended for public use in browsers. The real security control is Row Level Security (RLS) and properly configured policies.</p>

              <CommandExplanation
                command="Check RLS and policies"
                explanation="Ensure Row Level Security is enabled for tables and create policies that enforce auth.uid() checks, so the anon key cannot be used to access unauthorized data."
                visual={
                  <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre overflow-x-auto">{`-- Enable RLS on a table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to select their own profile
CREATE POLICY "users_select_own"
ON profiles FOR SELECT
USING (auth.uid() = id);`}</pre>
                }
              />
            </section>

            {/* Section: Scanner warnings explained */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-yellow-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Understanding scanner findings</h2>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-400">
                <li><strong>Missing header:</strong> Scanner shows missing headers because the server didn't send them — fixable in .htaccess or global config.</li>
                <li><strong>Unsafe CSP:</strong> Shows presence of 'unsafe-inline' or 'unsafe-eval' — remove or replace with nonces/dynamic injection.</li>
                <li><strong>Server tech found:</strong> Usually informational; front-end libs will always be discoverable.</li>
                <li><strong>Low / Uncertain findings:</strong> Usually not exploitable by themselves; prioritize real issues (open ports, exposed admin endpoints, outdated server versions).</li>
              </ul>
            </section>

            {/* Section: DevOps vs Security roles (scenario mapping) */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Roles: DevOps, Security, and DevSecOps</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-400">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">DevOps</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Manage Apache/Nginx configs and deployment pipelines.</li>
                    <li>Place .htaccess and configure SSL/redirects.</li>
                    <li>Automate build/copy from public/ to dist/ in CI.</li> 
                    <li>Server-level tasks (ServerTokens, restart services).</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">Security / DevSecOps</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Define CSP, HSTS, Referrer-Policy and secure header policies.</li>
                    <li>Review RLS, database policies and secrets management.</li>
                    <li>Run and triage scanners; decide which findings to action.</li>
                    <li>Coordinate with DevOps for server-level changes.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: Quick checklist & commands */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <ListChecks className="text-sky-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick checklist &amp; commands</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">Repository</h4>
                  <pre className="text-sm font-mono whitespace-pre overflow-x-auto"># Add htaccess{'\n'}git add -f public/.htaccess{'\n'}git commit -m "Add htaccess with security headers"</pre>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">Server (root required)</h4>
                  <pre className="text-sm font-mono whitespace-pre overflow-x-auto"># Apache global{'\n'}ServerSignature Off{'\n'}ServerTokens Prod{'\n\n'}# PHP{'\n'}expose_php = Off</pre>
                </div>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Summary & Recommended Next Steps</h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-400">
                <li>Add <code>public/.htaccess</code> (commit to repo) so it is copied to <code>dist/</code> on build.</li>
                <li>Use a <strong>single-line CSP</strong> in .htaccess to avoid Apache 500 errors.</li>
                <li>Replace <code>'unsafe-eval'</code> and <code>'unsafe-inline'</code> for scripts with a <strong>nonce</strong> approach or dynamic injection.</li>
                <li>Hide server/versions via Apache global config and set <code>expose_php = Off</code>.</li>
                <li>Verify Supabase RLS and avoid exposing service_role keys; anon key in bundles is OK.</li>
                <li>Coordinate: DevOps handles server config; Security defines headers and policies; you (frontend) ensure CSP works with your build.</li>
              </ul>
            </section>

          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Tip: Test changes in a staging environment and run the scanner again. Keep a backup of your original .htaccess so you can rollback if anything breaks.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ReactDeploymentSecurityGuide;