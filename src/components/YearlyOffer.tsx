import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const YearlyOffer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.yearlyOfferTitle}
            </h1>
          </div>

          {/* Main Content Card - Black Background */}
          <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
            <div className="grid lg:grid-cols-2 items-center min-h-[500px]">
              {/* Left Side - Content */}
              <div className="relative z-10 p-8 text-white flex flex-col justify-center lg:col-span-1">
                <div className="mb-8">
                  <div className="text-2xl font-bold mb-2">
                    {t.websiteDiscount}
                  </div>
                  <div className="text-white/80">
                    {t.websiteDiscountDesc}
                  </div>
                </div>

                <Button className="bg-christalle hover:bg-christalle/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg">
                  {t.orderNow}
                </Button>
              </div>

              {/* Right Side - macOS Window with Website Screenshot */}
              <div className="relative h-full min-h-[500px] flex items-center justify-center p-8">
                <div className="relative w-full max-w-lg">
                  {/* macOS Window Frame - Straight, no rotation */}
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                    {/* macOS Title Bar */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                      {/* Traffic Light Buttons */}
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      
                      {/* Address Bar */}
                      <div className="flex-1 mx-4">
                        <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border border-gray-300">
                          https://sakuri-restaurant.com
                        </div>
                      </div>
                    </div>
                    
                    {/* Website Screenshot Container */}
                    <div className="relative h-80 overflow-hidden">
                      {/* Website Screenshot - extends beyond the frame */}
                      <div className="absolute inset-0 -bottom-20">
                        <img 
                          src="/Screenshot 2025-06-29 at 11.59.06.png" 
                          alt="Sakuri Restaurant Website"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Overlay with website info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg font-semibold mb-1">
                            {t.yourBusiness}
                          </h3>
                          <p className="text-sm text-white/90">
                            {t.professionalPresentation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Feature Badges */}
                  <div className="absolute -right-4 top-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{t.responsiveDesign}</span>
                    </div>
                  </div>
                  
                  <div className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{t.seoOptimization}</span>
                    </div>
                  </div>
                  
                  <div className="absolute -right-4 bottom-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{t.fastLoading}</span>
                    </div>
                  </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-christalle/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-viking/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-christalle/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-viking/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyOffer;