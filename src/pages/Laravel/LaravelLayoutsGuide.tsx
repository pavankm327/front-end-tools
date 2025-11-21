import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, Layout, FileCode, Code, Layers, Puzzle, Copy, CheckCircle, Box, FileText } from 'lucide-react';

const MethodSection = ({ title, children, icon: Icon, variant = 'default' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const variantStyles = {
    default: 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600',
    primary: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30',
    success: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30',
    info: 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30'
  };
  
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${variantStyles[variant]}`}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />}
          <span className="font-semibold text-gray-900 dark:text-gray-100">{title}</span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          {children}
        </div>
      )}
    </div>
  );
};

const CodeBlock = ({ code, language = 'php', label = '' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="my-3">
      {label && (
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-semibold">
          {label}
        </div>
      )}
      <div className="relative bg-gray-900 rounded-lg p-4">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <CheckCircle size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-gray-300" />
          )}
        </button>
        <pre className="text-sm text-gray-100 overflow-x-auto pr-10">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default function LaravelLayoutsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Layout size={40} />
              <h1 className="text-4xl font-bold">Laravel Blade Layouts</h1>
            </div>
            <p className="text-red-100 text-lg">
              Master template inheritance and component-based layouts for clean, reusable views
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  Laravel's Blade templating engine offers two powerful approaches for structuring layouts: 
                  <strong> Template Inheritance</strong> using <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">@yield</code> and <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">@extends</code>, 
                  and <strong> Component-Based Layouts</strong> using <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">&lt;x-</code> tags and <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$slot</code>. 
                  Both methods help you create maintainable, DRY (Don't Repeat Yourself) code.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Method 1: Template Inheritance */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Method 1: Template Inheritance (Traditional)
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This approach uses Blade directives to define sections in a master layout that can be filled by child views.
              </p>

              <MethodSection title="Step 1: Create Master Layout" icon={FileCode} variant="primary">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Create a master layout file in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">resources/views/layouts/app.blade.php</code>
                </p>
                <CodeBlock 
                  label="resources/views/layouts/app.blade.php"
                  code={`<!-- resources/views/layouts/app.blade.php -->
<html>
<head>
    <title>App Name - @yield('title')</title>
</head>
<body>
    <header>
        <!-- Navigation, etc. -->
    </header>
    
    <div class="container">
        @yield('content')
    </div>

    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>`} 
                />
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    💡 The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@yield('...')</code> directive specifies where content from child views should be inserted.
                  </p>
                </div>
              </MethodSection>

              <MethodSection title="Step 2: Create Child View" icon={FileText} variant="primary">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  In your child view, use <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">@extends</code> to link to the master layout 
                  and <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">@section</code> to define content.
                </p>
                <CodeBlock 
                  label="resources/views/home.blade.php"
                  code={`<!-- resources/views/home.blade.php -->
@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome to the Home Page</h1>
    <p>This is the main content of the home page.</p>
@endsection`} 
                />
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ The content within <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@section</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@endsection</code> replaces 
                    the corresponding <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@yield</code> in the layout.
                  </p>
                </div>
              </MethodSection>

              <MethodSection title="Example: Multiple Sections with Sidebar" icon={Layers}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Managing multiple sections like sidebar, styles, and scripts.
                </p>
                <CodeBlock 
                  label="resources/views/layouts/master.blade.php"
                  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App - @yield('title', 'Default Title')</title>
    @yield('styles')
</head>
<body>
    <div class="header">
        @include('partials.header')
    </div>

    <div class="container">
        <aside class="sidebar">
            @section('sidebar')
                <!-- Default sidebar content -->
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            @show 
        </aside>
        
        <main>
            @yield('content')
        </main>
    </div>

    <div class="footer">
        @yield('footer')
    </div>

    @yield('scripts')
</body>
</html>`} 
                />
                <CodeBlock 
                  label="resources/views/about.blade.php"
                  code={`@extends('layouts.master')

@section('title', 'About Us')

@section('sidebar')
    @parent <!-- Keeps the parent's default sidebar -->
    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <h1>About Our Company</h1>
    <p>We are a company that does things.</p>
@endsection

@section('scripts')
    <script src="/js/about.js"></script>
@endsection`} 
                />
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ⚡ Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@show</code> instead of <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@endsection</code> to 
                    display default content. Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@parent</code> to keep parent content when extending.
                  </p>
                </div>
              </MethodSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Method 2: Component-Based Layouts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Method 2: Component-Based Layouts (Modern)
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Introduced in Laravel 7, this method uses components for a more object-oriented and reusable approach.
              </p>

              <MethodSection title="Step 1: Create Layout Component" icon={Box} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Create a component using Artisan command:
                </p>
                <CodeBlock 
                  language="bash"
                  code="php artisan make:component AppLayout" 
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  This creates two files:
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside mb-3">
                  <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app/View/Components/AppLayout.php</code> (component class)</li>
                  <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">resources/views/components/app-layout.blade.php</code> (view file)</li>
                </ul>
                <CodeBlock 
                  label="resources/views/components/app-layout.blade.php"
                  code={`<!-- resources/views/components/app-layout.blade.php -->
<html>
<head>
    <title>App Name</title>
</head>
<body>
    <header>
        <!-- Navigation, etc. -->
    </header>
    
    <div class="container">
        {{ $slot }}
    </div>

    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>`} 
                />
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    💡 The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{'{{ $slot }}'}</code> variable is a special placeholder for the main content passed into the component.
                  </p>
                </div>
              </MethodSection>

              <MethodSection title="Step 2: Use Component in Views" icon={Code} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Render the layout using an HTML-like tag in your views:
                </p>
                <CodeBlock 
                  label="resources/views/home.blade.php"
                  code={`<!-- resources/views/home.blade.php -->
<x-app-layout>
    <x-slot name="title">
        Home Page
    </x-slot>

    <h1>Welcome to the Home Page</h1>
    <p>This is the main content of the home page.</p>
</x-app-layout>`} 
                />
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ Anything inside <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;x-app-layout&gt;</code> that isn't a named slot 
                    is rendered in the main <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{'{{ $slot }}'}</code>.
                  </p>
                </div>
              </MethodSection>

              <MethodSection title="Example: Named Slots and Props" icon={Puzzle}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Components allow passing data as HTML attributes (props) and using multiple named slots.
                </p>
                <CodeBlock 
                  label="resources/views/components/page-layout.blade.php"
                  code={`<!-- Props are automatically available as variables -->
<html class="{{ $darkMode ? 'dark-mode' : '' }}">
<head>
    <title>{{ $title ?? 'Default App Title' }}</title>
    @stack('scripts') 
</head>
<body>
    <header>
        {{ $header }} <!-- Named slot for the header -->
    </header>

    <main>
        {{ $slot }} <!-- Main content slot -->
    </main>
</body>
</html>`} 
                />
                <CodeBlock 
                  label="resources/views/contact.blade.php"
                  code={`<x-page-layout title="Contact Us" :dark-mode="false">
    <!-- Define the header named slot -->
    <x-slot name="header">
        <nav>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
        </nav>
    </x-slot>

    <!-- Content outside named slots goes into $slot -->
    <h1>Contact Page</h1>
    <p>Get in touch with us.</p>

    @push('scripts')
        <script src="/js/contact.js"></script>
    @endpush
</x-page-layout>`} 
                />
              </MethodSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Advanced Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Advanced Features
              </h2>

              <MethodSection title="Using Partials with @include" icon={FileCode} variant="info">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Partials are small, reusable view files for common snippets like navigation bars, forms, or alerts.
                </p>
                <CodeBlock 
                  label="resources/views/partials/header.blade.php"
                  code={`<nav class="navbar">
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/contact">Contact</a>
</nav>`} 
                />
                <CodeBlock 
                  label="Usage in any view"
                  code={`<div class="header">
    @include('partials.header')
</div>

<!-- Pass data to partial -->
@include('partials.alert', ['type' => 'warning', 'message' => 'Something went wrong!'])`} 
                />
              </MethodSection>

              <MethodSection title="Using Stacks with @stack and @push" icon={Layers} variant="info">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Stacks are ideal for page-specific CSS or JavaScript files, allowing you to push content onto a stack from multiple views.
                </p>
                <CodeBlock 
                  label="resources/views/layouts/base.blade.php"
                  code={`<html>
<head>
    <!-- Master CSS files -->
    <link rel="stylesheet" href="/css/app.css">

    <!-- Page-specific styles will be pushed here -->
    @stack('styles') 
</head>
<body>
    @yield('content')
    
    <!-- Page-specific scripts will be pushed here -->
    @stack('scripts')
</body>
</html>`} 
                />
                <CodeBlock 
                  label="resources/views/user-profile.blade.php"
                  code={`@extends('layouts.base')

@push('styles')
    <!-- Injected into 'styles' stack -->
    <link rel="stylesheet" href="/css/user-profile.css">
@endpush

@section('content')
    <h1>User Profile Page</h1>
    <!-- ... -->
@endsection

@push('scripts')
    <!-- Injected into 'scripts' stack -->
    <script src="/js/user-profile.js"></script>
@endpush`} 
                />
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    💡 Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@prepend</code> instead of <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@push</code> to 
                    add content to the beginning of the stack.
                  </p>
                </div>
              </MethodSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Key Directories */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Key Directories</h2>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded font-mono text-sm">
                      resources/views
                    </code>
                    <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">
                      Contains all your application's view files
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded font-mono text-sm">
                      resources/views/layouts
                    </code>
                    <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">
                      Conventional folder for storing master layout files
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <code className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded font-mono text-sm">
                      resources/views/components
                    </code>
                    <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">
                      Contains the Blade view files for components
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <code className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded font-mono text-sm">
                      app/View/Components
                    </code>
                    <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">
                      Contains component class files
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Comparison & Best Practices */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Comparison & Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Template Inheritance</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✓ Simple and straightforward</li>
                    <li>✓ Great for basic layouts</li>
                    <li>✓ Less overhead</li>
                    <li>✓ Familiar to developers</li>
                    <li>• Uses @extends, @yield, @section</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Component-Based</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✓ More flexible and reusable</li>
                    <li>✓ Can pass props/attributes</li>
                    <li>✓ Object-oriented approach</li>
                    <li>✓ Better for complex UIs</li>
                    <li>• Uses &lt;x- tags and $slot</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Best Practices</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Keep layouts in /layouts folder</li>
                    <li>• Use partials for repeated elements</li>
                    <li>• Use stacks for page-specific assets</li>
                    <li>• Name components clearly (PascalCase)</li>
                    <li>• Use @parent to extend sections</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Common Directives</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 font-mono">
                    <li>@yield('name')</li>
                    <li>@extends('layout.name')</li>
                    <li>@section / @endsection</li>
                    <li>@show (displays default)</li>
                    <li>@parent (keeps parent content)</li>
                    <li>@include('partial.name')</li>
                    <li>@stack / @push / @prepend</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Pro tip: Choose template inheritance for simple projects, component-based layouts for complex, reusable UIs!
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}