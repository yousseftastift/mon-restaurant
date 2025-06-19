
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';

const galleryImages = [
  { src: "https://images.pexels.com/photos/32626714/pexels-photo-32626714.jpeg", alt: "Delicious food presentation" },
  { src: "https://images.pexels.com/photos/11118539/pexels-photo-11118539.jpeg", alt: "Restaurant interior ambiance" },
  { src: "https://images.pexels.com/photos/29044228/pexels-photo-29044228.jpeg", alt: "Close up of a dish" },
  { src: "https://images.pexels.com/photos/4253308/pexels-photo-4253308.jpeg", alt: "Wine pouring" },
  { src: "https://images.pexels.com/photos/28491579/pexels-photo-28491579.jpeg", alt: "Bartender crafting a cocktail" },
  { src: "https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg", alt: "Gourmet dessert" },
  { src: "https://images.pexels.com/photos/4253308/pexels-photo-4253308.jpeg", alt: "Burger" },
  { src: "https://images.pexels.com/photos/28490817/pexels-photo-28490817.jpeg", alt: "Charcuterie board" },
];

const GalleryItem: React.FC<{ src: string; alt: string; delay?: number }> = ({ src, alt, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '-50px' });
  
  return (
    <div 
      ref={ref} 
      className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 ease-out-quart hover:shadow-2xl hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

const Gallery: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.05 });
  
  return (
    <section id="gallery" ref={sectionRef} className={`py-20 md:py-32 bg-brand-light text-brand-dark fade-in-section ${sectionInView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle title="Notre Galerie" subtitle="EN IMAGES" color="dark" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} src={image.src} alt={image.alt} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
