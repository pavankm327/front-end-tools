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
            This guide explains how to generate and share a Let's Encrypt SSL certificate for a subdomain (e.g., <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">demo.example.com</code>) using both a <b>Linux server</b> and <b>Windows WSL</b>. It also includes detailed command explanations, common issues, and a comparison between free and paid SSL certificates.
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
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`sudo apt update
sudo apt install certbot -y`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Explanation:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sudo</code> - Runs command with administrator privileges</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">apt update</code> - Updates package list from repositories</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">apt install certbot -y</code> - Installs Certbot package, <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-y</code> auto-confirms installation</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><b>CentOS / RHEL / Amazon Linux:</b></p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`sudo yum install certbot -y`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Explanation:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">yum install</code> - Package manager for Red Hat-based systems</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-y</code> - Automatically answers "yes" to all prompts</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 2: Generate the SSL Certificate (DNS Challenge)
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`sudo certbot certonly --manual --preferred-challenges=dns -d demo.example.com`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Breakdown:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">certbot</code> - The Let's Encrypt certificate tool</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">certonly</code> - Only obtain the certificate (don't install it automatically)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--manual</code> - Use manual authorization method (you verify domain ownership yourself)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--preferred-challenges=dns</code> - Use DNS TXT record for verification (works for wildcard certs)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-d demo.example.com</code> - The domain name you want the certificate for</li>
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
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`nslookup -q=TXT _acme-challenge.demo.example.com`}</code>
            </pre>
            <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <b>Command Explanation:</b>
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">nslookup</code> - DNS lookup utility to query DNS records</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-q=TXT</code> - Query specifically for TXT type records</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">_acme-challenge.demo.example.com</code> - The DNS record name to check</li>
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
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`/etc/letsencrypt/live/demo.example.com/`}</code>
            </pre>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">fullchain.pem</code> → SSL certificate</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">privkey.pem</code> → Private key</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 6: Copy Files for Sharing
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`mkdir ~/demo_ssl
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
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">mkdir ~/demo_ssl</code> - Create directory in home folder for certificate files</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sudo cp</code> - Copy with root privileges (files are owned by root)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">fullchain.pem</code> - Complete certificate chain (your cert + intermediate CAs)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">privkey.pem</code> - Private key (keep this secret!)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">chown $(whoami):$(whoami)</code> - Change file owner to current user</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">chmod 644</code> - Set certificate readable by all (owner can write)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">chmod 600</code> - Set private key readable/writable only by owner (security!)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 7: Zip the Files
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`cd ~/demo_ssl
zip demo_ssl_files.zip certificate.crt private.key`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 8: Share Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Send <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">demo_ssl_files.zip</code> to the server team for installation.
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
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`sudo apt update
sudo apt install certbot -y
certbot --version`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 2: Generate Certificate Using DNS Challenge
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`sudo certbot certonly --manual --preferred-challenges=dns -d demo.example.com`}</code>
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
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`nslookup -q=TXT _acme-challenge.demo.example.com`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 4: Access Certificate Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              WSL stores files in:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`/etc/letsencrypt/live/demo.example.com/`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Copy them with sudo:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`mkdir ~/demo_ssl
sudo cp /etc/letsencrypt/live/demo.example.com/fullchain.pem ~/demo_ssl/certificate.crt
sudo cp /etc/letsencrypt/live/demo.example.com/privkey.pem ~/demo_ssl/private.key
sudo chown $(whoami):$(whoami) ~/demo_ssl/certificate.crt ~/demo_ssl/private.key`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 5: Move to Windows
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`mv ~/demo_ssl/demo_ssl_files.zip /mnt/c/Users/<WindowsUsername>/Desktop/`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Access via Windows Explorer:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`\\\\wsl$\\Ubuntu\\home\\<username>\\demo_ssl`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Step 6: Share Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Send the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.zip</code> containing <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">certificate.crt</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">private.key</code> to the server team.
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
              <b>Cause:</b> Certificate files are owned by <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">root</code>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              <b>Solution:</b>
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`sudo chown $(whoami):$(whoami) ~/demo_ssl/private.key
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
              <li>Verify with <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">nslookup -q=TXT _acme-challenge.demo.example.com</code></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
              Manual Certificates Not Auto-Renewed
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Cause:</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--manual</code> mode certificates require manual renewal.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              <b>Solution:</b> Repeat Certbot command before expiration (90 days).
            </p>
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
                🔑 Certificate files are located in <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">/etc/letsencrypt/live/</code> directory.
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