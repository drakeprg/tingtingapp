import React from 'react';
import { UserPlus, CreditCard, Wallet } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const steps = [
    {
      icon: UserPlus,
      title: t.step1Title,
      description: t.step1Desc,
      time: t.minutes2
    },
    {
      icon: CreditCard,
      title: t.step2Title,
      description: t.step2Desc,
      time: t.minutes5
    },
    {
      icon: Wallet,
      title: t.step3Title,
      description: t.step3Desc,
      time: t.immediately
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.howItWorksTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-tight">
              {t.howItWorksSubtitle}
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-white dark:text-gray-900" />
                  </div>
                  <div className="text-sm text-christalle dark:text-viking font-medium mb-2">{step.time}</div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;