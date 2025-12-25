import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronRight, ChevronUp, Layout, FileCode, Code, Layers, Puzzle, Copy, CheckCircle, Box, FileText } from 'lucide-react';


const LaravelLifecycle = () => {
  const [expandedSteps, setExpandedSteps] = useState({});

  const toggleStep = (id) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const steps = [
    {
      id: 1,
      title: "1. Request Entry Point",
      file: "public/index.php",
      description: "All requests hit this file first",
      details: [
        "Web server (Apache/Nginx) redirects all requests here",
        "Captures the incoming HTTP request",
        "Loads Composer autoloader",
        "Includes bootstrap/app.php to get application instance"
      ],
      code: `// public/index.php
define('LARAVEL_START', microtime(true));

require __DIR__.'/../vendor/autoload.php';

$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());`,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      title: "2. Application Bootstrap",
      file: "bootstrap/app.php",
      description: "Configure the application",
      details: [
        "Creates Application instance",
        "Configures routing (web, api, console routes)",
        "Configures middleware groups and aliases",
        "Configures exception handling",
        "Returns configured application instance"
      ],
      code: `// bootstrap/app.php
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Middleware configuration
    })
    ->create();`,
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: 3,
      title: "3. Kernel Selection",
      file: "Illuminate\\Foundation\\Application",
      description: "Determine which kernel to use",
      details: [
        "Application decides: HTTP or Console request?",
        "HTTP requests → handleRequest() → HTTP Kernel",
        "Console requests → handleCommand() → Console Kernel",
        "For web requests, uses HTTP Kernel"
      ],
      code: `// Inside Application
public function handleRequest(Request $request)
{
    return $this->getHttpKernel()->handle($request);
}`,
      color: "bg-green-50 border-green-200"
    },
    {
      id: 4,
      title: "4. HTTP Kernel Initialization",
      file: "Illuminate\\Foundation\\Http\\Kernel",
      description: "Prepare to handle the request",
      details: [
        "HTTP Kernel (framework class, not in your app anymore)",
        "Defines array of bootstrappers to run",
        "Bootstrappers prepare the application environment"
      ],
      code: `// Bootstrappers run in order:
protected $bootstrappers = [
    LoadEnvironmentVariables::class,
    LoadConfiguration::class,
    HandleExceptions::class,
    RegisterFacades::class,
    RegisterProviders::class,
    BootProviders::class,
];`,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 5,
      title: "5. Run Bootstrappers",
      file: "Various Bootstrap Classes",
      description: "Execute each bootstrapper",
      details: [
        "LoadEnvironmentVariables: Loads .env file using Dotenv",
        "LoadConfiguration: Loads all config files from config/",
        "HandleExceptions: Sets up exception and error handlers",
        "RegisterFacades: Registers facade aliases (DB, Route, etc)",
        "RegisterProviders: Registers service providers",
        "BootProviders: Boots all service providers"
      ],
      code: `// What each does:
LoadEnvironmentVariables → Load .env
LoadConfiguration → Load config/*
HandleExceptions → Setup error handling
RegisterFacades → Enable DB::, Route::, etc
RegisterProviders → Call register() on providers
BootProviders → Call boot() on providers`,
      color: "bg-red-50 border-red-200"
    },
    {
      id: 6,
      title: "6. Service Provider Registration",
      file: "bootstrap/providers.php",
      description: "PHASE 1: Register all services",
      details: [
        "Laravel loads providers from bootstrap/providers.php",
        "Calls register() method on EACH provider first",
        "Providers bind services into the container",
        "No provider uses other services yet (they may not exist)",
        "Example: DatabaseServiceProvider registers 'db' binding"
      ],
      code: `// Each provider's register() called:
AppServiceProvider->register()
AuthServiceProvider->register()
EventServiceProvider->register()
RouteServiceProvider->register()

// Inside a provider:
public function register() {
    $this->app->singleton('myservice', fn() => 
        new MyService()
    );
}`,
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      id: 7,
      title: "7. Service Provider Booting",
      file: "All Service Providers",
      description: "PHASE 2: Boot all services",
      details: [
        "After ALL providers registered, boot phase begins",
        "Calls boot() method on EACH provider",
        "NOW safe to use any service (all are registered)",
        "Can register routes, event listeners, view composers",
        "Application is fully prepared"
      ],
      code: `// Each provider's boot() called:
AppServiceProvider->boot()
AuthServiceProvider->boot()
EventServiceProvider->boot()
RouteServiceProvider->boot()

// Inside a provider:
public function boot() {
    // NOW can use other services safely
    Route::middleware('web')->group(...);
    Event::listen(...);
}`,
      color: "bg-pink-50 border-pink-200"
    },
    {
      id: 8,
      title: "8. Global Middleware",
      file: "Configured in bootstrap/app.php",
      description: "Request enters middleware pipeline",
      details: [
        "Request passes through global middleware first",
        "Default: TrimStrings, ValidatePostSize, etc",
        "Each middleware can inspect/modify request",
        "Middleware can stop the request (return response early)",
        "Executed in order defined"
      ],
      code: `// Global middleware (runs on every request)
TrimStrings → Remove whitespace
ValidatePostSize → Check POST size
PreventRequestsDuringMaintenance → Check maintenance mode
ValidateSignature → Check signed routes
etc...`,
      color: "bg-teal-50 border-teal-200"
    },
    {
      id: 9,
      title: "9. Middleware Groups (web/api)",
      file: "Configured in bootstrap/app.php",
      description: "Group-specific middleware",
      details: [
        "After global, request enters middleware group",
        "WEB group: session, cookies, CSRF, etc",
        "API group: throttling, stateless, etc",
        "Depends on route definition (web or api)",
        "Each middleware processes the request"
      ],
      code: `// WEB middleware group:
EncryptCookies → Encrypt cookies
AddQueuedCookiesToResponse → Add queued cookies
StartSession → Start session
ShareErrorsFromSession → Share errors to views
VerifyCsrfToken → Check CSRF token
SubstituteBindings → Route model binding

// API middleware group:
ThrottleRequests → Rate limiting
SubstituteBindings → Route model binding`,
      color: "bg-orange-50 border-orange-200"
    },
    {
      id: 10,
      title: "10. Router Matching",
      file: "Illuminate\\Routing\\Router",
      description: "Find matching route",
      details: [
        "Router receives request after middleware",
        "Matches request URI + HTTP method to routes",
        "Searches in order: web.php, api.php route files",
        "Extracts route parameters from URI",
        "Finds controller method or closure to execute",
        "If no match found, throws 404 NotFoundHttpException"
      ],
      code: `// Example route matching:
Request: GET /users/123

Route::get('/users/{id}', [UserController::class, 'show']);

Router extracts: ['id' => 123]
Will call: UserController@show`,
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      id: 11,
      title: "11. Route Middleware",
      file: "Defined on routes",
      description: "Route-specific middleware",
      details: [
        "Executes middleware specific to matched route",
        "Example: auth, verified, throttle, etc",
        "Applied via ->middleware() on routes",
        "Can authenticate user, check permissions, etc",
        "Last middleware layer before controller"
      ],
      code: `// Route with middleware:
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified']);

// These middleware run now:
Authenticate → Check if user logged in
EnsureEmailIsVerified → Check if email verified`,
      color: "bg-lime-50 border-lime-200"
    },
    {
      id: 12,
      title: "12. Route Parameter Binding",
      file: "Illuminate\\Routing\\Middleware\\SubstituteBindings",
      description: "Resolve route parameters",
      details: [
        "Converts route parameters to model instances",
        "Example: {user} becomes User model object",
        "Uses model's route key (usually 'id')",
        "Queries database automatically",
        "If not found, throws 404 ModelNotFoundException"
      ],
      code: `// Route definition:
Route::get('/users/{user}', function (User $user) {
    return $user;
});

// Laravel automatically does:
$user = User::findOrFail($id);

// Your function receives the model, not just ID`,
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      id: 13,
      title: "13. Controller Method Execution",
      file: "App\\Http\\Controllers\\*",
      description: "Your application logic runs",
      details: [
        "Controller method or closure is called",
        "Receives resolved dependencies via DI",
        "Your code executes here:",
        "→ Validate request data",
        "→ Query database using models",
        "→ Perform business logic",
        "→ Prepare response data"
      ],
      code: `// Example controller:
public function store(StoreUserRequest $request) 
{
    // Validated data from FormRequest
    $validated = $request->validated();
    
    // Business logic
    $user = User::create($validated);
    
    // Return response
    return redirect()->route('users.show', $user);
}`,
      color: "bg-violet-50 border-violet-200"
    },
    {
      id: 14,
      title: "14. Response Creation",
      file: "Controller Return",
      description: "Convert return value to Response",
      details: [
        "Laravel converts your return value to proper Response",
        "String → Response with text/html",
        "Array/Object → JsonResponse",
        "View → Response with rendered HTML",
        "Redirect → RedirectResponse",
        "Response object → Used as-is"
      ],
      code: `// Different return types:
return 'Hello'; 
  → Response with 'Hello'

return ['name' => 'John']; 
  → JsonResponse

return view('users.index', $users); 
  → Rendered view

return redirect()->route('home'); 
  → RedirectResponse`,
      color: "bg-fuchsia-50 border-fuchsia-200"
    },
    {
      id: 15,
      title: "15. Response Middleware (Reverse)",
      file: "All Middleware",
      description: "Response travels back through middleware",
      details: [
        "Response goes through middleware stack BACKWARDS",
        "Each middleware can modify response",
        "Example actions:",
        "→ Encrypt cookies",
        "→ Add security headers",
        "→ Compress content",
        "→ Log response data"
      ],
      code: `// Response flows backward through:
← SubstituteBindings
← VerifyCsrfToken
← ShareErrorsFromSession
← StartSession
← AddQueuedCookiesToResponse
← EncryptCookies
← ValidatePostSize
← TrimStrings`,
      color: "bg-rose-50 border-rose-200"
    },
    {
      id: 16,
      title: "16. Send Response",
      file: "Symfony\\Component\\HttpFoundation\\Response",
      description: "Send response to client",
      details: [
        "Response object's send() method called",
        "Sends HTTP status code and headers",
        "Sends response body (HTML, JSON, etc)",
        "Content sent to web server",
        "Web server delivers to client's browser"
      ],
      code: `// Response sends:
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: laravel_session=...
...

{"name":"John","email":"john@example.com"}`,
      color: "bg-sky-50 border-sky-200"
    },
    {
      id: 17,
      title: "17. Terminate Middleware",
      file: "Terminable Middleware",
      description: "Post-response cleanup",
      details: [
        "AFTER response sent to user",
        "Terminable middleware execute",
        "User doesn't wait for this",
        "Used for:",
        "→ Write session data to storage",
        "→ Log final metrics",
        "→ Queue cleanup tasks"
      ],
      code: `// Terminable middleware example:
class StartSession implements Terminable 
{
    public function terminate($request, $response) 
    {
        // Save session after response sent
        // User doesn't wait for this
        $this->session->save();
    }
}`,
      color: "bg-amber-50 border-amber-200"
    },
    {
      id: 18,
      title: "18. Application Termination",
      file: "Laravel Application",
      description: "Final cleanup",
      details: [
        "Close database connections",
        "Free up resources",
        "Clear temporary data",
        "Application request cycle complete",
        "Ready for next request"
      ],
      code: `// Laravel performs:
- Close DB connections
- Clear resolved instances
- Free memory
- Log final stats

// Request complete! 🎉`,
      color: "bg-slate-50 border-slate-200"
    }
  ];

return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24" >
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
            <div className="bg-white border rounded-lg shadow-lg p-8 mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Laravel Request Lifecycle</h1>
                <p className="text-gray-600 text-lg">
                Complete visual guide to how Laravel processes HTTP requests from entry to response
                </p>
            </div>

            <div className="space-y-4">
                {steps.map((step, index) => (
                <div key={step.id} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-12 bg-gray-300 z-0" />
                    )}
                    
                    {/* Step Card */}
                    <div className={`relative bg-white rounded-lg shadow-md border ${step.color} overflow-hidden transition-all duration-300 hover:shadow-xl`}>
                    <div 
                        className="p-6 cursor-pointer"
                        onClick={() => toggleStep(step.id)}
                    >
                        <div className="flex items-start gap-4">
                        {/* Step Number Circle */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                            {step.id}
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {step.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-mono mb-2">
                                {step.file}
                                </p>
                                <p className="text-gray-700">
                                {step.description}
                                </p>
                            </div>
                            <div className="text-gray-400">
                                {expandedSteps[step.id] ? (
                                <ChevronDown className="w-6 h-6" />
                                ) : (
                                <ChevronRight className="w-6 h-6" />
                                )}
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedSteps[step.id] && (
                        <div className="mt-6 ml-16 space-y-4 animate-fadeIn">
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-800 mb-3">What Happens:</h4>
                            <ul className="space-y-2">
                                {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-blue-500 mt-1">▸</span>
                                    <span>{detail}</span>
                                </li>
                                ))}
                            </ul>
                            </div>

                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-green-400 text-sm font-mono whitespace-pre">
                                {step.code}
                            </pre>
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Summary Card */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold mb-2 text-blue-100">⚡ Request Flow</h3>
                    <p className="text-blue-50">
                    Entry → Bootstrap → Kernel → Service Providers → Middleware → Router → Controller → Response → Middleware (reverse) → Client
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-blue-100">🔧 Service Providers</h3>
                    <p className="text-blue-50">
                    Two phases: register() binds services, boot() uses services. This prevents dependency issues.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-blue-100">🛡️ Middleware</h3>
                    <p className="text-blue-50">
                    Request flows through middleware stack, then response flows back through it in reverse.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-blue-100">🎯 Bootstrappers</h3>
                    <p className="text-blue-50">
                    Six bootstrappers prepare the app: env, config, exceptions, facades, register, boot.
                    </p>
                </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                }
                .animate-fadeIn {
                animation: fadeIn 0.3s ease-out;
                }
            `}</style>
            </div>
        </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LaravelLifecycle;