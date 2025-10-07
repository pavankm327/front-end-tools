import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const DraftPullRequestBitbucket = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Creating a Draft Pull Request to Another PR Branch (Bitbucket)
          </h1>

          <section>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              <b className="font-semibold text-green-600 dark:text-green-400">Excellent —</b> this is a very practical
              question 👏
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Bitbucket doesn’t directly call it a “PR into another PR” like GitHub does, but you can achieve the same
              workflow in Bitbucket by creating a pull request targeting the <b>original PR’s branch</b> — and marking
              it as a draft.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🧩 Example Setup</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <b>Original PR:</b>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Source branch: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/student-module</code></li>
                  <li>Target branch: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code></li>
                </ul>
              </li>
              <li>
                <b>Your Review Branch:</b> <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">review-fixes/student-module</code>
              </li>
              <li>
                Goal: Open a draft PR from <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">review-fixes/student-module</code> → <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/student-module</code>
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🧭 Step-by-Step Guide (Bitbucket Cloud)</h2>
            <ol className="list-decimal list-inside space-y-6 text-gray-700 dark:text-gray-300">

              <li>
                <b>Push your local branch</b>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`git push origin review-fixes/student-module`}</code>
                </pre>
              </li>

              <li>
                <b>Go to your Bitbucket repository</b>
                <ul className="list-disc list-inside mt-2 ml-6">
                  <li>Navigate to: <b>Repositories → Your Repo → Pull requests</b></li>
                  <li>Click <b>Create pull request</b></li>
                </ul>
              </li>

              <li>
                <b>Set up the PR source and destination</b>
                <ul className="list-disc list-inside mt-2 ml-6">
                  <li>
                    Source branch: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">review-fixes/student-module</code>
                  </li>
                  <li>
                    Destination branch: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">feature/student-module</code>
                  </li>
                </ul>
                <p className="mt-3 text-gray-700 dark:text-gray-400">
                  This means your changes will merge into the branch of the original PR.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 mt-3">
                  Tip: Bitbucket will detect if that target branch has an open PR to develop and show a banner like:
                  <br />
                  <span className="text-green-400">“feature/student-module has an open pull request to develop.”</span>
                </blockquote>
              </li>

              <li>
                <b>Mark as a draft PR</b>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  In the PR creation form, click the dropdown next to <b>Create pull request</b> and choose
                  <b> Create draft pull request</b>.
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  If you don’t see this option, older Bitbucket Server versions may show:
                  <br />
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Mark as draft</code> or
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Work in progress</code> toggle.
                </p>
              </li>

              <li>
                <b>Add context in the PR description</b>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Example description:
                </p>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`This PR contains suggested fixes and refactors based on local testing of feature/student-module.
Once reviewed, these changes can be merged into the main feature branch before merging to develop.`}</code>
                </pre>
              </li>

              <li>
                <b>Notify the original author</b>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Comment on the original PR (feature/student-module → develop) with:
                </p>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
                  <code>{`💬 I’ve created a draft PR (review-fixes/student-module → feature/student-module) containing suggested improvements.
Link: [your new PR link]`}</code>
                </pre>
              </li>

            </ol>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">🧠 Result</h2>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`review-fixes/student-module  →  feature/student-module  →  develop`}</code>
            </pre>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 dark:text-gray-300">
              <li>You can propose and test fixes safely.</li>
              <li>The original author can merge your changes into their PR branch when ready.</li>
              <li>No duplicate or conflicting PRs to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">develop</code>.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <p className="text-gray-700 dark:text-gray-300">
              💡 <b>Optional:</b> Want to automate this process? You can create the same PR flow via Bitbucket’s REST API
              or <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">curl</code>. This is handy if you handle
              frequent reviews or CI-integrated suggestions.
            </p>
          </section>

        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default DraftPullRequestBitbucket;
