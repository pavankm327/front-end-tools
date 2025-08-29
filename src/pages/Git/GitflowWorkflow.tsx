import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitflowWorkflow = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Gitflow Workflow &amp; Pull Request Policies</h1>

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Branch Protection Rule</h2>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">No direct deploy to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-red-600 dark:text-red-400">develop</code></b>: Never push changes directly. Always use Pull Requests (PRs), for code review and CI checks.
              </li>
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">Only do PRs against <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-green-600 dark:text-green-400">main</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-blue-600 dark:text-blue-400">develop</code></b>: Feature/release/hotfix branches are merged to these via PR only.
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Code Review &amp; Quality:</b> PRs allow careful review, testing, and approval before merging.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Stability:</b> No code lands in <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">main</code> or <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> without peer validation.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">CI/CD:</b> PRs trigger automatic builds and tests.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Traceability:</b> PRs maintain a clear project audit trail.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Branch Protection:</b> Block direct pushes for safety in platforms like GitHub.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Typical Gitflow Workflow</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">main:</b> Always production-ready.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">develop:</b> Latest integrated, tested code (staging).</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">feature/*:</b> New work, branched from <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code>.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">release/*:</b> Pre-release branch, merged to both <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">main</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> after release.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">hotfix/*:</b> Immediate fixes (from <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">main</code>), merged to both <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">main</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code>.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Gitflow Example (Step-by-Step)</h2>
            <ol className="list-decimal list-inside space-y-6 text-gray-700 dark:text-gray-300">
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">Initialize Repo &amp; Branches</b>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git init my-app
cd my-app
git checkout -b main
git checkout -b develop
git push -u origin main
git push -u origin develop`}</code>
                </pre>
              </li>
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">Create a Feature Branch</b>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git checkout develop
git checkout -b feature/login
# Work on code...
git add login.js
git commit -m "Add login feature"
git push -u origin feature/login
# Open PR: feature/login → develop`}</code>
                </pre>
              </li>
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">Start Another Feature</b>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git checkout develop
git checkout -b feature/shopping-cart
git add cart.js
git commit -m "Add shopping cart feature"
git push -u origin feature/shopping-cart
# Open PR: feature/shopping-cart → develop`}</code>
                </pre>
              </li>
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">Prepare a Release</b>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git checkout develop
git checkout -b release/1.0.0
git add RELEASE.md
git commit -m "Prepare release 1.0.0"
git push -u origin release/1.0.0
# Open PR: release/1.0.0 → main AND release/1.0.0 → develop`}</code>
                </pre>
              </li>
              <li>
                <b className="font-semibold text-gray-900 dark:text-gray-100">Hotfix a Production Bug</b>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git checkout main
git checkout -b hotfix/1.0.1
git add fix.js
git commit -m "Fix login issue in production"
git push -u origin hotfix/1.0.1
# Open PR: hotfix/1.0.1 → main AND hotfix/1.0.1 → develop`}</code>
                </pre>
              </li>
            </ol>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">ASCII Gitflow Branch Tree</h2>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`main
│
├─┬ develop
│ ├─ feature/login
│ └─ feature/shopping-cart
│
├─ release/1.0.0
│
└─ hotfix/1.0.1`}</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Mermaid Diagram (Copy for Docs with Mermaid Support)</h2>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm mermaid">
              <code>{`gitGraph
  commit id: "main"
  branch develop
  commit id: "develop"
  branch feature/login
  commit id: "login"
  checkout develop
  branch feature/shopping-cart
  commit id: "cart"
  checkout develop
  merge feature/login
  merge feature/shopping-cart
  branch release/1.0.0
  commit id: "release"
  checkout main
  merge release/1.0.0
  branch hotfix/1.0.1
  commit id: "hotfix"
  checkout main
  merge hotfix/1.0.1
  checkout develop
  merge hotfix/1.0.1`}</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Why Feature Branch Workflow is Important</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Isolation of Work:</b> Each new feature lives in its own branch, preventing unfinished work from breaking <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> or <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">main</code>.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Team Collaboration:</b> Multiple developers can work on independent features in parallel without interfering with each other’s work.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Pull Request Workflow:</b> Feature branches are merged to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> via PRs, enabling code review, discussion, and testing before integration.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Clean History:</b> Once merged, feature branches can be deleted, keeping <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">main</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> clean and easy to follow.</li>
              <li><b className="font-semibold text-gray-900 dark:text-gray-100">Continuous Integration (CI):</b> CI/CD pipelines test each PR, helping ensure that only stable features are merged to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code>.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Without Feature Branches?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Direct commits to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> may break the build with partial/unstable code.</li>
              <li>Harder collaboration—everyone is changing the same branch.</li>
              <li>Poor or missing review cycle.</li>
              <li>Debugging is more complex: multiple features get mixed in one place.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Best Practices for Feature Branches</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Always branch off <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code> for features (<code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/login</code>, <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/payment</code>, etc.).</li>
              <li>✅ Keep feature branches short-lived; merge them as soon as the work is ready.</li>
              <li>❌ Don’t let feature branches drift for weeks/months—merging becomes difficult.</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <b className="font-semibold text-gray-900 dark:text-gray-100">In short:</b> <i>The feature branch workflow is essential in a team (and even for disciplined solo projects) to keep history clean, integration safe, and releases reliable.</i>
            </p>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitflowWorkflow;