import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const LayoutSetup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 346" className="w-8 h-8 text-orange-600" fill="currentColor">
              <path d="M128 0s-27 92-78 147c-45 49-50 103-27 150 28 56 92 66 141 43 66-30 108-106 91-177-17-70-90-124-127-163zM88 290c-25-15-42-43-45-72-4-31 7-65 33-98-1 28 15 63 48 85-18-45 0-88 28-121-4 25-2 45 15 61 13 12 31 20 39 39 9 22 5 51-11 72-19 23-51 38-80 43-9 2-18-2-27-9z" />
            </svg>
            <span>CodeIgniter 4</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Installation, Native Layouts & Blade Templating</p>
            {/* Navigation */}
        <nav className="bg-indigo-800 text-white shadow-sm hidden">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-lg font-semibold">CI4 Guide</div>

                {/* Hamburger (mobile only) */}
                <button id="menu-btn" className="md:hidden block focus:outline-none">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>

                {/* Menu items */}
                <ul id="menu" className="hidden flex-col space-y-2 mt-4 md:mt-0 md:flex md:flex-row md:space-y-0 md:space-x-6">
                <li><a href="#install" className="hover:text-indigo-200 transition">Installation</a></li>
                <li><a href="#native" className="hover:text-indigo-200 transition">Native Layouts</a></li>
                <li><a href="#routing" className="hover:text-indigo-200 transition">Routing</a></li>
                <li><a href="#blade" className="hover:text-indigo-200 transition">Blade Templating</a></li>
                </ul>
            </div>
        </nav>
        <Separator />
          {/* Intro */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-gray-700 dark:text-gray-300">This comprehensive guide covers the <strong>installation of CodeIgniter 4</strong>, setting up <strong>layouts using the native view system</strong>, and integrating <strong>Blade templating</strong> for layouts. By the end of this guide, you'll have a fully functional CodeIgniter 4 application with both native and Blade templating options.</p>
          </section>

          {/* Installation */}
          <section id="install">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">1. CodeIgniter 4 Installation</h2>

            {/* Prerequisites */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">✅ Prerequisites</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                <li>PHP: 8.1 or newer</li>
                <li>PHP 8.4 requires CodeIgniter 4.6.0+</li>
                <li>PHP 8.3 requires CodeIgniter 4.4.4+</li>
                <li>Enabled Extensions: intl, libcurl, json, mbstring, mysqlnd, xml</li>
                <li>Supported Databases: MySQLi, PostgreSQL, SQLite3, SQL Server, Oracle</li>
                <li>⚠️ Always use the latest maintained version. End-of-life PHP versions are not supported.</li>
              </ul>
            </div>

            {/* Installation methods */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">📥 Installation Methods</h3>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">1. Composer Installation (Recommended — App Starter)</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`# Fresh new project
composer create-project codeigniter4/appstarter project-root

# Install specific version
composer create-project codeigniter4/appstarter:4.4.8 project-root

# Update if needed
composer update

# For production
composer install --no-dev`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">2. Composer Installation (Adding to Existing Project)</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`composer require codeigniter4/framework`}</code>
                </pre>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Then copy the following from vendor/codeigniter4/framework:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                  <li>Folders → <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app</code>, <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public</code>, <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">tests</code>, <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">writable</code></li>
                  <li>Files → <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.env</code>, <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">phpunit.xml.dist</code>, <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">spark</code></li>
                </ul>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Set <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$systemDirectory</code> in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Config/Paths.php</code>:</p>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto mt-2">
                  <code>{`public string $systemDirectory = ROOTPATH . 'vendor/codeigniter4/framework/system';`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">3. Manual Installation</h4>
                <p className="text-gray-700 dark:text-gray-300">Download the latest release from <a href="https://github.com/codeigniter4/CodeIgniter4" target="_blank" className="text-blue-600 hover:underline">GitHub</a>, extract to your project root, use <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/</code> as document root. <strong>Never modify the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">system/</code> directory.</strong></p>
              </div>
            </div>

            {/* Environment Configuration */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">⚙️ Environment Configuration</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Copy <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">env</code> to <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.env</code> and configure:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`# Development
CI_ENVIRONMENT = development

# Base URL
app.baseURL = 'http://localhost:8080'

# Database Configuration (example)
database.default.hostname = localhost
database.default.database = your_database_name
database.default.username = your_username
database.default.password = your_password
database.default.DBDriver = MySQLi

# Security
encryption.key = your-32-character-secret-key`}</code>
              </pre>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Generate encryption key: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">php spark key:generate</code></p>
            </div>

            {/* Running */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">▶️ Running the Application</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Development Server:</strong></p>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`php spark serve

# Custom host and port
php spark serve --host 0.0.0.0 --port 9000`}</code>
                  </pre>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Open <a href="http://localhost:8080" className="text-blue-600 hover:underline">http://localhost:8080</a></p>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Production Deployment Requirements:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                    <li>Set <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app.baseURL</code> in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.env</code></li>
                    <li>Configure database in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Config/Database.php</code> or <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.env</code></li>
                    <li>Set <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">CI_ENVIRONMENT = production</code></li>
                    <li>Point webserver document root to <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/</code> directory</li>
                    <li>Make <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">writable/</code> directory writable (755 or 777)</li>
                    <li>Remove <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">composer.lock</code> and run <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">composer install --no-dev</code></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Apache */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🌐 Apache Virtual Host Example</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<VirtualHost *:80>
    ServerName example.com
    DocumentRoot "/path/to/project/public"
    
    <Directory "/path/to/project/public">
        AllowOverride All
        Require all granted
        Options -Indexes
    </Directory>
    
    # Optional: Enable compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
    </IfModule>
</VirtualHost>`}</code>
              </pre>
            </div>

            {/* Nginx */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🌐 Nginx Server Block Example</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /path/to/project/public;
    index index.php index.html;

    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";

    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    # Deny access to sensitive files
    location ~ /\\.(ht|env) {
        deny all;
    }
}`}</code>
              </pre>
            </div>

            {/* File Permissions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🔒 File Permissions</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`# Set correct permissions
sudo chown -R www-data:www-data /path/to/project
sudo chmod -R 755 /path/to/project
sudo chmod -R 777 /path/to/project/writable

# For shared hosting
chmod -R 755 /path/to/project
chmod -R 777 /path/to/project/writable`}</code>
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">🛠 Troubleshooting</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Verify: Run <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">php spark serve</code> and check welcome page.</li>
                <li>URLs require index.php: Enable mod_rewrite.</li>
                <li>Case sensitivity: Match file/class names.</li>
                <li>Errors: Check logs; set to development mode.</li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Native Layout */}
          <section id="native">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">2. Native Layout Setup in CodeIgniter 4</h2>

            {/* Directory Structure */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">📁 Recommended Directory Structure</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`app/Views/
├── layouts/
│   └── default.php          # Main layout file
├── partials/
│   ├── header.php           # Header partial
│   ├── footer.php           # Footer partial
│   └── sidebar.php          # Sidebar partial (optional)
├── pages/
│   ├── home.php             # Home page
│   ├── about.php            # About page
│   └── contact.php          # Contact page
└── errors/
    └── html/
        ├── error_404.php
        └── error_500.php`}</code>
              </pre>
            </div>

            {/* Layout */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 1: Create Main Layout File</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Create <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/layouts/default.php</code>:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $this->renderSection('title') ?> - My CI4 App</title>
    
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <?= $this->renderSection('css') ?>
    
    <!-- Meta tags -->
    <meta name="description" content="<?= $this->renderSection('description') ?>">
</head>
<body>
    <?= $this->include('partials/header') ?>
    
    <main class="container mt-4">
        <!-- Breadcrumbs (optional) -->
        <?= $this->renderSection('breadcrumbs') ?>
        
        <!-- Flash Messages -->
        <?php if (session()->getFlashdata('success')): ?>
            <div class="alert alert-success alert-dismissible fade show">
                <?= session()->getFlashdata('success') ?>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        <?php endif; ?>
        
        <?php if (session()->getFlashdata('error')): ?>
            <div class="alert alert-danger alert-dismissible fade show">
                <?= session()->getFlashdata('error') ?>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        <?php endif; ?>
        
        <!-- Main Content -->
        <?= $this->renderSection('content') ?>
    </main>
    
    <?= $this->include('partials/footer') ?>
    
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <?= $this->renderSection('scripts') ?>
</body>
</html>`}</code>
              </pre>
            </div>

            {/* Partials */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 2: Create Partial Views</h3>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Header Partial: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/partials/header.php</code></h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="<?= base_url() ?>">My CI4 App</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link <?= (current_url(true)->getSegment(1) == '') ? 'active' : '' ?>" 
                           href="<?= base_url() ?>">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= (current_url(true)->getSegment(1) == 'about') ? 'active' : '' ?>" 
                           href="<?= base_url('about') ?>">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= (current_url(true)->getSegment(1) == 'contact') ? 'active' : '' ?>" 
                           href="<?= base_url('contact') ?>">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Footer Partial: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/partials/footer.php</code></h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<footer class="bg-dark text-white mt-5 py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>&copy; <?= date('Y') ?> My CI4 Application. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-end">
                <p>Built with CodeIgniter <?= CodeIgniter\\CodeIgniter::CI_VERSION ?></p>
            </div>
        </div>
    </div>
</footer>`}</code>
                </pre>
              </div>
            </div>

            {/* Content View */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 3: Create Content Views</h3>

              <div className="mb-4">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Home Page: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/pages/home.php</code></h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<?= $this->extend('layouts/default') ?>

<?= $this->section('title') ?>
Home
<?= $this->endSection() ?>

<?= $this->section('description') ?>
Welcome to our CodeIgniter 4 application homepage
<?= $this->endSection() ?>

<?= $this->section('breadcrumbs') ?>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item active">Home</li>
    </ol>
</nav>
<?= $this->endSection() ?>

<?= $this->section('content') ?>
    <div class="row">
        <div class="col-md-8">
            <h1 class="mb-4">Welcome to CodeIgniter 4!</h1>
            <p class="lead">This is the main content area of your homepage.</p>
            <p>You can customize this content by editing the <code>app/Views/pages/home.php</code> file.</p>
            
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Getting Started</h5>
                    <p class="card-text">Check out the CodeIgniter 4 documentation to learn more about building amazing applications.</p>
                    <a href="https://codeigniter.com/user_guide/" target="_blank" class="btn btn-primary">Read Documentation</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <?= $this->include('partials/sidebar') ?>
        </div>
    </div>
<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script>
    console.log('Home page loaded successfully!');
</script>
<?= $this->endSection() ?>`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Sidebar Partial: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/partials/sidebar.php</code></h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<div class="card">
    <div class="card-header">
        <h5 class="card-title">Quick Links</h5>
    </div>
    <div class="card-body">
        <ul class="list-unstyled">
            <li><a href="<?= base_url('about') ?>" class="text-decoration-none">About Us</a></li>
            <li><a href="<?= base_url('contact') ?>" class="text-decoration-none">Contact</a></li>
            <li><a href="https://codeigniter.com" target="_blank" class="text-decoration-none">CodeIgniter</a></li>
        </ul>
    </div>
</div>`}</code>
                </pre>
              </div>
            </div>

            {/* Controller */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 4: Update Controller</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Update <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Controllers/Home.php</code>:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<?php
namespace App\\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data = [
            'page_title' => 'Home Page',
            'meta_description' => 'Welcome to our CodeIgniter 4 application'
        ];
        
        return view('pages/home', $data);
    }
    
    public function about()
    {
        $data = [
            'page_title' => 'About Us',
            'meta_description' => 'Learn more about our company and mission'
        ];
        
        return view('pages/about', $data);
    }
    
    public function contact()
    {
        $data = [
            'page_title' => 'Contact Us',
            'meta_description' => 'Get in touch with our team'
        ];
        
        return view('pages/contact', $data);
    }
}`}</code>
              </pre>
            </div>

            {/* Advanced Tips */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🔥 Advanced Native Layout Tips</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Nested Layouts:</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`<?= $this->extend('layouts/admin') ?>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Optional Sections:</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`<?= $this->renderSection('sidebar', false) ?> <!-- Won't error if section doesn't exist -->`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Escaping Variables:</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`<?= esc($user_input, 'html') ?> <!-- Prevent XSS attacks -->`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">View Data:</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// In controller
return view('page', $data, ['cache' => 300]); // Cache for 5 minutes`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Basic Routing */}
          <section id="routing">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">3. Basic Routing Setup</h2>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Setting Up Routes</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Update <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Config/Routes.php</code>:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<?php
use CodeIgniter\\Router\\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/about', 'Home::about');
$routes->get('/contact', 'Home::contact');

// Optional: Enable auto-routing for development (disable in production)
$routes->setAutoRoute(true);`}</code>
              </pre>

              <p className="mt-2 text-gray-700 dark:text-gray-300">Access pages via:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li><a href="http://localhost:8080/" className="text-blue-600 hover:underline">http://localhost:8080/</a> - Home</li>
                <li><a href="http://localhost:8080/about" className="text-blue-600 hover:underline">http://localhost:8080/about</a> - About</li>
                <li><a href="http://localhost:8080/contact" className="text-blue-600 hover:underline">http://localhost:8080/contact</a> - Contact</li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Blade Templating */}
          <section id="blade">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">4. Blade Templating Integration</h2>

            <p className="mb-6 text-gray-700 dark:text-gray-300">We can use <a href="https://github.com/EFTEC/BladeOne" target="_blank" className="text-blue-600 hover:underline">eftec/bladeone</a> to bring Laravel-like Blade templating to CI4.</p>

            {/* Install */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 1: Install Package</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`composer require eftec/bladeone`}</code>
              </pre>
            </div>

            {/* Blade Library */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 2: Create Blade Library</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<?php
namespace App\\Libraries;

use eftec\\bladeone\\BladeOne;

class Blade extends BladeOne
{
    public function __construct()
    {
        $views = APPPATH . 'Views';
        $cache = WRITEPATH . 'cache/blade';
        parent::__construct($views, $cache, BladeOne::MODE_DEBUG);
    }
    public function render(string $view, array $data = [], bool $deleteCache = false): string
    {
        return $this->run($view, $data, $deleteCache);
    }
}`}</code>
              </pre>
            </div>

            {/* Controller */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 3: Update Controller</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<?php
namespace App\\Controllers;

use App\\Libraries\\Blade;

class Home extends BaseController
{
    protected $blade;
    public function __construct()
    {
        $this->blade = new Blade();
    }
    public function index()
    {
        $data = ['name' => 'CodeIgniter 4'];
        return $this->blade->render('test', $data);
    }
}`}</code>
              </pre>
            </div>

            {/* Blade Views */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 4: Create Blade Views</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<html>
    <head><title>My Blade App</title></head>
    <body>
        @include('header')
        <main>
            @yield('content')
        </main>
        @include('footer')
    </body>
</html>`}</code>
              </pre>

              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`@extends('base')

@section('content')
    <h1>Hello, {{ $name }}!</h1>
    <p>Welcome to Blade templating in CodeIgniter 4 🎉</p>
@endsection`}</code>
              </pre>

              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<header>
    <h1>Blade Layout Example</h1>
    <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
    </nav>
</header>`}</code>
              </pre>

              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<footer>
    <p>© {{ date('Y') }} My Blade App</p>
</footer>`}</code>
              </pre>
            </div>

            {/* Extra Tips */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">⚡ Additional Tips</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Switch to production mode: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">BladeOne::MODE_AUTO</code></li>
                <li>Clear cache: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">rm -rf writable/cache/blade/*</code></li>
                <li>Share global variables:
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`$this->blade->share('appName', 'My CI4 App');`}</code>
                  </pre>
                </li>
              </ul>
            </div>

            {/* Installation */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 1: Using jenssegers/blade Blade Templating Package</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`composer require jenssegers/blade`}</code>
              </pre>
            </div>

            {/* Directory Structure */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">📁 Recommended Directory Structure for Blade</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`app/Views/
├── blade/
│   ├── layouts/         # Blade layout files
│   │   └── app.blade.php
│   ├── partials/        # Blade partials
│   │   ├── header.blade.php
│   │   ├── footer.blade.php
│   │   └── sidebar.blade.php
│   ├── pages/           # Blade content pages
│   │   ├── home.blade.php
│   │   ├── about.blade.php
│   │   └── contact.blade.php
└── errors/
    └── html/
        ├── error_404.php
        └── error_500.php`}</code>
              </pre>
            </div>

            {/* Layout */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 2: Create Blade Layout File</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Create <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/blade/layouts/app.blade.php</code>:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') - My CI4 App</title>
    
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    @stack('css')
    
    <!-- Meta tags -->
    <meta name="description" content="@yield('description')">
</head>
<body>
    @include('blade.partials.header')
    
    <main class="container mt-4">
        <!-- Breadcrumbs (optional) -->
        @yield('breadcrumbs')
        
        <!-- Flash Messages -->
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif
        
        @if(session('error'))
            <div class="alert alert-danger alert-dismissible fade show">
                {{ session('error') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif
        
        <!-- Main Content -->
        @yield('content')
    </main>
    
    @include('blade.partials.footer')
    
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    @stack('scripts')
</body>
</html>`}</code>
              </pre>
            </div>

            {/* Partials */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 3: Create Blade Partial Views</h3>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Header Partial: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/blade/partials/header.blade.php</code></h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="<?= base_url() ?>">My CI4 App</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav  me-auto">
                    <li class="nav-item">
                        <a class="nav-link {{ request()->uri() == '/' ? 'active' : '' }}" 
                           href="<?= base_url() ?>">Home</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->uri() == 'about' ? 'active' : '' }}" 
                           href="<?= base_url('about') ?>">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->uri() == 'contact' ? 'active' : '' }}" 
                           href="<?= base_url('contact') ?>">Contact</a>
                    </li>
                </ul> 
            </div>
        </div>
    </nav>
</header>`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Footer Partial: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/blade/partials/footer.blade.php</code></h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<footer class="bg-dark text-white mt-5 py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>&copy; {{ date('Y') }} My CI4 Application. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-end">
                <p>Built with CodeIgniter {{ CodeIgniter\\CodeIgniter::CI_VERSION }}</p>
            </div>
        </div>
    </div>
</footer>`}</code>
              </pre>
            </div>
          </div>

          {/* Content View */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 4: Create Blade Content Views</h3>

            <div className="mb-4">
              <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Home Page: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/blade/pages/home.blade.php</code></h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<?php /** @var array $data */ ?>
@extends('blade.layouts.app')
@section('title', 'Home')
@section('description', 'Welcome to our CodeIgniter 4 application homepage')
@section('breadcrumbs')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item active">Home</li>
    </ol>
</nav>
@endsection
@section('content')
    <div class="row">
        <div class="col-md-8">
            <h1 class="mb-4">Welcome to CodeIgniter 4!</h1>
            <p class="lead">This is the main content area of your homepage.</p>
            <p>You can customize this content by editing the <code>app/Views/blade/pages/home.blade.php</code> file.</p>
            
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Getting Started</h5>
                    <p class="card-text">Check out the CodeIgniter 4 documentation to learn more about building amazing applications.</p>
                    <a href="https://codeigniter.com/user_guide/" target="_blank" class="btn btn-primary">Read Documentation</a>
                </div>
            </div>
        </div> 
        <div class="col-md-4">
            @include('blade.partials.sidebar')
        </div>
    </div>
@endsection
@push('scripts')
<script>
    console.log('Home page loaded successfully!');
</script> 
@endpush`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Sidebar Partial: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Views/blade/partials/sidebar.blade.php</code></h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`<div class="card">
    <div class="card-header">
        <h5 class="card-title">Quick Links</h5>
    </div>
    <div class="card-body">
        <ul class="list-unstyled">
            <li><a href="<?= base_url('about') ?>" class="text-decoration-none">About Us</a></li>
            <li><a href="<?= base_url('contact') ?>" class="text-decoration-none">Contact</a></li>
            <li><a href="https://codeigniter.com" target="_blank" class="text-decoration-none">CodeIgniter</a></li>
        </ul>
    </div>  
</div>`}</code>
              </pre>
            </div>
          </div>

          {/* Controller */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Step 5: Update Controller for Blade</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Update <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/Controllers/Home.php</code>:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php  
namespace App\\Controllers;
use Jenssegers\\Blade\\Blade;
use CodeIgniter\\Controller;

class Home extends Controller
{
    protected $blade;

    public function __construct()
    {
        $this->blade = new Blade(APPPATH . 'Views/blade', WRITEPATH . 'cache');
    }

    public function index()
    {
        $data = [
            'page_title' => 'Home Page',
            'meta_description' => 'Welcome to our CodeIgniter 4 application'
        ];
        
        echo $this->blade->make('blade.pages.home', $data)->render();
    }

    public function about()
    {
        $data = [
            'page_title' => 'About Us',
            'meta_description' => 'Learn more about our company and mission'
        ];
        
        echo $this->blade->make('blade.pages.about', $data)->render();
    }

    public function contact()
    {
        $data = [
            'page_title' => 'Contact Us',
            'meta_description' => 'Get in touch with our team'
        ];
        
        echo $this->blade->make('blade.pages.contact', $data)->render();
    }
}`}</code>
              </pre>
            </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🛠 Troubleshooting Blade Integration</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">If you encounter issues with Blade integration, consider the following tips:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Ensure the Blade package is correctly installed via Composer.</li>
              <li>Verify that the paths to the views and cache directories are correct.</li>
              <li>Check file permissions for the cache directory to ensure it is writable.</li>
              <li>Look for syntax errors in your Blade templates.</li>
              <li>Enable error reporting in CodeIgniter to get detailed error messages.</li>
            </ul>
          </div>

          {/* Advanced Tips */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🔥 Advanced Blade Templating Tips</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Components:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`<x-alert type="success" message="Operation successful!" />`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Directives:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`@datetime($user->created_at)`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Conditionals:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`@if($user) ... @endif`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Loops:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`@foreach($items as $item) ... @endforeach`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Escaping Output:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`{{ $userInput }} <!-- Escaped -->
{!! $rawHtml !!} <!-- Not Escaped -->`}</code>
                </pre>
              </div>
            </div>
            </div>
          </section>
          {/* Conclusion */}
          <section className="bg-green-50 border border-green-300 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2 text-green-800">✅ Summary</h3>
            <p className="text-gray-700 dark:text-gray-300">Now you have a fully working <strong>CodeIgniter 4 project</strong> with:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Native Layouts ( <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">$this-&gt;extend</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">$this-&gt;section</code> )</li>
              <li>Blade Layouts ( <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@yield</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@section</code> )</li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default LayoutSetup;;;