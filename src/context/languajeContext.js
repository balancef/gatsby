import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedLanguage = currentPath.match(/^\/(es|de|en)/);
    const selectedLanguage = matchedLanguage ? matchedLanguage[1] : "en";
    if(selectedLanguage === language) return;
    setLanguage(selectedLanguage);
  });
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};