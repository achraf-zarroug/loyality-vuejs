import { ref, computed } from "vue"

// Types pour la traduction
interface Translations {
  [key: string]: string | string[] | Translations
}

interface LanguageData {
  code: string
  name: string
  nativeName: string
  flag: string
}

// État global de la traduction
const currentLanguage = ref<string>("en")
const isRTL = computed(() => currentLanguage.value === "ar")

// Langues disponibles
const availableLanguages: LanguageData[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
]

// Traductions
const translations: Record<string, Translations> = {
  en: {
    nav: {
      features: "Features",
      benefits: "Benefits",
      pricing: "Pricing",
      signIn: "Sign in",
      getStarted: "Get started today",
      language: "العربية",
    },
    hero: {
      title: "Reward your {loyal} and watch your sales soar",
      loyal: "loyal customers",
      subtitle:
        "Customers love getting rewarded. Our loyalty and rewards software lets you easily create a points-based loyalty program that keeps them coming back for more.",
      getFreeTrial: "Get 15 days free",
      livePreview: "Live preview",
      notification: "🎉 New features updated and we have changed contact number →",
      phone: "+966583872101",
    },
    features: {
      title: "Powerful features to {boost} loyalty",
      boost: "boost",
      subtitle:
        "Everything you need to create, manage, and optimize your customer loyalty program. Built for modern businesses who want to reward their customers effectively.",
      pointsRewards: {
        title: "Points & Rewards System",
        description:
          "Create flexible point-based loyalty programs with customizable rewards, tiers, and redemption options that keep customers engaged.",
      },
      analytics: {
        title: "Advanced Analytics",
        description:
          "Track customer behavior, program performance, and ROI with detailed analytics and insights to optimize your loyalty strategy.",
      },
      segmentation: {
        title: "Customer Segmentation",
        description:
          "Segment customers based on behavior, purchase history, and engagement to create targeted campaigns and personalized experiences.",
      },
      customization: {
        title: "Easy Customization",
        description:
          "Customize your loyalty program interface, branding, and rules to match your business needs without any technical knowledge.",
      },
      security: {
        title: "Fraud Protection",
        description:
          "Built-in security features and fraud detection to protect your program from abuse and ensure legitimate customer participation.",
      },
      integrations: {
        title: "Seamless Integrations",
        description:
          "Connect with popular e-commerce platforms, POS systems, and marketing tools to sync customer data and automate workflows.",
      },
      cta: {
        title: "Ready to boost your customer loyalty?",
        subtitle:
          "Join thousands of businesses already using our platform to reward their customers and increase sales.",
        startTrial: "Start free trial",
        viewDemo: "View demo",
      },
    },
    benefits: {
      title: "Why businesses {choose} us",
      choose: "choose",
      subtitle:
        "Join thousands of successful businesses that have transformed their customer relationships and boosted their revenue with our loyalty platform.",
      stats: {
        retention: "Increase in Retention",
        retentionDesc: "Average customer retention boost",
        orderValue: "Higher Order Value",
        orderValueDesc: "Average order value increase",
        businesses: "Happy Businesses",
        businessesDesc: "Companies using our platform",
        roi: "ROI Improvement",
        roiDesc: "Return on investment multiplier",
      },
      benefits: {
        retention: {
          title: "Boost Customer Retention",
          description:
            "Keep customers coming back with personalized rewards and engaging loyalty programs that create lasting relationships.",
          impact: "Up to 45% retention increase",
        },
        orderValue: {
          title: "Increase Average Order Value",
          description:
            "Encourage larger purchases through strategic point multipliers, tier benefits, and exclusive member offers.",
          impact: "Average 32% AOV growth",
        },
        timeResource: {
          title: "Save Time & Resources",
          description:
            "Automate your loyalty program management with smart rules, automated rewards, and seamless integrations.",
          impact: "80% time savings",
        },
        revenue: {
          title: "Maximize Revenue Growth",
          description:
            "Drive consistent revenue growth through repeat purchases, referrals, and increased customer lifetime value.",
          impact: "2.5x ROI improvement",
        },
      },
      testimonial: {
        quote:
          "Since implementing Loyalfy, our customer retention increased by 45% and average order value grew by 32%. The platform is intuitive and the results speak for themselves.",
        author: "Ahmed Hassan",
        position: "CEO, TechStore",
      },
      cta: {
        title: "Ready to see these results for your business?",
        subtitle:
          "Join over 5,000+ businesses already growing with our loyalty platform. Start your free trial today and see the difference.",
        startTrial: "Start 15-day free trial",
        scheduleDemo: "Schedule demo",
      },
    },
    pricing: {
      title: "Simple, transparent {pricing}",
      pricing: "pricing",
      subtitle: "Choose the perfect plan for your business. Start free and scale as you grow.",
      plans: {
        starter: {
          name: "Starter",
          description: "Perfect for small businesses",
          price: "29",
          buttonText: "Start Free Trial",
          features: ["Up to 1,000 customers", "Basic loyalty program", "Email support", "Standard integrations"],
        },
        professional: {
          name: "Professional",
          description: "Best for growing businesses",
          price: "79",
          buttonText: "Start Free Trial",
          popular: "Most Popular",
          features: [
            "Up to 10,000 customers",
            "Advanced loyalty features",
            "Priority support",
            "All integrations",
            "Custom branding",
            "Analytics dashboard",
          ],
        },
        enterprise: {
          name: "Enterprise",
          description: "For large organizations",
          price: "199",
          buttonText: "Contact Sales",
          features: [
            "Unlimited customers",
            "Enterprise features",
            "Dedicated support",
            "Custom integrations",
            "White-label solution",
            "Advanced analytics",
            "API access",
          ],
        },
      },
    },
    footer: {
      description:
        "Transform your customer relationships with our powerful loyalty and rewards platform. Boost retention, increase sales, and build lasting customer connections.",
      product: "Product",
      company: "Company",
      support: "Support",
      newsletter: {
        title: "Stay updated",
        subtitle: "Get the latest news, updates, and loyalty program tips delivered to your inbox.",
        placeholder: "Enter your email address",
        subscribe: "Subscribe",
        subscribing: "Subscribing...",
      },
      contact: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      trust: {
        trusted: "Trusted by 5,000+",
        businesses: "businesses worldwide",
        uptime: "99.9% Uptime",
        compliant: "SOC 2 Compliant",
        gdpr: "GDPR Ready",
      },
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
      },
      copyright: "© {year} Loyalfy. All rights reserved.",
    },
    integration: {
      title: "Integrated with",
    },
  },
  ar: {
    nav: {
      features: "المميزات",
      benefits: "الفوائد",
      pricing: "الأسعار",
      signIn: "تسجيل الدخول",
      getStarted: "ابدأ اليوم",
      language: "English",
    },
    hero: {
      title: "كافئ {loyal} واشاهد مبيعاتك ترتفع",
      loyal: "عملاءك المخلصين",
      subtitle:
        "العملاء يحبون الحصول على المكافآت. برنامج الولاء والمكافآت الخاص بنا يتيح لك إنشاء برنامج ولاء قائم على النقاط بسهولة يجعلهم يعودون للمزيد.",
      getFreeTrial: "احصل على 15 يوم مجاني",
      livePreview: "معاينة مباشرة",
      notification: "🎉 تم تحديث الميزات ولدينا تم تغيير رقم التواصل ←",
      phone: "966583872101+",
    },
    features: {
      title: "مميزات قوية لـ{boost} الولاء",
      boost: "تعزيز",
      subtitle:
        "كل ما تحتاجه لإنشاء وإدارة وتحسين برنامج ولاء العملاء. مصمم للشركات الحديثة التي تريد مكافأة عملائها بفعالية.",
      pointsRewards: {
        title: "نظام النقاط والمكافآت",
        description:
          "إنشاء برامج ولاء مرنة قائمة على النقاط مع مكافآت قابلة للتخصيص ومستويات وخيارات استرداد تحافظ على تفاعل العملاء.",
      },
      analytics: {
        title: "تحليلات متقدمة",
        description:
          "تتبع سلوك العملاء وأداء البرنامج والعائد على الاستثمار مع تحليلات ورؤى مفصلة لتحسين استراتيجية الولاء.",
      },
      segmentation: {
        title: "تقسيم العملاء",
        description: "تقسيم العملاء بناءً على السلوك وتاريخ الشراء والتفاعل لإنشاء حملات مستهدفة وتجارب شخصية.",
      },
      customization: {
        title: "تخصيص سهل",
        description:
          "تخصيص واجهة برنامج الولاء والعلامة التجارية والقواعد لتتناسب مع احتياجات عملك دون أي معرفة تقنية.",
      },
      security: {
        title: "حماية من الاحتيال",
        description: "ميزات أمان مدمجة واكتشاف الاحتيال لحماية برنامجك من سوء الاستخدام وضمان مشاركة العملاء الشرعيين.",
      },
      integrations: {
        title: "تكاملات سلسة",
        description:
          "الاتصال بمنصات التجارة الإلكترونية الشائعة وأنظمة نقاط البيع وأدوات التسويق لمزامنة بيانات العملاء وأتمتة سير العمل.",
      },
      cta: {
        title: "مستعد لتعزيز ولاء عملائك؟",
        subtitle: "انضم إلى آلاف الشركات التي تستخدم منصتنا بالفعل لمكافأة عملائها وزيادة المبيعات.",
        startTrial: "ابدأ تجربة مجانية",
        viewDemo: "شاهد العرض التوضيحي",
      },
    },
    benefits: {
      title: "لماذا تختار الشركات {choose}",
      choose: "خدماتنا",
      subtitle: "انضم إلى آلاف الشركات الناجحة التي حولت علاقات عملائها وعززت إيراداتها مع منصة الولاء الخاصة بنا.",
      stats: {
        retention: "زيادة في الاحتفاظ",
        retentionDesc: "متوسط تعزيز الاحتفاظ بالعملاء",
        orderValue: "قيمة طلب أعلى",
        orderValueDesc: "متوسط زيادة قيمة الطلب",
        businesses: "شركات سعيدة",
        businessesDesc: "الشركات التي تستخدم منصتنا",
        roi: "تحسين العائد",
        roiDesc: "مضاعف العائد على الاستثمار",
      },
      benefits: {
        retention: {
          title: "تعزيز الاحتفاظ بالعملاء",
          description: "اجعل العملاء يعودون مع المكافآت الشخصية وبرامج الولاء الجذابة التي تخلق علاقات دائمة.",
          impact: "زيادة الاحتفاظ حتى 45%",
        },
        orderValue: {
          title: "زيادة متوسط قيمة الطلب",
          description:
            "تشجيع المشتريات الأكبر من خلال مضاعفات النقاط الاستراتيجية ومزايا المستوى والعروض الحصرية للأعضاء.",
          impact: "متوسط نمو 32% في قيمة الطلب",
        },
        timeResource: {
          title: "توفير الوقت والموارد",
          description: "أتمتة إدارة برنامج الولاء مع القواعد الذكية والمكافآت التلقائية والتكاملات السلسة.",
          impact: "80% توفير في الوقت",
        },
        revenue: {
          title: "تعظيم نمو الإيرادات",
          description: "دفع نمو الإيرادات المستمر من خلال المشتريات المتكررة والإحالات و��يادة قيمة عمر العميل.",
          impact: "تحسين العائد 2.5 مرة",
        },
      },
      testimonial: {
        quote:
          "منذ تطبيق لويالفي، زاد الاحتفاظ بعملائنا بنسبة 45% ونمت قيمة الطلب المتوسطة بنسبة 32%. المنصة بديهية والنتائج تتحدث عن نفسها.",
        author: "أحمد حسن",
        position: "الرئيس التنفيذي، تك ستور",
      },
      cta: {
        title: "مستعد لرؤية هذه النتائج لعملك؟",
        subtitle:
          "انضم إلى أكثر من 5000+ شركة تنمو بالفعل مع منصة الولاء الخاصة بنا. ابدأ تجربتك المجانية اليوم وشاهد الفرق.",
        startTrial: "ابدأ تجربة 15 يوم مجانية",
        scheduleDemo: "جدولة عرض توضيحي",
      },
    },
    pricing: {
      title: "أسعار بسيطة و{pricing}",
      pricing: "شفافة",
      subtitle: "اختر الخطة المثالية لعملك. ابدأ مجاناً وتوسع مع نموك.",
      plans: {
        starter: {
          name: "المبتدئ",
          description: "مثالي للشركات الصغيرة",
          price: "29",
          buttonText: "ابدأ تجربة مجانية",
          features: ["حتى 1000 عميل", "برنامج ولاء أساسي", "دعم بريد إلكتروني", "تكاملات قياسية"],
        },
        professional: {
          name: "المحترف",
          description: "الأفضل للشركات النامية",
          price: "79",
          buttonText: "ابدأ تجربة مجانية",
          popular: "الأكثر شعبية",
          features: [
            "حتى 10000 عميل",
            "مميزات ولاء متقدمة",
            "دعم أولوية",
            "جميع التكاملات",
            "علامة تجارية مخصصة",
            "لوحة تحليلات",
          ],
        },
        enterprise: {
          name: "المؤسسة",
          description: "للمؤسسات الكبيرة",
          price: "199",
          buttonText: "اتصل بالمبيعات",
          features: [
            "عملاء غير محدودين",
            "مميزات المؤسسة",
            "دعم مخصص",
            "تكاملات مخصصة",
            "حل العلامة البيضاء",
            "تحليلات متقدمة",
            "وصول API",
          ],
        },
      },
    },
    footer: {
      description:
        "حول علاقات عملائك مع منصة الولاء والمكافآت القوية الخاصة بنا. عزز الاحتفاظ، وزد المبيعات، وابني اتصالات عملاء دائمة.",
      product: "المنتج",
      company: "الشركة",
      support: "الدعم",
      newsletter: {
        title: "ابق محدثاً",
        subtitle: "احصل على آخر الأخبار والتحديثات ونصائح برنامج الولاء في صندوق الوارد الخاص بك.",
        placeholder: "أدخل عنوان بريدك الإلكتروني",
        subscribe: "اشترك",
        subscribing: "جاري الاشتراك...",
      },
      contact: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
      },
      trust: {
        trusted: "موثوق من قبل 5000+",
        businesses: "شركة حول العالم",
        uptime: "99.9% وقت تشغيل",
        compliant: "متوافق مع SOC 2",
        gdpr: "جاهز لـ GDPR",
      },
      legal: {
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        cookies: "سياسة ملفات تعريف الارتباط",
      },
      copyright: "© {year} لويالفي. جميع الحقوق محفوظة.",
    },
    integration: {
      title: "متكامل مع",
    },
  },
}

// Fonction pour obtenir une traduction
const getNestedValue = (obj: any, path: string): string | string[] => {
  const result = path.split(".").reduce((current, key) => current?.[key], obj)
  return result || path
}

export const useTranslation = () => {
  const t = (key: string, params?: Record<string, string>): string | string[] => {
    let translation = getNestedValue(translations[currentLanguage.value], key)

    // Si c'est un tableau, on le retourne tel quel
    if (Array.isArray(translation)) {
      return translation
    }

    // Si c'est une chaîne, on applique les paramètres
    if (typeof translation === "string" && params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = (translation as string).replace(`{${param}}`, value)
      })
    }

    return translation as string
  }

  const tArray = (key: string): string[] => {
    const result = getNestedValue(translations[currentLanguage.value], key)
    return Array.isArray(result) ? result : []
  }

  const setLanguage = (lang: string): void => {
    if (translations[lang]) {
      currentLanguage.value = lang

      // Update document direction and lang attribute
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = lang

      // Save to localStorage
      localStorage.setItem("preferred-language", lang)
    }
  }

  const initializeLanguage = (): void => {
    // Check localStorage first
    const savedLang = localStorage.getItem("preferred-language")
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang)
      return
    }

    // Check browser language
    const browserLang = navigator.language.split("-")[0]
    if (translations[browserLang]) {
      setLanguage(browserLang)
      return
    }

    // Default to English
    setLanguage("en")
  }

  return {
    t,
    tArray,
    currentLanguage: computed(() => currentLanguage.value),
    isRTL,
    availableLanguages,
    setLanguage,
    initializeLanguage,
  }
}
