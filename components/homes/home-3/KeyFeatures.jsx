"use client";
import { features4 } from "@/data/features";
import React from "react";
import Link from "next/link";

export default function KeyFeatures() {
  return (
    <>
      <style jsx>{`
        .feature-item-lookah {
          transition: all 150ms;
        }
        .feature-item-lookah:hover {
          background-color: white !important;
          color: #1F2A44 !important;
        }
        .feature-item-lookah:hover i {
          color: #1F2A44 !important;
        }
        .feature-item-lookah:hover .title {
          color: #1F2A44 !important;
        }
        .feature-item-lookah:hover .desc {
          color: #6B7280 !important;
        }
      `}</style>
      <div
        id="key_features"
        className="key-features section panel overflow-hidden"
        style={{backgroundColor: '#1F2A44'}}
      >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                style={{color: 'white'}}
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                Descubre las funcionalidades de
                <span style={{color: '#F57197'}}> Lookah</span>
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {features4.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item-lookah panel p-4 border rounded-2 hover:scale-105" style={{borderColor: 'rgba(255, 255, 255, 0.1)', color: 'white'}}>
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" />
                          <div className="vstack justify-between gap-2 h-100">
                            <i className={`icon icon-4 ${feature.icon}`} />
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/page-features`}
                            className="position-cover"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
