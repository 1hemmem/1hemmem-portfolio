import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggleTheme}
      className="p-2 dark:bg-zinc-900 transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="text-white" size={20} />
      ) : (
        <Moon className="text-gray-500" size={20} />
      )}
    </button>
  );
};

export default DarkModeToggle;
