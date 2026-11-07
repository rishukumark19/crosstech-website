import React from 'react';
import Hero from '../components/Hero/Hero';
import TrustStrip from '../components/TrustStrip/TrustStrip';
import Services from '../components/Services/Services';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import Stats from '../components/Stats/Stats';
import MaintenanceCTA from '../components/MaintenanceCTA/MaintenanceCTA';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <HorizontalScroll />
      <Stats />
      <MaintenanceCTA />
    </main>
  );
};

export default HomePage;
