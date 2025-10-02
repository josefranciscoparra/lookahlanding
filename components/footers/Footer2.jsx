"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/data/footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer2() {
  const { t } = useLanguage();

  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <Image
                          alt="Lookah"
                          src="/assets/images/review-logo/logoolookah.png"
                          width="120"
                          height="45"
                        />
                      </Link>
                      <p style={{color: '#6B7280'}}>
                        {t('footer.description')}
                      </p>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="uc-footer-bottom panel vstack gap-4 pt-4 lg:pt-6 border-top dark:text-white">
              <div className="hstack justify-center gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <i className={`icon icon-2 ${link.iconClass}`} style={{color: '#F57197'}} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className="opacity-60 m-0">
                  {t('footer.copyright')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
