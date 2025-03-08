import { useEffect, useState } from "react";
import image from "../assets/hemmem.jpg";
export default function NavBar() {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (path) => path === activePath;

  return (
    <nav className="flex justify-between text-base font-semibold p-3 mx-2 border-b-1">
      <a href="/">
        <div className="flex justify-start items-center">
          <img
            src={image?.src}
            loading="lazy"
            className="rounded-full w-6 mr-2 hover:border"
            alt="Hemmem's profile picture"
          />
          <p> 1hemmem</p>
        </div>
      </a>
      <div className="flex justify-end gap-5">
        <a
          href="/"
          className={`hover:text-gray-400 hover:underline transition-colors duration-500 ${
            isActive("/") ? "font-bold text-white underline" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/projects"
          className={`hover:text-gray-400 hover:underline transition-colors duration-500 ${
            isActive("/projects") ? "font-bold text-white underline" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="/blogs"
          className={`hover:text-gray-400 hover:underline transition-colors duration-500 ${
            isActive("/blogs") ? "font-bold text-white underline" : ""
          }`}
        >
          Blogs
        </a>
      </div>
    </nav>
  );
}
