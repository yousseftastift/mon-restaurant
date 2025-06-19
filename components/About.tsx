
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} className={`py-20 md:py-32 bg-brand-light text-brand-dark fade-in-section ${inView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle title="Le Nom Restaurant" subtitle="LE RESTAURANT" color="dark" />
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8697517/pexels-photo-8697517.jpeg " 
              alt="Chef preparing food" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105" 
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              Mulberry Street, une rue de Manhattan qui forma le Quartier des « Five Points » dans les années 1820. Dans ce quartier cohabitaient irlandais, italiens, africains. C’est dans ce mélange de culture que se trouve l’identité de ce Bar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-sans">
             le Pizza dans une ambiance musicale où l’on retrouve de la soul et autres morceaux contemporains ou pas. L'atmosphère chaleureuse et le design élégant créent un cadre parfait pour une expérience culinaire inoubliable.
            </p>
            <a
              href="#menu"
              className="inline-block bg-brand-gold hover:bg-opacity-80 text-white font-semibold py-3 px-8 rounded-sm transition-all duration-300 text-md"
            >
              VOIR LE MENU <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
