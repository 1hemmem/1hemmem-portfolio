import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto flex justify-between items-center px-4 dark:bg-zinc-900 py-4">
      <div className="dark:text-white font-bold text-lg"><a href="/">Hemmem CH.</a></div>
      <div className="space-x-4">
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
      </div>
    </nav>
  );
};