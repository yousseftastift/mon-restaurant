
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import AccordionItem from './AccordionItem'; // Assume AccordionItem is created

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Black Pizza",
    items: [
      { name: "Margherita Noire", description: "Sauce tomate, mozzarella fior di latte, basilic frais, pâte au charbon végétal", price: "14€" },
      { name: "Diabola Infernale", description: "Sauce tomate, mozzarella, chorizo piquant, olives noires, pâte au charbon végétal", price: "16€" },
      { name: "Truffle Queen", description: "Crème de truffe, mozzarella, champignons frais, roquette, huile de truffe, pâte au charbon végétal", price: "19€" },
    ],
  },
  
  {
    title: "Salade Gourmande",
    items: [
      { name: "Salade César Revisité", description: "Poulet grillé, croûtons à l'ail, parmesan, sauce césar maison", price: "15€" },
      { name: "Salade Chèvre Chaud", description: "Toast de chèvre chaud, lardons, noix, vinaigrette balsamique", price: "16€" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Tiramisu Classico", description: "Le véritable tiramisu italien, crémeux et savoureux", price: "9€" },
      { name: "Fondant au Chocolat Noir", description: "Coeur coulant, servi avec une boule de glace vanille", price: "10€" },
    ],
  },
  {
    title: "Cocktails",
    items:
    [
      { name: "Mojito Royal", description: "Rhum, menthe fraîche, citron vert, sucre de canne, champagne", price: "12€" },
      { name: "Old Fashioned Revisité", description: "Whisky, Angostura, sucre, zeste d'orange fumé", price: "13€" },
      { name: "Spritz Vénitien", description: "Aperol, Prosecco, eau gazeuse, tranche d'orange", price: "10€" },
    ],
  },
];

const MenuSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(menuData[0]?.title || null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <section id="menu" ref={ref} className={`py-20 md:py-32 bg-brand-dark text-brand-light fade-in-section ${inView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle title="Le Chef vous propose" subtitle="LA CARTE" color="light" />
        <div className="max-w-3xl mx-auto mt-12 space-y-1">
          {menuData.map((category) => (
            <AccordionItem
              key={category.title}
              title={category.title}
              isOpen={openAccordion === category.title}
              onToggle={() => handleAccordionToggle(category.title)}
            >
              <ul className="py-4 px-6 space-y-3 bg-black bg-opacity-20">
                {category.items.map((item) => (
                  <li key={item.name} className="border-b border-gray-700 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-brand-gold">{item.name}</h4>
                      {item.price && <p className="text-md font-semibold text-neutral-300">{item.price}</p>}
                    </div>
                    {item.description && <p className="text-sm text-neutral-400 mt-1">{item.description}</p>}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
