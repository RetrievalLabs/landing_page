import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyThisMatters from './components/WhyThisMatters';
import Architecture from './components/Architecture';
import Products from './components/Products';
import SupportedBy from './components/SupportedBy';
import MeetFounders from './components/MeetFounders';
import Footer from './components/Footer';
import CluonPage from './components/CluonPage';

function useQueryParam(key) {
  const [value] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get(key);
    }
    return null;
  });
  return value;
}

export default function App() {
  const product = useQueryParam('product');

  if (product === 'cluon' || product === 'gluon' || product === 'synapse') {
    return (
      <>
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <CluonPage />
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
        <Products />
        <SupportedBy />
        <MeetFounders />
      </main>
      <Footer />
    </>
  );
}
