import React, { useState } from 'react';
import { GYM_CONFIG } from '../data/gymConfig';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500 mb-2">
            Got Questions?
          </p>
          <h2 className="font-athletic text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm">
            Everything you need to know about joining Olympia Fitness Centre.
          </p>
        </div>

        <div className="space-y-3">
          {GYM_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-red-400 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
