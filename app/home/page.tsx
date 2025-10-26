'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import BackHero from './components/backgrounds/BackHero';
import Hero from './components/Hero';
import Features from './components/features';
import ConfigChat from './components/configChat';
import Plans from './components/plans';
import Trial from './components/trial';

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      <BackHero />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <ConfigChat />
        <Plans />
        <Trial />
        <Footer />
      </div>
    </div>
  );
}