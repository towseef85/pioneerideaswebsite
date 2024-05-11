import React, { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language
  const [dir, setDir] = useState('ltr'); // Default text direction

  // Load initial language and direction from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
      setDir(storedLang === 'en' ? 'ltr' : 'rtl');
    }
  }, []);

  // Function to change language and direction
  const handleDirChange = (lang) => {
    setLanguage(lang);
    const direction = lang === 'en' ? 'ltr' : 'rtl';
    setDir(direction);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, dir, handleDirChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
