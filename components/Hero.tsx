
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="hero" 
      ref={ref}
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg')" }}
    >
      <div className={`transition-all duration-1000 ease-out-quart ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
          BIENVENUE CHEZ
        </h1>
        <h2 className="text-6xl md:text-8xl font-serif font-extrabold text-brand-gold mb-6">
          VOTRE RESTAURANT
        </h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-neutral-300 mb-2">
          PUB CRAFT BLACK PIZZA (CUISINE)
        </p>
        <p className="text-md md:text-lg text-neutral-300 mb-10">
          À PARIS NOTRE DAME
        </p>
        <a
          href="#menu"
          className="inline-block bg-transparent hover:bg-brand-gold text-brand-gold font-semibold hover:text-brand-dark py-3 px-8 border border-brand-gold hover:border-transparent rounded-sm transition-all duration-300 text-lg"
        >
          VOIR LE MENU <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-gold">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
