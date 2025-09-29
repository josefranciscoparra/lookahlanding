import { reviewLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-4 lg:pb-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3 overflow-hidden"
              style={{backgroundColor: '#F9FAFB'}}
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <h3 className="title h4 sm:h3 lg:h2 m-0" style={{color: '#1F2A44'}}>
                Confianza por su simplicidad
              </h3>
              <div className="vstack sm:hstack justify-center gap-1 fs-6 flex-sm-column" style={{color: '#1F2A44'}}>
                <div className="rating panel">
                  <div className="hstack justify-center gap-0" style={{color: '#F57197'}}>
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                  </div>
                </div>
                <span className="desc rtl:order-first" style={{color: '#6B7280'}}>
                  Basado en más de 4,000 opiniones con satisfacción del cliente en
                </span>
              </div>
              <div className="panel mt-3 sm:mt-4">
                <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
                  {reviewLogos.map((logo, index) => (
                    <React.Fragment key={index}>
                      <Image
                        src={logo.lightSrc}
                        width={32}
                        height={42}
                        style={{ height: "42px", width: "fit-content" }}
                        alt="Trustpilot"
                        className="dark:d-none"
                      />
                      <Image
                        src={logo.darkSrc}
                        width={32}
                        height={42}
                        style={{ height: "42px", width: "fit-content" }}
                        alt="Trustpilot"
                        className="d-none dark:d-block"
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
