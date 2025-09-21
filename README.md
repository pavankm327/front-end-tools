# CodeElevate

Welcome to CodeElevate, your platform to learn, build, and grow by mastering modern tech stacks. This application is designed to help you upgrade your skills with practical explanations and examples.

## Project Overview

This is a React application built with TypeScript, utilizing React Router for navigation and styled with Tailwind CSS and `shadcn/ui` components for a modern and responsive user interface.

The project integrates **Supabase** for backend services, including robust authentication.

## Key Features

*   **Comprehensive Learning Content:** Explore detailed explanations on various tech topics (e.g., Vite, Web Services, Webhooks, Git workflows, CodeIgniter 4).
*   **Responsive Design:** Built with Tailwind CSS and `shadcn/ui` for a seamless experience across all devices.
*   **Supabase Integration:** Secure and scalable backend services.

## Authentication

The following authentication methods are currently implemented and working:

*   **OAuth Providers:**
    *   Google
    *   GitHub
    *   Bitbucket
*   **Email/Password:**
    *   User Signup
    *   User Login

## Getting Started

To run this project locally:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Set up Supabase Environment Variables:**
    Create a `.env` file in the root of your project and add your Supabase URL and Anon Key:
    ```
    VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```
3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:8080`.