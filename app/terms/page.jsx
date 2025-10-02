"use client";
import React, { useEffect } from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('terms.title')} - Lookah`;
  }, [t]);

  const sections = t('terms.sections');

  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 overflow-x-hidden">
      <Header2 />
      <div id="wrapper" className="wrap">
        <div className="terms-page section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                  {/* Heading */}
                  <div className="heading panel text-center">
                    <h1 className="title h2 lg:h1 xl:display-6" style={{color: '#1F2A44'}}>
                      {t('terms.title')}
                    </h1>
                    <p className="fs-6 opacity-70 mt-2">
                      {t('terms.lastUpdated')}
                    </p>
                  </div>

                  {/* Introduction */}
                  <div className="content panel">
                    <p className="fs-6 lg:fs-5" style={{color: '#6B7280'}}>
                      {t('terms.intro')}
                    </p>
                  </div>

                  {/* Acceptance Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.acceptance.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.acceptance.content}
                    </p>
                  </div>

                  {/* Services Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.services.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.services.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.services.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* User Account Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.userAccount.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.userAccount.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.userAccount.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Usage Section */}
                  <div className="panel vstack gap-3 p-4 rounded-2" style={{backgroundColor: 'rgba(245, 113, 151, 0.05)'}}>
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.usage.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.usage.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.usage.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px text-white rounded-circle unicon-close fw-bold flex-shrink-0" style={{backgroundColor: '#EF4444'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Intellectual Property Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.intellectualProperty.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.intellectualProperty.content}
                    </p>
                  </div>

                  {/* Payment Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.payment.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.payment.content}
                    </p>
                  </div>

                  {/* Termination Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.termination.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.termination.content}
                    </p>
                  </div>

                  {/* Disclaimer Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.disclaimer.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.disclaimer.content}
                    </p>
                  </div>

                  {/* Changes Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.changes.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.changes.content}
                    </p>
                  </div>

                  {/* Law Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.law.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.law.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
