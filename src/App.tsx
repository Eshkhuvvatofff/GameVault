import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AddGame from './Pages/AddGames/AddGames';
import LandingPage from './Pages/Landing/LandingPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import SearchResults from './components/search/Search';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import SignIn from './Pages/auth/Login';
import SignUp from './Pages/auth/SignUp';
import ForgotPassword from './Pages/auth/ForgotPassword';
import ResetPassword from './Pages/auth/ResetPassword';
import './App.css';
import Cursor from './components/customcursor/custom-cr';
import LoadingComp from './components/loadingFn/loading';
import Particles from '@/components/ParticleBackground/particlev2';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 3 sekunddan keyin yuklanish holatini o'chirish
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);



  const authRoutes = ['/signin', '/signup', '/restorepassword', '/reset-password'];
  const isAuthRoute = authRoutes.includes(location.pathname);

  // header va footer faqat login sahifasida ko'rsatilmasligi kerak
  const shouldShowHeaderFooter = location.pathname !== '/SignIn' && location.pathname !== '/signup' && location.pathname !== '/404' && location.pathname !== '/restorepassword' && location.pathname !== '/reset-password';

  return (
    <>

      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <Particles />

          <Cursor />
          {isAuthRoute && <ParticleBackground />}
          {shouldShowHeaderFooter && <Header />}
          <Routes>
            {/* Home */}
            <Route path="/" element={<LandingPage />} />

            {/* Assets */}
            <Route path="/add-game" element={<AddGame />} />
            <Route path="/search" element={<SearchResults />} />

            {/* NotFound */}
            <Route path="/*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />

            {/* signs */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* passwords */}
            <Route path="/restorepassword" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          {shouldShowHeaderFooter && <Footer />}
        </>
      )}

    </>
  );
};

export default App;
