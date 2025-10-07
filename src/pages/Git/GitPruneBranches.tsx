import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitPruneBranches = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Cleaning Up Stale Git Branches (Local & Remote)
          </h1>

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Why Clean Up Stale Branches?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>To remove old, merged, or deleted branches from your local environment.</li>
              <li>To keep your remote-tracking branches (like <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">origin/feature/*</code>) up to date.</li>
              <li>To make <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git branch -a</code> outputs clean and easy to navigate.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 1 — Check for Stale Remote Branches
            </h2>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git remote show origin`}</code>
            </pre>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Git will list tracked and stale branches. You’ll see lines like:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`refs/remotes/origin/feature/old-feature   stale (use 'git remote prune' to remove)`}</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 2 — Prune Stale Remote-Tracking Branches
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Run the prune command to remove all stale remote branches that no longer exist on Bitbucket:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git remote prune origin`}</code>
            </pre>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              This will remove entries like <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">origin/feature/xyz</code> that have already been deleted remotely.
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`Pruning origin
URL: https://bitbucket.org/teamamarea/student-online-internship.git
 * [pruned] origin/feature/add-students-and-soft-delete
 * [pruned] origin/feature/fix-validation-issues`}</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 3 — Delete Local Branches (Optional)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you previously checked out any of those branches locally, remove them too:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git branch -d feature/add-students-and-soft-delete
git branch -d feature/fix-validation-issues`}</code>
            </pre>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-D</code> instead of <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-d</code> if the branch isn’t merged yet and you still want to force-delete it.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 4 — Verify Cleanup
            </h2>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git fetch -p
git branch -a`}</code>
            </pre>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              You should now only see active branches like:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`* dev
  master
  remotes/origin/dev
  remotes/origin/master`}</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 5 — Enable Auto-Pruning (Recommended)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              To automatically remove stale remote-tracking branches during each fetch or pull, run this once:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git config --global fetch.prune true`}</code>
            </pre>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              From now on, every time you fetch or pull, Git will clean up stale remote refs automatically. 💪
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Bonus — Bulk Cleanup Script
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Here’s a one-liner that deletes all local <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/*</code> branches that have been merged:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git branch --merged develop | grep 'feature/' | xargs git branch -d`}</code>
            </pre>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              ⚠️ Be careful — only run this after confirming that all those branches have been merged and are no longer needed.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Quick Summary
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><b>Check stale branches:</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git remote show origin</code></li>
              <li><b>Prune old ones:</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git remote prune origin</code></li>
              <li><b>Delete local copies:</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git branch -d branchname</code></li>
              <li><b>Auto cleanup always:</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git config --global fetch.prune true</code></li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitPruneBranches;