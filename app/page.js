"use client";
import Home3 from "./(homes)/home-3/page";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export default function HomePage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Update document title dynamically
    document.title = t('metadata.title') || 'Lookah';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('metadata.description'));
    }
  }, [t]);

  return (
    <>
      <Home3 />
    </>
  );
}
