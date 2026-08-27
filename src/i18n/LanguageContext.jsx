import { createContext, useContext, useMemo, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext(null);

function getTranslation(translationsForLanguage, key) {
  return (
    key
      .split(".")
      .reduce((value, part) => value?.[part], translationsForLanguage) ?? key
  );
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => getTranslation(translations[language], key),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
