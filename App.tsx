import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Transport from './components/Transport';
import Forwarding from './components/Forwarding';
import UsefulInfo from './components/UsefulInfo';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PageId } from './types';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-50 selection:bg-orange-500 selection:text-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={PageId.HOME} element={
              <>
                <Hero />
                <Services />
                <Features />
              </>
            } />
            <Route path={PageId.ABOUT} element={<About />} />
            <Route path={PageId.TRANSPORT} element={<Transport />} />
            <Route path={PageId.FORWARDING} element={<Forwarding />} />
            <Route path={PageId.USEFUL_INFO} element={<UsefulInfo />} />
            <Route path={PageId.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <CTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;