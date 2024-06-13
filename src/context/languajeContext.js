import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedLanguage = currentPath.match(/^\/(es|de|en)/);
    const selectedLanguage = matchedLanguage ? matchedLanguage[1] : "en";


    setLanguage(selectedLanguage);
  }, []);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};