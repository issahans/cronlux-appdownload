import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CardsSection from '../components/home/CardsSection'; // or EnhancedCardsSection if you chose option 2
import TechHighlights from '../components/home/TechHighlights';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CardsSection />
      <TechHighlights />
    </div>
  );
};

export default HomePage;