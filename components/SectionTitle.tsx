
import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  color?: 'light' | 'dark';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, color = 'light' }) => {
  const textColor = color === 'light' ? 'text-neutral-300' : 'text-gray-600';
  const titleColor = color === 'light' ? 'text-white' : 'text-brand-dark';
  const lineColor = color === 'light' ? 'bg-brand-gold' : 'bg-brand-gold';

  return (
    <div className="text-center mb-12 md:mb-16">
      {subtitle && (
        <p className={`text-sm font-medium uppercase tracking-widest ${textColor} mb-2`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif font-bold ${titleColor} mb-4`}>
        {title}
      </h2>
      <div className={`w-20 h-1 ${lineColor} mx-auto`}></div>
    </div>
  );
};

export default SectionTitle;
