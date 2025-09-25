import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const plans = [
    {
      name: 'Forever Free',
      price: t.free,
      period: '',
      description: t.freeDesc,
      features: t.freeFeatures,
      cta: t.startFreeBtn,
      note: language === 'cs' ? 'Při registraci nezadáváte platební kartu.' : 'Khi đăng ký không cần nhập thông tin thẻ thanh toán.'
    },
    {
      name: language === 'cs' ? 'Premium' : 'Gói Premium',
      priceMonthly: '799 Kč',
      priceYearly: '599 Kč',
      period: language === 'cs' ? 'měsíčně' : 'hàng tháng',
      description: t.easyDesc,
      features: t.easyFeatures,
      cta: t.tryFreeBtn,
      note: t.firstMonthFree,
      popular: true
    },
    {
      name: language === 'cs' ? 'Exclusive' : 'Gói Exclusive',
      price: t.contactUs,
      period: '',
      description: t.proDesc,
      features: t.proFeatures,
      cta: t.scheduleCall,
      note: t.individualPricing
    }
  ];

  // Comparison table data matching the reference image
  const comparisonFeatures = [
    { name: language === 'cs' ? 'Mobilní aplikace' : 'Ứng dụng di động', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Apple a Google Wallet' : 'Apple và Google Wallet', tingting: true, bonous: true, stammgast: true, rewardly: true },
    { name: language === 'cs' ? 'Razítkovací karty' : 'Thẻ tích tem', tingting: true, bonous: true, stammgast: true, rewardly: true },
    { name: language === 'cs' ? 'Sbírání bodů' : 'Thu thập điểm', tingting: true, bonous: true, stammgast: true, rewardly: true },
    { name: 'Cashback', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Kupóny' : 'Phiếu giảm giá', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Odměny za body' : 'Thưởng điểm', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Push notifikace' : 'Thông báo đẩy', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'České skupiny' : 'Hỗ trợ bởi người Việt', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Kredity' : 'Tín dụng', tingting: t.comingSoon, bonous: false, stammgast: false, rewardly: false },
    { name: 'Vouchery', tingting: t.comingSoon, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Rezervace' : 'Đặt chỗ', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: 'Bannery', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Promo kódy' : 'Mã khuyến mãi', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Recenze' : 'Đánh giá', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Masterování poboček' : 'Quản lý chi nhánh', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: 'POS Dotykačka', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: 'POS Fusion', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: 'POS KasaFiK', tingting: true, bonous: false, stammgast: false, rewardly: false },
    { name: 'POS Storyous', tingting: t.comingSoon, bonous: false, stammgast: false, rewardly: false },
    { name: 'POS IProSoft', tingting: t.comingSoon, bonous: false, stammgast: false, rewardly: false },
    { name: 'POS GoKasa', tingting: t.comingSoon, bonous: false, stammgast: false, rewardly: false },
    { name: language === 'cs' ? 'Podpora v češtině 24/7' : 'Hỗ trợ tiếng Việt 24/7', tingting: true, bonous: false, stammgast: '?', rewardly: false },
    { name: language === 'cs' ? 'Cena měsíčně' : 'Giá hàng tháng', tingting: isYearly ? 'od 599 Kč' : 'od 690 Kč', bonous: 'od 749 Kč *', stammgast: 'od 599 Kč', rewardly: 'od 699 Kč' }
  ];

  const getPlanPrice = (plan: any) => {
    if (plan.price) return plan.price;
    return isYearly ? plan.priceYearly : plan.priceMonthly;
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.pricingTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-tight">
              {t.pricingSubtitle}
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-center">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    !isYearly
                      ? 'bg-christalle dark:bg-viking text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {t.monthly}
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isYearly
                      ? 'bg-christalle dark:bg-viking text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {t.yearly}
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {t.save20}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {/* Popular Badge - Positioned outside the card */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-christalle dark:bg-viking text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
                      {t.mostPopular}
                    </div>
                  </div>
                )}

                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 rounded-3xl overflow-hidden h-full">
                  <CardHeader className="text-center pb-6 pt-12">
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center mb-6">
                      {getPlanPrice(plan) === t.free ? (
                        <span className="text-5xl font-semibold text-gray-900 dark:text-white">{t.free}</span>
                      ) : getPlanPrice(plan) === t.contactUs ? (
                        <span className="text-3xl font-semibold text-gray-900 dark:text-white">{t.contactUs}</span>
                      ) : (
                        <>
                          <span className="text-5xl font-semibold text-gray-900 dark:text-white">{getPlanPrice(plan)}</span>
                          {plan.period && <span className="text-xl text-gray-600 dark:text-gray-300 ml-2">/{plan.period}</span>}
                        </>
                      )}
                    </div>
                    {isYearly && plan.priceYearly && plan.priceMonthly && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {language === 'cs' 
                          ? `Ušetříte ${parseInt(plan.priceMonthly) - parseInt(plan.priceYearly)} Kč měsíčně`
                          : `Tiết kiệm ${parseInt(plan.priceMonthly) - parseInt(plan.priceYearly)} Kč mỗi tháng`
                        }
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed px-4">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <Button
                      className="w-full py-4 rounded-full font-medium mb-6 bg-christalle hover:bg-christalle/90 dark:bg-viking dark:hover:bg-viking/90 text-white text-lg"
                    >
                      {plan.cta}
                    </Button>

                    {plan.note && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
                        {plan.note}
                      </p>
                    )}

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
                        {t.whatYouGet}
                      </h4>
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mb-20">
            <p className="text-gray-500 dark:text-gray-400">
              {t.pricesExcludeVAT} {isYearly && t.savingsNote}
            </p>
          </div>

          {/* Comparison Table - Apple Style */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <div className="p-8">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
                {t.whyChooseTingting}
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <th className="text-left py-6 px-6 font-medium text-gray-900 dark:text-white"></th>
                      <th className="text-center py-6 px-6">
                        <div className="bg-christalle/10 dark:bg-viking/20 rounded-xl p-3 border border-christalle/20 dark:border-viking/30">
                          <span className="font-semibold text-christalle dark:text-viking text-lg">tingting</span>
                        </div>
                      </th>
                      <th className="text-center py-6 px-6 font-medium text-gray-900 dark:text-white text-lg">BondUs</th>
                      <th className="text-center py-6 px-6 font-medium text-gray-900 dark:text-white text-lg">Stammgast</th>
                      <th className="text-center py-6 px-6 font-medium text-gray-900 dark:text-white text-lg">Rewardly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-4 px-6 text-gray-700 dark:text-gray-200 font-medium">{feature.name}</td>
                        <td className="py-4 px-6 text-center">
                          {feature.tingting === true ? (
                            <div className="w-6 h-6 mx-auto bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : feature.tingting === false ? (
                            <span className="text-gray-400 text-lg">—</span>
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feature.tingting}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.bonous === true ? (
                            <div className="w-6 h-6 mx-auto bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : feature.bonous === false ? (
                            <span className="text-gray-400 text-lg">—</span>
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feature.bonous}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.stammgast === true ? (
                            <div className="w-6 h-6 mx-auto bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : feature.stammgast === false ? (
                            <span className="text-gray-400 text-lg">—</span>
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feature.stammgast}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.rewardly === true ? (
                            <div className="w-6 h-6 mx-auto bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : feature.rewardly === false ? (
                            <span className="text-gray-400 text-lg">—</span>
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feature.rewardly}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                * plus roční poplatek 2799 Kč
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;