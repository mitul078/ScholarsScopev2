import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav    from './components/Nav';
import Footer from './components/Footer';

import Home            from './pages/Home';
import AboutPage       from './pages/AboutPage';
import HowItWorksPage  from './pages/HowItWorksPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import CheckerPage     from './pages/CheckerPage';
import TeamPage        from './pages/TeamPage';
import RegisterPage    from './pages/RegisterPage';
import ContactPage     from './pages/ContactPage';
import NotFound        from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<AboutPage />} />
        <Route path="/how"         element={<HowItWorksPage />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
        <Route path="/checker"     element={<CheckerPage />} />
        <Route path="/team"        element={<TeamPage />} />
        <Route path="/register"    element={<RegisterPage />} />
        <Route path="/contact"     element={<ContactPage />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
