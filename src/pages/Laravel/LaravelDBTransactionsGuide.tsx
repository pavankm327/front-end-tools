import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, Database, Shield, FileCode, Server, Zap, CheckCircle, AlertTriangle, Rocket } from 'lucide-react';

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
        className={`w-full px-3 py-3 sm:px-4 flex items-center justify-between transition-colors ${variantStyles[variant]}`}
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <Icon size={18} className="sm:size-20 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg truncate">{title}</span>
        </div>
        <div className="flex-shrink-0 ml-2 sm:ml-0">
          {isExpanded ? <ChevronUp size={18} className="sm:size-20" /> : <ChevronDown size={18} className="sm:size-20" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 sm:max-h-none' : 'max-h-0'}`}>
        <div className="p-3 sm:p-4 bg-white dark:bg-gray-800">{children}</div>
      </div>
    </div>
  );
};

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg p-3 sm:p-4 my-2 sm:my-3 rounded-xl">
      <button 
        onClick={handleCopy}
        className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 p-1.5 sm:p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors z-10"
        title="Copy to clipboard"
      >
        {copied ? (
          <CheckCircle size={14} className="sm:size-16 text-green-400" />
        ) : (
          <span className="text-gray-300 text-xs sm:text-sm">📋</span>
        )}
      </button>
      <pre className="text-xs sm:text-sm text-gray-100 overflow-x-auto pr-10 sm:pr-12 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"><code>{code}</code></pre>
    </div>
  );
};

export default function LaravelDBTransactionsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 sm:bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-16 sm:pt-24 max-w-none sm:max-w-6xl">
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden mx-0 sm:mx-auto">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Database size={32} className="sm:size-40 w-12 h-12 sm:w-auto sm:h-auto mx-auto sm:mx-0" />
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Laravel DB Transactions</h1>
                  <p className="text-emerald-100 text-base sm:text-lg mt-1">Atomic Operations + Deadlock Retries</p>
                </div>
              </div>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Master data integrity. DB::transaction() handles deadlocks. Use retry() for full exponential backoff.
              </p>
            </div>

            <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
              
              {/* Introduction */}
              <section>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base">
                    <strong>DB::transaction()</strong> ensures <strong>atomic operations</strong> - all succeed or all rollback.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    🔒 Retries <strong>ONLY database deadlocks</strong> (3 attempts, ~100ms fixed delay)<br/>
                    ⚡ Use <strong>retry()</strong> helper for SMTP timeouts, network failures with exponential backoff
                  </p>
                </div>
              </section>

              <hr className="border-gray-300 dark:border-gray-600 mx-2 sm:mx-0" />

              {/* Problem Statement */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">The Problem</h2>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-3 sm:p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2 text-base sm:text-lg">Without Transactions</h3>
                  <ul className="space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>• DB record saved ✅</li>
                    <li>• Email fails ❌ (SMTP timeout)</li>
                    <li>• <strong>Orphan record in database</strong> ⚠️</li>
                    <li>• No notification sent to team</li>
                    <li>• Data inconsistency</li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-300 dark:border-gray-600 mx-2 sm:mx-0" />

              {/* Solution */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
                  Production-Ready Implementation
                </h2>

                <StepSection 
                  title="✅ Complete Controller with retry() + transaction()" 
                  icon={Server}
                  variant="success"
                >
                  <CodeBlock 
                    code={`<?php

namespace App\\Http\\Controllers;

use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\retry;
use App\\Models\\Contact;
use App\\Mail\\ContactFormMail;
use ConsoleTVs\\Profanity\\Facades\\Profanity;

class ContactController extends Controller {
    public function submit(Request $request) {
        // 1. Validate
        $validator = Validator::make($request->all(), [
            'contact_name' => [
                'required', 'string', 'min:3', 'max:255',
                'regex:/^[\\p{L}\\s\\-\\.\' ]+$/u'
            ],
            'contact_email' => ['required', 'email:rfc,dns'],
            'contact_no' => 'required|numeric|digits_between:10,15',
            'contact_location' => 'required|string|min:3',
            'contact_message' => 'required|string|min:10|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $sanitizedData = $this->sanitizeInput($request->all());

        // 2. FULLY RESILIENT: retry() + transaction()
        return retry(3, function () use ($sanitizedData) {
            return DB::transaction(function () use ($sanitizedData) {
                // Fast & reliable first
                $contact = Contact::create([
                    'name' => $sanitizedData['contact_name'],
                    'email' => $sanitizedData['contact_email'],
                    'phone' => $sanitizedData['contact_no'],
                    'location' => $sanitizedData['contact_location'],
                    'message' => $sanitizedData['contact_message'],
                ]);

                Log::info('Contact #' . $contact->id . ' submitted');

                // Slow/unreliable last
                Mail::to(config('mail.from.address'))->send(
                    new ContactFormMail($sanitizedData)
                );

                return response()->json([
                    'success' => true,
                    'message' => 'Message sent successfully!',
                    'contact_id' => $contact->id
                ]);
            });
        }, 100); // 100ms → 200ms → 400ms exponential backoff
    }
}`}
                    language="php"
                  />
                </StepSection>

                <StepSection 
                  title="🔒 DB::transaction() vs Manual - What Really Happens" 
                  icon={Shield}
                  variant="info"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2 sm:mb-3 bg-red-100 dark:bg-red-900/30 p-2 sm:p-3 rounded text-sm sm:text-base">
                        ❌ Manual Transactions (Error-Prone)
                      </h4>
                      <CodeBlock 
                        code={`DB::beginTransaction();
try {
    Contact::create([...]);  // ✅ Saved
    Mail::send(...);         // ❌ SMTP timeout!
    DB::commit();            // ← Orphan record!
} catch(Exception $e) {
    DB::rollBack();          // Manual & forgettable
}`}
                        language="php"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 sm:mb-3 bg-green-100 dark:bg-green-900/30 p-2 sm:p-3 rounded text-sm sm:text-base">
                        ✅ DB::transaction() (Automatic)
                      </h4>
                      <CodeBlock 
                        code={`DB::transaction(function() {
    Contact::create([...]);  // Auto-rollback on fail
    Mail::send(...);         // Auto-rollback on fail
}); // Auto-commit on success`}
                        language="php"
                      />
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 sm:p-4 rounded border-l-4 border-yellow-400 mt-4">
                    <p className="text-xs sm:text-sm">
                      <strong>⚠️ Important:</strong> DB::transaction(..., 3) retries <em>ONLY</em> database deadlocks (1213, 40P01). 
                      Use <code>retry(3, ..., 100)</code> for SMTP/network failures.
                    </p>
                  </div>
                </StepSection>

                <StepSection 
                  title="⚡ retry() - True Exponential Backoff" 
                  icon={Zap}
                  variant="success"
                >
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Laravel's <code>retry(3, callback, 100)</code> gives true exponential backoff for ALL transient failures:
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center mb-4 sm:mb-6">
                    <div className="p-2 sm:p-4 bg-gray-100 dark:bg-gray-700 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">1</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">0ms</div>
                    </div>
                    <div className="p-2 sm:p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-300">2</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">100ms</div>
                    </div>
                    <div className="p-2 sm:p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-indigo-900 dark:text-indigo-300">3</div>
                      <div className="text-xs text-indigo-700 dark:text-indigo-300">200ms</div>
                    </div>
                    <div className="p-2 sm:p-4 bg-red-100 dark:bg-red-900/30 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-red-900 dark:text-red-300">❌</div>
                      <div className="text-xs text-red-700 dark:text-red-300">400ms → Fail</div>
                    </div>
                  </div>

                  <CodeBlock 
                    code={`retry(3, function() {
    return DB::transaction(function() {
        // Your operations
    });
}, 100); // Base delay 100ms`}
                    language="php"
                  />

                  <div className="mt-3 sm:mt-4 bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 dark:text-green-300 text-sm sm:text-base">
                      Handles: SMTP timeouts, network blips, queue failures, <em>anything</em>
                    </p>
                  </div>
                </StepSection>

                <StepSection 
                  title="🛡️ Contact Name Sanitization (Defense-in-Depth)" 
                  icon={FileCode}
                  variant="success"
                >
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
                    Two layers protect your data: <strong>Validation blocks bad input</strong> + <strong>Sanitization cleans rest</strong>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-900 dark:text-green-300 text-sm sm:text-base">✅ Allowed Names</h5>
                      <CodeBlock code={'John Doe\nO\'Connor\nJosé García\nJean-Luc Picard\nMüller'} language="text" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-900 dark:text-red-300 text-sm sm:text-base">❌ Blocked/Replaced</h5>
                      <CodeBlock code={'John@Doe#123 → "John Doe"\n<script> → ""\n🚀 Emoji → " "\n#### → " "'} language="text" />
                    </div>
                  </div>

                  <CodeBlock 
                    code={`// Validation (blocks submission)
'contact_name' => [
    'required', 'min:3',
    'regex:/^[\\p{L}\\s\\-\\.\' ]+$/u'
],

// Sanitization (defense-in-depth)
if ($key === 'contact_name') {
    $value = preg_replace('/[^\\p{L}\\s\\-\\.\']+/u', ' ', $value);
    $value = preg_replace('/\\s+/', ' ', trim($value));
}`}
                    language="php"
                  />
                </StepSection>
              </section>

              <hr className="border-gray-300 dark:border-gray-600 mx-2 sm:mx-0" />

              {/* Responsive Table */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">Comparison Matrix</h2>
                
                <div className="overflow-x-auto">
                  <div className="block md:table w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl min-w-[600px] md:min-w-0">
                    <div className="block md:table-row-group">
                      <div className="block md:table-header-group bg-gradient-to-r from-emerald-500 to-green-600 text-white">
                        <div className="block md:table-row">
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell text-left">Feature</div>
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell text-left md:table-cell">Manual</div>
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell text-left md:table-cell">DB::transaction()</div>
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell text-left md:table-cell">retry() + transaction()</div>
                        </div>
                      </div>
                      <div className="block md:table-row-group">
                        <div className="md:table-row border-t dark:border-gray-700 block md:table-row">
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell md:table-cell text-left">Atomicity (All or nothing)</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-red-600">❌ Manual</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ Auto</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ Auto</div>
                        </div>
                        <div className="md:table-row border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 block md:table-row">
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell md:table-cell text-left">Deadlock Retries</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-red-600">❌ None</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ 3x (~100ms)</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ 3x (exp backoff)</div>
                        </div>
                        <div className="md:table-row border-t dark:border-gray-700 block md:table-row">
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell md:table-cell text-left">SMTP/Network Retries</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-red-600">❌ None</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-yellow-600">⚠️ No</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ Exponential</div>
                        </div>
                        <div className="md:table-row border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 block md:table-row">
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell md:table-cell text-left">Data Safety</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-red-600">⚠️ Orphan records</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ No orphans (DB only)</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">✅ Perfect (DB + Email)</div>
                        </div>
                        <div className="md:table-row border-t dark:border-gray-700 block md:table-row">
                          <div className="p-2 sm:p-3 md:p-4 font-semibold block md:table-cell md:table-cell text-left">Code Lines</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell">15+</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">5</div>
                          <div className="p-2 sm:p-3 md:p-4 block md:table-cell md:table-cell text-green-600">7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-r from-emerald-500 to-green-600 p-6 sm:p-8 text-white rounded-xl sm:rounded-2xl text-center">
                <Rocket className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-80" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Production Ready Pattern</h2>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                  Use <code>{`retry(3, fn() => DB::transaction(fn() => {...}), 100)`}</code>
                </p>
                <CodeBlock 
                  code={`// Before (error-prone)
try { ... } catch { ... }

// After (production-ready)  
retry(3, function() {
    return DB::transaction(function() {
        // All your operations here
    });
}, 100);`}
                  language="php"
                />
              </section>
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
