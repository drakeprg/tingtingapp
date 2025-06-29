import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const Integrations = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const integrations = [
    {
      name: 'Dotykačka',
      logo: '/dotykacka.png',
      status: 'available'
    },
    {
      name: 'Fusion',
      logo: '/fusion.png',
      status: 'available'
    },
    {
      name: 'KasaFiK',
      logo: '/kasafik.png',
      status: 'available'
    },
    {
      name: 'Storyous',
      logo: '/storyous.png',
      status: 'coming-soon'
    },
    {
      name: 'Iprosoft',
      logo: '/iprosoft copy.png',
      status: 'coming-soon'
    },
    {
      name: 'Gokasa',
      logo: '/gokasa copy.png',
      status: 'coming-soon'
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header - Clean Apple Style */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.integrationsTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-tight max-w-3xl mx-auto">
              {t.integrationsSubtitle}
            </p>
          </div>

          {/* Integration Logos - 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="flex justify-center group">
                <div className="relative">
                  <div className="w-32 h-24 bg-transparent rounded-3xl flex items-center justify-center group-hover:shadow-lg transition-shadow p-4">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="max-w-full max-h-full object-contain filter dark:brightness-0 dark:invert"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                  {integration.status === 'coming-soon' && (
                    <div className="absolute -top-2 -right-2 bg-christalle dark:bg-viking text-white text-xs px-2 py-1 rounded-full">
                      {t.comingSoon}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;