import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  useEffect(() => {
    // Auto-play video when component mounts
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 pb-20 min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Header - Apple Style */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-semibold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light mb-12 leading-tight">
              {t.heroSubtitle}
            </p>
            
            {/* CTA Buttons - Apple Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button 
                size="lg"
                onClick={() => handleNavigation('registration')}
                className="bg-christalle hover:bg-christalle/90 text-white text-lg px-8 py-4 rounded-full font-medium transition-all duration-200"
                aria-label={language === 'cs' ? 'Vyzkoušet Tingting zdarma' : 'Dùng thử Tingting miễn phí'}
              >
                {t.tryFree}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToFeatures()}
                className="border-gray-300 dark:border-gray-600 hover:border-christalle dark:hover:border-viking text-gray-900 dark:text-white hover:bg-christalle/10 dark:hover:bg-viking/20 text-lg px-8 py-4 rounded-full font-medium transition-all duration-200"
                aria-label={language === 'cs' ? 'Podívat se jak Tingting funguje' : 'Xem cách Tingting hoạt động'}
              >
                {t.seeHowItWorks}
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.heroNote}
            </p>
          </div>

          {/* Hero Video Section - Apple Style */}
          <div className="relative">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[600px] lg:h-[700px]">
                
                {/* Video Container - No controls, autoplay */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="auto"
                  style={{ pointerEvents: 'none' }}
                  aria-label={language === 'cs' ? 'Ukázka Tingting aplikace' : 'Demo ứng dụng Tingting'}
                >
                  <source 
                    src="https://tingting.fra1.cdn.digitaloceanspaces.com/5364474_Coll_wavebreak_Supermarket_3840x2160.mp4" 
                    type="video/mp4" 
                  />
                  {language === 'cs' ? 'Váš prohlížeč nepodporuje video element.' : 'Trình duyệt của bạn không hỗ trợ phần tử video.'}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost"
          size="icon"
          onClick={scrollToFeatures}
          className="animate-bounce text-gray-400 hover:text-gray-600"
          aria-label={language === 'cs' ? 'Přejít na funkce' : 'Chuyển đến tính năng'}
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;