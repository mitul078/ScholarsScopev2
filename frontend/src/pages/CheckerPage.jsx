import React from 'react';
import useReveal from '../hooks/useReveal';
import EligibilityChecker from '../components/EligibilityChecker';

export default function CheckerPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      <EligibilityChecker />
    </div>
  );
}
