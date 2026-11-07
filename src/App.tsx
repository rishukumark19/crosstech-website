import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VerticalScrollbar from './components/VerticalScrollbar/VerticalScrollbar';
import FloatingActions from './components/FloatingActions/FloatingActions';
import PageTransition from './components/PageTransition/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
          <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <VerticalScrollbar />
      <FloatingActions whatsappNumber="919876543210" />
    </>
  );
};

export default App;
