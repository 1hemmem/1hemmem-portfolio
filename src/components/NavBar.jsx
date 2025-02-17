import { useEffect, useState } from "react";

export default function NavBar() {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (path) => path === activePath;

  return (
    <div className="flex items-center justify-between">
      <nav className="flex justify-start gap-x-6 text-base font-semibold p-3">
        <a
          href="/"
          className={`hover:text-gray-800 hover:underline transition-colors duration-500 ${isActive("/") ? "font-bold text-black underline" : ""
            }`}
        >
          Home
        </a>
        <a
          href="/projects"
          className={`hover:text-gray-800 hover:underline transition-colors duration-500 ${isActive("/projects") ? "font-bold text-black underline" : ""
            }`}
        >
          Projects
        </a>
        <a
          href="/blogs"
          className={`hover:text-gray-800 hover:underline transition-colors duration-500 ${isActive("/blogs") ? "font-bold text-black underline" : ""
            }`}
        >
          Blogs
        </a>
      </nav>
      <div className=" justify-end gap-x-6 text-base">
            {/* icon */}
      </div>
    </div>
  );
}
