import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto flex justify-between items-center px-2 py-4 bg-gray-100 dark:bg-zinc-900">
      {/* Logo Section */}
      <div className="font-bold text-lg dark:text-white">
        <a href="/">Hemmem CH.</a>
      </div>
      
      {/* Navigation Links and Dark Mode Toggle */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `dark:text-gray-400 dark:hover:text-white hover:font-bold ${isActive ? 'font-bold dark:text-white' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/Projects" 
          className={({ isActive }) =>
            `dark:text-gray-400 dark:hover:text-white hover:font-bold ${isActive ? 'font-bold dark:text-white' : ''}`
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to="/Blogs" 
          className={({ isActive }) =>
            `dark:text-gray-400 dark:hover:text-white hover:font-bold ${isActive ? 'font-bold dark:text-white' : ''}`
          }
        >
          Blogs
        </NavLink>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>
    </nav>
  );
};
