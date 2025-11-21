import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, GitBranch, GitMerge, Database, AlertTriangle, Shield, Terminal, CheckCircle, Copy, FileCode } from 'lucide-react';

const StepSection = ({ title, children, icon: Icon, variant = 'default' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const variantStyles = {
    default: 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
    success: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30',
    info: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
  };
  
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${variantStyles[variant]}`}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />}
          <span className="font-semibold text-gray-900 dark:text-gray-100">{title}</span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          {children}
        </div>
      )}
    </div>
  );
};

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative bg-gray-900 rounded-lg p-4 my-3">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <CheckCircle size={16} className="text-green-400" />
        ) : (
          <Copy size={16} className="text-gray-300" />
        )}
      </button>
      <pre className="text-sm text-gray-100 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default function GitHubToBitbucketGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <GitMerge size={40} />
              <h1 className="text-4xl font-bold">GitHub to Bitbucket Migration</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Complete guide to migrate repositories with full commit history
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  This guide covers migrating your GitHub repository to Bitbucket while preserving the complete commit history, 
                  branches, and tags. Whether you're moving a simple repository or dealing with complex branch structures, 
                  this guide has you covered.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Scenario 1: Basic Migration */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Scenario 1: Simple Repository Migration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Transfer an entire GitHub repository to a new empty Bitbucket repository.
              </p>

              <StepSection title="Step 1: Clone GitHub Repository" icon={Database}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  First, clone your GitHub repository locally to get the full commit history.
                </p>
                <CodeBlock code={`git clone https://github.com/your-username/your-github-repo.git
cd your-github-repo`} />
              </StepSection>

              <StepSection title="Step 2: Create Empty Bitbucket Repository" icon={GitBranch}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Create a new repository in Bitbucket:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>Go to Bitbucket → Create Repository</li>
                  <li>Do NOT initialize with README or .gitignore</li>
                  <li>Repository must be completely empty</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Copy the repository URL (example):
                </p>
                <CodeBlock code="https://bitbucket.org/yourteam/your-bitbucket-repo.git" />
              </StepSection>

              <StepSection title="Step 3: Add Bitbucket as Remote" icon={GitMerge}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Inside your cloned GitHub repository, add Bitbucket as a second remote:
                </p>
                <CodeBlock code="git remote add bitbucket https://bitbucket.org/yourteam/your-bitbucket-repo.git" />
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Verify your remotes:
                </p>
                <CodeBlock code={`git remote -v

# Output:
# origin    https://github.com/your-username/your-github-repo.git
# bitbucket https://bitbucket.org/yourteam/your-bitbucket-repo.git`} />
              </StepSection>

              <StepSection title="Step 4: Push to Bitbucket" icon={CheckCircle} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Push all branches and tags to Bitbucket:
                </p>
                <CodeBlock code={`# Push all branches
git push bitbucket --all

# Push all tags (optional)
git push bitbucket --tags`} />
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded mt-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">✓ Done! Your Bitbucket repo now has:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✔ Full commit history</li>
                    <li>✔ All branches</li>
                    <li>✔ All tags</li>
                    <li>✔ Latest code</li>
                  </ul>
                </div>
              </StepSection>

              <StepSection title="Optional: Change Default Remote" icon={Terminal} variant="info">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  If you want to stop using GitHub and make Bitbucket your primary remote:
                </p>
                <CodeBlock code={`git remote remove origin
git remote rename bitbucket origin`} />
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Scenario 2: Mirror Method */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Quick Method: Mirror Clone
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The fastest way to transfer everything including refs, notes, branches, and tags.
              </p>

              <StepSection title="Mirror Clone and Push" icon={GitBranch}>
                <CodeBlock code={`git clone --mirror https://github.com/your-username/your-repo.git
cd your-repo.git
git push --mirror https://bitbucket.org/yourteam/your-bitbucket-repo.git`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This transfers everything including refs, notes, branches, tags, and complete history.
                  </p>
                </div>
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Scenario 3: Complex Branch Migration */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Scenario 2: Migrate to Existing Bitbucket Dev Branch
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When GitHub has only <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">main</code> branch 
                and Bitbucket has <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">master</code> and{' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">dev</code> branches, 
                and you want to move GitHub's history into Bitbucket's <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">dev</code> branch.
              </p>

              <StepSection title="Step 1: Clone GitHub Repository" icon={Database}>
                <CodeBlock code={`git clone https://github.com/your-username/your-repo.git
cd your-repo`} />
              </StepSection>

              <StepSection title="Step 2: Add Bitbucket Remote" icon={GitMerge}>
                <CodeBlock code={`git remote add bitbucket https://bitbucket.org/your-team/your-repo.git

# Verify remotes
git remote -v`} />
              </StepSection>

              <StepSection title="Step 3: Fetch Bitbucket Branches" icon={GitBranch}>
                <CodeBlock code="git fetch bitbucket" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  This fetches master, dev, and any other branches from Bitbucket.
                </p>
              </StepSection>

              <StepSection title="Step 4: Create Backup (Recommended)" icon={Shield} variant="warning">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Before overwriting, create a backup of Bitbucket's current dev branch:
                </p>
                <CodeBlock code={`# Create timestamped backup
git push bitbucket bitbucket/dev:dev_backup_$(date +%Y%m%d_%H%M%S)`} />
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Example backup name: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">dev_backup_20250221_221530</code>
                  </p>
                </div>
              </StepSection>

              <StepSection title="Step 5: Reset Local Dev to GitHub Main" icon={Terminal}>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Create or reset your local dev branch to match GitHub's main:
                </p>
                <CodeBlock code="git checkout -B dev main" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  This creates (or moves) dev branch and bases it exactly on GitHub's main branch.
                </p>
              </StepSection>

              <StepSection title="Step 6: Force Push to Bitbucket Dev" icon={AlertTriangle} variant="warning">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-3">
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">⚠️ Warning</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This will overwrite Bitbucket's existing dev branch history. Make sure you created a backup in Step 4!
                  </p>
                </div>
                <CodeBlock code="git push bitbucket dev --force" />
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded mt-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">✓ Result:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✔ Bitbucket dev now contains full GitHub main history</li>
                    <li>✔ Bitbucket master remains untouched</li>
                    <li>✔ Old dev branch preserved as backup</li>
                  </ul>
                </div>
              </StepSection>

              <StepSection title="Optional: Restore Backup" icon={Shield} variant="info">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  If you need to undo the changes and restore the backup:
                </p>
                <CodeBlock code="git push bitbucket dev_backup_20250221_221530:dev --force" />
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Automated Script */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Automated Script Version
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A complete bash script that handles the migration with automatic backup creation.
              </p>

              <StepSection title="Full Safe Migration Script" icon={FileCode} variant="success">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Replace the URLs with your actual GitHub and Bitbucket repository URLs:
                </p>
                <CodeBlock code={`#!/bin/bash

# ===== CONFIG =====
GITHUB_URL="https://github.com/your-username/your-repo.git"
BITBUCKET_URL="https://bitbucket.org/your-team/your-repo.git"
BACKUP_NAME="dev_backup_$(date +%Y%m%d_%H%M%S)"
# ==================

echo "Cloning GitHub repo..."
git clone "$GITHUB_URL" github_mirror
cd github_mirror || exit

echo "Adding Bitbucket remote..."
git remote add bitbucket "$BITBUCKET_URL"

echo "Fetching Bitbucket branches..."
git fetch bitbucket

echo "Creating backup of Bitbucket 'dev' branch as '$BACKUP_NAME'..."
git push bitbucket bitbucket/dev:$BACKUP_NAME

echo "Resetting local 'dev' to GitHub's 'main' history..."
git checkout -B dev main

echo "Force-pushing new history to Bitbucket 'dev'..."
git push bitbucket dev --force

echo "Done!"
echo "✔ Bitbucket dev now uses GitHub main history"
echo "✔ Old Bitbucket dev preserved as $BACKUP_NAME"`} />
                
                <div className="mt-4 space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What This Script Does:</h4>
                    <ol className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                      <li>Clones GitHub repo with full history</li>
                      <li>Adds Bitbucket as a remote</li>
                      <li>Fetches all Bitbucket branches</li>
                      <li>Creates a timestamped backup of current Bitbucket dev</li>
                      <li>Resets local dev branch to GitHub main</li>
                      <li>Force-pushes new history to Bitbucket dev</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Important Notes:</h4>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Script does not touch Bitbucket master branch</li>
                      <li>• Old dev branch remains safely available as backup</li>
                      <li>• You can undo anytime by restoring the backup</li>
                    </ul>
                  </div>
                </div>
              </StepSection>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Best Practices */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">✓ DO</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Always create backups before force pushing</li>
                    <li>• Verify remotes with <code>git remote -v</code></li>
                    <li>• Test with a small repo first</li>
                    <li>• Document branch naming conventions</li>
                    <li>• Communicate with your team before migration</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">✗ DON'T</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Force push without creating backups</li>
                    <li>• Migrate without team notification</li>
                    <li>• Forget to verify all branches transferred</li>
                    <li>• Skip testing the migration process</li>
                    <li>• Delete your GitHub repository right after migrating to Bitbucket</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Common Commands</h3>
                  <div className="text-sm space-y-2 text-gray-700 dark:text-gray-300 font-mono">
                    <div className="text-xs text-gray-600 dark:text-gray-400">View all remotes:</div>
                    <div className="text-green-500">git remote -v</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">List all branches:</div>
                    <div className="text-green-500">git branch -a</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">Check current branch:</div>
                    <div className="text-green-500">git branch</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Troubleshooting</h3>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• If push fails: check repository permissions</li>
                    <li>• If branches missing: use <code>--all</code> flag</li>
                    <li>• If conflicts occur: fetch and review first</li>
                    <li>• If backup fails: verify remote access</li>
                    <li>• If history lost: check backup branches</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Pro tip: Always keep backups and test migrations on non-critical repositories first!
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}