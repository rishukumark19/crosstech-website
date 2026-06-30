import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import Stats from '../components/Stats/Stats';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <HorizontalScroll />
      <Stats />
    </main>
  );
};

export default HomePage;
