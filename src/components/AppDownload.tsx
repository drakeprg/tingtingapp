import React from 'react';
import { Apple, Play } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const AppDownload = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header - Apple Style */}
          <div className="flex justify-between items-start mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white">
              {t.appDownloadTitle}
            </h1>

          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - App Store */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.iphoneIpad}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                {t.iphoneDesc}
              </p>
              
              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/cz/app/tingting/id6748128416?l=cs" 
                className="inline-flex items-center space-x-4 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm opacity-90">{t.downloadFrom}</div>
                  <div className="text-xl font-semibold">{t.appStore}</div>
                </div>
              </a>
            </div>

            {/* Right Side - Google Play */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.android}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                {t.androidDesc}
              </p>
              
              {/* Google Play Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.karticka.tingting" 
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-green-600 hover:to-blue-700 transition-all"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">{t.downloadFrom}</div>
                  <div className="text-xl font-semibold">{t.googlePlay}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile "All apps" link */}
          <div className="text-center mt-8 md:hidden">
            <a 
              href="#" 
              className="text-christalle dark:text-viking hover:underline text-lg font-medium"
            >
              {t.allApps}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;