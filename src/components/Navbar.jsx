import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto flex justify-between items-center px-4 bg-zinc-900 py-4">
      <div className="text-white font-bold text-lg"><a href="/">Hemmem CH.</a></div>
      <div className="space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-gray-400 hover:text-white hover:font-bold ${isActive ? 'font-bold text-white' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/Projects" 
          className={({ isActive }) => 
            `text-gray-400 hover:text-white hover:font-bold ${isActive ? 'font-bold text-white' : ''}`
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to="/Blogs" 
          className={({ isActive }) => 
            `text-gray-400 hover:text-white hover:font-bold ${isActive ? 'font-bold text-white' : ''}`
          }
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};