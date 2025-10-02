"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      imgSrc: "/assets/images/template/1web.png",
      altText: t('features.step1.title'),
      step: t('features.step1.step'),
      title: t('features.step1.title'),
      description: t('features.step1.description'),
    },
    {
      id: 2,
      imgSrc: "/assets/images/template/2web.png",
      altText: t('features.step2.title'),
      step: t('features.step2.step'),
      title: t('features.step2.title'),
      description: t('features.step2.description'),
    },
    {
      id: 3,
      imgSrc: "/assets/images/template/3web.png",
      altText: t('features.step3.title'),
      step: t('features.step3.step'),
      title: t('features.step3.title'),
      description: t('features.step3.description'),
    },
  ];

  return (
    <div id="main_features" className="main-features section panel">
      <div className="panel vstack">
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <div
              className="w-100"
              style={(i === 0 || i === 2) ? {backgroundColor: 'rgba(245, 113, 151, 0.05)'} : {}}
            >
              <div className="section-outer panel py-4 sm:py-5">
                <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
                  <div className="section-inner panel">
                    <div
                      className="feature-item panel"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="row child-cols col-match justify-between g-3 lg:g-4">
                        <div className="col-12 sm:col-6 order-0 lg:order-1">
                          <div className="panel w-100" style={{maxWidth: '400px', margin: '0 auto'}}>
                            <Image
                              src={feature.imgSrc}
                              width={780}
                              height={728}
                              alt={feature.altText}
                              className="rounded-2"
                              style={{width: '100%', height: 'auto'}}
                            />
                          </div>
                        </div>
                        <div className="col-12 sm:col-6 order-1 lg:order-0">
                          <div className="panel vstack gap-3 h-100">
                            <div className="panel vstack gap-2">
                              <span className="fs-6 fw-bold m-0 text-pink-500 dark:text-pink-400">
                                {feature.step}
                              </span>
                              <h3 className="h5 lg:h4 m-0 text-gray-900 dark:text-white">
                                {feature.title}
                              </h3>
                              <p className="fs-6 text-gray-600 dark:text-gray-400">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}