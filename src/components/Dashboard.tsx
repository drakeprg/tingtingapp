import React from 'react';
import { BarChart3 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header - Clean Apple Style */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.dashboardTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-tight">
              {t.dashboardSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-600 mx-6 px-4 py-2 rounded-lg text-sm text-gray-500">
                    dashboard.tingting.cz
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-8 space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{t.overview}</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-christalle dark:bg-viking p-6 rounded-2xl text-white">
                      <div className="text-3xl font-bold mb-1">1,247</div>
                      <div className="text-sm opacity-90">{t.activeCustomers}</div>
                    </div>
                    <div className="bg-gray-900 dark:bg-white p-6 rounded-2xl text-white dark:text-gray-900">
                      <div className="text-3xl font-bold mb-1">89%</div>
                      <div className="text-sm opacity-90">{t.returnRate}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 h-32 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Features - Clean Apple Style without icons */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.realtimeStats}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.realtimeStatsDesc}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.customerProfiles}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.customerProfilesDesc}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.smartMessages}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.smartMessagesDesc}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.analyticsTools}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.analyticsToolsDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;