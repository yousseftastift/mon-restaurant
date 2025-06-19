
import React from 'react';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-5 px-6 text-left text-xl font-serif font-semibold text-neutral-100 hover:bg-black hover:bg-opacity-10 transition-colors duration-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
