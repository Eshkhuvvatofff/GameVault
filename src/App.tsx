import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AddGame from './Pages/AddGames/AddGames';
import LandingPage from './Pages/Landing/LandingPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';
import SearchResults from './components/search/Search';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  const shouldShowHeaderFooter = location.pathname !== '/404'; 

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
};

export default App;