import React from 'react';
import { Coffee, Scissors, ShoppingBag, Dumbbell, Car, Utensils } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const TargetAudience = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const categories = [
    {
      icon: Coffee,
      title: t.gastro,
      subtitle: t.gastroSub,
      description: t.gastroDesc,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Scissors,
      title: t.services,
      subtitle: t.servicesSub,
      description: t.servicesDesc,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: ShoppingBag,
      title: t.retail,
      subtitle: t.retailSub,
      description: t.retailDesc,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Dumbbell,
      title: t.fitness,
      subtitle: t.fitnessSub,
      description: t.fitnessDesc,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Car,
      title: t.automotive,
      subtitle: t.automotiveSub,
      description: t.automotiveDesc,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Utensils,
      title: t.others,
      subtitle: t.othersSub,
      description: t.othersDesc,
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header - Apple Style */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.targetTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-tight">
              {t.targetSubtitle}
            </p>
          </div>

          {/* Apple-style Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Large Featured Card - Gastro */}
            <div className="lg:col-span-6 group">
              <div className="relative bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden h-[500px] hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0">
                  <img 
                    src={categories[0].image} 
                    alt={categories[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="mb-4">
                    {React.createElement(categories[0].icon, { className: "w-12 h-12 text-white mb-4" })}
                  </div>
                  <h2 className="text-4xl font-semibold mb-2">{categories[0].title}</h2>
                  <p className="text-xl text-white/90 mb-4">{categories[0].subtitle}</p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {categories[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Medium Cards - Services & Retail */}
            <div className="lg:col-span-6 space-y-6">
              {categories.slice(1, 3).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden h-[237px] hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                      </div>
                      
                      <div className="relative h-full flex flex-col justify-end p-6 text-white">
                        <div className="mb-3">
                          <IconComponent className="w-8 h-8 text-white mb-3" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-1">{category.title}</h3>
                        <p className="text-white/90 mb-2">{category.subtitle}</p>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Small Cards Row */}
            <div className="lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.slice(3).map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="group">
                      <div className="relative bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden h-[300px] hover:shadow-xl transition-all duration-500">
                        <div className="absolute inset-0">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        </div>
                        
                        <div className="relative h-full flex flex-col justify-end p-6 text-white">
                          <div className="mb-3">
                            <IconComponent className="w-8 h-8 text-white mb-3" />
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                          <p className="text-white/90 text-sm mb-2">{category.subtitle}</p>
                          <p className="text-white/80 text-xs leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.dontSeeYourIndustry}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                {t.dontSeeDesc}
              </p>
              <button className="bg-christalle hover:bg-christalle/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:shadow-lg">
                {t.writeToUs}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;