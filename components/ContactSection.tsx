
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';

interface FormData {
  name: string;
  date: string;
  guests: string;
  phone: string;
  remarks: string;
}

interface FormErrors {
  name?: string;
  date?: string;
  guests?: string;
  phone?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    date: '',
    guests: '',
    phone: '',
    remarks: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.date) newErrors.date = "La date est requise.";
    if (!formData.guests.trim() || isNaN(parseInt(formData.guests)) || parseInt(formData.guests) < 1) {
      newErrors.guests = "Nombre de convives valide requis.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis.";
    // Basic phone regex (french format or international)
    else if (!/^(?:\+33|0)[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.phone.trim())) {
        newErrors.phone = "Format de téléphone invalide.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData); // Mock submission
      setIsSubmitted(true);
      // Here you would typically send data to a backend
      // For demo, reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', date: '', guests: '', phone: '', remarks: ''});
        setIsSubmitted(false);
      }, 5000);
    }
  };
  
  const InputField: React.FC<{label: string; name: keyof FormData; type?: string; placeholder?: string; error?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}> = 
  ({label, name, type = "text", placeholder, error, value, onChange}) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-400 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full px-4 py-3 bg-brand-dark border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm text-neutral-200 placeholder-neutral-500`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );


  return (
    <section id="contact" ref={ref} className={`py-20 md:py-32 bg-brand-dark text-brand-light fade-in-section ${inView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle title="Réservez en quelques clics !" subtitle="CONTACT" color="light" />

        <div className="grid md:grid-cols-3 gap-12 mt-16 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">Horaires</h3>
            <ul className="text-neutral-300 space-y-1">
              <li>Lundi: 16:00 - 02:00</li>
              <li>Mardi: 16:00 - 02:00</li>
              <li>Mercredi: 16:00 - 02:00</li>
              <li>Jeudi: 16:00 - 02:00</li>
              <li>Vendredi: 16:00 - 02:00</li>
              <li>Samedi: 12:00 - 02:00</li>
              <li>Dimanche: 12:00 - 02:00</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">Téléphone</h3>
            <p className="text-neutral-300 hover:text-brand-gold transition-colors"><a href="tel:+33146342736">01 46 34 27 36</a></p>
            <h3 className="text-xl font-serif font-semibold text-brand-gold mt-6 mb-3">Mail</h3>
            <p className="text-neutral-300 hover:text-brand-gold transition-colors"><a href="mailto:bienvenue@mulb-street.com">bienvenue@mulb-street.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">Adresse</h3>
            <p className="text-neutral-300">Rue de la Huchette 20</p>
            <p className="text-neutral-300">75005 Paris</p>
            <p className="text-neutral-300">France</p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="mt-16 max-w-2xl mx-auto p-8 bg-green-900 bg-opacity-30 border border-green-500 rounded-md text-center">
            <h3 className="text-2xl font-serif text-green-300 mb-3">Merci !</h3>
            <p className="text-neutral-200">Votre demande de réservation a bien été envoyée. Nous vous contacterons bientôt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-16 max-w-2xl mx-auto space-y-6">
            <InputField label="Nom" name="name" placeholder="Jean Dupont" value={formData.name} onChange={handleChange} error={errors.name} />
            <InputField label="Date" name="date" type="date" value={formData.date} onChange={handleChange} error={errors.date} />
            <InputField label="Nombre de convives" name="guests" type="number" placeholder="4 personnes" value={formData.guests} onChange={handleChange} error={errors.guests} />
            <InputField label="Téléphone" name="phone" type="tel" placeholder="+33 6 29 38 36 31" value={formData.phone} onChange={handleChange} error={errors.phone} />
            <div>
              <label htmlFor="remarks" className="block text-sm font-medium text-neutral-400 mb-1">Remarques</label>
              <textarea
                name="remarks"
                id="remarks"
                rows={4}
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Allergies, demandes particulières..."
                className="block w-full px-4 py-3 bg-brand-dark border border-gray-700 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm text-neutral-200 placeholder-neutral-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium rounded-md text-brand-dark bg-brand-gold hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-gold transition-colors"
              >
                JE RÉSERVE
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-20 h-96 rounded-lg overflow-hidden shadow-xl">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.340667086019!2d2.343609815673627!3d48.85230007928701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e172778f6b%3A0x6335165409cf957!2s20%20Rue%20de%20la%20Huchette%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1620090000000!5m2!1sen!2sus&hl=fr& wisatawan=false&maptype=roadmap&style=dark"
            width="100%" 
            height="100%" 
            style={{ border:0, filter: 'invert(90%) hue-rotate(180deg) contrast(0.9)' }}
            allowFullScreen={true}
            loading="lazy"
            title="Restaurant Location Map">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
