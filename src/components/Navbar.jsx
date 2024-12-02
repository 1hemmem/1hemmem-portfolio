import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-zinc-900 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="text-white font-bold text-lg">1hemmem</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link to="/Projects" className="text-gray-400 hover:text-white">
            Projects
          </Link>
          <Link to="/Blogs" className="text-gray-400 hover:text-white">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};
