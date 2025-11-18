
import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, GitCommit, Code, Bug, Wrench, Package, Zap, BookOpen, Palette, TestTube, Settings, Hammer, RotateCcw } from 'lucide-react';

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
              <div className="font-mono text-xs space-y-2">
                {examples.map((example, idx) => (
                  <div key={idx} className="text-green-500">
                    git commit -m "{example}"
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function CommitType() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <GitCommit size={40} />
              <h1 className="text-4xl font-bold">Git Commit Type Convention</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Master conventional commits for cleaner, more organized project history
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  Using consistent commit types helps teams understand changes at a glance, automate changelogs, 
                  and maintain a clean project history. Each type serves a specific purpose in documenting your work.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Commit Types */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Commit Types</h2>
              
              <CommandExplanation
                command="feat"
                icon={Code}
                explanation="Use when adding a new feature or enhancing existing functionality. This represents new capabilities for users."
                examples={[
                  "feat: add user login page",
                  "feat: implement excel import functionality",
                  "feat: add student attendance module",
                  "feat: integrate payment gateway"
                ]}
              />

              <CommandExplanation
                command="fix"
                icon={Bug}
                explanation="Use when fixing a bug, error, or incorrect behavior. This resolves issues that prevent the software from working as intended."
                examples={[
                  "fix: resolve crash on dashboard load",
                  "fix: incorrect total count in Reports",
                  "fix: student list pagination mismatch",
                  "fix: memory leak in data processing"
                ]}
              />

              <CommandExplanation
                command="refactor"
                icon={Wrench}
                explanation="Use when improving code quality without changing behavior — no new features, no bug fixes. This makes code cleaner, more maintainable, or more efficient."
                examples={[
                  "refactor: clean up AdminSidebar key handling",
                  "refactor: optimize API services",
                  "refactor: separate hooks into useStudent and useStaff",
                  "refactor: extract reusable validation logic"
                ]}
              />

              <CommandExplanation
                command="chore"
                icon={Package}
                explanation="Use when making maintenance tasks or non-feature changes like dependencies, config updates, folder restructure, or cleanup. These don't affect the application's functionality."
                examples={[
                  "chore: update dependencies and remove unused files",
                  "chore: rename student.tsx to Student.tsx",
                  "chore: update .gitignore",
                  "chore: configure eslint rules"
                ]}
              />

              <CommandExplanation
                command="perf"
                icon={Zap}
                explanation="Use for performance improvements that make code or UI faster. This type highlights optimizations that improve speed or resource usage."
                examples={[
                  "perf: improve table rendering speed",
                  "perf: optimize Firestore query for reporters",
                  "perf: reduce bundle size by splitting routes",
                  "perf: implement lazy loading for images"
                ]}
              />

              <CommandExplanation
                command="docs"
                icon={BookOpen}
                explanation="Use when updating documentation, README, comments, or API docs. This includes any changes to project documentation."
                examples={[
                  "docs: update API usage examples",
                  "docs: add installation steps",
                  "docs: explain admin roles workflow",
                  "docs: add contributing guidelines"
                ]}
              />

              <CommandExplanation
                command="style"
                icon={Palette}
                explanation="Use for formatting and stylistic changes — no logic changes. This includes whitespace, formatting, missing semicolons, etc."
                examples={[
                  "style: format AdminDashboard using Prettier",
                  "style: fix indentation in config files",
                  "style: remove unused imports",
                  "style: apply consistent naming conventions"
                ]}
              />

              <CommandExplanation
                command="test"
                icon={TestTube}
                explanation="Use when adding or updating tests. This includes unit tests, integration tests, or any test-related code."
                examples={[
                  "test: add tests for login validation",
                  "test: increase coverage on user API",
                  "test: add e2e tests for checkout flow",
                  "test: update snapshot tests"
                ]}
              />

              <CommandExplanation
                command="ci"
                icon={Settings}
                explanation="Use when updating CI/CD pipelines such as GitHub Actions, Jenkins, Docker build pipelines, etc. This affects automated build and deployment processes."
                examples={[
                  "ci: fix GitHub Actions failing test workflow",
                  "ci: add build cache for dependencies",
                  "ci: configure automated deployment",
                  "ci: update Docker build configuration"
                ]}
              />

              <CommandExplanation
                command="build"
                icon={Hammer}
                explanation="Use for build system related changes — bundlers, npm packages, env setup, build script updates. This affects how the project is built or compiled."
                examples={[
                  "build: update Vite config for production",
                  "build: upgrade React version to 18.3",
                  "build: configure webpack optimization",
                  "build: add environment variables setup"
                ]}
              />

              <CommandExplanation
                command="revert"
                icon={RotateCcw}
                explanation="Use when undoing a previous commit. This explicitly marks that you're rolling back changes."
                examples={[
                  "revert: revert feat: add payment gateway",
                  "revert: undo previous refactor of auth logic",
                  "revert: rollback database migration",
                  'revert: revert "fix: user session timeout"'
                ]}
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Best Practices */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">✓ DO</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Use lowercase for type</li>
                    <li>• Keep messages concise and clear</li>
                    <li>• Use present tense ("add" not "added")</li>
                    <li>• Be specific about what changed</li>
                    <li>• Group related changes in one commit</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">✗ DON'T</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Mix multiple types in one commit</li>
                    <li>• Use vague messages ("fix stuff")</li>
                    <li>• Write overly long messages</li>
                    <li>• Include unrelated changes</li>
                    <li>• Forget the colon after type</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Format Structure</h3>
                  <div className="text-sm space-y-2 text-gray-700 dark:text-gray-300 font-mono">
                    <div className="text-green-500">&lt;type&gt;: &lt;description&gt;</div>
                    <div className="text-gray-500 text-xs">Example: feat: add user profile page</div>
                    <div className="text-yellow-500 mt-2">&lt;type&gt;(&lt;scope&gt;): &lt;description&gt;</div>
                    <div className="text-gray-500 text-xs">Example: fix(auth): resolve token expiry</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Common Scopes</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• auth (authentication)</li>
                    <li>• api (backend endpoints)</li>
                    <li>• ui (user interface)</li>
                    <li>• db (database)</li>
                    <li>• deps (dependencies)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Pro tip: Consistent commit messages make code reviews easier and changelogs automatic!
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}