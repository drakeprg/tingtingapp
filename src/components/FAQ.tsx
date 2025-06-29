import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header - Clean Apple Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.faqTitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-tight">
              {t.faqSubtitle}{' '}
              <a href="mailto:info@tingting.cz" className="text-christalle dark:text-viking hover:underline">
                info@tingting.cz
              </a>
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {t.faqQuestions.map((faq, index) => {
              const isOpen = openItems.includes(index);
              
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-6 h-6 text-christalle dark:text-viking" />
                      ) : (
                        <Plus className="w-6 h-6 text-christalle dark:text-viking" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;