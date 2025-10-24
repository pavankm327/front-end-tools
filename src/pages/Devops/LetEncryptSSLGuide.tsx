import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const LetEncryptSSLGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Let's Encrypt SSL Certificate Guide
          </h1>

          <p className="text-gray-700 dark:text-gray-300">
            This guide explains how to generate and share a Let's Encrypt SSL certificate for a subdomain (e.g., <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">demo.example.com</code>) using both a <b>Linux server</b> and <b>Windows WSL</b>. It also includes detailed command explanations, common issues, and a comparison between free and paid SSL certificates.
          </p>

          <Separator />

          {/* Linux Server Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              1. Using Linux Server
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              Step 1: Install Certbot
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Certbot is the official tool from Let's Encrypt to automate SSL certificate generation and management.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2"><b>Ubuntu / Debian:</b></p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`sudo apt update
sudo apt install certbot -y`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Explanation:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">sudo</code> - Runs command with administrator privileges</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">apt update</code> - Updates package list from repositories</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">apt install certbot -y</code> - Installs Certbot package, <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">-y</code> auto-confirms installation</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><b>CentOS / RHEL / Amazon Linux:</b></p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`sudo yum install certbot -y`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Explanation:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">yum install</code> - Package manager for Red Hat-based systems</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">-y</code> - Automatically answers "yes" to all prompts</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 2: Generate the SSL Certificate (DNS Challenge)
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`sudo certbot certonly --manual --preferred-challenges=dns -d demo.example.com`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Breakdown:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">certbot</code> - The Let's Encrypt certificate tool</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">certonly</code> - Only obtain the certificate (don't install it automatically)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">--manual</code> - Use manual authorization method (you verify domain ownership yourself)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">--preferred-challenges=dns</code> - Use DNS TXT record for verification (works for wildcard certs)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">-d demo.example.com</code> - The domain name you want the certificate for</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              <b>Why DNS Challenge?</b> DNS challenge is ideal for subdomains when you don't have direct web server access or need wildcard certificates (*.example.com).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 3: Add TXT Record in DNS
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Certbot will provide a TXT record token. Add it to your DNS:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border text-sm border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    <th className="border px-3 py-2 text-left">Type</th>
                    <th className="border px-3 py-2 text-left">Name</th>
                    <th className="border px-3 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">TXT</td>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">_acme-challenge.demo</td>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">&lt;Certbot token&gt;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Wait 2–10 minutes for DNS propagation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 4: Verify DNS
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`nslookup -q=TXT _acme-challenge.demo.example.com`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Explanation:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">nslookup</code> - DNS lookup utility to query DNS records</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">-q=TXT</code> - Query specifically for TXT type records</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">_acme-challenge.demo.example.com</code> - The DNS record name to check</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Ensure the token appears correctly before proceeding with Certbot verification.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 5: Certificate Location
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              After successful verification, files are saved at:
            </p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`/etc/letsencrypt/live/demo.example.com/`}</code>
            </pre>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">fullchain.pem</code> → SSL certificate</li>
              <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">privkey.pem</code> → Private key</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 6: Copy Files for Sharing
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`mkdir ~/demo_ssl
sudo cp /etc/letsencrypt/live/demo.example.com/fullchain.pem ~/demo_ssl/certificate.crt
sudo cp /etc/letsencrypt/live/demo.example.com/privkey.pem ~/demo_ssl/private.key
sudo chown $(whoami):$(whoami) ~/demo_ssl/certificate.crt ~/demo_ssl/private.key
chmod 644 ~/demo_ssl/certificate.crt
chmod 600 ~/demo_ssl/private.key`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Breakdown:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">mkdir ~/demo_ssl</code> - Create directory in home folder for certificate files</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">sudo cp</code> - Copy with root privileges (files are owned by root)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">fullchain.pem</code> - Complete certificate chain (your cert + intermediate CAs)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">privkey.pem</code> - Private key (keep this secret!)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">chown $(whoami):$(whoami)</code> - Change file owner to current user</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">chmod 644</code> - Set certificate readable by all (owner can write)</li>
                <li><code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">chmod 600</code> - Set private key readable/writable only by owner (security!)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 7: Zip the Files
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`cd ~/demo_ssl
zip demo_ssl_files.zip certificate.crt private.key`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 8: Share Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Send <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">demo_ssl_files.zip</code> to the server team for installation.
            </p>
          </section>

          <Separator />

          {/* Windows WSL Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              2. Using Windows WSL
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              Step 1: Open WSL and Install Certbot
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`sudo apt update
sudo apt install certbot -y
certbot --version`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 2: Generate Certificate Using DNS Challenge
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`sudo certbot certonly --manual --preferred-challenges=dns -d demo.example.com`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Follow prompts and note the TXT token.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 3: Add TXT Record in DNS
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Add TXT record in DNS manager (GoDaddy, Cloudflare, etc.):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border text-sm border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    <th className="border px-3 py-2 text-left">Type</th>
                    <th className="border px-3 py-2 text-left">Name</th>
                    <th className="border px-3 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">TXT</td>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">_acme-challenge.demo</td>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">&lt;token&gt;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Wait for DNS propagation and verify with:
            </p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`nslookup -q=TXT _acme-challenge.demo.example.com`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 4: Access Certificate Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              WSL stores files in:
            </p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`/etc/letsencrypt/live/demo.example.com/`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Copy them with sudo:
            </p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`mkdir ~/demo_ssl
sudo cp /etc/letsencrypt/live/demo.example.com/fullchain.pem ~/demo_ssl/certificate.crt
sudo cp /etc/letsencrypt/live/demo.example.com/privkey.pem ~/demo_ssl/private.key
sudo chown $(whoami):$(whoami) ~/demo_ssl/certificate.crt ~/demo_ssl/private.key`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 5: Move to Windows
            </h3>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`mv ~/demo_ssl/demo_ssl_files.zip /mnt/c/Users/<WindowsUsername>/Desktop/`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Access via Windows Explorer:
            </p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`\\\\wsl$\\Ubuntu\\home\\<username>\\demo_ssl`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 6: Share Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Send the <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">.zip</code> containing <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">certificate.crt</code> and <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">private.key</code> to the server team.
            </p>
          </section>

          <Separator />

          {/* Common Issues Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              3. Common Issues and Solutions
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              Permission Denied
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Cause:</b> Certificate files are owned by <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">root</code>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              <b>Solution:</b>
            </p>
            <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm shadow-lg border border-gray-700">
              <code className="font-mono">{`sudo chown $(whoami):$(whoami) ~/demo_ssl/private.key
chmod 600 ~/demo_ssl/private.key`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              DNS NXDOMAIN Error
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Cause:</b> TXT record not found or DNS propagation delay.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              <b>Solution:</b>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Double-check TXT record name and value.</li>
              <li>Wait for DNS to propagate.</li>
              <li>Verify with <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">nslookup -q=TXT _acme-challenge.demo.example.com</code></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Manual Certificates Not Auto-Renewed
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Cause:</b> <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">--manual</code> mode certificates require manual renewal.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              <b>Solution:</b> Repeat Certbot command before expiration (90 days).
            </p>
          </section>

          <Separator />

          {/* Free vs Paid SSL Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              4. Free SSL vs Paid SSL Certificates
            </h2>
            
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Free SSL (Let's Encrypt)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Paid SSL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">💰 Cost</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Free</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">$10 - $1000+ per year</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">⏱️ Validity Period</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">90 days (auto-renewal available)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">1-3 years</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🔒 Encryption Level</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">256-bit (same as paid)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">256-bit</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">✅ Validation Type</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Domain Validation (DV) only</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">DV, Organization Validation (OV), Extended Validation (EV)</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🌐 Wildcard Support</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Yes (*.example.com)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Yes</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🛡️ Warranty</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">None</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">$10,000 - $1,750,000</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">👥 Support</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Community forums only</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">24/7 dedicated support</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🏢 Company Identity</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Not verified</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Verified for OV/EV certificates</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🎯 Best For</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Personal sites, blogs, small businesses, development</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">E-commerce, banking, enterprises, high-trust sites</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">💡 Recommendation:</h4>
              <p className="text-gray-700 dark:text-gray-300">
                For most websites, <b>Let's Encrypt (free SSL)</b> provides the same level of encryption as paid certificates. Choose <b>paid SSL</b> only if you need extended validation, warranty coverage, or dedicated support for enterprise applications.
              </p>
            </div>
          </section>

          <Separator />

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Summary</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                ✅ Use DNS challenge method for subdomain SSL certificates with Certbot.
              </li>
              <li>
                🔑 Certificate files are located in <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm">/etc/letsencrypt/live/</code> directory.
              </li>
              <li>
                ⏱️ Wait for DNS propagation (2-10 minutes) before completing verification.
              </li>
              <li>
                🔒 Always secure private key files with proper permissions (chmod 600).
              </li>
              <li>
                📅 Manual certificates expire in 90 days and require manual renewal.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LetEncryptSSLGuide;