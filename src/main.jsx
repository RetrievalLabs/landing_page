import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP registration
gsap.registerPlugin(ScrollTrigger);

// GSAP performance: prevent animation stuttering during CPU spikes
gsap.ticker.lagSmoothing(1000, 16);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
