import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
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
          <nav className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/vite-explanation"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Vite
            </Link>
            <Link
              to="/web-services-explanation"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Web Services
            </Link>
            <Link
              to="/webhook"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Webhook
            </Link>
            <Link
              to="/gitflow-workflow"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Gitflow Workflow
            </Link>
            <Link
              to="/ci-4"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              CodeIgniter 4
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
          <Link
            to="/vite-explanation"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Vite
          </Link>
          <Link
            to="/web-services-explanation"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Web Services
          </Link>
          <Link
            to="/webhook"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Webhook
          </Link>
          <Link
            to="/gitflow-workflow"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Gitflow Workflow
          </Link>
          <Link
            to="/ci-4"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            CodeIgniter 4
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;