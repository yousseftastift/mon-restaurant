
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section 
      id="testimonial"
      ref={ref}
      className={`py-24 md:py-40 bg-cover bg-center bg-fixed relative fade-in-section ${inView ? 'is-visible' : ''}`}
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://picsum.photos/1920/1080?random=2&blur=1')" }}
    >
      <div className="container mx-auto px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-6xl font-serif text-brand-gold leading-none block mb-4">&ldquo;</span>
          <p className="text-2xl md:text-4xl font-serif italic leading-tight mb-8">
            Vraiment une superbe adresse ! Des mélanges de saveurs, de la finesse, de la maîtrise. Et un service adorable. N’hésitez pas à y aller !
          </p>
          <div className="flex justify-center items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-lg font-semibold text-neutral-300">DAVID, Juillet 2020</p>
          <p className="text-sm text-neutral-400">on TripAdvisor</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
