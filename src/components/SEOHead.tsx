import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
}) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const defaultTitle = language === 'cs' 
    ? 'Tingting - Digitální věrnostní karta pro váš podnik | Zvyšte návštěvnost o 40%'
    : 'Tingting - Thẻ khách hàng thân thiết kỹ thuật số | Tăng lượng khách 40%';
    
  const defaultDescription = language === 'cs'
    ? 'Získejte více zákazníků s digitální věrnostní kartou Tingting. Kupóny, razítkovací karta, odměny za body a více. 30 dní zdarma, bez závazků.'
    : 'Thu hút thêm khách hàng với thẻ khách hàng thân thiết kỹ thuật số Tingting. Phiếu giảm giá, thẻ tích tem, hệ thống điểm thưởng và nhiều hơn nữa. 30 ngày miễn phí.';

  const defaultKeywords = language === 'cs'
    ? 'věrnostní karta, digitální věrnostní program, kupóny, razítkovací karta, bodový systém, Apple Wallet, Google Wallet, POS integrace, zákazníci, marketing'
    : 'thẻ khách hàng thân thiết, chương trình khách hàng thân thiết kỹ thuật số, phiếu giảm giá, thẻ tích tem, hệ thống điểm, Apple Wallet, Google Wallet, tích hợp POS, khách hàng, marketing';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || 'https://tingting.cz/og-image.jpg';
  const seoUrl = url || (language === 'cs' ? 'https://tingting.cz' : 'https://tingting.cz/vi');

  React.useEffect(() => {
    // Update document title
    document.title = seoTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoKeywords);
    }
    
    // Update language
    document.documentElement.lang = language;
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seoTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', seoDescription);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', seoImage);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seoUrl);
    
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', language === 'cs' ? 'cs_CZ' : 'vi_VN');
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seoTitle);
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', seoDescription);
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', seoImage);
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', seoUrl);
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', seoUrl);
    
  }, [seoTitle, seoDescription, seoKeywords, seoImage, seoUrl, language]);

  return null; // This component doesn't render anything
};

export default SEOHead;