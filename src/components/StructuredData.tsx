import React from 'react';
import { useLanguage } from '@/hooks/use-language';

const StructuredData: React.FC = () => {
  const { language } = useLanguage();

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tingting",
    "alternateName": "Tingting s.r.o.",
    "url": language === 'cs' ? "https://tingting.cz" : "https://tingting.cz/vi",
    "logo": "https://tingting.cz/logo.png",
    "description": language === 'cs' 
      ? "Moderní řešení pro digitální věrnostní programy"
      : "Giải pháp hiện đại cho chương trình khách hàng thân thiết kỹ thuật số",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": language === 'cs' ? "+420-123-456-789" : "+84-123-456-789",
      "contactType": "customer service",
      "email": "info@tingting.cz",
      "availableLanguage": language === 'cs' ? ["Czech", "Vietnamese"] : ["Vietnamese", "Czech"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": language === 'cs' ? "Praha" : "Hồ Chí Minh",
      "addressCountry": language === 'cs' ? "CZ" : "VN"
    },
    "sameAs": [
      "https://www.facebook.com/tingting.cz",
      "https://www.linkedin.com/company/tingting-cz",
      "https://twitter.com/tingting_cz"
    ]
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tingting",
    "description": language === 'cs'
      ? "Digitální věrnostní karta pro váš podnik. Kupóny, razítkovací karta, odměny za body a více."
      : "Thẻ khách hàng thân thiết kỹ thuật số cho doanh nghiệp của bạn. Phiếu giảm giá, thẻ tích tem, hệ thống điểm thưởng và nhiều hơn nữa.",
    "url": language === 'cs' ? "https://tingting.cz" : "https://tingting.cz/vi",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": language === 'cs' ? "CZK" : "VND",
      "description": language === 'cs' ? "30 dní zdarma" : "30 ngày miễn phí"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
      "bestRating": "5"
    },
    "featureList": language === 'cs' ? [
      "Digitální kupóny",
      "Razítkovací karta",
      "Bodový systém",
      "Push notifikace",
      "Apple Wallet integrace",
      "Google Wallet integrace",
      "POS integrace"
    ] : [
      "Phiếu giảm giá kỹ thuật số",
      "Thẻ tích tem",
      "Hệ thống điểm",
      "Thông báo đẩy",
      "Tích hợp Apple Wallet",
      "Tích hợp Google Wallet",
      "Tích hợp POS"
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": language === 'cs' ? [
      {
        "@type": "Question",
        "name": "Pro koho je kartička určena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kartička je určena pro všechny typy podniků, které chtějí budovat věrnost zákazníků - kavárny, restaurace, fitness centra, kadeřnictví, obchody a mnoho dalších. Funguje pro malé rodinné podniky i velké řetězce."
        }
      },
      {
        "@type": "Question",
        "name": "Budu muset pro používání kartičky kupovat nějaký hardware?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ne, nepotřebujete žádný speciální hardware. Kartička funguje s běžnými smartphony a tablety. Pokud máte pokladní systém, můžeme ho integrovat, ale není to nutné pro základní fungování."
        }
      },
      {
        "@type": "Question",
        "name": "Jak si můžu Kartičku otestovat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Můžete si vytvořit bezplatný účet a vyzkoušet všechny funkce 30 dní zdarma. Není potřeba zadávat platební údaje. Po registraci vám pomůžeme s nastavením a ukážeme všechny možnosti."
        }
      }
    ] : [
      {
        "@type": "Question",
        "name": "Thẻ khách hàng thân thiết phù hợp với loại hình kinh doanh nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thẻ phù hợp với mọi loại hình kinh doanh muốn xây dựng lòng trung thành của khách hàng - quán cà phê, nhà hàng, phòng gym, salon tóc, cửa hàng và nhiều lĩnh vực khác. Hoạt động hiệu quả cho cả doanh nghiệp gia đình nhỏ lẫn chuỗi lớn."
        }
      },
      {
        "@type": "Question",
        "name": "Tôi có cần mua thêm thiết bị phần cứng nào không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Không, bạn không cần thiết bị đặc biệt nào. Thẻ hoạt động với smartphone và tablet thông thường. Nếu bạn có hệ thống POS, chúng tôi có thể tích hợp, nhưng không bắt buộc cho chức năng cơ bản."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để dùng thử Thẻ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bạn có thể tạo tài khoản miễn phí và trải nghiệm tất cả tính năng trong 30 ngày. Không cần nhập thông tin thẻ thanh toán. Sau khi đăng ký, chúng tôi sẽ hỗ trợ thiết lập và hướng dẫn tất cả tính năng."
        }
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'cs' ? "Domů" : "Trang chủ",
        "item": language === 'cs' ? "https://tingting.cz" : "https://tingting.cz/vi"
      }
    ]
  };

  React.useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.textContent?.includes('"@context"')) {
        script.remove();
      }
    });

    // Add new structured data
    const scripts = [
      organizationData,
      softwareApplicationData,
      faqData,
      breadcrumbData
    ];

    scripts.forEach(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
      scriptsToRemove.forEach(script => {
        if (script.textContent?.includes('"@context"')) {
          script.remove();
        }
      });
    };
  }, [language]);

  return null;
};

export default StructuredData;