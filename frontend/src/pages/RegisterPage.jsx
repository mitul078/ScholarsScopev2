import React from 'react';
import useReveal from '../hooks/useReveal';
import Register from '../components/Register';

export default function RegisterPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      <Register />
    </div>
  );
}
