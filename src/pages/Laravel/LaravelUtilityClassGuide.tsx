import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const LaravelUtilityClassGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Laravel Utility Classes — Autoloading & Best Practices
          </h1>

          {/* Introduction */}
          <section>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              Laravel automatically supports <b>PSR-4 autoloading</b> for classes under the
              <code className="bg-gray-200 dark:bg-gray-700 px-1 mx-1 rounded">app/</code> folder.
              This guide explains how to properly structure and autoload utility classes — whether
              they’re in <code>app/Helpers</code> or a custom folder.
            </p>
            <ul className="ml-6 text-sm text-blue-700 dark:text-blue-400">
              <li>
                <a
                  href="https://laravel.com/docs/12.x/packages#autoloading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laravel Docs: Autoloading & Namespaces
                </a>
              </li>
              <li>
                <a
                  href="https://www.php-fig.org/psr/psr-4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PSR-4: Autoloading Standard
                </a>
              </li>
            </ul>
          </section>

          <Separator />

          {/* Default App Helpers */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🧩 Using Utility Classes Inside <code>app/</code>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The simplest and recommended approach is to create your helper or utility classes
              inside the <code>app/Helpers</code> folder. Laravel automatically loads them.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`app/
└── Helpers/
    └── StringHelper.php`}</code>
            </pre>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`<?php
namespace App\\Helpers;

class StringHelper {
    public static function capitalize(string $text): string {
        return ucfirst(strtolower($text));
    }
}`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              You can now use it anywhere:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`use App\\Helpers\\StringHelper;

$name = StringHelper::capitalize('jOhN'); // Output: John`}</code>
            </pre>
          </section>

          <Separator />

          {/* Custom Utility Folders */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              ⚙️ Utility Classes Outside <code>app/</code>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you prefer placing reusable utilities in a separate folder like
              <code className="bg-gray-100 dark:bg-gray-700 px-1 mx-1 rounded">utilities/</code>,
              you’ll need to register the namespace in your{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">composer.json</code>.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`"autoload": {
    "psr-4": {
        "App\\\\": "app/",
        "Utilities\\\\": "utilities/"
    }
}`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Then, run the following command to regenerate the autoloader:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`composer dump-autoload`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Now Laravel will recognize your utility classes automatically:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`use Utilities\\FileHelper;

FileHelper::save('example.txt', 'Hello World');`}</code>
            </pre>
          </section>

          <Separator />

          {/* Global Helper Files */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🌍 Global Helper Files (Non-Class)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have plain PHP helper functions instead of classes, you can autoload them using
              the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">files</code> key in
              composer.json.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`"autoload": {
    "files": [
        "app/Helpers/helpers.php"
    ]
}`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Then define functions inside <code>helpers.php</code>:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`<?php

function greet_user(string $name): string {
    return "Hello, " . ucfirst($name);
}`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Finally, regenerate the autoloader:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`composer dump-autoload`}</code>
            </pre>
          </section>

          <Separator />

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🧠 Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Always use proper namespacing and PSR-4 conventions (e.g.,
                <code>App\\Helpers\\MyUtility</code>).
              </li>
              <li>Keep helper classes stateless and reusable.</li>
              <li>Group similar helpers (StringHelper, FileHelper, ArrayHelper, etc.).</li>
              <li>
                Avoid putting logic-heavy code in helpers; prefer Laravel Services or Actions.
              </li>
              <li>Run <code>composer dump-autoload</code> after any new class creation.</li>
            </ul>
          </section>

          <Separator />

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">✅ Summary</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>No composer edits needed for classes under <code>app/</code>.</li>
              <li>
                Register namespaces in <code>composer.json</code> if outside <code>app/</code>.
              </li>
              <li>Use <code>"files"</code> autoload for global helper functions.</li>
              <li>Follow PSR-4 standards for autoloading consistency.</li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LaravelUtilityClassGuide;
