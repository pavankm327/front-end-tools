import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitFeatureBranchRebaseCopy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Update a Feature Branch with Latest <code>dev</code> & Fix “non-fast-forward” Errors
          </h1>

          {/* Scenario */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Scenario
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You have a feature branch, for example{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                feature/your-feature
              </code>, that has already been pushed and a Pull Request (PR) is open — but not yet merged.
              Meanwhile, the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> branch has received new commits.
              You now want to bring those latest <code>dev</code> updates into your local feature branch,
              make further changes, and update the same PR.
            </p>
          </section>

          <Separator />

          {/* Preparation */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Preparation (Always do this first)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Ensure your working directory is clean — commit or stash any local changes.</li>
              <li>Decide between a linear history (<b>rebase</b>) or preserving merge commits (<b>merge</b>).</li>
              <li>Coordinate with your team if history rewriting is involved (rebasing).</li>
            </ul>

            <p className="mt-3 text-gray-700 dark:text-gray-300 font-semibold">Common prep commands:</p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`# Option A: Stash local changes 
git stash push -m "WIP: before applying dev updates"

# Option B: Commit temporary work
git add .
git commit -m "WIP: save work before syncing with dev"`}</code>
            </pre>
          </section>

          <Separator />

          {/* Recommended: Rebase */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Recommended: Rebase Feature Branch onto Latest <code>dev</code>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Rebasing replays your commits on top of the updated <code>dev</code>, keeping a clean, linear history.
              It’s best for personal feature branches before merging into <code>dev</code>.
            </p>

            <h3 className="font-semibold mt-3 text-gray-800 dark:text-gray-200">Step-by-step:</h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-3 overflow-auto text-sm">
              <code>{`# 1. Fetch latest branches
git fetch origin

# 2. Switch to your feature branch
git checkout feature/your-feature

# 3. Rebase your branch onto latest dev
git rebase origin/dev

# 4. If conflicts occur:
#    - Resolve conflicts
#    - Stage resolved files
git add <file>

#    - Continue rebase
git rebase --continue

# 5. Test and verify everything

# 6. Push changes safely (after rebase)
git push origin feature/your-feature --force-with-lease`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              ⚠ <b>Use</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--force-with-lease</code> (instead of <code>--force</code>)
              — it prevents overwriting remote changes you don’t have locally.
            </p>
          </section>

          <Separator />

          {/* Alternative: Merge */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Alternative: Merge <code>dev</code> into Feature Branch (Safer)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you prefer not to rewrite history or your team prohibits rebasing, merge is a safe alternative.
            </p>

            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git fetch origin
git checkout feature/your-feature
git merge origin/dev

# Resolve conflicts if any
git add <file>
git commit   # finalize the merge

# Push updates normally
git push origin feature/your-feature`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              ✅ This method doesn’t rewrite history and requires no force push.
            </p>
          </section>

          <Separator />

          {/* Fixing Non-Fast-Forward Error */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Fixing “non-fast-forward” Git Push Error
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The “non-fast-forward” error occurs when your local and remote branches have diverged —
              meaning both contain commits the other doesn’t. Git blocks your push to prevent overwriting
              someone else’s work.
            </p>

            <h3 className="font-semibold mt-3 text-gray-800 dark:text-gray-200">
              Option 1: Merge or Rebase (Recommended)
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git pull origin feature/your-feature --rebase
# Resolve conflicts, then:
git add .
git rebase --continue
git push -u origin feature/your-feature`}</code>
            </pre>

            <h3 className="font-semibold mt-3 text-red-600 dark:text-red-400">
              Option 2: Force Push (Use Only If Certain)
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git push -u origin feature/your-feature --force`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              ⚠ <b>Warning:</b> Force-pushing replaces the remote branch entirely with your local one.
              Only do this if you’re sure your local branch is up-to-date and correct.
            </p>
          </section>

          <Separator />

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Comparison: Rebase vs Force Push
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border text-sm border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    <th className="border px-3 py-2 text-left">Goal</th>
                    <th className="border px-3 py-2 text-left">Command</th>
                    <th className="border px-3 py-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">
                      Merge both remote and local commits
                    </td>
                    <td className="border px-3 py-2 font-mono text-green-400">
                      git pull origin feature/your-feature --rebase
                    </td>
                    <td className="border px-3 py-2 text-green-600 dark:text-green-400">
                      Recommended
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 text-gray-800 dark:text-gray-200">
                      Overwrite remote with your local version
                    </td>
                    <td className="border px-3 py-2 font-mono text-red-400">
                      git push -u origin feature/your-feature --force
                    </td>
                    <td className="border px-3 py-2 text-red-600 dark:text-red-400">
                      Destroys remote commits
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <Separator />
        
          {/* Troubleshooting & rollback */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Troubleshooting & Quick Rollback
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
              If something goes wrong after a rebase/force push, you can recover using <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git reflog</code> and push the previous state back.
            </p>

            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`# show recent HEADs and find the commit you want to restore
git reflog

# reset branch to a safe commit (local)
git reset --hard <commit-sha>

# force push to restore remote (careful!)
git push origin feature/your-feature --force-with-lease`}</code>
            </pre>
          </section>

          <Separator />
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Summary</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                ✅ Prefer <b>rebase</b> to keep history clean and aligned with <code>dev</code>.
              </li>
              <li>
                ⚠ Use <b>--force-with-lease</b> instead of <b>--force</b> to avoid accidental overwrites.
              </li>
              <li>
                💡 Double-check with your team before rewriting branch history.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitFeatureBranchRebaseCopy;