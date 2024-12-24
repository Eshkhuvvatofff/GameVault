import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddGame from './Pages/AddGames/AddGames';
import LandingPage from './Pages/Landing/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">GameVault</h1>
          <p className="text-gray-600">Your personal game collection</p>
          <nav className="mt-4">
            <Link to="/" className="text-indigo-500 hover:underline mx-2">Home</Link>
            <Link to="/add-game" className="text-indigo-500 hover:underline mx-2">Add Game</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-game" element={<AddGame />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
