import { useEffect, useState } from "react";

export default function NavBar() {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (path) => path === activePath;

  return (
    <nav className=" flex items-center justify-center gap-x-6 text-lg md:text-xl font-semibold p-5">
      <a
        href="/"
        className={`hover:text-[#87c19c] transition-colors duration-300 ${isActive("/") ? "font-bold text-[#16a34a]" : ""
          }`}
      >
        Home
      </a>
      <a
        href="/projects"
        className={`hover:text-gray-800 transition-colors duration-300 ${isActive("/projects") ? "font-bold text-[#16a34a]" : ""
          }`}
      >
        Projects
      </a>      
      <a
        href="/blogs"
        className={`hover:text-gray-800 transition-colors duration-300 ${isActive("/blogs") ? "font-bold text-[#16a34a]" : ""
          }`}
      >
        Blogs
      </a>
    </nav>
  );
}
