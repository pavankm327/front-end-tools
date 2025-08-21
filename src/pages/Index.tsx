import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Let's understand how vite works!
        </p>
        <Link to="/vite-explanation">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Learn About Vite
          </Button>
        </Link>
      </div>
      // <MadeWithDyad />
    </div>
  );
};

export default Index;