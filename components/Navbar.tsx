
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; currentSection: string; sectionId: string; onClick?: () => void }> = ({ href, children, currentSection, sectionId, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-brand-gold ${currentSection === sectionId ? 'text-brand-gold active-nav-link' : 'text-brand-light'}`}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  const navLinks = [
    { id: 'hero', name: 'Accueil', href: '#hero' },
    { id: 'about', name: 'Le Restaurant', href: '#about' },
    { id: 'menu', name: 'La Carte', href: '#menu' },
    { id: 'gallery', name: 'Galerie', href: '#gallery' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let newCurrentSection = 'hero';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= 100) {
          newCurrentSection = link.id;
        }
      }
      setCurrentSection(newCurrentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // navLinks is stable

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-brand-dark shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-serif font-bold text-brand-gold hover:opacity-80 transition-opacity">
 MON RESTAURANT            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.id} href={link.href} currentSection={currentSection} sectionId={link.id}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gold hover:text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-brand-dark bg-opacity-95 backdrop-blur-sm`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
             <NavLink key={link.id} href={link.href} currentSection={currentSection} sectionId={link.id} onClick={closeMobileMenu}>
                <span className="block">{link.name}</span>
             </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
