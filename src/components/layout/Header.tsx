import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, LogOut, ChevronDown } from "lucide-react";
import { useSession } from "@/integrations/supabase/session-context";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<{ [key: string]: boolean }>({});
  const { session } = useSession();
  const headerRef = useRef<HTMLDivElement>(null);

  // --- Handle logout ---
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
    setMenuOpen({});
  };

  // --- Toggle submenu ---
  const toggleSubMenu = (menu: string) => {
    setMenuOpen((prev) => {
      const allClosed = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as { [key: string]: boolean });

      return { ...allClosed, [menu]: !prev[menu] };
    });
  };

  // --- Close menu when clicked outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setMenuOpen({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo/logo_dark.png"
              alt="CodeElevate Logo"
              className="h-14 w-auto rounded-md p-0"
            />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              CodeElevate
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Home
            </Link>

            {/* DevOps & Integrations Menu */}
            <div className="relative">
              <button
                onClick={() => toggleSubMenu("development")}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <span>DevOps & Integrations</span>
                <ChevronDown size={16} />
              </button>
              {menuOpen["development"] && (
                <div className="absolute mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                  <Link
                    to="/vite-explanation"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Vite
                  </Link>
                  <Link
                    to="/web-services-explanation"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Web Services
                  </Link>
                  <Link
                    to="/webhook"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Webhook
                  </Link>
                  <Link
                    to="/ssl-guide-lets-encrypt"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    SSL - Let's Encrypt
                  </Link>
                </div>
              )}
            </div>

            {/* Laravel Menu */}
            <div className="relative">
              <button
                onClick={() => toggleSubMenu("laravel")}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <span>Laravel</span>
                <ChevronDown size={16} />
              </button>
              {menuOpen["laravel"] && (
                <div className="absolute mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                  <Link
                    to="/laravel-concepts"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Laravel Concepts
                  </Link>
                  <Link
                    to="/laravel-utility-class"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Utility Classes
                  </Link>
                  <Link
                    to="/laravel-queue-worker-guide"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Queue Worker Guide
                  </Link>
                </div>
              )}
            </div>

            {/* Git Menu */}
            <div className="relative">
              <button
                onClick={() => toggleSubMenu("git")}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <span>Git</span>
                <ChevronDown size={16} />
              </button>
              {menuOpen["git"] && (
                <div className="absolute mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                  <Link
                    to="/git-commands-reference"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Git Commands
                  </Link>
                  <Link
                    to="/gitflow-workflow"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Gitflow Workflow
                  </Link>
                  <Link
                    to="/git-conflict-resolution"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Git Conflict Resolution
                  </Link>
                  <Link
                    to="/git-prune-branches"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Clean Up Stale Branches
                  </Link>
                  <Link
                    to="/pr-scenarios-guide"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    PR Scenarios Guide
                  </Link>
                  <Link
                    to="/bitbucket-draft-pr-guide"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Bitbucket Draft PR Guide
                  </Link>
                  <Link
                    to="/git-commit-am-guide"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Fix Unintended Commits
                  </Link>
                  <Link
                    to="/git-feature-branch-rebase"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Feature Branch Management
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/ci-4"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              CodeIgniter
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Contact
            </Link>

            {session ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Repeat grouped menus for mobile */}
          <div>
            <button
              onClick={() => toggleSubMenu("development")}
              className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              DevOps & Integrations <ChevronDown size={16} />
            </button>
            {menuOpen["development"] && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/vite-explanation"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Vite
                </Link>
                <Link
                  to="/web-services-explanation"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Web Services
                </Link>
                <Link
                  to="/webhook"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Webhook
                </Link>
                <Link
                  to="/ssl-guide-lets-encrypt"
                  onClick={() => setIsOpen(false)}
                >
                  SSL / HTTPS
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSubMenu("laravel")}
              className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Laravel <ChevronDown size={16} />
            </button>
            {menuOpen["laravel"] && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/laravel-concepts"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Laravel Concepts
                </Link>
                <Link
                  to="/laravel-utility-class"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Utility Classes
                </Link>
                <Link
                  to="/laravel-queue-worker-guide"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Queue Worker Guide
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSubMenu("git")}
              className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Git <ChevronDown size={16} />
            </button>
            {menuOpen["git"] && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/git-commands-reference"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Git Commands
                </Link>
                <Link
                  to="/gitflow-workflow"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Gitflow Workflow
                </Link>
                <Link
                  to="/git-conflict-resolution"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Git Conflict Resolution
                </Link>
                <Link
                  to="/git-prune-branches"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Clean Up Stale Branches
                </Link>
                <Link
                  to="/pr-scenarios-guide"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  PR Scenarios Guide
                </Link>
                <Link
                  to="/bitbucket-draft-pr-guide"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Bitbucket Draft PR Guide
                </Link>
                <Link
                  to="/git-commit-am-guide"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Fix Unintended Commits
                </Link>
                <Link 
                  to="/git-feature-branch-rebase"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Feature Branch Management
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/ci-4"
            className="block text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            CodeIgniter
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {session ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
