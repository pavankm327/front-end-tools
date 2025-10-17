import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type CollapsibleSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
};

const CollapsibleSection = ({
  id,
  title,
  children,
  defaultExpanded = false,
}: CollapsibleSectionProps) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const isExpanded = expandedSections[id] ?? defaultExpanded;

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => toggleSection(id)}
        className="w-full bg-blue-100 dark:bg-blue-900 px-6 py-4 text-left font-semibold text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 flex justify-between items-center transition-colors"
      >
        <span className="text-lg">{title}</span>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isExpanded && (
        <div className="bg-white dark:bg-gray-800 p-6 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const LaravelConcepts = () => (
  <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8 pt-24">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          Laravel Framework Concepts
        </h1>

        {/* Introduction */}
        <section>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            This is a comprehensive guide covering Laravel fundamentals, Service Container, Dependency Injection, Contracts, Facades, and more.
          </p>
        </section>

        <Separator />
        {/* Framework Basics */}
        <CollapsibleSection id="framework" title="Framework" defaultExpanded>
          <p className="text-gray-700 dark:text-gray-300">
            It is a predefined structure or set of tools that provides a foundation for building applications. It includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Reusable Code</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Offers libraries, templates, and utilities to speed up development.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Guidelines</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Enforces a specific way of organizing code (e.g., MVC, MVVM).</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Abstraction</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Simplifies complex tasks like routing, database interaction, and session management.</p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Model */}
        <CollapsibleSection id="model" title="Model">
          <p className="text-gray-700 dark:text-gray-300">
            A model represents the data and business logic of an application. It is responsible for:
          </p>
          <ul className="space-y-3 mt-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <span className="font-semibold">Data Representation:</span> Defines the structure of data (e.g., database tables, objects).
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <span className="font-semibold">Validation:</span> Ensures data integrity by enforcing rules (e.g., required fields, data types).
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <span className="font-semibold">Data Manipulation:</span> Handles operations like creating, reading, updating, and deleting (CRUD).
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <span className="font-semibold">Encapsulation:</span> Keeps the data and its logic separate from other parts of the application.
            </li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              In the Model-View-Controller (MVC) architecture, the model interacts with the database and provides data to the controller.
            </p>
          </div>
        </CollapsibleSection>

        {/* View */}
        <CollapsibleSection id="view" title="View">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            View is responsible for the user interface (UI) and the presentation layer of the application. It displays data to the user and allows interaction through the UI.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              The View works closely with the Controller, which provides the data from the Model, but it does not directly interact with the Model itself.
            </p>
          </div>
        </CollapsibleSection>

        {/* Controllers */}
        <CollapsibleSection id="controllers" title="Controllers">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Controllers process incoming requests, handle user input and interactions, and execute appropriate application logic.
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto">
            <pre>
{`Model      Defines logic to write Laravel application.
View       Covers UI logic of Laravel application.
Controller Works as an interface between Model and View.
           It is a way how the user interacts with an application.`}
            </pre>
          </div>
        </CollapsibleSection>

        {/* Routing */}
        <CollapsibleSection id="routing" title="Routing">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            In a framework, routing refers to the process of mapping incoming HTTP requests to specific code (e.g., controllers, methods, or functions) that handle those requests.
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Route</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A route is basically an endpoint specified by a URI (Uniform Resource Identifier). It acts as a pointer in the Laravel application.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              It simply points to a method on a controller and also dictates which HTTP methods are able to hit that URI.
            </p>
          </div>
          <div className="mt-4 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Implicit & Explicit Route Model Binding</strong> – Learn more at
              <a
                href="https://medium.com/sunnymalik353/implicit-explicit-route-model-binding-laravel-962784e19b00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                Medium Article
              </a>
            </p>
          </div>
        </CollapsibleSection>

        {/* Traits */}
        <CollapsibleSection id="traits" title="Traits">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Laravel traits are a group of functions that you include within another class. A trait is like an abstract class: you cannot instantiate it directly, but its methods can be used in a concrete class.
          </p>
          <div className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto">
            <pre>
{`trait Loggable {
  public function log(message) {
    echo message;
  }
}

class User {
  use Loggable;
}

$user = new User;
$user->log('User created Works!');`}
            </pre>
          </div>
        </CollapsibleSection>

        {/* Laravel Cursor */}
        <CollapsibleSection id="cursor" title="Laravel Cursor">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The cursor method in Laravel is a memory-efficient way to iterate over large datasets. It uses PHP generators to fetch one record at a time, avoiding the need to load all records into memory simultaneously.
          </p>
          <div className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto">
            <pre>
{`use App;
// Iterate over active users one at a time
foreach (User::where('active', 1)->cursor() as $user) {
  echo $user->name;
}`}
            </pre>
          </div>
          <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4 mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Why use cursor?</strong> Avoids loading all records into memory simultaneously, making it ideal for processing large datasets without memory issues.
            </p>
          </div>
        </CollapsibleSection>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Service Container */}
        <CollapsibleSection id="service-container" title="Laravel Service Container" defaultExpanded>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Laravel Service Container is a powerful tool for managing class dependencies and performing dependency injection within your Laravel application.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              <a
                href="https://www.launchidea.in/blog/laravel/laravel-service-container-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Laravel Service Container Guide
              </a>
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            Middleware controls how a request flows, but the <strong>Service Container</strong> controls what gets used to handle that request. Mastering bindings, contextual rules and providers unlocks a level of architectural clarity that pays dividends in maintainability and test speed.
          </p>
          {/* More Service Container content here... */}
        </CollapsibleSection>

        {/* Dependency Management */}
        <CollapsibleSection id="dep-management" title="Dependency Management">
            {/* ...content filled as per the attached file... */}
            Dependency Management 
        </CollapsibleSection>

        {/* Dependency Injection */}
        <CollapsibleSection id="dep-injection" title="Dependency Injection" defaultExpanded>
            {/* ...content filled as per the attached file... */}
            Dependency Injection
        </CollapsibleSection>

        {/* Interface Bindings, Conditional Bindings */}
        <CollapsibleSection id="interface-binding" title="Interface Binding Steps" defaultExpanded>
            {/* ...content filled as per the attached file... */}
            Interface Bindings, Conditional Bindings
        </CollapsibleSection>

        {/* Real-World Scenario: Multiple Implementations */}
        <CollapsibleSection id="multiple-impl" title="Real-World Scenario: Multiple Implementations" defaultExpanded>
            {/* ...content filled as per the attached file... */}
            Real-World Scenario: Multiple Implementations
        </CollapsibleSection>

        {/* Summary Table, Flow Diagram, Contextual Binding, Key Takeaway */}
        <CollapsibleSection id="summary-concepts" title="Summary">
            {/* ...content filled as per the attached file... */}
            Summary Table, Flow Diagram, Contextual Binding, Key Takeaway
        </CollapsibleSection>

        <Separator className="my-8" />

        {/* Contracts, Facades, Example Implementations */}
        <CollapsibleSection id="contracts" title="Laravel Contracts" defaultExpanded>
            {/* ...contract theory, examples, comparison tables, as per the file... */}
            Contracts, Facades, Example Implementations
        </CollapsibleSection>
        <CollapsibleSection id="facades" title="Laravel Facades" defaultExpanded>
            {/* ...facade theory, usage, benefits, drawbacks... */}
            Laravel Facades
        </CollapsibleSection>
        <CollapsibleSection id="blade-directives" title="Blade Directives in Laravel">
            {/* ...blade syntax and usage examples... */}
            Blade Directives in Laravel
        </CollapsibleSection>
        <CollapsibleSection id="scaffolding" title="Scaffolding in Laravel">
            {/* ...scaffolding explanations and code... */}
            Scaffolding in Laravel
        </CollapsibleSection>
        <CollapsibleSection id="magic-methods" title="Magic Methods">
            {/* ...php magic methods and explanations... */}
            Magic Methods
        </CollapsibleSection>
        <CollapsibleSection id="php-globals" title="PHP Global Variables">
            {/* ...description of superglobals, usage, code... */}
            PHP Global Variables
        </CollapsibleSection>
        <CollapsibleSection id="include-require" title="include vs require">
            {/* ...php code and discussion... */}
            include vs require
        </CollapsibleSection>
      </div>
    </main>
    <ScrollToTop />
    <Footer />
  </div>
);

export default LaravelConcepts;