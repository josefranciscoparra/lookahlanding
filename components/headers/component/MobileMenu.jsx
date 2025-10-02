"use client";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileMenu() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const isHomePage = pathname === '/';
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-menu-panel"
      data-uc-offcanvas="overlay: true;"
      className="uc-offcanvas mobile-menu"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 876 }}
      >
        <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
          <div className="uc-logo">
            <Link
              href={`/`}
              className="h5 text-none text-gray-900 dark:text-white"
            >
              <Image
                alt="Lookah"
                src="/assets/images/review-logo/logoolookah.png"
                width="140"
                height="50"
              />
            </Link>
          </div>
          <button
            className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
            onClick={closeMobileMenu}
          >
            <i className="unicon-close" />
          </button>
        </header>
        <div className="panel">
          <ul className="nav-y gap-narrow fw-medium fs-6 uc-nav" data-uc-nav="">
            <li>
              <Link href={isHomePage ? `#hero_header` : `/#hero_header`}>{t('nav.home')}</Link>
            </li>
            <li>
              <Link href={isHomePage ? `#main_features` : `/#main_features`}>{t('nav.howItWorks')}</Link>
            </li>
            <li>
              <Link href={isHomePage ? `#pricing_tiers` : `/#pricing_tiers`}>{t('nav.pricingMenu')}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
