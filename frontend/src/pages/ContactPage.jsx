import React from 'react';
import useReveal from '../hooks/useReveal';
import Contact from '../components/Contact';

export default function ContactPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      <Contact />
    </div>
  );
}
