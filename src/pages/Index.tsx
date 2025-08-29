// src/pages/Index.tsx
import Header from "@/components/layout/Header";
import { FaReact, FaNodeJs, FaLaravel, FaPython, FaDatabase, FaDocker } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const techStacks = [
    { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-600 text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-600 text-5xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-24">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
            🚀 Learn. Build. Grow.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Master the modern tech stacks that power today’s world.  
            Stay motivated, keep building, and upgrade your skills every day!
          </p>
        </div>

        {/* Tech Stacks Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition"
            >
              {tech.icon}
              <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;