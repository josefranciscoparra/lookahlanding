"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { locale, changeLocale } = useLanguage();

  const toggleLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    changeLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-1 border"
      style={{
        backgroundColor: 'white',
        color: '#1F2A44',
        borderColor: '#E5E7EB',
        minWidth: '70px',
        padding: '6px 14px',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#F9FAFB';
        e.currentTarget.style.borderColor = '#F57197';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.borderColor = '#E5E7EB';
      }}
      aria-label={`Switch to ${locale === 'es' ? 'English' : 'Spanish'}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span className="fw-bold fs-7" style={{ letterSpacing: '0.5px' }}>
        {locale.toUpperCase()}
      </span>
    </button>
  );
}
