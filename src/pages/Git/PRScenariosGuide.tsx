import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const PRScenariosGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">

          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            🧩 Pull Request Scenarios — Reviewer, Collaborator, and Author
          </h1>

          <section>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              This guide explains best practices for different roles when handling PRs locally and remotely.
            </p>
          </section>

          <Separator />

          {/* Scenario 1 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🧩 Scenario 1 — You’re a reviewer, not the author of the PR
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If someone else opened the original PR (a teammate) and you pulled it locally to test or tweak things:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              ✅ <b>Best practice:</b> Suggest changes on the original PR, not open a new one.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <b>How to do that:</b> Commit locally on a separate branch (not their PR branch):
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git checkout -b review-fixes/feature-name
git commit -am "Suggested fixes for feature-name"`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mt-2">Push your branch:</p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git push origin review-fixes/feature-name`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mt-2">On GitHub:</p>
            <ul className="list-disc list-inside space-y-1 ml-6 text-gray-700 dark:text-gray-300">
              <li>Go to the original PR.</li>
              <li>Add code review comments and mention:
                <br />
                <i>"I tested locally and made a few fixes. You can check them here: [link to your branch]"</i>
              </li>
              <li>Optionally, open a draft PR from your branch into the original PR’s branch if your org allows it.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              👉 This keeps credit with the original author and avoids confusing duplicate PRs.
            </p>
          </section>

          <Separator />

          {/* Scenario 2 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🧩 Scenario 2 — You are a collaborator on the same branch
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If you have push access to the same branch that the original PR was created from:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              ✅ <b>Best practice:</b> Commit directly to that branch so the original PR updates automatically.
            </p>

            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-2 overflow-auto text-sm">
              <code>{`git checkout feature/some-feature
git commit -am "Reviewed and fixed minor issues"
git push`}</code>
            </pre>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              🔸 Tip: Add a comment on the PR saying <i>“Pushed some fixes after local review.”</i>
            </p>
          </section>

          <Separator />

          {/* Scenario 3 */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🧩 Scenario 3 — You’re the PR author
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If the PR was originally yours and you refined your own changes:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              ✅ <b>Best practice:</b> Simply commit and push your local updates — the same PR will update automatically. No need to open a new one.
            </p>
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
                    <th className="px-4 py-2 border-b">What to do</th>
                    <th className="px-4 py-2 border-b">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">You’re reviewing someone else’s PR</td>
                    <td className="px-4 py-2 border-b">Suggest changes on the original PR (comment or new branch linked to it)</td>
                    <td className="px-4 py-2 border-b">Keeps review history in one place</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b">You’re a collaborator on the PR branch</td>
                    <td className="px-4 py-2 border-b">Push directly to the same branch</td>
                    <td className="px-4 py-2 border-b">Updates the same PR automatically</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">You’re the PR author</td>
                    <td className="px-4 py-2 border-b">Commit & push to your branch</td>
                    <td className="px-4 py-2 border-b">Your PR will auto-update</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default PRScenariosGuide;