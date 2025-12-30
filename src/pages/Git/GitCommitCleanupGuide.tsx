import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitCommitCleanupGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">

          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            🧩 Git Commit Cleanup — Fixing Unintended Commits from <code>-am</code>
          </h1>

          <section>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              This guide explains why <code>git commit -am</code> can cause unwanted commits,
              and how to safely undo, clean up, and fix your feature branch locally and remotely.
            </p>
          </section>

          <Separator />

          {/* Section 1 — Why this happened */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              ⚠️ Why did this happen?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              You ran the following command:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git commit -am "Reviewed and fixed minor issues"`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <code>-a</code> flag tells Git to <b>automatically stage all tracked files</b> that have changes.
              That means every file that already existed in Git and was modified got committed —
              even if you didn't intend to include them.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                    <th className="px-4 py-2 border-b">Command</th>
                    <th className="px-4 py-2 border-b">Meaning</th>
                    <th className="px-4 py-2 border-b">What it stages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b"><code>git commit -m</code></td>
                    <td className="px-4 py-2 border-b">Commit only staged files</td>
                    <td className="px-4 py-2 border-b">Files added via <code>git add</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b"><code>git commit -am</code></td>
                    <td className="px-4 py-2 border-b">Commit all tracked modified files</td>
                    <td className="px-4 py-2 border-b">Everything already tracked and modified</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b"><code>git add file1 file2</code></td>
                    <td className="px-4 py-2 border-b">Stage files manually</td>
                    <td className="px-4 py-2 border-b">Only files you explicitly add</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              🧠 <b>Note:</b> <code>-a</code> doesn't include <i>new untracked files</i>.
              It only auto-adds changes to existing tracked ones.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              ✅ <b>Best Practice:</b> Use <code>git add</code> manually to control exactly what gets committed.
            </p>
          </section>

          <Separator />

          {/* Section 2 — Step-by-Step Guide */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🧹 Step-by-Step: How to Fix This (Not Yet Pushed)
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If you've committed but <b>haven't pushed yet</b>, follow these steps:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 1: Check Your Current State
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git status</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 2: Identify Unintended Commits
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git log --oneline</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Look for your recent commit — for example:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg overflow-auto text-sm">
              7c91b23 (HEAD -&gt; feature/permission-module-changes) Reviewed and fixed minor issues
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 3: Undo Last Commit (But Keep Changes Locally)
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git reset --soft HEAD~1</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              This removes the last commit but keeps all the changes staged (ready to reselect only the needed files).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 4: Unstage Everything
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git reset</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Now nothing is staged — all modified files are visible under "Changes not staged for commit" when you run:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git status</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 5: Stage Only the Correct Files
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Stage the two files you actually intended to commit:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git add path/to/firstFile.php
git add path/to/secondFile.php`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 6: Verify What's Staged
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git status</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              Step 7: Commit Properly
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Now commit only the staged files:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git commit -m "Reviewed and fixed minor issues (only intended files)"</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              ⚠️ Avoid using <code>-am</code> unless you are certain you want to commit *all tracked files*. It automatically stages and commits everything that's already tracked — often causing this problem.
            </p>
          </section>

          <Separator />

          {/* Section 3 — If already pushed (your branch) */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🚀 If You Already Pushed (Your Own Branch)
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If it's your personal feature branch (no one else pulled it yet):
            </p>

            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`# Undo the commit but keep changes
git reset --soft HEAD~1

# Unstage everything
git reset

# Add only correct files
git add path/to/file1.php path/to/file2.php

# Commit again
git commit -m "Cleaned up: fixed only intended files"

# Push safely
git push --force-with-lease`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300">
              ⚠️ <b>Note:</b> Use <code>--force-with-lease</code> instead of <code>--force</code> to avoid overwriting others' work.
            </p>
          </section>

          <Separator />

          {/* Section 4 — If pushed to shared branch */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🤝 If Others Already Pulled (Shared Branch)
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Don't rewrite history. Instead, create a new commit that reverts the unwanted changes:
            </p>

            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`# Revert unwanted changes safely
git checkout feature/permission-module-changes

# This unstages and restores everything to the state before your accidental commit
git restore --staged .
git restore .

# Add only correct files
git add path/to/file1.php path/to/file2.php

# Commit and push
git commit -m "Reverted unintended files, keeping only valid changes"
git push`}</code>
            </pre>
          </section>

          <Separator />

          {/* Section 5 — Recovery Options */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🔄 Recovery Options
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              ♻️ If You Want to Discard All Local Changes
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              And restore the branch exactly as it exists remotely:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>
                {
                `git restore .
git clean -fdn # Preview what will be deleted
git clean -fd # Force delete untracked files and folders
                `
                }
               </code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Then reset to the remote branch state:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git fetch origin
git reset --hard origin/feature/permission-module-changes`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              🧭 If Your Changes Vanished After Restore
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              If your local changes disappeared after restoring, they're still recoverable using <strong>git reflog</strong>.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git reflog</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Find the commit hash from your previous commit (the one you accidentally made), then:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git checkout <that_commit_hash>`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Copy your intended changes manually, or cherry-pick specific files back if needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              🚀 Verify Before Pushing
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Check what will be pushed to Bitbucket:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git diff origin/feature/permission-module-changes</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              You should only see your intended changes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">
              🚢 Push Safely
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>git push --set-upstream origin feature/permission-module-changes</code>
            </pre>
          </section>

          <Separator />

          {/* TL;DR Table */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🧠 TL;DR</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                    <th className="px-4 py-2 border-b">Situation</th>
                    <th className="px-4 py-2 border-b">Safe Action</th>
                    <th className="px-4 py-2 border-b">Command</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">Committed, not pushed</td>
                    <td className="px-4 py-2 border-b">Reset & recommit</td>
                    <td className="px-4 py-2 border-b"><code>git reset --soft HEAD~1</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b">Pushed (only your branch)</td>
                    <td className="px-4 py-2 border-b">Reset, recommit, and force push</td>
                    <td className="px-4 py-2 border-b"><code>git push --force-with-lease</code></td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">Pushed (shared branch)</td>
                    <td className="px-4 py-2 border-b">Revert with new commit</td>
                    <td className="px-4 py-2 border-b"><code>git revert &lt;commit-hash&gt;</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                    <th className="px-4 py-2 border-b">Flag</th>
                    <th className="px-4 py-2 border-b">Meaning</th>
                    <th className="px-4 py-2 border-b">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b"><code>git clean</code></td>
                    <td className="px-4 py-2 border-b">Removes files not tracked by Git</td>
                    <td className="px-4 py-2 border-b">Helps get rid of temporary/unwanted files</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b"><code>-f</code></td>
                    <td className="px-4 py-2 border-b">Force</td>
                    <td className="px-4 py-2 border-b">Required — Git won't delete anything unless you explicitly allow it with -f</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b"><code>-d</code></td>
                    <td className="px-4 py-2 border-b">Include directories</td>
                    <td className="px-4 py-2 border-b">Also deletes untracked folders, not just individual files</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b"><code>-n</code></td>
                    <td className="px-4 py-2 border-b">Dry run</td>
                    <td className="px-4 py-2 border-b">Shows what would be deleted, but doesn’t actually delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <Separator />
                  
          {/* Section 6 — Bonus Safe Workflow */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              💡 Bonus: Safe Commit Workflow
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              To prevent future accidental commits, always:
            </p>

            <ul className="list-disc list-inside space-y-1 ml-6 text-gray-700 dark:text-gray-300">
              <li>Use <code>git status</code> before committing.</li>
              <li>Stage specific files: <code>git add file1 file2</code>.</li>
              <li>Then commit normally: <code>git commit -m "message"</code>.</li>
              <li>Never use <code>-a</code> unless you intentionally want to include all tracked changes.</li>
            </ul>
          </section>

        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitCommitCleanupGuide;