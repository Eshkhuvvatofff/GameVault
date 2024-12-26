import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchExpanded(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Headerning balandligiga teng bo'lgan placeholder div */}
      <div className="h-16"></div>

      <header className="bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg">
        <nav className="px-4 lg:px-6 h-16">
          <div className="max-w-screen-xl mx-auto gap-10 flex items-center justify-center h-full">
            {/* Logo va Search Container */}
            <div className="flex items-center flex-1 max-w-[55%]">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8rounded-full">
                  <img src="/logo.png" alt="Webstite logo" />
                </div>
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  GameVault
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered when search is closed */}
            <div className={`hidden lg:flex items-center transition-all duration-300`}>
              <div className="flex items-center space-x-14">
                <Link to="/" className="text-gray-300 hover:text-white nav-link transition-colors">
                  Home
                </Link>
                <Link to="/games" className="text-gray-300 hover:text-white nav-link transition-colors">
                  Games
                </Link>
                <Link to="/categories" className="text-gray-300 hover:text-white nav-link transition-colors">
                  Categories
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-white nav-link transition-colors">
                  About
                </Link>
              </div>
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
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link to="/games" className="text-gray-300 hover:text-white transition-colors">
                    Games
                  </Link>
                  <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">
                    Categories
                  </Link>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
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