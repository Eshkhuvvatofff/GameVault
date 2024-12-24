import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './head.css'

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
      
      <header className="bg-[#111]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg">
        <nav className="px-4 lg:px-6 h-16">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full">
            {/* Logo va Search Container */}
            <div className="flex items-center flex-1 max-w-[55%]">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  GameVault
                </span>
              </Link>

              {/* Desktop Search */}
              <div ref={searchRef} className="hidden md:block ml-6">
                <div className={`relative flex items-center ${isSearchExpanded ? 'w-[400px]' : 'w-10'} transition-all duration-400`}>
                  <div className={`absolute inset-0 bg-gray-700/50 rounded-full transition-all duration-300 ${isSearchExpanded ? 'w-full' : 'w-10'}`}></div>
                  <button
                    type="button"
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className="absolute left-0 z-10 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  {isSearchExpanded && (
                    <form onSubmit={handleSearch} className="w-full">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for games..."
                        className="w-full h-10 pl-10 pr-4 bg-transparent text-white rounded-full outline-none focus:outline-none focus:ring-0 focus:border-gray-700"
                        autoFocus
                      />
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Centered when search is closed */}
            <div className={`hidden lg:flex items-center transition-all duration-300 ${isSearchExpanded ? '-ml-20' : 'absolute left-1/2 -translate-x-1/2'}`}>
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

            {/* Login/Register buttons */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              <Link
                to="/login"
                className="relative px-5 py-1.5 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:from-[#FF4B2B] hover:to-[#FF416C] text-white rounded-lg transition-all duration-500 text-sm shadow-lg hover:shadow-[#FF416C]/50 hover:-translate-y-0.3 hover:scale-105 active:scale-95 overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </Link>
              <Link
                to="/register"
                className="relative px-3 py-1.5 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:from-[#8E54E9] hover:to-[#4776E6] text-white rounded-lg transition-all duration-500 text-sm shadow-lg hover:shadow-[#8E54E9]/50 hover:-translate-y-0.3 hover:scale-105 active:scale-95 overflow-hidden group"
              >
                <span className="relative z-10">Register</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </Link>
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
                <form onSubmit={handleSearch} className="relative mb-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for games..."
                    className="w-full h-10 px-4 bg-gray-700/50 text-white rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-gray-700"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
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
                  <div className="pt-4 flex flex-col space-y-4">
                    <Link
                      to="/login"
                      className="relative text-center px-3 py-1.5 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:from-[#FF4B2B] hover:to-[#FF416C] text-white rounded-lg transition-all duration-500 text-sm shadow-lg hover:shadow-[#FF416C]/50 hover:-translate-y-0.5 hover:scale-105 active:scale-95 overflow-hidden group"
                    >
                      <span className="relative z-10">Login</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </Link>
                    <Link
                      to="/register"
                      className="relative text-center px-3 py-1.5 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:from-[#8E54E9] hover:to-[#4776E6] text-white rounded-lg transition-all duration-500 text-sm shadow-lg hover:shadow-[#8E54E9]/50 hover:-translate-y-0.5 hover:scale-105 active:scale-95 overflow-hidden group"
                    >
                      <span className="relative z-10">Register</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </Link>
                  </div>
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