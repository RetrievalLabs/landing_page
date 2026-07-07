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
import { useEffect } from 'react';

function setMetaTags(isSynapse) {
  if (isSynapse) {
    document.title = 'Synapse — AI Organizational Memory & Coding Agent | RetrievalLabs';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Synapse connects Jira, repos, PRs, and more into a knowledge graph, then turns approved tickets into sandbox-tested pull requests.');
  } else {
    document.title = 'RetrievalLabs — Enterprise Knowledge Graphs & AI Agents';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'RetrievalLabs connects fragmented enterprise data into secure, RBAC-aware knowledge graphs and AI agents. Synapse turns Jira tickets into tested pull requests.');
  }
}

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const isSynapsePage = params.get('product') === 'synapse';

  useEffect(() => {
    setMetaTags(isSynapsePage);
  }, [isSynapsePage]);

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
