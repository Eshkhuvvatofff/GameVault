import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AddGame from './Pages/AddGames/AddGames';
import LandingPage from './Pages/Landing/LandingPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';
import SearchResults from './components/search/Search';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Login from './Pages/auth/Login';
import SignUp from './Pages/auth/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  // header va footer faqat login sahifasida ko'rsatilmasligi kerak
  const shouldShowHeaderFooter = location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/404'; 

  return (
    <>
      <ParticleBackground />
      {shouldShowHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
};

export default App;
