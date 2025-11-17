import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ChevronUp,
  GitBranch,
  Terminal,
  Code2,
  Info,
  AlertTriangle,
} from "lucide-react";

const DefaultVisual = ({ label }) => (
  <div className="font-mono text-xs space-y-2">
    <div className="text-blue-400">Command Flow → {label}</div>
    <div className="text-green-400">Working directory updated</div>
  </div>
);

const CommandExplanation = ({ command, explanation, visual }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{command}</code>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What it does:</h4>
            <p className="text-gray-700 dark:text-gray-300">{explanation}</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Visual:</h4>
            {visual}
          </div>
        </div>
      )}
    </div>
  );
};

const GitPrepNewFeature = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch size={34} className="text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Handling Pending Work Before Starting a New Feature
            </h1>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sometimes you're halfway through one feature branch and need to start a new feature.
            Here's how to safely pause your work without losing any progress.
          </p>

          <Separator className="my-8" />

          {/* Scenario 1 */}
          <div className="flex items-center gap-2 mb-3">
            <Info className="text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Scenario 1: Pause Current Work</h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Use git stash when you want to pause your work without committing incomplete code.
          </p>

          <CommandExplanation
            command="git stash push -m 'WIP: partial changes on feature-xyz'"
            explanation="Temporarily stores your uncommitted changes while keeping your working directory clean so you can safely switch branches."
            visual={<DefaultVisual label="stash saved" />}
          />

          <CommandExplanation
            command="git checkout main"
            explanation="Switches to the main branch after your work is safely stashed."
            visual={<DefaultVisual label="switched to main" />}
          />

          <CommandExplanation
            command="git checkout -b feature/new-feature"
            explanation="Creates and switches to a new feature branch so you can start fresh work."
            visual={<DefaultVisual label="new feature branch created" />}
          />

          <Separator className="my-8" />

          {/* Returning to old feature */}
          <h2 className="text-xl font-bold flex items-center gap-2 mb-3 text-gray-900 dark:text-gray-100">
            <Terminal className="text-yellow-500" />
            Resume Old Feature Work
          </h2>

          <CommandExplanation
            command="git checkout feature/old-feature"
            explanation="Switch back to your original feature branch."
            visual={<DefaultVisual label="return to old feature" />}
          />

          <CommandExplanation
            command="git stash list"
            explanation="Shows the list of stored stashes so you can confirm which one to reapply."
            visual={<DefaultVisual label="view stash list" />}
          />

          <CommandExplanation
            command="git stash apply"
            explanation="Applies the latest stash back to your branch so you can continue your unfinished work."
            visual={<DefaultVisual label="stash reapplied" />}
          />

          <Separator className="my-8" />

          {/* Untracked files */}
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Handling Untracked Files Error</h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you see <code>untracked files present</code>, it means your stash didn't include them.
            Use the <code>-u</code> flag.
          </p>

          <CommandExplanation
            command="git stash push -u -m 'WIP: partial changes'"
            explanation="Stashes both tracked and untracked files, ensuring all changes are saved."
            visual={<DefaultVisual label="stash tracked + untracked" />}
          />

          <Separator className="my-8" />

          {/* WIP commit */}
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Option 2: Temporary WIP Commit</h2>
          </div>

          <CommandExplanation
            command="git add ."
            explanation="Stages all your modified files so they can be committed."
            visual={<DefaultVisual label="files staged" />}
          />

          <CommandExplanation
            command="git commit -m 'WIP: bitbucket pipeline setup'"
            explanation="Creates a temporary commit representing your incomplete work. You can later squash or amend this commit."
            visual={<DefaultVisual label="temporary commit created" />}
          />

          <CommandExplanation
            command="git checkout main"
            explanation="Switch to main so you can create a new feature branch."
            visual={<DefaultVisual label="switched to main" />}
          />

          <CommandExplanation
            command="git checkout -b feature/new-feature"
            explanation="Creates a new feature branch for your new task."
            visual={<DefaultVisual label="new feature branch created" />}
          />

          <p className="mt-6 text-sm italic text-gray-600 dark:text-gray-400">
            ✅ Best Practice: Prefer <code>git stash -u</code> for temporary work. Avoid mixing multiple tasks in a single branch.
          </p>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GitPrepNewFeature;
