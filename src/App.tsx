import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VerticalScrollbar from './components/VerticalScrollbar/VerticalScrollbar';
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
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <VerticalScrollbar />
    </>
  );
};

export default App;

