import React from 'react';
import useReveal from '../hooks/useReveal';
import Hero from '../components/Hero';
import StatsBand from '../components/StatsBand';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import EligibilityChecker from '../components/EligibilityChecker';
import Scholarships from '../components/Scholarships';
import Team from '../components/Team';

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <HowItWorks />
      <EligibilityChecker />
      <Scholarships />
      <Team />
    </>
  );
}
