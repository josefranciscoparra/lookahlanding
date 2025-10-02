"use client";
import React, { useEffect } from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('privacy.title')} - Lookah`;
  }, [t]);

  const sections = t('privacy.sections');

  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 overflow-x-hidden">
      <Header2 />
      <div id="wrapper" className="wrap">
        <div className="privacy-policy section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                  {/* Heading */}
                  <div className="heading panel text-center">
                    <h1 className="title h2 lg:h1 xl:display-6" style={{color: '#1F2A44'}}>
                      {t('privacy.title')}
                    </h1>
                    <p className="fs-6 opacity-70 mt-2">
                      {t('privacy.lastUpdated')}
                    </p>
                  </div>

                  {/* Introduction */}
                  <div className="content panel">
                    <p className="fs-6 lg:fs-5" style={{color: '#6B7280'}}>
                      {t('privacy.intro')}
                    </p>
                  </div>

                  {/* Data Collection Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.dataCollection.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.dataCollection.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.dataCollection.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Data Use Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.dataUse.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.dataUse.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.dataUse.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Data Sharing Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.dataSharing.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.dataSharing.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.dataSharing.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Data Security Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.dataSecurity.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.dataSecurity.content}
                    </p>
                  </div>

                  {/* User Rights Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.userRights.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.userRights.content}
                    </p>
                    <ul className="vstack gap-2">
                      {sections.userRights.items.map((item, index) => (
                        <li key={index} className="hstack gap-2">
                          <i className="cstack w-20px h-20px bg-primary text-white rounded-circle unicon-checkmark fw-bold flex-shrink-0" style={{backgroundColor: '#F57197'}} />
                          <span className="fs-6" style={{color: '#6B7280'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Data Retention Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.dataRetention.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.dataRetention.content}
                    </p>
                  </div>

                  {/* Cookies Section */}
                  <div className="panel vstack gap-3">
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.cookies.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.cookies.content}
                    </p>
                  </div>

                  {/* Contact Section */}
                  <div className="panel vstack gap-3 p-4 rounded-2" style={{backgroundColor: 'rgba(245, 113, 151, 0.05)'}}>
                    <h2 className="h4 lg:h3" style={{color: '#1F2A44'}}>
                      {sections.contact.title}
                    </h2>
                    <p className="fs-6" style={{color: '#6B7280'}}>
                      {sections.contact.content}
                    </p>
                    <div className="vstack gap-2">
                      <p className="fs-6 m-0" style={{color: '#6B7280'}}>
                        <strong>Email:</strong> privacy@lookah.ai
                      </p>
                      <p className="fs-6 m-0" style={{color: '#6B7280'}}>
                        <strong>Web:</strong> lookah.ai
                      </p>
                    </div>
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
