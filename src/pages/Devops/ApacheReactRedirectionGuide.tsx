import { useState } from "react";
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
            <p className="text-gray-700 dark:text-gray-200">{explanation}</p>
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

const ApacheReactRedirectionGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={40} />
              <h1 className="text-4xl font-bold">Apache, HTTPS Redirect, and React Refresh Fix Guide</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Practical steps to force HTTP→HTTPS, configure VirtualHosts, fix React SPA refresh 404s, and manage <code>.htaccess</code> using Linux commands.
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* 1. Apache VirtualHost & HTTPS Redirect */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  1. Apache VirtualHost & HTTPS Redirect
                </h2>
              </div>

              <CommandExplanation
                command="Force HTTP → HTTPS (VirtualHost *:80)"
                explanation={
                  "Add a rewrite rule in the port 80 VirtualHost to permanently redirect all HTTP requests to HTTPS. Keep SSL config in the :443 VirtualHost. Also ensure mod_rewrite and mod_ssl are enabled."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700 overflow-auto">
{`# /etc/apache2/sites-available/test.conf

<VirtualHost *:80>
    ServerName test.com
    ServerAlias www.test.com
    DocumentRoot /var/www/data/test

    # Redirect everything to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName test.com
    ServerAlias www.test.com
    DocumentRoot /var/www/data/test

    SSLEngine on
    SSLCertificateFile      /etc/ssl/test.com/ssl-bundle.crt
    SSLCertificateKeyFile   /etc/ssl/test.com/private.key

    <Directory /var/www/data/test>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Enable required Apache modules & restart"
                explanation={
                  "Enable rewrite and SSL modules and restart Apache so the changes take effect. On Debian/Ubuntu use a2enmod; on RHEL/CentOS the modules are usually available by default or enabled in config."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Debian/Ubuntu
sudo a2enmod rewrite
sudo a2enmod ssl
sudo systemctl restart apache2

# RHEL/CentOS (httpd)
sudo systemctl restart httpd`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Why keep SSL directives in :443"
                explanation={
                  "Apache needs to know which certificate and key to use for TLS. If you omit SSLEngine/SSLCertificateFile from the :443 VirtualHost, HTTPS won't work or the wrong cert may be used for SNI-enabled hosts."
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 2. React Refresh 404 Problem & .htaccess fallback */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  2. React SPA Refresh (404) — Server vs Client Routing
                </h2>
              </div>

              <CommandExplanation
                command="Why refreshing /reports gives 404"
                explanation={
                  "BrowserRouter uses client-side routing. On refresh the browser asks Apache for /reports. If that file/folder doesn't exist on disk, Apache returns 404. To fix this either let Apache serve index.html for unknown routes (via .htaccess) or use HashRouter so the server never sees the route fragment."
                }
              />

              <CommandExplanation
                command=".htaccess: fallback to index.html (BrowserRouter fix)"
                explanation={
                  "Place this .htaccess into your React build folder (DocumentRoot). It serves static files when present and otherwise returns index.html so React Router can handle the path."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# /var/www/data/test/.htaccess
RewriteEngine On
RewriteBase /

# If the file or directory exists, serve it directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Otherwise serve index.html
RewriteRule ^ index.html [L]`}
                  </pre>
                }
              />

              <CommandExplanation
                command="HashRouter alternative (no server rewrite needed)"
                explanation={
                  "If you cannot or do not want to change server config, switch to HashRouter in React. URLs become example.com/#/reports and the server always receives / (no 404)."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`// index.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </HashRouter>
  );
}`}
                  </pre>
                }
              />

              <CommandExplanation
                command="BrowserRouter vs HashRouter — quick comparison"
                explanation={
                  "BrowserRouter uses clean URLs and needs server-side support for SPA fallbacks. HashRouter keeps everything after # on the client, avoiding server routing issues but producing hash-based URLs. Choose based on control over the server and SEO needs."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`BrowserRouter: https://example.com/reports  (SEO friendly, needs server fallback)
HashRouter:    https://example.com/#/reports (works without server changes, not ideal for SEO)`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 3. Creating .htaccess in Linux (no nano) */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="text-pink-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  3. Creating <code>.htaccess</code> in Linux (nano not available)
                </h2>
              </div>

              <CommandExplanation
                command="Using vi to create .htaccess"
                explanation={
                  "vi is available on nearly all systems. Open the file, paste the contents, then save and quit."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`cd /var/www/data/test
sudo vi .htaccess
# Press 'i' to insert, paste contents, then ESC, :wq to save and exit`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Create using cat <<EOF (safe and repeatable)"
                explanation={
                  "This heredoc approach writes the full file in one command. It's the recommended non-interactive method."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`cd /var/www/data/test
sudo bash -c 'cat > .htaccess <<EOF
RewriteEngine On
RewriteBase /

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ index.html [L]
EOF'`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Create using printf (portable one-liner)"
                explanation={
                  "printf avoids issues with echo and quoting. It builds the file line-by-line and writes it to .htaccess."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`cd /var/www/data/test
sudo printf "%s\n" \
"RewriteEngine On" \
"RewriteBase /" \
"" \
"RewriteCond %{REQUEST_FILENAME} -f [OR]" \
"RewriteCond %{REQUEST_FILENAME} -d" \
"RewriteRule ^ - [L]" \
"" \
"RewriteRule ^ index.html [L]" \
> .htaccess`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Set permissions and ownership"
                explanation={
                  "Make sure Apache can read the file. On Debian/Ubuntu the web user is www-data; on RHEL/CentOS it is usually apache."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`sudo chmod 644 /var/www/data/test/.htaccess
sudo chown www-data:www-data /var/www/data/test/.htaccess`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 4. Deleting .htaccess */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  4. Deleting <code>.htaccess</code>
                </h2>
              </div>

              <CommandExplanation
                command="Remove .htaccess (basic)"
                explanation={
                  "Delete the file safely. Use -f to force removal if write-protected."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# from anywhere
sudo rm /var/www/data/test/.htaccess

# if you're inside the folder
cd /var/www/data/test
sudo rm .htaccess

# force delete (no prompt)
sudo rm -f .htaccess`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Confirm deletion & check Apache"
                explanation={
                  "After deletion, verify the file is gone and reload Apache if you changed behavior."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`ls -la /var/www/data/test | grep .htaccess || echo "not found"
sudo systemctl reload apache2`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 5. Quick Troubleshooting */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  5. Quick Troubleshooting
                </h2>
              </div>

              <CommandExplanation
                command="Common checks if routes still 404"
                explanation={
                  "Walkthrough of quick checks to ensure routing works: .htaccess present, AllowOverride All, modules enabled, proper DocumentRoot, file permissions, and Apache reload."
                }
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Check .htaccess exists
sudo ls -la /var/www/data/test/.htaccess

# Check Apache Directory config contains AllowOverride All
# e.g. in your site config
# <Directory /var/www/data/test>
#     AllowOverride All
#     Require all granted
# </Directory>

# Check modules
sudo apachectl -M | grep rewrite
sudo apachectl -M | grep ssl

# Check permissions
sudo namei -l /var/www/data/test/.htaccess

# Reload Apache
sudo systemctl reload apache2`}
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
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                <li>Use a port 80 VirtualHost with a RewriteRule to redirect HTTP → HTTPS.</li>
                <li>Keep <code>SSLEngine</code> and certificate directives inside the <code>:443</code> VirtualHost.</li>
                <li>For React SPA refresh: use <code>.htaccess</code> fallback or switch to <code>HashRouter</code>.</li>
                <li>If nano is missing, use <code>vi</code>, <code>cat &lt;&lt;EOF</code>, or <code>printf</code> to create files.</li>
                <li>Set file ownership and permissions so Apache can read <code>.htaccess</code>.</li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Tip: prefer BrowserRouter + server fallback for SEO and clean URLs if you control the server. Use HashRouter when you cannot modify server config.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ApacheReactRedirectionGuide;