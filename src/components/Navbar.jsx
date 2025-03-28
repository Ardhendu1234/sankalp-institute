import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar({ toggleTheme, theme }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass text-white p-4 sticky top-0 z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-2xl">Sankalp Institute</h1>
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
          <div className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-indigo-900 md:bg-transparent p-4 md:p-0`}>
            <Link to="/" className={`block md:inline hover:text-yellow-300 transition duration-300 font-semibold ${location.pathname === '/' ? 'text-yellow-300' : ''}`}>Home</Link>
            <Link to="/about" className={`block md:inline hover:text-yellow-300 transition duration-300 font-semibold ${location.pathname === '/about' ? 'text-yellow-300' : ''}`}>About</Link>
            <Link to="/courses" className={`block md:inline hover:text-yellow-300 transition duration-300 font-semibold ${location.pathname === '/courses' ? 'text-yellow-300' : ''}`}>Courses</Link>
            <Link to="/contact" className={`block md:inline hover:text-yellow-300 transition duration-300 font-semibold ${location.pathname === '/contact' ? 'text-yellow-300' : ''}`}>Contact</Link>
            <Link to="/blog" className={`block md:inline hover:text-yellow-300 transition duration-300 font-semibold ${location.pathname === '/blog' ? 'text-yellow-300' : ''}`}>Blog</Link>
          </div>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;