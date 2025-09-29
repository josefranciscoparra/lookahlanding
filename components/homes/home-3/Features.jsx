import { features3 } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="panel vstack">
        {features3.map((feature, i) => (
          <React.Fragment key={i}>
            <div
              className="w-100"
              style={{backgroundColor: (i === 0 || i === 2) ? '#FFF5F8' : 'transparent'}}
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
                            <span className="fs-6 fw-bold m-0" style={{color: '#F57197'}}>
                              {feature.step}
                            </span>
                            <h3 className="h5 lg:h4 m-0" style={{color: '#1F2A44'}}>
                              {feature.title}
                            </h3>
                            <p className="fs-6" style={{color: '#6B7280'}}>
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
