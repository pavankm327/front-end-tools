import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, GitCommit, Code, Bug, Wrench, Database, AlertTriangle, RefreshCcw, Terminal, GitPullRequestArrow } from 'lucide-react';

const CommandExplanation = ({ command, explanation, examples, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />}
          <code className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">{command}</code>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">When to use:</h4>
            <p className="text-gray-700 dark:text-gray-300">{explanation}</p>
          </div>

          {examples && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Examples:</h4>
              <div className="font-mono text-xs space-y-2 text-green-500">
                {examples.map((example, idx) => (
                  <div key={idx}>{example}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function SyncSupabaseMigration() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Database size={40} />
              <h1 className="text-4xl font-bold">Supabase Migration Workflow</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Understanding how migrations work when multiple developers collaborate on the same Supabase project.
            </p>
          </div>

          <div className="p-8 space-y-8">

            {/* Intro */}
            <section>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  When multiple developers work on the same Supabase project, migration history can become out of sync. 
                  This guide explains common commands, when to use them, and how to solve issues like mismatched migration histories, 
                  max connection errors, and stuck pooler sessions.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Commands */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Essential Supabase Commands
              </h2>

              {/* supabase db pull */}
              <CommandExplanation
                command="supabase db pull"
                icon={GitPullRequestArrow}
                explanation="Use this when you need to download the latest schema from the remote Supabase project. 
                This is required when another developer has pushed migrations, but your local schema is outdated."
                examples={[
                  "supabase db pull",
                  "supabase db pull --linked"
                ]}
              />

              {/* supabase migrations list */}
              <CommandExplanation
                command="supabase migrations list"
                icon={Code}
                explanation="Use to compare local migration files with the remote migration history stored in the database. 
                Helpful when debugging mismatches or confirming what is applied remotely."
                examples={[
                  "supabase migrations list",
                  "supabase migrations list --linked"
                ]}
              />

              {/* supabase migration repair */}
              <CommandExplanation
                command="supabase migration repair --status applied <id>"
                icon={Wrench}
                explanation="Use when the remote database already contains a migration that does NOT exist in your local folder. 
                This often happens when another developer pushed a migration you didn’t pull yet. 
                This command marks a migration as applied locally without re-executing it."
                examples={[
                  "supabase migration repair --status applied 20251125084411",
                  "supabase migration repair --status applied 20251201093926"
                ]}
              />

              {/* supabase db push */}
              <CommandExplanation
                command="supabase db push --linked"
                icon={Terminal}
                explanation="Use this to push your local schema changes to the remote Supabase project. 
                Only works when local and remote migration histories are properly synced."
                examples={[
                  "supabase db push --linked",
                  "supabase db push"
                ]}
              />

              {/* Pause / Resume */}
              <CommandExplanation
                command="Fix by Resuming Project (Dashboard)"
                icon={RefreshCcw}
                explanation="If you see errors like max clients reached, login role initialization failing, or db_termination, 
                the Supabase project may be paused or the connection pool is stuck. 
                Pausing and then resuming the project forces the connection pool to reset."
                examples={[
                  "Open Supabase Dashboard → Project Settings → Pause",
                  "Then click Resume → retry commands"
                ]}
              />

              {/* Error handling */}
              <CommandExplanation
                command="Common Errors: MaxClients / db_termination"
                icon={AlertTriangle}
                explanation="These errors occur when the Supabase project's Postgres pooler reaches its max connections or when the project is paused. 
                Usually fixed by resuming the project or waiting for connections to reset."
                examples={[
                  "FATAL: MaxClientsInSessionMode: max clients reached",
                  "FATAL: {:shutdown, :db_termination}"
                ]}
              />

            </section>

            <section className="mt-10 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">✔ Real Scenario Summary</h2>             
                <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                    In a multi-developer setup, one team member had already pushed the migration
                    <strong> 20251125084411 </strong> to the remote database.  
                    This created a mismatch where the local migration history fell behind the remote state, 
                    leading to errors during db pull and db push operations.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                    Once the mismatch was identified, the migration history was repaired, the schema was pulled again 
                    to ensure both environments were aligned, and the latest migration <strong>20251201093926</strong> was successfully pushed afterward.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                    Pausing and resuming the Supabase project also helped resolve connection pool issues that were preventing 
                    the CLI from linking and authenticating properly.
                </p>
            </section>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};
