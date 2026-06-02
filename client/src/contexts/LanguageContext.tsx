import { createContext, useContext, useEffect, useState } from "react";
import { Language, getLanguageDirection } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("wheeloname-language");
    if (saved === "ar" || saved === "en") return saved;

    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("ar")) return "ar";

    return "en";
  });

  const direction = getLanguageDirection(language);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("wheeloname-language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = getLanguageDirection(lang);
  };

  // Set initial HTML attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
