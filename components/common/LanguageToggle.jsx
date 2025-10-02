"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";

export default function LanguageToggle() {
  const { locale, changeLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale) => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-sm rounded d-inline-flex align-items-center gap-1"
        style={{
          backgroundColor: 'transparent',
          color: '#6B7280',
          border: 'none',
          padding: '4px 8px',
          fontSize: '13px',
          fontWeight: '500',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#F57197';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#6B7280';
        }}
      >
        <svg
          width="14"
          height="14"
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
        <span>{locale.toUpperCase()}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '4px',
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            minWidth: '100px',
            zIndex: 1000,
            overflow: 'hidden'
          }}
        >
          <button
            onClick={() => handleLanguageChange('es')}
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '13px',
              border: 'none',
              backgroundColor: locale === 'es' ? '#FEF2F2' : 'white',
              color: locale === 'es' ? '#F57197' : '#374151',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontWeight: locale === 'es' ? '600' : '400'
            }}
            onMouseEnter={(e) => {
              if (locale !== 'es') e.currentTarget.style.backgroundColor = '#F9FAFB';
            }}
            onMouseLeave={(e) => {
              if (locale !== 'es') e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            Español
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '13px',
              border: 'none',
              backgroundColor: locale === 'en' ? '#FEF2F2' : 'white',
              color: locale === 'en' ? '#F57197' : '#374151',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontWeight: locale === 'en' ? '600' : '400'
            }}
            onMouseEnter={(e) => {
              if (locale !== 'en') e.currentTarget.style.backgroundColor = '#F9FAFB';
            }}
            onMouseLeave={(e) => {
              if (locale !== 'en') e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
