import { useState, createContext, useContext } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Globe,
  Palette,
  Repeat,
  Layers,
  Lightbulb,
  Plug,
} from "lucide-react";

const CommandExplanation = ({ command, explanation, visual }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
          {command}
        </code>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Explanation:
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{explanation}</p>
          </div>
          {visual && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Example / Code:
              </h4>
              {visual}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const LaravelGraphQLGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={40} />
              <h1 className="text-4xl font-bold">Laravel GraphQL CRUD Using Lighthouse & Playground</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Complete step-by-step guide: install Lighthouse, configure Playground, define schema, run CRUD queries, and consume the GraphQL API.
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* 1. Installation */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  1. Installation & Basic Setup
                </h2>
              </div>

              <CommandExplanation
                command="Install Laravel & Lighthouse"
                explanation="Install Laravel (if not already) and add Lighthouse package. Then publish Lighthouse schema files."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Create project (if new)
composer create-project laravel/laravel graphql-demo
cd graphql-demo

# Install Lighthouse
composer require nuwave/lighthouse

# Publish schema (creates graphql/schema.graphql)
php artisan vendor:publish --tag=lighthouse-schema

# Optional: publish config
php artisan vendor:publish --tag=lighthouse-config`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Install Playground (IDE)"
                explanation="Lighthouse no longer includes a GUI by default. Install mll-lab package to get /graphql-playground UI."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`composer require mll-lab/laravel-graphql-playground

# Publish vendor if needed (usually not required)
php artisan vendor:publish --provider="MLL\\GraphQLPlayground\\GraphQLPlaygroundServiceProvider"

# Playground route: /graphql-playground (config in config/graphql-playground.php)`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 2. Folder Structure */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  2. Folder Structure (Relevant Files)
                </h2>
              </div>

              <CommandExplanation
                command="Recommended file layout"
                explanation="Minimal set of files you will work with for Lighthouse-based GraphQL CRUD."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`graphql-demo/
├── app/
│   └── Models/
│       └── Post.php
├── database/
│   └── migrations/
│       └── 2025_XX_XX_create_posts_table.php
├── graphql/
│   └── schema.graphql
├── routes/
│   └── graphql.php    # generated by Lighthouse
├── config/
│   └── lighthouse.php
│   └── graphql-playground.php
└── composer.json`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 3. Migration & Model */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  3. Migration & Eloquent Model
                </h2>
              </div>

              <CommandExplanation
                command="Make model + migration"
                explanation="Create Post model with migration and run migrations."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Create model + migration
php artisan make:model Post -m

# migration: database/migrations/xxxx_create_posts_table.php
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('content');
        $table->timestamps();
    });
}

# Run migration
php artisan migrate`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Model: app/Models/Post.php"
                explanation="Set fillable fields so create/update work via Lighthouse directives."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'content'];
}`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 4. GraphQL Schema */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="text-indigo-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  4. Define GraphQL Schema (graphql/schema.graphql)
                </h2>
              </div>

              <CommandExplanation
                command="Complete CRUD schema"
                explanation="Use Lighthouse directives to wire queries and mutations directly to Eloquent model."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`scalar DateTime

type Post {
  id: ID!
  title: String!
  content: String!
  created_at: DateTime
  updated_at: DateTime
}

type Query {
  posts: [Post!]! @all(model: "App\\Models\\Post")
  post(id: ID!): Post @find(model: "App\\Models\\Post")
}

type Mutation {
  createPost(title: String!, content: String!): Post @create(model: "App\\Models\\Post")
  updatePost(id: ID!, title: String, content: String): Post @update(model: "App\\Models\\Post")
  deletePost(id: ID!): Post @delete(model: "App\\Models\\Post")
}`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Add validation rules (optional)"
                explanation="Lighthouse supports @rules directive for simple validation."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`type Mutation {
  createPost(
    title: String! @rules(apply: ["required","min:3"]),
    content: String! @rules(apply: ["required"])
  ): Post @create(model: "App\\Models\\Post")
}`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 5. Playground & Config */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="text-pink-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  5. GraphQL Playground Setup & Secure it
                </h2>
              </div>

              <CommandExplanation
                command="Enable Playground route"
                explanation="The mll-lab package registers /graphql-playground. Check config to adjust route or protect it with middleware."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# config/graphql-playground.php
return [
  'route' => 'graphql-playground',    // or 'playground'
  'middleware' => ['web'],            // add 'auth' in production
  'endpoint' => '/graphql',
];

# In production add middleware:
'middleware' => ['web', 'auth'],`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Clear caches after schema changes"
                explanation="Always clear Lighthouse & framework caches after editing schema or config."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`php artisan lighthouse:clear-cache
php artisan config:clear
php artisan cache:clear
php artisan optimize:clear`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 6. Example GraphQL Operations */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  6. Example Operations (Playground)
                </h2>
              </div>

              <CommandExplanation
                command="Create (mutation with variables)"
                explanation="Use variables to keep queries clean and reusable."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Mutation (with variables)
mutation CreatePost($title: String!, $content: String!) {
  createPost(title: $title, content: $content) {
    id
    title
    content
  }
}

# Variables
{
  "title": "Hello from Playground",
  "content": "This is a GraphQL-created post"
}`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Read all & single"
                explanation="Query for all posts or a single post by id."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# All posts
query {
  posts {
    id
    title
    content
  }
}

# Single post (variables)
query GetPost($id: ID!) {
  post(id: $id) {
    id
    title
    content
  }
}
# Variables: { "id": 2 }`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Update & Delete"
                explanation="Update uses @update directive, delete returns the deleted model instance."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Update
mutation UpdatePost($id: ID!, $title: String, $content: String) {
  updatePost(id: $id, title: $title, content: $content) {
    id
    title
    content
  }
}

# Delete
mutation DeletePost($id: ID!) {
  deletePost(id: $id) {
    id
    title
  }
}`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Pagination (using @paginate)"
                explanation="Change schema to use @paginate and query the paginated structure."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Schema change:
# posts: [Post!]! @all -> posts: PostPaginator @paginate(type: "paginator", model: "App\\Models\\Post")

# Query:
query {
  posts(first: 5, page: 1) {
    data { id title }
    paginatorInfo { total currentPage lastPage }
  }
}`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 7. Consume GraphQL (clients) */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  7. Consuming the GraphQL Endpoint
                </h2>
              </div>

              <CommandExplanation
                command="Fetch / Axios (JS)"
                explanation="Simple POST requests to /graphql with a JSON body containing query and variables."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`// fetch
fetch("http://localhost:8000/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "query { posts { id title } }" })
}).then(r=>r.json()).then(console.log);

// axios
import axios from 'axios';
axios.post('/graphql', { query: 'query { posts { id title } }' })
  .then(res => console.log(res.data));`}
                  </pre>
                }
              />

              <CommandExplanation
                command="React + Apollo Client"
                explanation="Use @apollo/client for a reactive frontend. Configure URI to /graphql."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

// In components use useQuery / useMutation from @apollo/client`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Laravel HTTP client (server->server)"
                explanation="Use Http::post to call your GraphQL endpoint from Laravel if needed."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`use Illuminate\Support\Facades\Http;

$response = Http::post('http://localhost:8000/graphql', [
  'query' => 'query { posts { id title } }'
]);

$data = $response->json();`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* 8. Troubleshooting */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Plug className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  8. Troubleshooting Common Errors
                </h2>
              </div>

              <CommandExplanation
                command="Error: 'Cannot query field `post` on type `Query`.'"
                explanation="Means schema has no `post` field. Add `post(id: ID!): Post @find(model: 'App\Models\Post')` to schema and clear Lighthouse cache."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Fix by adding to graphql/schema.graphql
type Query {
  posts: [Post!]! @all(model: "App\\Models\\Post")
  post(id: ID!): Post @find(model: "App\\Models\\Post")
}

# Then:
php artisan lighthouse:clear-cache
php artisan optimize:clear`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Error: 'The query returned more than one result.'"
                explanation="This happens when your 'post' resolver returns a collection. Ensure `post` uses @find and not @all or a custom resolver that returns multiple rows."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Ensure schema line is:
post(id: ID!): Post @find(model: "App\\Models\\Post")

# If custom resolver exists, return a single model:
public function __invoke($_, array $args) {
  return \\App\\Models\\Post::find($args['id']);
}`}
                  </pre>
                }
              />

              <CommandExplanation
                command="Error: 'Would modify all models, use an argument to filter.'"
                explanation="Happens when @delete cannot map an identifying arg (id). Ensure the mutation accepts id: ID! and @delete has the model set."
                visual={
                  <pre className="text-sm font-mono text-gray-700">
{`# Correct mutation signature:
type Mutation {
  deletePost(id: ID!): Post @delete(model: "App\\Models\\Post")
}

# If using custom delete resolver, ensure it filters by id:
public function __invoke($_, array $args) {
  return \\App\\Models\\Post::find($args['id'])->delete();
}`}
                  </pre>
                }
              />
            </section>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Summary
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Install <code>nuwave/lighthouse</code> and publish the schema.</li>
                <li>Install <code>mll-lab/laravel-graphql-playground</code> to get a GUI at <code>/graphql-playground</code>.</li>
                <li>Use Lighthouse directives (@all, @find, @create, @update, @delete) with explicit <code>model</code> to avoid ambiguity.</li>
                <li>Always clear Lighthouse cache after schema changes: <code>php artisan lighthouse:clear-cache</code>.</li>
                <li>Protect the Playground in production by adding middleware (e.g. <code>auth</code>).</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LaravelGraphQLGuide;
