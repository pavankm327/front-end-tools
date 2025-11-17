import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, Layers, ShieldCheck, Database, CloudUpload, AlertTriangle, Eye, Settings, ListChecks, Terminal } from 'lucide-react';

const CommandExplanation = ({ command, explanation, visual }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{command}</code>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Explanation:</h4>
            <p className="text-gray-700 dark:text-gray-400">{explanation}</p>
          </div>
          {visual && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Visual:</h4>
              {visual}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SupabaseMigrationGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Database size={40} />
              <h1 className="text-4xl font-bold">Supabase Migration to Staging</h1>
            </div>
            <p className="text-green-100 text-lg">
              Learn how to safely migrate your Supabase schema and data from local or production to a staging environment using the CLI.
            </p>
          </div>

          <div className="p-8 space-y-8">

            {/* Step 1 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1. Initialize Supabase (if not done yet)</h2>
              </div>

              <CommandExplanation
                command="supabase init"
                explanation="This sets up a Supabase project in your local folder and creates a supabase/ directory containing migrations, functions, and seeds."
                visual={
                  <pre className="text-sm text-gray-700 font-mono">{`supabase/
├── migrations/
├── functions/
└── seed.sql`}</pre>
                }
              />
            </section>

            {/* Step 2 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2. Link Your Staging Project</h2>
              </div>

              <CommandExplanation
                command="supabase link --project-ref <staging_project_ref>"
                explanation="Connects your local Supabase CLI to your staging project. You can find your project reference ID under Project Settings → General."
                visual={
                  <div className="text-sm font-mono space-y-2 text-gray-700">
                    <pre>{`supabase link --project-ref abcd1234efgh5678ijkl`}</pre>
                    <div className="text-green-500">→ Creates a .supabase/config.json file with your linked project info.</div>
                  </div>
                }
              />
            </section>

            {/* Step 3 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">3. List All Supabase Projects</h2>
              </div>

              <CommandExplanation
                command="supabase projects list"
                explanation="Lists all your Supabase projects with their names and project_ref values, helping you identify the correct staging project before linking."
                visual={
                  <pre className="text-sm text-gray-700 font-mono">{`Projects:
  production-db (ref: prod1234abcd)
  staging-db    (ref: abcd1234efgh5678ijkl)`}</pre>
                }
              />
            </section>

            {/* Step 4 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="text-purple-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">4. Verify Which Project is Linked</h2>
              </div>

              <CommandExplanation
                command="supabase db status"
                explanation="Check the currently linked project to confirm the connection and database details before applying migrations."
                visual={
                  <pre className="text-sm text-gray-700 font-mono">{`Database status:
  Project ref: abcd1234efgh5678ijkl
  Host: db.abcxyz.supabase.co
  Database: postgres
  Status: Connected`}</pre>
                }
              />
            </section>

            {/* Step 5 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <CloudUpload className="text-emerald-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5. Apply Migrations to Staging</h2>
              </div>

              <CommandExplanation
                command="supabase db push --linked"
                explanation="Applies all pending migrations from your local supabase/migrations directory to your linked staging database safely."
                visual={
                  <pre className="text-sm text-gray-700 font-mono">{`Applying migration: 20251024120000_create_users_table.sql
Applying migration: 20251025101500_add_posts_table.sql
✅ All migrations applied successfully.`}</pre>
                }
              />
            </section>

            {/* Step 6 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <ListChecks className="text-sky-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">6. Check Migration Status</h2>
              </div>

              <CommandExplanation
                command="supabase migration list"
                explanation="Lists all migration files with their statuses — showing which ones are applied, pending, or missing on your staging environment."
                visual={
                  <pre className="text-sm text-gray-700 font-mono">{`+-----------------------------------------------+-----------+
| Migration Name                                | Status    |
+-----------------------------------------------+-----------+
| 20251024120000_create_users_table.sql         | Applied   |
| 20251025101500_add_posts_table.sql            | Applied   |
| 20251026111500_add_comments_table.sql         | Pending   |
+-----------------------------------------------+-----------+`}</pre>
                }
              />
            </section>

            {/* Step 7 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Settings className="text-yellow-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">7. Preview Before Applying (Dry Run)</h2>
              </div>

              <CommandExplanation
                command="supabase db push --dry-run"
                explanation="Preview which migrations will be applied before executing them. This ensures you can review pending changes safely."
                visual={
                  <pre className="text-sm text-gray-700 font-mono">{`Pending migrations:
  20251026111500_add_comments_table.sql

(No changes applied)`}</pre>
                }
              />
            </section>

            {/* Step 8 */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">8. Safety Tips</h2>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 text-gray-800 dark:text-gray-300 space-y-2">
                <ul className="list-disc pl-6 space-y-2">
                  <li>✅ Always confirm you’re linked to <strong>staging</strong> before running <code>db push</code>.</li>
                  <li>🧠 Keep separate configs like <code>.supabase/staging.json</code> and <code>.supabase/production.json</code>.</li>
                  <li>🚫 Never share your <strong>service_role</strong> or <strong>anon</strong> keys publicly.</li>
                  <li>🔒 Use <code>--dry-run</code> for safety checks before migrations.</li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-400">
                <li><strong>List Projects:</strong> Identify your staging project with <code>supabase projects list</code>.</li>
                <li><strong>Link:</strong> Connect CLI to staging using <code>supabase link</code>.</li>
                <li><strong>Verify:</strong> Check connection with <code>supabase db status</code>.</li>
                <li><strong>Migrate:</strong> Apply safely using <code>supabase db push --linked</code>.</li>
                <li><strong>Check:</strong> View applied and pending migrations using <code>supabase migration list</code>.</li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Tip: Always double-check your <code>project_ref</code> before running migrations — a single push to the wrong environment can overwrite schema changes.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default SupabaseMigrationGuide;
