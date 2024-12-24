import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTelegram, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import "./head.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-black shadow-lg">
      {/* Asosiy navigatsiya */}
      <nav className="px-4 lg:px-6 py-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4 justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center'>
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
                GameStore
              </span>
            </Link>

            {/* Qidiruv */}
            <div className="hidden md:flex flex-1 max-w-lg px-4">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for games..."
                  className="w-full h-10 px-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 space-x-8">
              <div className='flex items-center space-x-5'>
                <Link to="/" className="text-gray-300 hover:text-pink-500 transition-colors nav-link">Home</Link>
                <Link to="/categories" className="text-gray-300 hover:text-pink-500 transition-colors nav-link">Categories</Link>
                <Link to="/popular" className="text-gray-300 hover:text-pink-500 transition-colors nav-link">Popular</Link>
                <Link to="/contact" className="text-gray-300 hover:text-pink-500 transition-colors nav-link">Contact</Link>
              </div>
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-5 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-rose-500/50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-indigo-500/50"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-400 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-gray-700"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-300 hover:text-pink-500 transition-colors">Home</Link>
                <Link to="/categories" className="text-gray-300 hover:text-pink-500 transition-colors">Categories</Link>
                <Link to="/popular" className="text-gray-300 hover:text-pink-500 transition-colors">Popular</Link>
                <Link to="/contact" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</Link>
                <div className="pt-4 flex flex-col space-y-4">
                  <Link
                    to="/login"
                    className="text-center px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-rose-500/50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-indigo-500/50"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
