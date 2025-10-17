import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const LaravelQueueWorkerGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Laravel Queue Workers with Supervisor — Beginner’s & Pro Guide
          </h1>

          {/* Introduction */}
          <section>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              This guide covers setup of Laravel queue workers, Supervisor on Linux, handling jobs & Mailables, deployment strategies, monitoring, scaling, debugging, and security for reliable production workloads. Includes recommended docs for deeper learning.
            </p>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://laravel.com/docs/12.x/queues" target="_blank" rel="noopener noreferrer">Laravel Official Queues Docs</a></li>
              <li><a href="https://laravel.com/docs/12.x/mail" target="_blank" rel="noopener noreferrer">Laravel Mailables Docs</a></li>
            </ul>
          </section>

          <Separator />

          {/* Linux & Supervisor Setup */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🖥️ Linux & Supervisor Setup</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Install Supervisor (Ubuntu/Debian):
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`sudo apt update
sudo apt install supervisor -y`}</code>
                </pre>
              </li>
              <li>
                Check Supervisor version:
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`supervisord -v`}</code>
                </pre>
              </li>
              <li>
                Supervisor configs directory: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">/etc/supervisor/conf.d/</code>
              </li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="http://supervisord.org/" target="_blank" rel="noopener noreferrer">Supervisor: Official Documentation</a></li>
              <li><a href="https://serversforhackers.com/c/process-monitoring-with-supervisord" target="_blank" rel="noopener noreferrer">Servers for Hackers: Supervisor Guide</a></li>
            </ul>
          </section>

          <Separator />

          {/* Supervisor Config for Laravel Worker */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">⚙️ Supervisor Config for Laravel Worker</h2>
            <p className="text-gray-700 dark:text-gray-300 overflow-auto mb-2">
              Create a config file at <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">/etc/supervisor/conf.d/laravel-worker.conf</code>:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work --sleep=3 --tries=3 --max-time=3600 --timeout=120
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
stopwaitsecs=360
numprocs=3
user=www-data
redirect_stderr=true
stdout_logfile=/var/www/html/storage/logs/worker.log`}</code>
            </pre>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              <b>Explanation:</b>
            </p>
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 dark:text-gray-300">
              <li><code>--sleep=3</code>: Waits 3s if no job is found.</li>
              <li><code>--tries=3</code>: Retries failed jobs 3 times.</li>
              <li><code>--max-time=3600</code>: Restarts worker every hour (prevents memory leaks).</li>
              <li><code>--timeout=120</code>: Kills jobs taking longer than 2 minutes.</li>
              <li><code>numprocs=3</code>: Runs 3 concurrent worker processes.</li>
              <li><code>stopwaitsecs=360</code>: Waits 6 minutes for graceful shutdown.</li>
              <li>Logs stored in <code>storage/logs/worker.log</code></li>
            </ul>
          </section>

          <Separator />

          {/* Starting Supervisor & Workers */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🚀 Start Supervisor & Workers</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Reload Supervisor config:
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`sudo supervisorctl reread
sudo supervisorctl update`}</code>
                </pre>
              </li>
              <li>
                Start all Laravel workers:
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`sudo supervisorctl start laravel-worker:*`}</code>
                </pre>
              </li>
              <li>
                Check running workers:
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`sudo supervisorctl status

# Example output:
laravel-worker:laravel-worker_00   RUNNING   pid 1234, uptime 2:15:32
laravel-worker:laravel-worker_01   RUNNING   pid 1235, uptime 2:15:32
laravel-worker:laravel-worker_02   RUNNING   pid 1236, uptime 2:15:32`}</code>
                </pre>
              </li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://angrydeveloper.medium.com/laravel-queue-linux-supervisor-ed5e6214e918" target="_blank" rel="noopener noreferrer">Medium: Supervisor & Queue Workers</a></li>
            </ul>
          </section>

          <Separator />

          {/* Monitoring & Debugging */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🔎 Monitoring & Debugging</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Monitor log files (including <code>worker.log</code>) for errors and exceptions.</li>
              <li>Leverage <code>php artisan queue:failed</code> and <code>queue:retry</code> for failed jobs.</li>
              <li>Use Laravel Telescope for visibility into queued jobs and runtime status.</li>
              <li>Integrate with external tools (like Sentry, Bugsnag) for alerts on queue failures.</li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://laravel.com/docs/12.x/telescope" target="_blank" rel="noopener noreferrer">Laravel Telescope: Queue Monitoring</a></li>
              <li><a href="https://laravel.com/docs/12.x/queues#dealing-with-failed-jobs" target="_blank" rel="noopener noreferrer">Handling Failed Jobs</a></li>
            </ul>
          </section>

          <Separator />

          {/* Laravel Jobs & Mailables */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">📧 Laravel Jobs & Mailables</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Create a job: <code>php artisan make:job SendWelcomeEmail</code></li>
              <li>Create a Mailable: <code>php artisan make:mail WelcomeEmail</code></li>
              <li>Dispatch a job to the queue:
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`SendWelcomeEmail::dispatch($user);`}</code>
                </pre>
              </li>
              <li>Queued jobs are automatically picked up by running workers.</li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://laravel.com/docs/12.x/queues#creating-jobs" target="_blank" rel="noopener noreferrer">Laravel Docs: Jobs</a></li>
              <li><a href="https://laravel.com/docs/12.x/mail#generating-mailables" target="_blank" rel="noopener noreferrer">Creating Mailables</a></li>
            </ul>
          </section>

          <Separator />

          {/* Scaling & Security */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">⚡ Scaling & Security Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Use multiple workers and niche queues for workloads isolation: eg. <code>queue:work --queue=high,default,emails</code></li>
              <li>Fine-tune <code>max-time</code> and <code>timeout</code> to match production needs.</li>
              <li>Restrict worker UNIX user to minimal privileges—never run as root!</li>
              <li>Rotate and protect <code>worker.log</code> using logrotate policies.</li>
              <li>Always keep your .env credentials, secrets, and keys safe.</li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://laravel.com/docs/12.x/queues#running-the-queue-worker" target="_blank" rel="noopener noreferrer">Laravel Docs: Queue Workers</a></li>
              <li><a href="https://github.com/laravel/horizon" target="_blank" rel="noopener noreferrer">Laravel Horizon (for Redis-based queue scaling)</a></li>
            </ul>
          </section>

          <Separator />

          {/* Deployment & Cache Clearing */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🔄 Deployment & Cache Clearing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              After deploying code (jobs, mailables, or config), clear caches and restart workers:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`php artisan optimize:clear
php artisan queue:restart`}</code>
            </pre>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              This ensures new code is picked up and jobs continue processing without interruption.
            </p>
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 dark:text-gray-300">
              <li>Zero downtime on deployments.</li>
              <li>All caches (config, routes, views) cleared.</li>
              <li>Workers restart gracefully.</li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://laravel.com/docs/12.x/deployment" target="_blank" rel="noopener noreferrer">Laravel Deployment Best Practices</a></li>
            </ul>
          </section>

          <Separator />

          {/* Scenarios & Best Practices */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🧠 Scenarios & Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><b>Added a Mail class:</b> Clear cache & restart workers</li>
              <li><b>Minor code change:</b> Restart workers only</li>
              <li><b>Long-running jobs:</b> Increase <code>--timeout</code> or manage with batch jobs</li>
              <li><b>Multiple queues:</b> Use separate Supervisor configs for isolation</li>
              <li><b>Deployment:</b> Always use <code>queue:restart</code> for zero downtime</li>
            </ul>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li><a href="https://freek.dev/2846-devops-with-laravel-queues-and-workers-in-production" target="_blank" rel="noopener noreferrer">DevOps With Laravel: Queues and Workers in Production</a></li>
            </ul>
          </section>

          <Separator />

          {/* Result & Summary */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">✅ Result</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Queue workers run 24/7 on your server, scaling as needed.</li>
              <li>Emails, notifications, jobs processed reliably via background workers.</li>
              <li>Supervisor restarts crashed or stuck workers.</li>
              <li>Safe deployments with zero queue downtime.</li>
              <li>Easy debugging with fail/retry commands and monitoring tools.</li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LaravelQueueWorkerGuide;
