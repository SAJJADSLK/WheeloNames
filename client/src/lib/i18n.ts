/* =============================================================
   i18n — Wheeloname Internationalization
   Support for English and Arabic (RTL)
   ============================================================= */

export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      myWheels: "My Wheels",
      teamGenerator: "Team Generator",
      presets: "Presets",
      classroom: "Classroom",
      newWheel: "New Wheel",
      widget: "Embed Widget",
      analytics: "Analytics",
    },
    // Home Page
    home: {
      title: "Wheeloname",
      subtitle: "Random Decisions, Made Beautiful",
      description: "Create custom spin wheels for games, decisions, and classroom activities",
      createWheel: "Create Your First Wheel",
      browsePresets: "Browse Presets",
    },
    // Wheel Page
    wheel: {
      addNames: "Add Names",
      enterName: "Type name and press Enter",
      spin: "SPIN",
      winner: "Winner!",
      removeWinner: "No Repeat",
      shareLink: "Get Share Link",
      importCSV: "Import CSV",
      importGoogleSheets: "Import from Google Sheets",
      export: "Export",
      reset: "Reset",
      settings: "Settings",
      theme: "Theme",
      sound: "Sound Effects",
      confetti: "Confetti",
    },
    // Team Generator
    teamGenerator: {
      title: "Team Generator",
      subtitle: "Divide participants into random teams instantly",
      addParticipants: "Add Participants",
      enterParticipant: "Type name and press Enter",
      participants: "Participants",
      importFile: "Import from File",
      numTeams: "Number of Teams",
      generateTeams: "Generate Teams",
      copyTeams: "Copy Teams",
      exportCSV: "Export CSV",
      resetAll: "Reset All",
      generatedTeams: "Generated Teams",
      members: "members",
    },
    // Presets
    presets: {
      title: "Preset Wheels",
      subtitle: "Ready-to-use wheels for popular games and activities",
      spinNow: "Spin Now",
      entries: "Entries",
      options: "options",
      proTips: "Pro Tips",
      partyMode: "Party Mode",
      classroom: "Classroom",
      customize: "Customize",
      share: "Share",
    },
    // Classroom
    classroom: {
      title: "Classroom Resources",
      subtitle: "Discover how teachers are using Wheeloname",
      resources: "Resources",
      lessonIdeas: "Lesson Ideas by Grade Level",
      bestPractices: "Best Practices",
      gettingStarted: "Ready to Get Started?",
      faq: "Frequently Asked Questions",
    },
    // Widget
    widget: {
      title: "Embed Wheeloname",
      subtitle: "Add a spin wheel to your website",
      embedCode: "Embed Code",
      copyCode: "Copy Code",
      preview: "Preview",
      instructions: "Instructions",
      step1: "Copy the code below",
      step2: "Paste into your website HTML",
      step3: "Customize colors and entries",
      wheelId: "Wheel ID",
      width: "Width",
      height: "Height",
      theme: "Theme",
    },
    // Analytics
    analytics: {
      title: "Analytics",
      subtitle: "Track your wheel usage and statistics",
      totalSpins: "Total Spins",
      uniqueVisitors: "Unique Visitors",
      mostSelected: "Most Selected",
      leastSelected: "Least Selected",
      averageSpinsPerDay: "Average Spins/Day",
      topWheels: "Top Wheels",
      recentActivity: "Recent Activity",
      exportData: "Export Data",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      close: "Close",
      copied: "Copied!",
      tryAgain: "Try Again",
      noData: "No data available",
    },
  },
  ar: {
    // Navigation
    nav: {
      myWheels: "عجلاتي",
      teamGenerator: "مولد الفريق",
      presets: "القوائم المعدة",
      classroom: "الفصل الدراسي",
      newWheel: "عجلة جديدة",
      widget: "دمج الأداة",
      analytics: "التحليلات",
    },
    // Home Page
    home: {
      title: "عجلة الأسماء",
      subtitle: "قرارات عشوائية، بشكل جميل",
      description: "أنشئ عجلات دوارة مخصصة للألعاب والقرارات والأنشطة الصفية",
      createWheel: "أنشئ عجلتك الأولى",
      browsePresets: "استعرض القوائم المعدة",
    },
    // Wheel Page
    wheel: {
      addNames: "إضافة أسماء",
      enterName: "اكتب الاسم واضغط Enter",
      spin: "دوّر",
      winner: "الفائز!",
      removeWinner: "بدون تكرار",
      shareLink: "الحصول على رابط المشاركة",
      importCSV: "استيراد CSV",
      importGoogleSheets: "استيراد من جداول Google",
      export: "تصدير",
      reset: "إعادة تعيين",
      settings: "الإعدادات",
      theme: "المظهر",
      sound: "مؤثرات صوتية",
      confetti: "ألعاب نارية",
    },
    // Team Generator
    teamGenerator: {
      title: "مولد الفريق",
      subtitle: "قسّم المشاركين إلى فرق عشوائية على الفور",
      addParticipants: "إضافة المشاركين",
      enterParticipant: "اكتب الاسم واضغط Enter",
      participants: "المشاركون",
      importFile: "استيراد من ملف",
      numTeams: "عدد الفرق",
      generateTeams: "إنشاء الفرق",
      copyTeams: "نسخ الفرق",
      exportCSV: "تصدير CSV",
      resetAll: "إعادة تعيين الكل",
      generatedTeams: "الفرق المُنشأة",
      members: "أعضاء",
    },
    // Presets
    presets: {
      title: "عجلات معدة مسبقاً",
      subtitle: "عجلات جاهزة للاستخدام للألعاب والأنشطة الشهيرة",
      spinNow: "دوّر الآن",
      entries: "الإدخالات",
      options: "خيارات",
      proTips: "نصائح احترافية",
      partyMode: "وضع الحفلة",
      classroom: "الفصل الدراسي",
      customize: "تخصيص",
      share: "مشاركة",
    },
    // Classroom
    classroom: {
      title: "موارد الفصل الدراسي",
      subtitle: "اكتشف كيف يستخدم المعلمون عجلة الأسماء",
      resources: "الموارد",
      lessonIdeas: "أفكار الدروس حسب مستوى الصف",
      bestPractices: "أفضل الممارسات",
      gettingStarted: "هل أنت مستعد للبدء؟",
      faq: "الأسئلة الشائعة",
    },
    // Widget
    widget: {
      title: "دمج عجلة الأسماء",
      subtitle: "أضف عجلة دوارة إلى موقعك الإلكتروني",
      embedCode: "كود التضمين",
      copyCode: "نسخ الكود",
      preview: "معاينة",
      instructions: "التعليمات",
      step1: "انسخ الكود أدناه",
      step2: "الصق في HTML موقعك",
      step3: "خصص الألوان والإدخالات",
      wheelId: "معرف العجلة",
      width: "العرض",
      height: "الارتفاع",
      theme: "المظهر",
    },
    // Analytics
    analytics: {
      title: "التحليلات",
      subtitle: "تتبع استخدام عجلتك والإحصائيات",
      totalSpins: "إجمالي الدورات",
      uniqueVisitors: "الزوار الفريدون",
      mostSelected: "الأكثر اختياراً",
      leastSelected: "الأقل اختياراً",
      averageSpinsPerDay: "متوسط الدورات/اليوم",
      topWheels: "أفضل العجلات",
      recentActivity: "النشاط الأخير",
      exportData: "تصدير البيانات",
    },
    // Common
    common: {
      loading: "جاري التحميل...",
      error: "خطأ",
      success: "نجاح",
      cancel: "إلغاء",
      save: "حفظ",
      delete: "حذف",
      edit: "تعديل",
      close: "إغلاق",
      copied: "تم النسخ!",
      tryAgain: "حاول مرة أخرى",
      noData: "لا توجد بيانات متاحة",
    },
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}

export function getLanguageDirection(lang: Language): "ltr" | "rtl" {
  return lang === "ar" ? "rtl" : "ltr";
}
