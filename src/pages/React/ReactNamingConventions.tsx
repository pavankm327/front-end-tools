import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown, ChevronUp, FileCode, FolderOpen, CheckCircle, XCircle, Lightbulb, Layout, Code2, Package, Settings } from 'lucide-react';

const CommandExplanation = ({ title, explanation, examples, icon: Icon, goodExamples, badExamples }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />}
          <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{title}</span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Convention:</h4>
            <p className="text-gray-700 dark:text-gray-300">{explanation}</p>
          </div>
          
          {examples && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Examples:</h4>
              <div className="font-mono text-xs space-y-1 text-gray-600 dark:text-gray-400">
                {examples.map((example, idx) => (
                  <div key={idx}>{example}</div>
                ))}
              </div>
            </div>
          )}

          {(goodExamples || badExamples) && (
            <div className="grid md:grid-cols-2 gap-4">
              {goodExamples && (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={18} className="text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold text-green-900 dark:text-green-300">Good</h4>
                  </div>
                  <div className="font-mono text-xs space-y-1 text-green-700 dark:text-green-300">
                    {goodExamples.map((example, idx) => (
                      <div key={idx}>✓ {example}</div>
                    ))}
                  </div>
                </div>
              )}

              {badExamples && (
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle size={18} className="text-red-600 dark:text-red-400" />
                    <h4 className="font-semibold text-red-900 dark:text-red-300">Bad</h4>
                  </div>
                  <div className="font-mono text-xs space-y-1 text-red-700 dark:text-red-300">
                    {badExamples.map((example, idx) => (
                      <div key={idx}>✗ {example}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function ReactNamingConventions() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <FileCode size={40} />
              <h1 className="text-4xl font-bold">React Naming Conventions</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Master file and folder naming conventions for clean, maintainable React projects
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  Consistent naming conventions improve code readability, make navigation easier, and help teams 
                  collaborate more effectively. React projects follow specific patterns to distinguish between 
                  components, utilities, and other file types.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Component Files & Folders */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Layout className="text-blue-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Component File & Folder Names</h2>
              </div>
              
              <CommandExplanation
                title="PascalCase (UpperCamelCase)"
                icon={FileCode}
                explanation="Use PascalCase for React components and their folders. Components are treated like classes and should be easily distinguishable from regular JavaScript functions or variables."
                examples={[
                  '/src/components/',
                  '    Button/',
                  '        Button.jsx',
                  '        Button.css',
                  '    UserProfile/',
                  '        UserProfile.jsx',
                  '        UserProfile.module.css',
                ]}
                goodExamples={[
                  'UserProfile.jsx',
                  'LoginForm.jsx',
                  'NavigationBar.jsx',
                  'ProductCard.jsx'
                ]}
                badExamples={[
                  'userProfile.jsx',
                  'login_form.jsx',
                  'navigationbar.jsx',
                  'product-card.jsx'
                ]}
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Non-Component Files */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-purple-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Non-Component Files</h2>
              </div>
              
              <CommandExplanation
                title="camelCase for Utilities & Hooks"
                icon={Settings}
                explanation="Use camelCase for utility functions, hooks, and non-component JavaScript files. kebab-case (lowercase with hyphens) is also acceptable for generic assets like images, JSON, or markdown files."
                examples={[
                  '/src/utils/',
                  '    formatDate.js',
                  '    apiHelper.js',
                  '    validateForm.js',
                  '',
                  '/src/hooks/',
                  '    useAuth.js',
                  '    useFetch.js',
                  '    useLocalStorage.js',
                ]}
                goodExamples={[
                  'formatDate.js',
                  'useAuth.js',
                  'apiClient.js',
                  'storage-utils.js'
                ]}
                badExamples={[
                  'FormatDate.js',
                  'UseAuth.js',
                  'API_Client.js',
                  'storage_utils.js'
                ]}
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Folder Naming */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FolderOpen className="text-green-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Folder Naming Rules</h2>
              </div>
              
              <CommandExplanation
                title="Component Folders: PascalCase"
                icon={FolderOpen}
                explanation="If the folder contains a single component, use PascalCase (same as the component name). This creates a clear 1-to-1 relationship between folder and component."
                examples={[
                  '/src/components/',
                  '    Button/',
                  '        Button.jsx',
                  '        Button.test.js',
                  '        Button.styles.css',
                  '',
                  '    UserProfile/',
                  '        UserProfile.jsx',
                  '        UserProfile.module.css',
                ]}
                goodExamples={[
                  'Button/',
                  'UserProfile/',
                  'NavigationBar/',
                  'ProductCard/'
                ]}
                badExamples={[
                  'button/',
                  'user-profile/',
                  'navigationBar/',
                  'product_card/'
                ]}
              />

              <CommandExplanation
                title="Generic Folders: camelCase/kebab-case"
                icon={Package}
                explanation="If the folder is generic (e.g., assets, hooks, services), use camelCase or kebab-case. These folders contain multiple unrelated files rather than a single component."
                examples={[
                  '/src/',
                  '    hooks/',
                  '        useFetch.js',
                  '        useAuth.js',
                  '',
                  '    services/',
                  '        apiClient.js',
                  '        authService.js',
                  '',
                  '    user-data/',
                  '        profile.json',
                  '        settings.json',
                ]}
                goodExamples={[
                  'hooks/',
                  'services/',
                  'utils/',
                  'user-data/',
                  'api-endpoints/'
                ]}
                badExamples={[
                  'Hooks/',
                  'Services/',
                  'Utils/',
                  'UserData/',
                  'API_Endpoints/'
                ]}
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary Table */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quick Reference Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-gray-100">Item Type</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-gray-100">Recommended Case</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-gray-100">Example</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">React Component File</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">PascalCase</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-mono text-gray-600 dark:text-gray-400">UserProfile.jsx</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-750">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Component Folder</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">PascalCase</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-mono text-gray-600 dark:text-gray-400">UserProfile/</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Utility/Helper File</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">camelCase</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-mono text-gray-600 dark:text-gray-400">formatDate.js</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-750">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Hook File</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">camelCase</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-mono text-gray-600 dark:text-gray-400">useAuth.js</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Generic Folder</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <code className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">kebab-case/camelCase</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-mono text-gray-600 dark:text-gray-400">services/ or user-data/</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Best Practices */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">✓ DO</h3>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Keep component name = file name = folder name</li>
                    <li>• Use PascalCase for all React components</li>
                    <li>• Use camelCase for hooks (start with "use")</li>
                    <li>• Be consistent across your entire project</li>
                    <li>• Group related files in component folders</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">✗ DON'T</h3>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Mix naming conventions (Button.jsx + userProfile.jsx)</li>
                    <li>• Use snake_case for React files</li>
                    <li>• Use kebab-case for component names</li>
                    <li>• Name file differently from component</li>
                    <li>• Use abbreviations that aren't clear</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500 md:col-span-2">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Golden Rule</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Keep component name = file name = folder name for clarity.</strong>
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs space-y-1">
                    <div className="text-gray-500 dark:text-gray-400">Example Structure:</div>
                    <div className="text-blue-600 dark:text-blue-400">Button/</div>
                    <div className="text-green-600 dark:text-green-400 ml-4">Button.jsx → exports Button component</div>
                    <div className="text-yellow-600 dark:text-yellow-400 ml-4">Button.test.js</div>
                    <div className="text-purple-600 dark:text-purple-400 ml-4">Button.module.css</div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Example Project Structure */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Example Project Structure</h2>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
                <pre className="font-mono text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`/src
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── Button.test.js
│   ├── UserProfile/
│   │   ├── UserProfile.jsx
│   │   └── UserProfile.styles.js
│   └── NavigationBar/
│       ├── NavigationBar.jsx
│       └── NavigationBar.css
│
├── hooks/
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useLocalStorage.js
│
├── services/
│   ├── apiClient.js
│   └── authService.js
│
├── utils/
│   ├── formatDate.js
│   ├── validateForm.js
│   └── constants.js
│
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   └── hero-banner.jpg
│   └── styles/
│       └── global.css
│
└── App.jsx`}
                </pre>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            💡 Pro tip: Consistency is key! Pick a convention and stick with it throughout your entire project.
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}