import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg">
        <nav className="px-4 lg:px-6 h-16">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full">
            {/* Logo va Search Container */}
            <Link to="/" className="flex items-center space-x-2 flex-1 max-w-[55%]">
              <div className="w-8 h-8 rounded-full">
                <img src="/logo.png" alt="Website logo" />
              </div>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                GameVault
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-14">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/games" className="text-gray-300 hover:text-white transition-colors">Games</Link>
              <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#111]/95 backdrop-blur-md border-t border-gray-800 shadow-xl z-50">
              <div className="px-4 py-3">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                  <Link to="/games" className="text-gray-300 hover:text-white transition-colors">Games</Link>
                  <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;