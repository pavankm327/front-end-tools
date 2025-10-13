import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";

const GitCommandsReference = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            Git Commands Reference Guide
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            A comprehensive reference for essential Git commands, organized by category.
          </p>
          <Separator />

          {/* Configuration */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              ⚙️ Configuration
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Set user information:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>View configuration:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git config --list
git config user.name`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Set default editor:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>git config --global core.editor "code --wait"</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/docs/git-config"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Config Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Initialize & Clone */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              📦 Initialize & Clone
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Initialize repository:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>git init</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Clone repository:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git clone <repository-url>
git clone <repository-url> <directory-name>`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Init/Clone Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Basic Operations */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              📝 Basic Operations
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Check status:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git status
git status -s  # Short format`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Stage files:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git add <file>
git add .              # Add all files
git add *.js           # Add all JS files
git add -p             # Interactive staging`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Commit changes:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git commit -m "Message"
git commit -am "Message"     # Stage and commit tracked files
git commit --amend           # Amend last commit`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Remove/Rename files:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git rm <file>
git rm --cached <file>       # Remove from Git, keep locally
git mv <old-name> <new-name>`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Add/Commit Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Branching */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🌿 Branching
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>List branches:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git branch
git branch -a              # All branches (local + remote)
git branch -r              # Remote branches only`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Create & switch branches:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git branch <branch-name>
git checkout <branch-name>
git checkout -b <branch-name>     # Create and switch
git switch <branch-name>          # Modern alternative
git switch -c <branch-name>       # Create and switch`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Delete branches:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git branch -d <branch-name>       # Safe delete
git branch -D <branch-name>       # Force delete
git push origin --delete <branch-name>  # Delete remote`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Rename branch:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git branch -m <old-name> <new-name>
git branch -m <new-name>          # Rename current branch`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Branch Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Remote Operations */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🌐 Remote Operations
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Manage remotes:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git remote -v
git remote add <name> <url>
git remote remove <name>
git remote rename <old> <new>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Fetch & pull:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git fetch origin
git fetch --all
git pull origin <branch>
git pull --rebase origin <branch>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Push:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git push origin <branch>
git push -u origin <branch>       # Set upstream
git push --force                  # Dangerous!
git push --force-with-lease       # Safer force push
git push --all origin             # Push all branches`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Remotes Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Merging & Rebasing */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🔀 Merging & Rebasing
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Merge:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git merge <branch>
git merge --no-ff <branch>        # Create merge commit
git merge --squash <branch>       # Squash all commits
git merge --abort                 # Cancel merge`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Rebase:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git rebase <branch>
git rebase -i HEAD~3              # Interactive rebase last 3
git rebase --continue
git rebase --skip
git rebase --abort`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Cherry-pick:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git cherry-pick <commit-hash>
git cherry-pick <hash1> <hash2>   # Multiple commits`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Merge Docs
              </a>
               /
              <a
                href="https://git-scm.com/docs/git-rebase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Rebase Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Viewing History */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              📜 Viewing History
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>View logs:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git log
git log --oneline
git log --graph --oneline --all
git log -n 5                      # Last 5 commits
git log --author="Name"
git log --since="2 weeks ago"
git log --grep="keyword"`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>View differences:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git diff
git diff --staged
git diff <branch1> <branch2>
git diff <commit1> <commit2>
git diff HEAD~2 HEAD              # Last 2 commits`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Show commit details:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git show <commit-hash>
git show HEAD
git show <branch>:<file>`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Log/History Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Undoing Changes */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              ↩️ Undoing Changes
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Unstage files:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git reset <file>
git reset                         # Unstage all
git restore --staged <file>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Discard changes:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git checkout -- <file>
git restore <file>
git restore .                     # All files
git clean -fd                     # Remove untracked files`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Reset commits:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git reset --soft HEAD~1           # Keep changes staged
git reset --mixed HEAD~1          # Keep changes unstaged
git reset --hard HEAD~1           # Discard all changes
git reset --hard <commit-hash>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Revert commits:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git revert <commit-hash>
git revert HEAD
git revert --no-commit HEAD~3..HEAD  # Multiple commits`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Undo Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Stashing */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              💾 Stashing
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Save work temporarily:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git stash
git stash push -m "Message"
git stash -u                      # Include untracked files`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>List & view stashes:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git stash list
git stash show
git stash show -p stash@{0}       # Show changes`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Apply & remove stashes:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git stash pop                     # Apply and remove
git stash apply                   # Apply but keep
git stash apply stash@{2}
git stash drop stash@{0}
git stash clear                   # Remove all stashes`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Stash Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Tags */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🏷️ Tags
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Create tags:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git tag v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0"
git tag -a v1.0.0 <commit-hash>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>List & push tags:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git tag
git tag -l "v1.*"
git push origin v1.0.0
git push origin --tags             # Push all tags`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Delete tags:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git tag -d v1.0.0
git push origin --delete v1.0.0`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/book/en/v2/Git-Basics-Tagging"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Git Tag Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Advanced */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              🔧 Advanced Commands
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Reflog (recovery):</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git reflog
git reflog show <branch>
git checkout <commit-hash>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Bisect (find bugs):</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git bisect start
git bisect bad
git bisect good <commit-hash>
git bisect reset`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Blame (find changes):</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git blame <file>
git blame -L 10,20 <file>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Archive:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git archive --format=zip HEAD > archive.zip
git archive --format=tar <branch> | gzip > archive.tar.gz`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Submodules:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git submodule add <url> <path>
git submodule init
git submodule update
git submodule update --remote`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Worktree:</b></p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto text-sm">
                  <code>{`git worktree add <path> <branch>
git worktree list
git worktree remove <path>`}</code>
                </pre>
              </div>
              <a
                href="https://git-scm.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline text-sm"
              >
                Advanced Git Docs
              </a>
            </div>
          </section>
          <Separator />

          {/* Quick Reference Table */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              📋 Quick Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                    <th className="px-4 py-2 border-b">Task</th>
                    <th className="px-4 py-2 border-b">Command</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">Undo last commit</td>
                    <td className="px-4 py-2 border-b"><code>git reset --soft HEAD~1</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b">Discard local changes</td>
                    <td className="px-4 py-2 border-b"><code>git restore .</code></td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">Update from remote</td>
                    <td className="px-4 py-2 border-b"><code>git pull origin main</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b">Create & switch branch</td>
                    <td className="px-4 py-2 border-b"><code>git checkout -b feature</code></td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">View commit history</td>
                    <td className="px-4 py-2 border-b"><code>git log --oneline</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b">Stash changes</td>
                    <td className="px-4 py-2 border-b"><code>git stash</code></td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 border-b">Apply stashed changes</td>
                    <td className="px-4 py-2 border-b"><code>git stash pop</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="px-4 py-2 border-b">Force push safely</td>
                    <td className="px-4 py-2 border-b"><code>git push --force-with-lease</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href="https://git-scm.com/cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-300 underline text-sm mt-2 block"
            >
              Git SCM Cheat Sheet
            </a>
          </section>
          <Separator />

          {/* Tips */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              💡 Tips & Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Commit early and often with clear, descriptive messages.</li>
              <li>✅ Always pull before pushing to avoid conflicts.</li>
              <li>✅ Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git status</code> frequently to check your working directory.</li>
              <li>✅ Create feature branches for new work, keep main/master stable.</li>
              <li>✅ Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--force-with-lease</code> instead of <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--force</code> to avoid overwriting others' work.</li>
              <li>✅ Review changes with <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git diff</code> before committing.</li>
              <li>✅ Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.gitignore</code> to exclude unnecessary files.</li>
              <li>✅ Learn to use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git reflog</code> — it's a lifesaver for recovering lost commits.</li>
            </ul>
            <a
              href="https://git-scm.com/book/en/v2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-300 underline text-sm mt-2 block"
            >
              Pro Git Book
            </a>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default GitCommandsReference;
