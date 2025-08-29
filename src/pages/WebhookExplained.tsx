import React from "react";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ScrollToTop";

const WebhookExplained = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold mb-2 select-none">🔔 Webhooks – Explained</h1>
          <p className="text-lg opacity-90 select-none">A guide to event-driven automation</p>
          {/* Definition */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-4">Definition</h2>
            <div className="bg-indigo-100 p-6 rounded-xl leading-relaxed select-text text-indigo-900">
              <p><strong>Webhook:</strong> A way for one application to send real-time data to another application whenever a specific event occurs.</p>
              <p className="mt-2">Instead of the client polling the server repeatedly (<em>“Do you have new data?”</em>), the server pushes the data automatically to a callback URL you provide.</p>
              <p className="mt-2"><strong>Reverse API call:</strong> With REST APIs, the client asks the server. With webhooks, the server proactively tells the client!</p>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-4 text-center">🏛️ Webhook Architecture</h2>

            {/* Diagram */}
            <div className="flex justify-center pb-6">
              <svg
                width="100%"
                height="160"
                viewBox="0 0 700 160"
                className="max-w-xl w-full h-auto"
                role="img"
                aria-label="Webhook architecture diagram"
                style={{ minWidth: 320 }}
              >
                {/* Provider node */}
                <rect x="35" y="35" rx="20" width="180" height="70" fill="#7266e4" />
                <text x="125" y="78" fontSize="32" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Inter,Segoe UI,sans-serif">
                  Provider
                </text>
                <text x="125" y="120" fontSize="17" fill="#334155" textAnchor="middle" fontFamily="Inter,Segoe UI,sans-serif">
                  e.g. Stripe, GitHub, Razorpay
                </text>
                {/* Consumer node */}
                <rect x="475" y="35" rx="20" width="190" height="70" fill="#b197fa" />
                <text x="570" y="78" fontSize="32" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Inter,Segoe UI,sans-serif">
                  Consumer
                </text>
                <text x="570" y="120" fontSize="17" fill="#334155" textAnchor="middle" fontFamily="Inter,Segoe UI,sans-serif">
                  yourapp.com/webhook
                </text>
                {/* Circles */}
                <circle cx="235" cy="70" r="16" fill="#f59e42" />
                <circle cx="455" cy="70" r="16" fill="#f59e42" />
                {/* Arrow with POST label */}
                <defs>
                  <marker id="arrowhead" markerWidth="15" markerHeight="15" refX="12" refY="5" orient="auto">
                    <polygon points="0 0, 15 5, 0 10" fill="#353469" />
                  </marker>
                </defs>
                <line
                  x1="251"
                  y1="70"
                  x2="438"
                  y2="70"
                  stroke="#353469"
                  strokeWidth="4"
                  markerEnd="url(#arrowhead)"
                />
                <text x="315" y="58" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#363393" fontFamily="Inter,Segoe UI,sans-serif">
                  Webhook POST
                </text>
              </svg>
            </div>

            {/* Explanations below diagram */}
            <div className="max-w-3xl mx-auto text-lg text-gray-800 space-y-7">
              <div>
                <h3 className="text-indigo-700 font-semibold text-xl mb-1">1. Event Source (Provider / Sender)</h3>
                <p>
                  <span className="font-medium">Definition:</span> The application where the event originates and that sends out webhook notifications.
                  <br />
                  <span className="font-medium">Examples:</span> <span className="italic">GitHub</span> (new commit), <span className="italic">Razorpay</span> (payment success), <span className="italic">Stripe</span>.
                </p>
              </div>

              <div>
                <h3 className="text-indigo-700 font-semibold text-xl mb-1">2. Webhook URL (Consumer / Listener)</h3>
                <p>
                  <span className="font-medium">Definition:</span> An HTTP endpoint (normally a POST route) in your server that receives event notifications.
                  <br />
                  <span className="font-medium">Example:</span> <code className="bg-slate-100 px-1 rounded">https://myapp.com/webhooks/payment</code>
                </p>
              </div>

              <div>
                <h3 className="text-indigo-700 font-semibold text-xl mb-1">3. Trigger Event</h3>
                <p>
                  <span className="font-medium">Definition:</span> An action in the provider system that activates the webhook.
                  <br />
                  <span className="font-medium">Examples:</span> Payment captured, order created, source code pushed, new message posted.
                </p>
              </div>

              <div>
                <h3 className="text-indigo-700 font-semibold text-xl mb-1">4. Payload Delivery</h3>
                <p>
                  <span className="font-medium">Definition:</span> The provider sends event data as an HTTP POST request (commonly JSON, sometimes XML or form data).
                  <br />
                  <span className="font-medium">Usage:</span> Your app processes this data and updates its system (like storing payment records or firing business logic).
                </p>
              </div>

              <div>
                <h3 className="text-indigo-700 font-semibold text-xl mb-1">5. Acknowledgement (Response)</h3>
                <p>
                  <span className="font-medium">Requirement:</span> Your webhook endpoint should return a <span className="bg-slate-100 px-1 rounded font-mono text-gray-700">200 OK</span> (or appropriate HTTP status) to confirm receipt.
                  <br />
                  <span className="font-medium">Note:</span> Most providers will retry delivery if they do not receive a successful status.
                </p>
              </div>
            </div>
          </section>

          {/* Example Flow */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-4">🔄 Example Flow: Payment Webhook</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Customer makes a payment</li>
              <li>Provider (e.g., Razorpay) marks payment as successful</li>
              <li>Razorpay sends HTTP POST request to your webhook endpoint</li>
            </ol>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 mt-6 overflow-auto font-mono">
{`POST https://yourapp.com/webhook/payment
Content-Type: application/json

{
  "event": "payment_success",
  "payload": {
    "payment_id": "pay_29QQoUBi66xm2f",
    "amount": 50000,
    "currency": "INR",
    "status": "captured"
  }
}`}
            </pre>
            <p className="mt-3 text-indigo-700 font-semibold">Your server receives and processes this payload without needing to poll – efficient and real-time!</p>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-6">📌 Webhooks vs. APIs: Key Differences</h2>
            <table className="w-full border-collapse text-left shadow-md rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white font-semibold text-lg">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">Webhooks (Push)</th>
                  <th className="p-4">APIs (Pull)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-indigo-50">
                  <td className="p-4 font-medium">Direction</td>
                  <td className="p-4">Server → Client (automatic)</td>
                  <td className="p-4">Client → Server (on request)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Communication</td>
                  <td className="p-4">Real-time push</td>
                  <td className="p-4">Request-response</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-4 font-medium">Use Case</td>
                  <td className="p-4">Event notifications (payments, alerts)</td>
                  <td className="p-4">Fetching or updating data anytime</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Setup</td>
                  <td className="p-4">Requires public webhook endpoint</td>
                  <td className="p-4">Requires API key & manual request</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-4 font-medium">Example</td>
                  <td className="p-4">Payment success alert is pushed</td>
                  <td className="p-4">App fetches user profile</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-6">✅ Webhook Use Cases</h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-indigo-900">
              <li><strong>Payment Gateways:</strong> Notify your system on successful payments (Razorpay, Stripe, PayPal).</li>
              <li><strong>CI/CD Systems:</strong> Trigger builds and deployments on code push (GitHub, GitLab).</li>
              <li><strong>Messaging Apps:</strong> Slack/Discord send events to your bot endpoints.</li>
              <li><strong>E-commerce:</strong> Notify ERP systems when orders are placed.</li>
              <li><strong>Monitoring & Alerts:</strong> Send automatic incident alerts (Datadog, New Relic).</li>
            </ul>
          </section>

          {/* Security Best Practices */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-6">🛡️ Webhook Security Best Practices</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li><strong>Secret Tokens / Signatures:</strong> Verify payloads with HMAC signatures (Stripe, Razorpay).</li>
              <li><strong>HTTPS Only:</strong> Secure your webhook endpoints with TLS.</li>
              <li><strong>Rate Limiting:</strong> Prevent abuse and DoS attacks.</li>
              <li><strong>Retries & Idempotency:</strong> Handle duplicate deliveries safely.</li>
            </ul>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 mt-4 font-mono overflow-auto">
{`$signature = hash_hmac('sha256', $payload, $secret);
if ($signature !== $_SERVER['HTTP_X_SIGNATURE']) {
    http_response_code(400);
    exit("Invalid signature");
}`}
            </pre>
          </section>

          {/* Advantages & Challenges */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-6">🚩 Advantages and Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg shadow-inner">
                <h3 className="font-semibold text-xl mb-3 text-green-800">Advantages</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time event updates with minimal delay</li>
                  <li>Lightweight - triggered only on events</li>
                  <li>Excellent for automation and microservices</li>
                </ul>
              </div>
              <div className="bg-red-100 p-6 rounded-lg shadow-inner">
                <h3 className="font-semibold text-xl mb-3 text-red-800">Challenges</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Delivery may fail if client/server is down (providers usually retry)</li>
                  <li>Debugging asynchronous event flows can be tricky</li>
                  <li>Security of exposed endpoints must be carefully handled</li>
                  <li>Event ordering is not always guaranteed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Laravel Example */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-6">💻 Example: Webhook Endpoint in Laravel</h2>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono overflow-auto">
{`// routes/web.php
use App\\Http\\Controllers\\WebhookController;
Route::post('/webhook/payment', [WebhookController::class, 'handle']);

// app/Http/Controllers/WebhookController.php
namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class WebhookController extends Controller
{
    public function handle(Request $request)
    {
        $data = $request->all();

        if ($data['event'] === 'payment_success') {
            // Update order/payment status in DB
        }

        return response()->json(['status' => 'ok']);
    }
}`}
            </pre>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-indigo-700 text-3xl font-semibold mb-4">🚀 Summary</h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-indigo-900">
              <li><strong>Webhooks</strong> push event-driven, real-time notifications from server to client.</li>
              <li>Commonly used for payments, alerts, deployments, and notifications.</li>
              <li>Security is crucial: use signatures, HTTPS, rate-limiting, and idempotency.</li>
              <li>Think of webhooks as <em>"let the server tell me what happens exactly when it happens."</em></li>
            </ul>    
          </section>
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default WebhookExplained;
