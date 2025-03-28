import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ toggleTheme, theme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="w-5 h-5" />
      ) : (
        <FaSun className="w-5 h-5" />
      )}
    </button>
  );
}

export default ThemeToggle;