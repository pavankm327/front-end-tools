import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, GitBranch, GitMerge, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

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
          {visual && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Visual:</h4>
              {visual}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const BranchDiagram = ({ type }) => {
  if (type === 'before-rebase') {
    return (
      <div className="font-mono text-xs space-y-1">
        <div className="text-green-400">origin/dev:    A---B---C---D---E</div>
        <div className="text-blue-400">feature:       A---B---X---Y---Z</div>
        <div className="text-gray-500 mt-2">↑ Branches diverged after commit B</div>
      </div>
    );
  }
  
  if (type === 'after-rebase') {
    return (
      <div className="font-mono text-xs space-y-1">
        <div className="text-green-400">origin/dev:    A---B---C---D---E</div>
        <div className="text-blue-400">feature:       A---B---C---D---E---X'---Y'---Z'</div>
        <div className="text-gray-500 mt-2">↑ Feature commits replayed on top of dev</div>
      </div>
    );
  }
  
  if (type === 'merge') {
    return (
      <div className="font-mono text-xs space-y-1">
        <div className="text-green-400">origin/dev:    A---B---C---D---E</div>
        <div className="text-blue-400">feature:       A---B---X---Y---Z---M</div>
        <div className="text-gray-500">                              ↗</div>
        <div className="text-gray-500">                        C---D---E</div>
        <div className="text-gray-500 mt-2">↑ Merge commit (M) joins histories</div>
      </div>
    );
  }
  
  if (type === 'non-fast-forward') {
    return (
      <div className="font-mono text-xs space-y-1">
        <div className="text-yellow-400">remote:        A---B---X---Y</div>
        <div className="text-blue-400">local:         A---B---X'---Y'</div>
        <div className="text-red-400 mt-2">✗ Cannot push: histories diverged</div>
      </div>
    );
  }
  
  return null;
};

const GitFeatureBranchRebase = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch size={40} />
            <h1 className="text-4xl font-bold">Git Feature Branch Management</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Master rebasing, merging, and resolving non-fast-forward errors
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Scenario */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-yellow-500" size={24} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Scenario</h2>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
              You have a feature branch, for example{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                feature/your-feature
              </code>, that has already been pushed and a Pull Request (PR) is open — but not yet merged.
              Meanwhile, the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dev</code> branch has received new commits.
              You now want to bring those latest <code>dev</code> updates into your local feature branch,
              make further changes, and update the same PR.
            </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Preparation Commands */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-green-500" size={24} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Preparation Commands</h2>
            </div>
            
            <CommandExplanation
              command="git stash push -m 'WIP: message'"
              explanation="Temporarily saves your uncommitted changes (both staged and unstaged) to a stack, allowing you to have a clean working directory. The -m flag adds a descriptive message to identify this stash later. You can restore these changes with 'git stash pop'."
              visual={
                <div className="space-y-2">
                  <div className="text-gray-400">Working Directory (dirty)</div>
                  <div className="text-yellow-400">↓ git stash</div>
                  <div className="text-green-400">Stash Stack: [Your changes stored]</div>
                  <div className="text-gray-400">Working Directory (clean)</div>
                </div>
              }
            />

            <CommandExplanation
              command="git add ."
              explanation="Stages all changes in the current directory and subdirectories for commit. The dot (.) means 'everything in current directory'. This moves your changes from 'modified' state to 'staged' state, preparing them for commit."
              visual={
                <div className="space-y-2">
                  <div className="text-red-400">Modified: file1.js, file2.js</div>
                  <div className="text-yellow-400">↓ git add .</div>
                  <div className="text-green-400">Staged: file1.js, file2.js</div>
                </div>
              }
            />

            <CommandExplanation
              command="git commit -m 'message'"
              explanation="Creates a snapshot (commit) of your staged changes with a descriptive message. This permanently records your changes in the repository history. Each commit gets a unique SHA hash identifier."
              visual={
                <div className="space-y-2">
                  <div className="text-gray-400">History: A---B---C</div>
                  <div className="text-yellow-400">↓ git commit</div>
                  <div className="text-green-400">History: A---B---C---D (new commit)</div>
                </div>
              }
            />
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Rebase Commands */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <RefreshCw className="text-purple-500" size={24} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Rebase Workflow (Recommended)</h2>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Why Rebase?</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Creates a clean, linear history by replaying your commits on top of the latest <code>dev</code> branch. It's best for personal feature branches before merging into <code>dev</code>.
              </p>
            </div>

            <CommandExplanation
              command="git fetch origin"
              explanation="Downloads all branches, tags, and commits from the remote repository (origin) to your local repository, but doesn't merge anything. This updates your local knowledge of what's on the remote without affecting your working files. Think of it as 'checking what's new' without applying changes."
              visual={
                <div className="space-y-2">
                  <div className="text-gray-400">Local refs (outdated)</div>
                  <div className="text-yellow-400">↓ git fetch origin</div>
                  <div className="text-green-400">Local refs: origin/dev, origin/main (updated)</div>
                  <div className="text-gray-500 text-xs mt-2">Note: Your working directory unchanged</div>
                </div>
              }
            />

            <CommandExplanation
              command="git checkout feature/your-feature"
              explanation="Switches your working directory to the specified branch. This updates all files in your directory to match the state of that branch. If you have uncommitted changes, Git will warn you to commit or stash them first."
              visual={
                <div className="space-y-2">
                  <div className="text-blue-400">Current: main branch</div>
                  <div className="text-yellow-400">↓ git checkout feature/your-feature</div>
                  <div className="text-green-400">Current: feature/your-feature branch</div>
                </div>
              }
            />

            <CommandExplanation
              command="git rebase origin/dev"
              explanation="Takes your feature branch commits and replays them on top of origin/dev, one at a time. This rewrites commit history, giving each commit a new SHA. The result is a linear history where your feature appears to have been developed after the latest dev changes."
              visual={<BranchDiagram type="before-rebase" />}
            />

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">After Rebase:</h4>
              <BranchDiagram type="after-rebase" />
            </div>

            <CommandExplanation
              command="git add <file>"
              explanation="During a rebase, if conflicts occur, you resolve them manually, then use this command to mark the file as resolved. This stages the file with your conflict resolution, telling Git you've fixed the conflicts and are ready to continue."
              visual={
                <div className="space-y-2">
                  <div className="text-red-400">Conflict in: file.js</div>
                  <div className="text-yellow-400">↓ [You manually resolve conflict]</div>
                  <div className="text-yellow-400">↓ git add file.js</div>
                  <div className="text-green-400">Conflict resolved, staged</div>
                </div>
              }
            />

            <CommandExplanation
              command="git rebase --continue"
              explanation="After resolving conflicts and staging files, this command tells Git to continue with the rebase process, applying the next commit in sequence. If more conflicts occur, you'll resolve them and run this again. When all commits are applied, the rebase completes."
              visual={
                <div className="space-y-2">
                  <div className="text-yellow-400">Rebase paused (conflicts resolved)</div>
                  <div className="text-yellow-400">↓ git rebase --continue</div>
                  <div className="text-green-400">Applying next commit...</div>
                  <div className="text-green-400">Rebase complete!</div>
                </div>
              }
            />

            <CommandExplanation
              command="git push origin feature/your-feature --force-with-lease"
              explanation="Pushes your rebased commits to the remote repository. --force-with-lease is a safer version of --force: it only overwrites the remote if no one else has pushed changes since your last fetch. If someone else pushed, it fails and prevents you from overwriting their work. This is crucial after a rebase because you've rewritten history."
              visual={
                <div className="space-y-2">
                  <div className="text-blue-400">Local: A---B---C'---D'---E'</div>
                  <div className="text-gray-400">Remote: A---B---C---D---E (old)</div>
                  <div className="text-yellow-400">↓ git push --force-with-lease</div>
                  <div className="text-green-400">Remote: A---B---C'---D'---E' (updated)</div>
                  <div className="text-gray-500 text-xs mt-2">✓ Safe: Checks remote wasn't changed by others</div>
                </div>
              }
            />
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Merge Alternative */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <GitMerge className="text-green-500" size={24} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Merge Alternative (Safer)</h2>
            </div>

            <CommandExplanation
              command="git merge origin/dev"
              explanation="Creates a new merge commit that combines the histories of your feature branch and origin/dev. Unlike rebase, this preserves the original commit history and doesn't rewrite any commits. The result is a branch with a 'merge bubble' showing where the two histories came together."
              visual={<BranchDiagram type="merge" />}
            />

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mt-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Advantage:</strong> No history rewriting, no force push needed. Safer for shared branches.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Non-Fast-Forward */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-500" size={24} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Fixing "non-fast-forward" Error</h2>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">What causes this?</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Your local and remote branches have diverged - both have commits the other doesn't have. Git can't "fast-forward" (simply move the pointer forward) because it would lose remote commits.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Visual:</h4>
              <BranchDiagram type="non-fast-forward" />
            </div>

            <CommandExplanation
              command="git pull origin feature/your-feature --rebase"
              explanation="Combines fetch + rebase in one command. First fetches the latest changes from origin/feature/your-feature, then rebases your local commits on top of them. This resolves the divergence by creating a linear history. The --rebase flag is crucial - without it, pull would create a merge commit instead."
              visual={
                <div className="space-y-2">
                  <div className="text-yellow-400">Remote: A---B---X---Y</div>
                  <div className="text-blue-400">Local:  A---B---X'---Y'</div>
                  <div className="text-yellow-400">↓ git pull --rebase</div>
                  <div className="text-green-400">Result: A---B---X---Y---X''---Y''</div>
                </div>
              }
            />

            <CommandExplanation
              command="git push -u origin feature/your-feature --force"
              explanation="Forces the remote branch to match your local branch exactly, overwriting remote history. The -u flag sets upstream tracking. ⚠️ DANGER: This discards any commits on remote that aren't in your local. Only use when you're absolutely certain your local version is correct and others aren't working on this branch."
              visual={
                <div className="space-y-2">
                  <div className="text-red-400">⚠️ DESTRUCTIVE OPERATION</div>
                  <div className="text-gray-400">Remote: A---B---X---Y (will be lost)</div>
                  <div className="text-blue-400">Local:  A---B---C---D</div>
                  <div className="text-yellow-400">↓ git push --force</div>
                  <div className="text-red-400">Remote: A---B---C---D (X, Y deleted!)</div>
                </div>
              }
            />
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Rollback */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <RefreshCw className="text-orange-500" size={24} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Emergency Rollback
              </h2>
            </div>

            <CommandExplanation
              command="git reflog"
              explanation="Shows a log of every time your HEAD pointer moved (every checkout, commit, rebase, reset, etc.). Each entry has a reference like HEAD@{0}, HEAD@{1}, etc. This is your safety net — even 'deleted' commits are here, allowing you to recover from almost any mistake."
              visual={
                <div className="font-mono text-xs space-y-1">
                  <div className="text-green-400">HEAD@{'{0}'}: commit abc123 - Latest commit</div>
                  <div className="text-green-400">HEAD@{'{1}'}: rebase: Your feature</div>
                  <div className="text-yellow-400">HEAD@{'{2}'}: commit def456 - Before rebase</div>
                  <div className="text-gray-500">HEAD@{'{3}'}: checkout: Switched branch</div>
                  <div className="text-gray-500 mt-2">↑ Find the commit before your mistake</div>
                </div>
              }
            />

            <CommandExplanation
              command="git reset --hard <commit-sha>"
              explanation="Moves your branch pointer to the specified commit and resets your working directory and staging area to match it exactly. --hard means 'throw away all changes' since that commit. This is destructive to any uncommitted work, but recoverable via reflog. Use this to 'undo' commits or rebase operations."
              visual={
                <div className="space-y-2">
                  <div className="text-gray-400">Current: A---B---C---D (HEAD)</div>
                  <div className="text-yellow-400">↓ git reset --hard B</div>
                  <div className="text-green-400">Result:  A---B (HEAD)</div>
                  <div className="text-gray-500 text-xs mt-2">C and D still in reflog!</div>
                </div>
              }
            />
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />
          
          {/* Resetting a Feature Branch */}
          <section>  
            {/* Resetting a Feature Branch (Clean PR) */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <RefreshCw className="text-orange-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Resetting a Feature Branch (Clean PR)
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have a <strong>feature branch with a Pull Request (PR)</strong> and want to:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>🧹 Discard all existing commits and changes from that branch</li>
                <li>🔄 Make it identical to the parent branch (<code>dev</code> or <code>develop</code>)</li>
                <li>✍️ Reapply new changes later while keeping the same PR</li>
              </ul>

              <p className="mt-4 text-gray-700 dark:text-gray-300">Follow the steps below 👇</p>

              <CommandExplanation
                command="git checkout feature-branch"
                explanation="Switch to your feature branch to ensure you are resetting the correct branch."
                visual={
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Ensures all following operations apply to the correct branch.</div>
                    <div className="text-green-400">feature-branch → checked out</div>
                  </div>
                }
              />

              <CommandExplanation
                command="git fetch origin"
                explanation="Fetches the latest commits and updates from the remote repository. This ensures your parent branch references (like origin/dev or origin/develop) are up to date."
                visual={
                  <div className="text-xs text-gray-400 space-y-1">
                    <div className="text-green-400">origin/dev → updated</div>
                    <div className="text-green-400">origin/develop → updated</div>
                    <div className="text-gray-500">Now you’re working with the latest remote state.</div>
                  </div>
                }
              />

              <CommandExplanation
                command={`git reset --hard origin/dev  \n# or\n git reset --hard origin/develop`}
                explanation="Resets your local feature branch to match the specified parent branch (either dev or develop). This removes all local commits and changes, making your branch identical to the parent."
                visual={
                  <div className="space-y-2">
                    <div className="text-gray-400">Before: dev --- A --- B --- C (feature)</div>
                    <div className="text-yellow-400">↓ git reset --hard origin/dev</div>
                    <div className="text-green-400">After: dev (feature now identical)</div>
                    <div className="text-gray-500 text-xs mt-2">A, B, C commits are removed locally but recoverable via reflog.</div>
                  </div>
                }
              />

              <CommandExplanation
                command="git push origin feature-branch --force # or git push origin feature-branch --force-with-lease"
                explanation="Force pushes the cleaned-up branch to the remote, overwriting previous commits. This updates your PR to match the parent branch, effectively removing old changes from the PR."
                visual={
                  <div className="text-xs text-gray-400 space-y-1">
                    <div className="text-green-400">Remote PR → Updated</div>
                    <div className="text-gray-500">Branch now matches dev/develop exactly.</div>
                    <div className="text-yellow-400">⚠️ Be cautious with --force if others are working on the same branch.</div>
                  </div>
                }
              />
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Quick Reference */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Safe Operations</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>✓ git fetch</li>
                  <li>✓ git merge</li>
                  <li>✓ git pull (without --rebase)</li>
                  <li>✓ git stash</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Use With Caution</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>⚠ git rebase</li>
                  <li>⚠ git push --force-with-lease</li>
                  <li>⚠ git reset --hard</li>
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Dangerous Operations</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>✗ git push --force</li>
                  <li>✗ git rebase on shared branches</li>
                  <li>✗ Rewriting public history</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Best Practices</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>✓ Rebase personal branches</li>
                  <li>✓ Use --force-with-lease</li>
                  <li>✓ Keep commits atomic</li>
                  <li>✓ Communicate with team</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          💡 Pro tip: Always fetch before rebasing, and test thoroughly before force pushing!
        </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitFeatureBranchRebase;