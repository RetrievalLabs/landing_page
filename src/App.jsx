import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyThisMatters from './components/WhyThisMatters';
import WhatWereBuilding from './components/WhatWereBuilding';
import Architecture from './components/Architecture';
import Products from './components/Products';
import SupportedBy from './components/SupportedBy';
import MeetFounders from './components/MeetFounders';
import SynapsePage from './components/SynapsePage';
import Footer from './components/Footer';

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const isSynapsePage = params.get('product') === 'synapse';

  if (isSynapsePage) {
    return (
      <>
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <SynapsePage />
        <Footer />
      </>
    );
  }

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
        <Products />
        <SupportedBy />
        <MeetFounders />
      </main>
      <Footer />
    </>
  );
}
