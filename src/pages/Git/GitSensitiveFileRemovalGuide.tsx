import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitSensitiveFileRemovalGuide = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">🔐 Removing Sensitive Files from Git History</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Complete guide to permanently remove .env files and other sensitive data from your repository
            </p>
         </div>
         <div className="p-8 space-y-8">         
            {/* Critical Warning */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                ⚠️ CRITICAL: Change All Secrets Immediately!
              </h3>
              <p className="text-red-700 dark:text-red-300 mb-3">
                Even after removing the file from Git history, the secrets were exposed. You must rotate:
              </p>
              <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 ml-4">
                <li><strong>Database passwords</strong> - Change in production and .env</li>
                <li><strong>APP_KEY</strong> - Run: <code className="bg-red-200 dark:bg-red-800 px-2 py-0.5 rounded">php artisan key:generate</code></li>
                <li><strong>API keys</strong> - Regenerate all third-party API keys</li>
                <li><strong>OAuth secrets</strong> - Rotate all OAuth credentials</li>
                <li><strong>Any other credentials</strong> in the exposed file</li>
              </ul>
            </div>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Why This Happened */}
            <section>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                🤔 Why Did This Happen?
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  You accidentally committed <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">.env.production</code> to your Git repository. 
                  This file contains sensitive credentials and should <strong>never</strong> be tracked by Git.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Common causes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Using <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git add .</code> or <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git commit -am</code> without checking staged files</li>
                  <li>The file wasn't in <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">.gitignore</code> at the time of commit</li>
                  <li>Not running <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git status</code> before committing</li>
                </ul>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Your Situation */}
            <section>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                📍 Your Current Setup
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Branches:</p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
                      <li><code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">dev</code> (current)</li>
                      <li><code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">master</code></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Remote:</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm break-all">
                      Bitbucket: <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">username/repo</code>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Method 1: filter-branch */}
            <section>
              <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
                ✅ Method 1: Using git filter-branch (Recommended for Windows)
              </h2>
              
              <div className="space-y-6">
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    Step 1: Remove from All History
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    This command removes <code className="bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded">.env.production</code> from every commit in your repository:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                    <code>git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env.production" --prune-empty --tag-name-filter cat -- --all</code>
                  </pre>
                  <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>What this does:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><code>--force</code>: Overwrite backup refs if they exist</li>
                      <li><code>--index-filter</code>: Fast method that only modifies the Git index</li>
                      <li><code>git rm --cached --ignore-unmatch</code>: Remove file from index, ignore if not found</li>
                      <li><code>--prune-empty</code>: Remove commits that become empty after filtering</li>
                      <li><code>-- --all</code>: Apply to all branches and tags</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    Step 2: Clean Up References
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Remove backup references and garbage collect:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto space-y-2">
                    <code className="block">git reflog expire --expire=now --all</code>
                    <code className="block">git gc --prune=now --aggressive</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    Step 3: Force Push Both Branches
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Push the cleaned history to Bitbucket:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto space-y-2">
                    <code className="block"># Push dev branch (current)</code>
                    <code className="block">git push origin dev --force</code>
                    <code className="block"></code>
                    <code className="block"># Switch to master and push</code>
                    <code className="block">git checkout master</code>
                    <code className="block">git push origin master --force</code>
                    <code className="block"></code>
                    <code className="block"># Switch back to dev</code>
                    <code className="block">git checkout dev</code>
                  </pre>
                  <div className="mt-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-3 rounded">
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                      ⚠️ <strong>Warning:</strong> <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">--force</code> rewrites history. 
                      Only use this on branches you own or coordinate with your team first.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    Step 4: Add to .gitignore
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Prevent this from happening again:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto space-y-2">
                    <code className="block">Add-Content .gitignore "`n.env.production"</code>
                    <code className="block">git add .gitignore</code>
                    <code className="block">git commit -m "Add .env.production to gitignore"</code>
                    <code className="block">git push origin dev</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    Step 5: Verify Removal
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Confirm the file is completely removed from history:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                    <code>git log --all --full-history -- .env.production</code>
                  </pre>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    ✅ <strong>Success:</strong> This should return nothing if the file was successfully removed.
                  </p>
                </div>

              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Method 2: git-filter-repo */}
            <section>
              <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                🚀 Method 2: Using git-filter-repo (If Available)
              </h2>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <code className="bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded">git-filter-repo</code> is faster and safer than filter-branch, 
                  but requires additional setup on Windows.
                </p>
                
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mt-4">
                  Installation:
                </h3>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                  <code>pip install git-filter-repo</code>
                </pre>
                
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mt-4">
                  Usage:
                </h3>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto space-y-2">
                  <code className="block"># Remove the file</code>
                  <code className="block">git filter-repo --path .env.production --invert-paths --force</code>
                  <code className="block"></code>
                  <code className="block"># Re-add remote (filter-repo removes it for safety)</code>
                  <code className="block">git remote add origin https://username@bitbucket.org/username/repo.git</code>
                  <code className="block"></code>
                  <code className="block"># Force push</code>
                  <code className="block">git push origin --force --all</code>
                </pre>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-3 rounded mt-4">
                  <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                    💡 <strong>Note:</strong> If you get "git: 'filter-repo' is not a git command", use Method 1 (filter-branch) instead.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Team Coordination */}
            <section>
              <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-4">
                👥 Team Coordination (If Others Have Cloned)
              </h2>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg space-y-4">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  After force-pushing, all team members must update their local repositories:
                </p>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">
                    For Team Members:
                  </h3>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto space-y-2">
                    <code className="block"># Backup any local work first!</code>
                    <code className="block">git stash</code>
                    <code className="block"></code>
                    <code className="block"># Fetch and reset to match remote</code>
                    <code className="block">git fetch origin</code>
                    <code className="block">git reset --hard origin/dev  # or origin/master</code>
                    <code className="block"></code>
                    <code className="block"># Restore local work</code>
                    <code className="block">git stash pop</code>
                  </pre>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-3 rounded">
                  <p className="text-red-800 dark:text-red-300 text-sm">
                    ⚠️ <strong>Warning:</strong> Communicate with your team before force-pushing. 
                    Rewriting shared history can cause issues for others working on the same branches.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Quick Reference Table */}
            <section>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                📊 Quick Reference
              </h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-200 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Command</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">When to Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">filter-branch</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Remove file from history</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Built-in, works everywhere</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">filter-repo</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Modern alternative</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Faster, requires installation</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">--force</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Overwrite remote history</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">After rewriting local history</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">reflog expire</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Clear local references</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">After filter operations</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">gc --aggressive</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Garbage collect old data</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Shrink repo size after cleanup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Prevention Tips */}
            <section>
              <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
                🛡️ Prevention: Never Let This Happen Again
              </h2>
              
              <div className="space-y-4">
                
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    1. Proper .gitignore Setup
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Add these patterns to your <code className="bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded">.gitignore</code>:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                    <code>{`# Environment files
.env
.env.*
.env.local
.env.production
.env.staging

# Laravel specific
/vendor/
/node_modules/
/storage/*.key
.phpunit.result.cache`}</code>
                  </pre>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    2. Always Check Before Committing
                  </h3>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto space-y-2">
                    <code className="block"># Check what will be committed</code>
                    <code className="block">git status</code>
                    <code className="block"></code>
                    <code className="block"># Review changes</code>
                    <code className="block">git diff --staged</code>
                    <code className="block"></code>
                    <code className="block"># Only then commit</code>
                    <code className="block">git commit -m "Your message"</code>
                  </pre>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    3. Use Pre-commit Hooks
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Install a pre-commit hook to block sensitive files:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                    <code>composer require --dev brainmaestro/composer-git-hooks</code>
                  </pre>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                    4. Avoid Dangerous Commands
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-green-300 dark:border-green-700 rounded-lg overflow-hidden">
                      <thead className="bg-green-200 dark:bg-green-800">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold">❌ Avoid</th>
                          <th className="px-4 py-2 text-left font-semibold">✅ Use Instead</th>
                          <th className="px-4 py-2 text-left font-semibold">Why</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-green-200 dark:divide-green-700">
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="px-4 py-2 font-mono text-sm">git add .</td>
                          <td className="px-4 py-2 font-mono text-sm">git add file1 file2</td>
                          <td className="px-4 py-2 text-sm">Selective staging</td>
                        </tr>
                        <tr className="bg-green-50 dark:bg-green-900/30">
                          <td className="px-4 py-2 font-mono text-sm">git commit -am</td>
                          <td className="px-4 py-2 font-mono text-sm">git add; git commit -m</td>
                          <td className="px-4 py-2 text-sm">Review before commit</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="px-4 py-2 font-mono text-sm">git push --force</td>
                          <td className="px-4 py-2 font-mono text-sm">git push --force-with-lease</td>
                          <td className="px-4 py-2 text-sm">Safer force push</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Troubleshooting */}
            <section>
              <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-4">
                🔧 Troubleshooting
              </h2>
              
              <div className="space-y-4">
                
                <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ❓ "Cannot rewrite branch(es) with a dirty index"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You have uncommitted changes. Fix with:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-x-auto">
                    <code>git stash</code>
                  </pre>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ❓ "Updates were rejected because the tip of your current branch is behind"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    This is expected. Use force push:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-x-auto">
                    <code>git push origin dev --force</code>
                  </pre>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ❓ File still appears in git log
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You may be looking at local refs. Clean them:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-x-auto space-y-1">
                    <code className="block">git reflog expire --expire=now --all</code>
                    <code className="block">git gc --prune=now --aggressive</code>
                  </pre>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ❓ "Repository size hasn't decreased"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Git keeps backups. Force cleanup with:
                  </p>
                  <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-x-auto space-y-1">
                    <code className="block">rm -rf .git/refs/original/</code>
                    <code className="block">git reflog expire --expire=now --all</code>
                    <code className="block">git gc --prune=now --aggressive</code>
                  </pre>
                </div>

              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Final Checklist */}
            <section>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                ✅ Final Checklist
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Ran <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">git filter-branch</code> or <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">git filter-repo</code> to remove file
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Cleaned up references with <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">reflog expire</code> and <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">gc</code>
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Force pushed both <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">dev</code> and <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">master</code> branches
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Added <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">.env.production</code> to <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">.gitignore</code>
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Verified file is gone with <code className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded">git log --all --full-history</code>
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300 font-bold text-red-600 dark:text-red-400">
                      🔐 ROTATED ALL CREDENTIALS (database passwords, APP_KEY, API keys)
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Notified team members to reset their local repositories
                    </span>
                  </label>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                📚 Additional Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                    Official Documentation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Git filter-branch manual</li>
                    <li>• Git filter-repo GitHub</li>
                    <li>• Pro Git Book - Rewriting History</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                    Security Best Practices
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Use environment variable management tools</li>
                    <li>• Implement secret scanning in CI/CD</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                    Laravel Security
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Use Laravel Forge/Vapor for deployments</li>
                    <li>• Environment encryption with <code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">php artisan env:encrypt</code></li>
                    <li>• Key rotation strategies</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                    Prevention Tools
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• git-secrets (AWS)</li>
                    <li>• detect-secrets (Yelp)</li>
                    <li>• GitGuardian for automated scanning</li>
                  </ul>
                </div>

              </div>
            </section>

            <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🎯 Summary
              </h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                <div className="space-y-4">
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    Removing sensitive files from Git history requires rewriting the entire repository history. 
                    This is a <strong>destructive operation</strong> that affects all team members.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-3xl mb-2">🔧</div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Fix It</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Use filter-branch or filter-repo to remove the file
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-3xl mb-2">🔐</div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Secure It</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Rotate all exposed credentials immediately
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Prevent It</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Update .gitignore and use pre-commit hooks
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-6">
                    <p className="text-yellow-800 dark:text-yellow-300 font-semibold">
                      ⚡ Remember: Even after removal, consider all exposed credentials compromised. 
                      The file existed in your repository history and should be treated as publicly known.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              💡 <strong>Pro Tip:</strong> Always verify what you're committing with <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git status</code> and <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git diff --staged</code> before pushing.
            </p>
          </div>

        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitSensitiveFileRemovalGuide;