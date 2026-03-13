import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyThisMatters from './components/WhyThisMatters';
import WhatWereBuilding from './components/WhatWereBuilding';
import Architecture from './components/Architecture';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <WhyThisMatters />
        <WhatWereBuilding />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
