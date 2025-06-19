
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonial from './components/Testimonial';
import CuisineHighlight from './components/CuisineHighlight';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonial />
        <CuisineHighlight />
        <MenuSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
