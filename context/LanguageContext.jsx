"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

const LanguageContext = createContext();

const translationsMap = {
  es: esTranslations,
  en: enTranslations,
};

export function LanguageProvider({ children }) {
  // Detectar idioma del navegador con fallback a español
  const getInitialLocale = () => {
    // 1. Intentar obtener de localStorage
    const savedLocale = typeof window !== 'undefined' ? localStorage.getItem("locale") : null;
    if (savedLocale && (savedLocale === "es" || savedLocale === "en")) {
      return savedLocale;
    }

    // 2. Detectar idioma del navegador
    if (typeof window !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      // Si el idioma del navegador es inglés, usar inglés
      if (browserLang.startsWith('en')) {
        return 'en';
      }
      // Si es español, usar español
      if (browserLang.startsWith('es')) {
        return 'es';
      }
    }

    // 3. Fallback a español
    return 'es';
  };

  const initialLocale = getInitialLocale();
  const [locale, setLocale] = useState(initialLocale);
  const [translations, setTranslations] = useState(translationsMap[initialLocale]);

  useEffect(() => {
    // Guardar el idioma inicial en localStorage si no existe
    if (typeof window !== 'undefined' && !localStorage.getItem("locale")) {
      localStorage.setItem("locale", initialLocale);
    }
  }, []);

  useEffect(() => {
    // Update translations when locale changes
    setTranslations(translationsMap[locale]);
  }, [locale]);

  const changeLocale = (newLocale) => {
    if (newLocale === "es" || newLocale === "en") {
      setLocale(newLocale);
      localStorage.setItem("locale", newLocale);
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
