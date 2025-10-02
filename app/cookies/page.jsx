"use client";
import React, { useEffect } from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { useLanguage } from "@/context/LanguageContext";

export default function CookiesPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('cookies.title')} - Lookah`;
  }, [t]);

  const sections = t('cookies.sections');

  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 overflow-x-hidden">
      <Header2 />
      <div id="wrapper" className="wrap">
        <div className="cookies-policy section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                  {/* Heading */}
                  <div className="heading panel text-center">
                    <h1 className="title h2 lg:h1 xl:display-6" style={{color: '#1F2A44'}}>
                      {t('cookies.title')}
                    </h1>
                    <p className="fs-6 opacity-70 mt-2">
                      {t('cookies.lastUpdated')}
                    </p>
                  </div>

                  {/* Introduction */}
                  <div className="content panel">
                    <p className="fs-6 lg:fs-5" style={{color: '#6B7280'}}>
                      {t('cookies.intro')}
                    </p>
                  </div>

                  {/* What are Cookies Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.whatAreCookies.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.whatAreCookies.content}
                    </p>
                  </div>

                  {/* Types of Cookies Section */}
                  <div className="panel vstack gap-4">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.typesOfCookies.title}
                    </h2>

                    {/* Essential Cookies */}
                    <div className="panel vstack gap-2 p-4 rounded-2" style={{backgroundColor: 'rgba(245, 113, 151, 0.05)'}}>
                      <h3 className="h5 lg:h4 m-0" style={{color: '#1F2A44'}}>
                        {sections.typesOfCookies.essential.title}
                      </h3>
                      <p className="fs-6 m-0" style={{color: '#6B7280'}}>
                        {sections.typesOfCookies.essential.content}
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="panel vstack gap-2 p-4 rounded-2" style={{backgroundColor: 'rgba(245, 113, 151, 0.05)'}}>
                      <h3 className="h5 lg:h4 m-0" style={{color: '#1F2A44'}}>
                        {sections.typesOfCookies.analytics.title}
                      </h3>
                      <p className="fs-6 m-0" style={{color: '#6B7280'}}>
                        {sections.typesOfCookies.analytics.content}
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="panel vstack gap-2 p-4 rounded-2" style={{backgroundColor: 'rgba(245, 113, 151, 0.05)'}}>
                      <h3 className="h5 lg:h4 m-0" style={{color: '#1F2A44'}}>
                        {sections.typesOfCookies.functional.title}
                      </h3>
                      <p className="fs-6 m-0" style={{color: '#6B7280'}}>
                        {sections.typesOfCookies.functional.content}
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="panel vstack gap-2 p-4 rounded-2" style={{backgroundColor: 'rgba(245, 113, 151, 0.05)'}}>
                      <h3 className="h5 lg:h4 m-0" style={{color: '#1F2A44'}}>
                        {sections.typesOfCookies.marketing.title}
                      </h3>
                      <p className="fs-6 m-0" style={{color: '#6B7280'}}>
                        {sections.typesOfCookies.marketing.content}
                      </p>
                    </div>
                  </div>

                  {/* Cookies List Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.cookiesList.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.cookiesList.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.cookiesList.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Third Party Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.thirdParty.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.thirdParty.content}
                    </p>
                  </div>

                  {/* Manage Cookies Section */}
                  <div className="panel vstack gap-3 p-4 rounded-2" style={{backgroundColor: 'rgba(31, 42, 68, 0.05)'}}>
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.manageCookies.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.manageCookies.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.manageCookies.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {sections.manageCookies.warning && (
                      <div className="panel p-3 rounded" style={{backgroundColor: '#FEF3C7', border: '1px solid #F59E0B'}}>
                        <p className="fs-7 m-0" style={{color: '#92400E'}}>
                          <strong>⚠️ {sections.manageCookies.warning}</strong>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Updates Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.updates.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.updates.content}
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
