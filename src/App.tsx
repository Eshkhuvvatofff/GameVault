import React from 'react';
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
import BackgroundSlider from './components/homepage(assets)/background/BackgroundSlider';


const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const images = [
    "https://4kwallpapers.com/images/wallpapers/gradient-background-2560x1440-10974.jpg",
    "https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    "https://t3.ftcdn.net/jpg/08/06/10/36/360_F_806103697_E9Y1vKhtQimCEIiA75QWEn4NdZe7lQXj.jpg",
  ];
  const authRoutes = ['/signin', '/signup', '/restorepassword', '/reset-password'];
  const isAuthRoute = authRoutes.includes(location.pathname);



  // header va footer faqat login sahifasida ko'rsatilmasligi kerak
  const shouldShowHeaderFooter = location.pathname !== '/SignIn' && location.pathname !== '/signup' && location.pathname !== '/404' && location.pathname !== '/restorepassword' && location.pathname !== '/reset-password';

  return (
    <>
      <BackgroundSlider images={images} interval={4000} />
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
  );
};

export default App;
