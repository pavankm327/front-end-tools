import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitConflictResolution = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Resolving Git Conflicts Locally for Pull Requests
          </h1>

          {/* Scenario */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Scenario
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You are working on a <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature</code> branch, 
              and want to merge it into the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> branch.
              Since both branches may have new commits, conflicts can occur. Resolving these conflicts is essential 
              before creating a Pull Request (PR).
            </p>
          </section>

          <Separator />

          {/* Step 1 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 1: Update Local dev Branch
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ensure your local <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> branch is up-to-date with the remote.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git checkout dev       # Switch to dev branch
git fetch origin       # Fetch latest commits from remote
git pull origin dev    # Update local dev branch`}</code>
            </pre>
          </section>

          <Separator />

          {/* Step 2 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 2: Stash or Commit Your Changes
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Before integrating <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> into your feature branch, you must save any local changes.
            </p>

            {/* What is stash */}
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <b className="font-semibold">Git Stash:</b> Stash temporarily saves your uncommitted changes without committing them. This is useful when you want to switch branches or pull updates but don’t want to commit incomplete work.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <b>Option A: Stash changes</b>
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git stash push -m "WIP: before merging/rebasing"`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-2">
              This saves your work and cleans the working directory. Later, you can apply it back using <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git stash pop</code>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-2">
              <b>Option B: Commit changes</b>
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git add .
git commit -m "WIP: saving changes before merge/rebase"`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Committing is safer if your work is stable. This creates a checkpoint that you can revert to.
            </p>
          </section>

          <Separator />

          {/* Step 3 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 3: Merge or Rebase
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Now, you can integrate the latest <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> branch into your feature branch.
            </p>

            <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">

              {/* Rebase */}
              <li>
                <b className="font-semibold">Rebase (Linear, Clean History)</b>
                <p>Rebase reapplies your commits on top of the latest <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> branch. This makes the history linear and easier to read.</p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git checkout feature/your-feature
git rebase dev`}</code>
                </pre>
                <p>Resolve conflicts if any:</p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git add <file>
git rebase --continue`}</code>
                </pre>
                <p>If Git opens a commit editor (Vim), save and exit with <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">:wq!</code>.</p>
              </li>

              {/* Merge */}
              <li>
                <b className="font-semibold">Merge (Safe for Teams)</b>
                <p>Merge integrates <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> into your branch with a merge commit, preserving history.</p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git checkout feature/your-feature
git merge dev`}</code>
                </pre>
                <p>Resolve conflicts and commit normally.</p>
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <b>Comparison:</b>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ <b>Rebase:</b> Cleaner, linear history. Ideal for solo feature branches.</li>
              <li>✅ <b>Merge:</b> Safe for shared branches. Maintains the actual commit timeline.</li>
            </ul>
          </section>

          <Separator />

          {/* Step 4 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 4: Push Your Branch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              After resolving conflicts:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`# After rebase (force push)
git push origin feature/your-feature --force

# After merge (normal push)
git push origin feature/your-feature`}</code>
            </pre>
          </section>

          <Separator />

          {/* Step 5 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Step 5: Apply Stashed Changes (if any)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you stashed your changes before merge/rebase, retrieve them now:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm">
              <code>{`git stash pop`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              Resolve any conflicts from the stashed changes.
            </p>
          </section>

          <Separator />

          {/* Visual Explanation */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Visualizing Merge vs Rebase
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              ASCII diagrams:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto text-sm">
              <code>{`# Merge
main
│
└─ dev
   ├─ feature/login
   └─ feature/payment
    \
     └─ merge commit

# Rebase
main
│
└─ dev
   ├─ feature/login
   └─ feature/payment (rebased)`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Mermaid for documentation:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto text-sm mermaid">
              <code>{`gitGraph
  commit id: "main"
  branch dev
  commit id: "dev"
  branch feature/login
  commit id: "login"
  checkout dev
  branch feature/payment
  commit id: "payment"
  checkout dev
  merge feature/login
  merge feature/payment`}</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Scenario: Diverged Feature Branch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Your local branch <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/your-feature</code> 
              has 3 commits the remote doesn't have, and the remote has 1 commit your branch doesn't have. This is a common divergence scenario.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Step A: Fetch Latest Remote Changes
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm mb-4">
              <code>{`git fetch origin`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Step B: Rebase Local Branch (Linear History)
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm mb-4">
              <code>{`git checkout feature/your-feature
git rebase origin/feature/your-feature`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Resolve conflicts if any, then continue:
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm mb-4">
              <code>{`git add <file>
git rebase --continue`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Step C: Merge Alternative (Safe for Team Branches)
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm mb-4">
              <code>{`git checkout feature/your-feature
git merge origin/feature/your-feature`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Step D: Push Updated Branch
            </h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-sm mb-4">
              <code>{`# After rebase (force push)
git push origin feature/your-feature --force

# After merge (normal push)
git push origin feature/your-feature`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Visual Representation
            </h3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto text-sm mb-4">
              <code>{`# Diverged commits
origin/feature
|
└─ o <-- remote commit

feature/your-feature
|
├─ x1
├─ x2
└─ x3 <-- local commits

# After rebase, commits appear linear on top of remote
feature/your-feature
|
└─ o
   ├─ x1
   ├─ x2
   └─ x3`}</code>
            </pre>
          </section>
          
          <Separator />

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Tips & Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Use rebase for clean history on personal feature branches.</li>
              <li>✅ Use merge when collaborating with multiple developers to avoid rewriting shared history.</li>
              <li>✅ Always test your branch after conflict resolution.</li>
              <li>✅ Keep branches short-lived and focused.</li>
              <li>✅ Stash changes when switching branches mid-work to avoid accidental commits.</li>
              <li>✅ Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">:wq!</code> in Vim to save commit messages.</li>
            </ul>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitConflictResolution;
