import { useNavigate } from "react-router-dom";

export const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-4 px-4">
      <h1 className="text-4xl font-bold text-white">No Blogs Yet</h1>
      <p className="text-gray-300 text-lg">
        I&apos;m currently working on creating engaging content for you. Stay tuned for updates!
      </p>
      <div className="mt-4">
        <button
          className="px-6 py-2 bg-zinc-800 text-white font-semibold rounded-md shadow-md hover:bg-zinc-700 transition-colors"
          onClick={() => navigate("/")}
        >
          Go back to home page
        </button>
      </div>
      <div className="absolute bottom-4 text-gray-500 text-sm">
        Meanwhile, check back later for some exciting posts!
      </div>
    </div>
  );
};
