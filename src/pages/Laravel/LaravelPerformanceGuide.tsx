import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, Video, Image, FileCode, Zap, CheckCircle, Copy, AlertTriangle, Server, Rocket, Settings } from 'lucide-react';

const StepSection = ({ title, children, icon: Icon, variant = 'default' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const variantStyles = {
    default: 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
    success: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30',
    info: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
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

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative bg-gray-900 rounded-lg p-4 my-3">
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
      <pre className="text-sm text-gray-100 overflow-x-auto pr-12">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default function LaravelPerformanceGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={40} />
              <h1 className="text-4xl font-bold">Laravel Performance Optimization</h1>
            </div>
            <p className="text-red-100 text-lg">
              Complete guide to optimize video loading, caching, and page performance
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  This guide covers optimizing Laravel applications for better performance, focusing on lazy loading videos,
                  implementing proper caching headers, and improving Lighthouse scores. Based on a real scenario where a 
                  6.8 MB video was causing performance issues.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Problem Statement */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                The Problem
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Performance Issues:</h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• 6.8 MB video loading on page initialization</li>
                  <li>• No cache headers set (Cache TTL: None)</li>
                  <li>• Video re-downloaded on every page visit</li>
                  <li>• Estimated savings: 9,516 KiB (9.3 MB)</li>
                  <li>• Poor Lighthouse performance scores (76-85 range)</li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Solution 1: Lazy Loading */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Solution 1: Implement Lazy Loading
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Delay video loading until it's actually needed, preventing the 6 MB download during initial page load.
              </p>

              <StepSection title="Original Problematic Code" icon={AlertTriangle} variant="warning">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The original implementation loaded video immediately on page initialization:
                </p>
                <CodeBlock code={`<video
    autoplay loop muted playsinline
    class="video-element"
    preload="none"
>
    <source data-src="{{ asset('assets/video/intro/intro.mp4') }}" type="video/mp4">
    Your browser does not support the video tag.
</video>

<script>
// This runs immediately, loading the video
on: {
    init: function() {
        lazyLoadVideo(this.slides[this.activeIndex]);
        playActiveVideo(this.slides[this.activeIndex]);
    }
}
</script>`} language="blade" />
              </StepSection>

              <StepSection title="Updated Blade Component" icon={Video} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Create/update your <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">components/home/slider.blade.php</code>:
                </p>
                <CodeBlock code={`<div class="full-row p-0 overflow-hidden">
    <div class="swiper-container myVideoSlider">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="video-responsive">
                    <!-- Placeholder image for initial load -->
                    <img 
                        src="{{ asset('assets/video/intro/intro-poster.jpg') }}" 
                        alt="Video placeholder"
                        class="video-placeholder"
                        style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0;"
                    >
                    <video
                        loop muted playsinline
                        class="video-element"
                        preload="none"
                        poster="{{ asset('assets/video/intro/intro-poster.jpg') }}"
                    >
                        <source data-src="{{ asset('assets/video/intro/intro.mp4') }}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
</div>`} language="blade" />
              </StepSection>

              <StepSection title="CSS Styles" icon={FileCode}>
                <CodeBlock code={`@push('pagespecificstyles')
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
<style>
    body {
        overflow-x: hidden;
    }
    .myVideoSlider {
        width: 100vw !important;
        max-width: 100vw !important;
        margin: 0 !important;
        padding: 0 !important;
        position: relative;
    }
    .swiper-slide {
        width: 100vw;
        position: relative;
    }
    .video-responsive {
        position: relative;
        width: 100vw;
        height: 0;
        padding-bottom: 56.25%;
        overflow: hidden;
        background: #000;
    }
    .video-element {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        background: #000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .video-element.loaded {
        opacity: 1;
    }
    .video-placeholder {
        transition: opacity 0.3s ease;
    }
    .video-placeholder.hidden {
        opacity: 0;
        pointer-events: none;
    }
</style>
@endpush`} language="blade" />
              </StepSection>

              <StepSection title="JavaScript Implementation" icon={Settings}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Three loading strategies are provided - choose the one that fits your needs:
                </p>
                <CodeBlock code={`@push('pagespecificscripts')
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    let videoLoaded = false;
    
    var swiper = new Swiper('.myVideoSlider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        on: {
            init: function() {
                // Don't load video immediately
            },
            slideChangeTransitionEnd: function() {
                if (videoLoaded) {
                    playActiveVideo(this.slides[this.activeIndex]);
                }
            }
        }
    });

    // OPTION 1: Load when visible (RECOMMENDED)
    function initLazyVideoLoad() {
        const videoContainer = document.querySelector('.myVideoSlider');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !videoLoaded) {
                    videoLoaded = true;
                    loadAndPlayVideo();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before visible
        });
        
        if (videoContainer) {
            observer.observe(videoContainer);
        }
    }

    // OPTION 2: Load after delay
    function loadVideoAfterDelay() {
        setTimeout(() => {
            if (!videoLoaded) {
                videoLoaded = true;
                loadAndPlayVideo();
            }
        }, 1000); // Wait 1 second after page load
    }

    // OPTION 3: Load on user click (most aggressive)
    function loadOnInteraction() {
        document.querySelector('.myVideoSlider').addEventListener('click', function() {
            if (!videoLoaded) {
                videoLoaded = true;
                loadAndPlayVideo();
            }
        }, { once: true });
    }

    function loadAndPlayVideo() {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const video = activeSlide.querySelector('video.video-element');
        const placeholder = activeSlide.querySelector('.video-placeholder');
        
        if (video) {
            const source = video.querySelector('source');
            if (source && !source.src) {
                source.src = source.getAttribute('data-src');
                video.load();
                
                video.addEventListener('loadeddata', function() {
                    video.classList.add('loaded');
                    if (placeholder) {
                        placeholder.classList.add('hidden');
                    }
                    video.play().catch(e => {
                        console.log('Autoplay prevented:', e);
                    });
                }, { once: true });
            }
        }
    }

    function playActiveVideo(slide) {
        if (!slide) return;
        var video = slide.querySelector('video.video-element');
        if (video && video.readyState >= 2) {
            video.play().catch(e => {});
        }
    }

    // Choose your loading strategy:
    initLazyVideoLoad(); // Recommended
    // loadVideoAfterDelay(); // Alternative
    // loadOnInteraction(); // Most aggressive
});
</script>
@endpush`} language="blade" />
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Solution 2: Caching Headers */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Solution 2: Configure Caching Headers
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Set proper cache headers to prevent re-downloading assets on every visit. This is the fix for "Cache TTL: None" in Lighthouse.
              </p>

              <StepSection title="Apache .htaccess Configuration" icon={Server} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Add to your <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/.htaccess</code> file:
                </p>
                <CodeBlock code={`<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>

# ============================================
# CACHING CONFIGURATION
# ============================================
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Videos - 1 year
    ExpiresByType video/mp4 "access plus 1 year"
    ExpiresByType video/webm "access plus 1 year"
    
    # Images - 1 month
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    
    # CSS and JavaScript - 1 month
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    
    # Fonts - 1 year
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
    
    # HTML - no cache
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# ============================================
# CACHE-CONTROL HEADERS
# ============================================
<IfModule mod_headers.c>
    # Videos - aggressive caching (fixes Lighthouse issue)
    <FilesMatch "\\.(mp4|webm|ogg)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>
    
    # Images - moderate caching
    <FilesMatch "\\.(jpg|jpeg|png|gif|webp|svg|ico)$">
        Header set Cache-Control "public, max-age=2592000"
    </FilesMatch>
    
    # CSS and JavaScript - moderate caching
    <FilesMatch "\\.(css|js)$">
        Header set Cache-Control "public, max-age=2592000"
    </FilesMatch>
    
    # Fonts - aggressive caching
    <FilesMatch "\\.(woff|woff2|ttf|otf|eot)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>
    
    # HTML - no cache
    <FilesMatch "\\.(html|htm)$">
        Header set Cache-Control "no-cache, no-store, must-revalidate"
    </FilesMatch>
</IfModule>`} language="apache" />
              </StepSection>

              <StepSection title="Security Headers (Optional)" icon={AlertTriangle} variant="info">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Add security headers while allowing CDN resources:
                </p>
                <CodeBlock code={`<IfModule mod_headers.c>
    # Basic security headers
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set X-XSS-Protection "1; mode=block"
    
    # HSTS - only if you have SSL
    # Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    
    # CSP allowing Swiper.js from CDN
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://unpkg.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' data: https://cdnjs.cloudflare.com; media-src 'self'; object-src 'none'; frame-ancestors 'self';"
    
    # Permissions policy
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>`} language="apache" />
              </StepSection>

              <StepSection title="Nginx Configuration (Alternative)" icon={Server}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  If using Nginx instead of Apache:
                </p>
                <CodeBlock code={`location ~* \\.(mp4|webm)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}

location ~* \\.(jpg|jpeg|png|gif|webp|svg|ico)$ {
    expires 1M;
    add_header Cache-Control "public, max-age=2592000";
}

location ~* \\.(css|js)$ {
    expires 1M;
    add_header Cache-Control "public, max-age=2592000";
}

location ~* \\.(woff|woff2|ttf|otf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}`} language="nginx" />
              </StepSection>

              <StepSection title="Verify Caching Works" icon={CheckCircle} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Test that caching is working properly:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Open Chrome DevTools → Network tab</li>
                  <li>Load your page for the first time</li>
                  <li>Check the video file - should show 6.8 MB transferred</li>
                  <li>Reload the page (Ctrl+R or Cmd+R)</li>
                  <li>Video should now show "from disk cache" or "from memory cache"</li>
                  <li>Size should show "0 B" transferred on subsequent loads</li>
                </ol>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded mt-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Expected Results:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✔ First visit: 6-7 MB download</li>
                    <li>✔ Return visits: 0 bytes transferred (cached)</li>
                    <li>✔ Lighthouse savings: ~9,516 KiB achieved</li>
                    <li>✔ Performance score improvement: 10-20 points</li>
                  </ul>
                </div>
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Solution 3: Video Compression */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Solution 3: Compress Video Files
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Reduce video file size by 50-70% while maintaining quality. Your 6.8 MB video can become 2-3 MB.
              </p>

              <StepSection title="Generate Poster Image" icon={Image}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Extract a poster frame from your video (requires FFmpeg):
                </p>
                <CodeBlock code={`# Install FFmpeg (if not installed)
# Ubuntu/Debian: sudo apt install ffmpeg
# macOS: brew install ffmpeg
# Windows: Download from ffmpeg.org

# Extract poster image from first frame
ffmpeg -i intro.mp4 -ss 00:00:01 -vframes 1 intro-poster.jpg

# Move to Laravel public directory
mv intro-poster.jpg public/assets/video/intro/`} />
              </StepSection>

              <StepSection title="Compress Video File" icon={Zap} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Compress video for web delivery:
                </p>
                <CodeBlock code={`# Standard compression (good balance)
ffmpeg -i intro.mp4 \\
  -vcodec h264 \\
  -crf 28 \\
  -preset slow \\
  -movflags +faststart \\
  intro-optimized.mp4

# Aggressive compression (smaller file)
ffmpeg -i intro.mp4 \\
  -vcodec h264 \\
  -crf 32 \\
  -preset slow \\
  -movflags +faststart \\
  intro-compressed.mp4

# Move to Laravel public directory
mv intro-optimized.mp4 public/assets/video/intro/`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mt-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Understanding the Flags:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1">-crf 28</code>: Quality (18=high, 28=balanced, 32=smaller)</li>
                    <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1">-preset slow</code>: Better compression (slower encode)</li>
                    <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1">-movflags +faststart</code>: Enables streaming (critical for web)</li>
                  </ul>
                </div>
              </StepSection>

              <StepSection title="Update Blade Template" icon={FileCode}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Update your video source to use the optimized file:
                </p>
                <CodeBlock code={`<source 
    data-src="{{ asset('assets/video/intro/intro-optimized.mp4') }}" 
    type="video/mp4"
>`} language="blade" />
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Complete Integration */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Complete Implementation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your final home page structure with all optimizations:
              </p>

              <StepSection title="Home Page Blade File" icon={FileCode} variant="success">
                <CodeBlock code={`{{-- resources/views/pages/home.blade.php --}}
@extends('layouts.frontend')

@section('title', 'Home')

@section('content') 
    @include('partials.header-sub')
    
    <!--============== Slider Area Starts ==============-->
    @include('components.home.slider')
    <!--============== Slider Area End ==============-->
    
    <!--============== About Us Starts ==============-->
    @include('components.home.about')
    <!--============== About Us Ends ==============-->

    <!--============== Recent and Featured Products Start ==============-->
    @include('components.home.recent-featured-product')
    <!--============== Recent and Featured Products End ==============-->

    <!--============== Industries We Serve Start ==============-->
    @include('components.home.industries')
    <!--============== Industries We Serve End ==============-->

    <!--============== Client Logo Start ==============-->
    @include('components.home.clients')
    <!--============== Client Logo End ==============-->
@endsection`} language="blade" />
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Best Practices */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Performance Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">✓ DO</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Always use lazy loading for large assets</li>
                    <li>• Set aggressive cache headers for videos (1 year)</li>
                    <li>• Compress videos with <code>-movflags +faststart</code></li>
                    <li>• Use poster images for better perceived performance</li>
                    <li>• Test with Lighthouse after each optimization</li>
                    <li>• Use CDN for video delivery in production</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">✗ DON'T</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Load videos on page initialization</li>
                    <li>• Use <code>autoplay</code> without lazy loading</li>
                    <li>• Forget to set cache headers</li>
                    <li>• Deploy uncompressed video files</li>
                    <li>• Use videos without poster images</li>
                    <li>• Skip testing on slow connections</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Testing Commands</h3>
                  <div className="text-sm space-y-2 text-gray-700 dark:text-gray-300 font-mono">
                    <div className="text-xs text-gray-600 dark:text-gray-400">Check video size:</div>
                    <div className="text-green-500">ls -lh public/assets/video/intro/</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">Test cache headers:</div>
                    <div className="text-green-500">curl -I https://yoursite.com/assets/video/intro/intro.mp4</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">Clear Laravel cache:</div>
                    <div className="text-green-500">php artisan cache:clear && php artisan config:clear</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Expected Performance Gains</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Before:</strong> 6.8 MB download every visit</li>
                    <li>• <strong>After lazy load:</strong> 6.8 MB (once, deferred)</li>
                    <li>• <strong>After caching:</strong> 0 MB on return visits</li>
                    <li>• <strong>After compression:</strong> 2-3 MB first visit</li>
                    <li>• <strong>Lighthouse score:</strong> +10-20 points</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Troubleshooting */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Troubleshooting Common Issues
              </h2>

              <StepSection title="Issue: Video Still Loading Immediately" icon={AlertTriangle} variant="warning">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Video downloads on page load despite lazy loading implementation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Solutions:</h4>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>Remove <code>autoplay</code> attribute from video tag</li>
                      <li>Ensure <code>videoLoaded</code> flag is properly set to false</li>
                      <li>Check that <code>init</code> callback doesn't call <code>lazyLoadVideo()</code></li>
                      <li>Clear browser cache (Ctrl+Shift+Delete)</li>
                      <li>Test in incognito mode</li>
                    </ul>
                  </div>
                </div>
              </StepSection>

              <StepSection title="Issue: Cache Headers Not Working" icon={AlertTriangle} variant="warning">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Lighthouse still shows "Cache TTL: None" after adding .htaccess rules.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Solutions:</h4>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>Verify <code>mod_expires</code> is enabled: <code>sudo a2enmod expires</code></li>
                      <li>Verify <code>mod_headers</code> is enabled: <code>sudo a2enmod headers</code></li>
                      <li>Restart Apache: <code>sudo service apache2 restart</code></li>
                      <li>Check .htaccess is in <code>public/</code> directory, not root</li>
                      <li>Test headers with: <code>curl -I https://yoursite.com/assets/video/intro/intro.mp4</code></li>
                      <li>Look for <code>Cache-Control: public, max-age=31536000, immutable</code></li>
                    </ul>
                  </div>
                </div>
              </StepSection>

              <StepSection title="Issue: Video Won't Play" icon={AlertTriangle} variant="warning">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Video doesn't start playing after implementing lazy loading.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Solutions:</h4>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>Check browser console for autoplay policy violations</li>
                      <li>Ensure video has <code>muted</code> attribute (required for autoplay)</li>
                      <li>Verify video file path is correct</li>
                      <li>Check that <code>loadAndPlayVideo()</code> is being called</li>
                      <li>Test on different browsers</li>
                    </ul>
                  </div>
                </div>
              </StepSection>

              <StepSection title="Issue: Poster Image Not Showing" icon={AlertTriangle} variant="warning">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Placeholder image doesn't display before video loads.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Solutions:</h4>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>Verify poster image exists at specified path</li>
                      <li>Check image file permissions (should be readable)</li>
                      <li>Run <code>php artisan storage:link</code> if using storage</li>
                      <li>Check browser console for 404 errors</li>
                      <li>Ensure image path uses <code>asset()</code> helper</li>
                    </ul>
                  </div>
                </div>
              </StepSection>

              <StepSection title="Issue: Swiper Not Working" icon={AlertTriangle} variant="warning">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Slider doesn't initialize or throws JavaScript errors.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Solutions:</h4>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>Check Swiper.js is loaded before your script</li>
                      <li>Verify CDN URLs are accessible (check CSP headers)</li>
                      <li>Ensure <code>DOMContentLoaded</code> event waits for page load</li>
                      <li>Check console for JavaScript errors</li>
                      <li>Try using a specific Swiper version instead of latest</li>
                    </ul>
                  </div>
                </div>
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Additional Scenarios */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Additional Optimization Scenarios
              </h2>

              <StepSection title="Scenario 1: Multiple Videos on Page" icon={Video}>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you have multiple video sliders or videos on the same page:
                </p>
                <CodeBlock code={`function initLazyVideoLoad() {
    // Get all video containers
    const videoContainers = document.querySelectorAll('.video-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const video = container.querySelector('video');
                const source = video.querySelector('source');
                
                if (source && !source.src) {
                    source.src = source.getAttribute('data-src');
                    video.load();
                    video.play().catch(e => console.log('Autoplay blocked'));
                }
                
                observer.unobserve(container);
            }
        });
    }, { rootMargin: '100px' });
    
    videoContainers.forEach(container => observer.observe(container));
}`} language="javascript" />
              </StepSection>

              <StepSection title="Scenario 2: Using Laravel Mix/Vite for Assets" icon={Settings}>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you're using Laravel Mix or Vite for asset compilation:
                </p>
                <CodeBlock code={`// webpack.mix.js (Laravel Mix)
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .copy('resources/videos', 'public/videos')
   .version(); // Enable cache busting

// vite.config.js (Vite)
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    }
});`} language="javascript" />
              </StepSection>

              <StepSection title="Scenario 3: Using Cloud Storage (S3, DO Spaces)" icon={Server}>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Serve videos from cloud storage with proper headers:
                </p>
                <CodeBlock code={`// config/filesystems.php
's3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
    'options' => [
        'CacheControl' => 'public, max-age=31536000',
    ],
],

// In your blade file
<source 
    data-src="{{ Storage::disk('s3')->url('videos/intro/intro.mp4') }}" 
    type="video/mp4"
>`} language="php" />
              </StepSection>

              <StepSection title="Scenario 4: Progressive Video Loading" icon={Zap}>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Load low-quality version first, then high-quality:
                </p>
                <CodeBlock code={`<video loop muted playsinline class="video-element">
    <!-- Low quality loads first -->
    <source 
        src="{{ asset('assets/video/intro/intro-low.mp4') }}" 
        type="video/mp4"
    >
</video>

<script>
// After low quality loads, swap to high quality
video.addEventListener('loadeddata', function() {
    setTimeout(() => {
        const highQualityUrl = "{{ asset('assets/video/intro/intro-high.mp4') }}";
        fetch(highQualityUrl).then(response => response.blob()).then(blob => {
            video.src = URL.createObjectURL(blob);
            video.load();
        });
    }, 2000);
}, { once: true });
</script>`} language="javascript" />
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Performance Checklist */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Performance Optimization Checklist
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Before Deployment:</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Implemented lazy loading for all videos</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Added cache headers in .htaccess</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Compressed all video files</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Generated poster images</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Enabled <code>-movflags +faststart</code> on videos</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Tested on slow 3G connection</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Verified caching with curl or DevTools</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Ran Lighthouse audit</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Tested on mobile devices</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Updated CSP headers for CDN resources</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">After Deployment:</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Monitor server logs for 404s on video files</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Check cache hit rates</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Run Lighthouse on production URL</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Test from different geographic locations</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Monitor page load times with analytics</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Resources */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Additional Resources
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Documentation</h3>
                  <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                    <li>• <a href="https://web.dev/lazy-loading-video/" target="_blank" rel="noopener" className="hover:underline">Web.dev: Lazy Loading Videos</a></li>
                    <li>• <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener" className="hover:underline">Google Lighthouse</a></li>
                    <li>• <a href="https://ffmpeg.org/documentation.html" target="_blank" rel="noopener" className="hover:underline">FFmpeg Documentation</a></li>
                    <li>• <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener" className="hover:underline">Swiper.js API</a></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tools</h3>
                  <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                    <li>• <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener" className="hover:underline">PageSpeed Insights</a></li>
                    <li>• <a href="https://www.webpagetest.org/" target="_blank" rel="noopener" className="hover:underline">WebPageTest</a></li>
                    <li>• <a href="https://gtmetrix.com/" target="_blank" rel="noopener" className="hover:underline">GTmetrix</a></li>
                    <li>• <a href="https://bundlephobia.com/" target="_blank" rel="noopener" className="hover:underline">BundlePhobia</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p className="mb-2">💡 Pro tip: Performance optimization is an ongoing process. Monitor your metrics regularly!</p>
            <p className="text-xs">Expected improvements: Lighthouse score +10-20 points | File size reduction 50-70% | Return visit load time ~0ms</p>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}