
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';

const CuisineHighlight: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="cuisine" ref={ref} className={`py-20 md:py-32 bg-brand-light text-brand-dark fade-in-section ${inView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <SectionTitle title="Une Black Pizza" subtitle="LA CUISINE" color="dark"/>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-12">
          <img 
            src="https://images.pexels.com/photos/29021737/pexels-photo-29021737.jpeg" 
            alt="Black pizza dish 1" 
            className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <div className="max-w-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              La journée du MULBERRY commence avec un happy hour de 16h à 21h. Le comptoir à pizza vous sert à table dès 16h jusqu’à 2h du matin. On vient boire un verre ici pour bavarder, partager une pizza à la pâte noire (farine bio, charbon végétal).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-sans">
              Le barman vous propose une sélection originale de cocktails. Et le café est lui italien (illy).
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-gold hover:bg-opacity-80 text-white font-semibold py-3 px-8 rounded-sm transition-all duration-300 text-md"
            >
              RÉSERVER <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <img 
            src="https://images.pexels.com/photos/20882502/pexels-photo-20882502.jpeg" 
            alt="Black pizza dish 2" 
            className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default CuisineHighlight;
