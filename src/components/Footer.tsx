import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="bg-white dark:bg-black py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3_42)">
                      <path d="M164.8 43.6416L148.773 50.8668L145.382 69.6004C144.784 72.895 141.915 75.2872 138.558 75.2872C136.601 75.2872 134.79 74.4817 133.462 73.0194L120.654 58.9286L101.789 61.4937C101.474 61.5352 101.153 61.5559 100.835 61.5559C98.394 61.5559 96.1124 60.2353 94.8748 58.1058C93.6268 55.9555 93.6199 53.3766 94.854 51.2125L104.299 34.6775L96.0329 17.5271C94.9923 15.37 95.1306 12.8774 96.3993 10.8551C97.675 8.82234 99.8598 7.60893 102.235 7.60893C102.712 7.60893 103.192 7.65732 103.666 7.75758L122.306 11.626L125.843 8.24502C114.497 2.9523 101.844 0 88.5 0C75.1559 0 62.5031 2.9523 51.1571 8.24502L54.6937 11.626L73.334 7.75758C73.8076 7.65732 74.2881 7.60893 74.7652 7.60893C77.1437 7.60893 79.325 8.82234 80.6007 10.8551C81.8694 12.8774 82.0077 15.37 80.9706 17.5271L72.7014 34.6775L82.146 51.2125C83.3801 53.3766 83.3732 55.9555 82.1252 58.1058C80.8876 60.2353 78.606 61.5559 76.1653 61.5559C75.8473 61.5559 75.5292 61.5352 75.2112 61.4937L56.3462 58.932L43.5379 73.0194C42.2104 74.4817 40.3989 75.2872 38.4422 75.2872C35.0854 75.2872 32.2161 72.895 31.618 69.6004L28.2267 50.8668L12.1999 43.6416C4.44574 56.7956 0 72.1275 0 88.5C0 137.376 39.6245 177 88.5 177C137.376 177 177 137.376 177 88.5C177 72.1275 172.554 56.7956 164.8 43.6416ZM132.577 88.3583C132.577 112.609 112.917 132.269 88.6694 132.269H88.5C64.1556 132.269 44.4229 112.533 44.4229 88.1923C44.4229 85.5477 45.4945 83.1485 47.23 81.4165C48.9654 79.6811 51.3577 78.6094 54.0057 78.6094H122.994C128.287 78.6094 132.577 82.8996 132.577 88.1923V88.3583ZM113.536 120.246C106.67 125.611 98.0379 128.812 88.6694 128.812H88.5C79.083 128.812 70.4059 125.59 63.5091 120.194C69.6868 113.401 78.5956 109.142 88.5 109.142C98.4044 109.142 107.362 113.425 113.536 120.246ZM127.651 84.2202C126.794 89.7238 122.033 93.9414 116.288 93.9414H60.7124C54.9633 93.9414 50.203 89.7203 49.3491 84.2133C49.9223 83.5381 50.636 82.9962 51.4403 82.6254C52.2446 82.2546 53.1201 82.0639 54.0057 82.0665H122.994C124.858 82.0665 126.527 82.9031 127.651 84.2202ZM144.279 3.08367L146.357 22.0109C146.419 22.5679 146.614 23.1017 146.927 23.5665C147.24 24.0313 147.662 24.4133 148.155 24.6797L164.925 33.6957C167.448 35.0543 167.32 38.7153 164.707 39.8907L147.349 47.7174C146.312 48.1841 145.572 49.1348 145.368 50.2514L141.973 68.9851C141.462 71.806 137.939 72.8155 136.013 70.6928L123.209 56.602C122.832 56.1863 122.36 55.8688 121.832 55.6772C121.305 55.4857 120.739 55.4257 120.184 55.5026L101.319 58.0643C98.4804 58.4515 96.4304 55.4128 97.8513 52.9237L107.292 36.3922C107.856 35.4035 107.897 34.2004 107.403 33.1771L99.1373 16.0268C97.8928 13.4444 100.15 10.5578 102.954 11.142L121.594 15.0139C122.707 15.2455 123.865 14.9136 124.688 14.1254L138.454 0.964512C140.525 -1.01637 143.968 0.238535 144.279 3.08367ZM38.5459 0.964512L52.3049 14.1254C53.1277 14.9136 54.2823 15.2421 55.3989 15.0139L74.0392 11.142C76.8463 10.5578 79.1003 13.4479 77.8558 16.0268L69.59 33.1771C69.0957 34.2004 69.1372 35.4035 69.7007 36.3922L79.1418 52.9237C80.5627 55.4128 78.5126 58.448 75.6744 58.0643L56.8094 55.5026C55.6824 55.3505 54.552 55.7619 53.7845 56.602L40.9796 70.6928C39.0541 72.812 35.5314 71.8025 35.0197 68.9851L31.6249 50.2514C31.525 49.7001 31.2924 49.1813 30.9473 48.7399C30.6022 48.2984 30.1549 47.9475 29.644 47.7174L12.2863 39.8907C9.67277 38.7118 9.54486 35.0508 12.0685 33.6957L28.8386 24.6797C29.3323 24.4142 29.754 24.0325 30.0672 23.5675C30.3804 23.1025 30.5757 22.5683 30.6362 22.0109L32.7139 3.08367C33.025 0.235078 36.4682 -1.01637 38.539 0.964512H38.5459Z" fill="#2c016d" className="dark:fill-white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3_42">
                        <rect width="177" height="177" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>tingting</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {t.modernSolution}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href="mailto:info@tingting.cz" className="text-christalle dark:text-viking hover:underline font-medium">info@tingting.cz</a>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href="tel:+420601380000" className="text-christalle dark:text-viking hover:underline font-medium">+420 601 380 000</a>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">Praha, Česká republika</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t.product}</h3>
              <ul className="space-y-3">
                {t.productLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t.support}</h3>
              <ul className="space-y-3">
                {t.supportLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t.company}</h3>
              <ul className="space-y-3">
                {t.companyLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
              <div className="text-gray-600 dark:text-gray-400">
                © {currentYear} tingting s.r.o. {t.allRightsReserved}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
                  {t.privacyPolicy}
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
                  {t.termsOfUse}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;