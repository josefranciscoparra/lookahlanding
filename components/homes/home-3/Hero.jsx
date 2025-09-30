"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-600px lg:h-screen bg-white dark:bg-gray-900 z-0" />
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "45%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
        <div
          className="position-absolute translate-middle-y -rotate-12"
          style={{ top: "20%", left: "15%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-trophy"
            src="/assets/images/template/icon-trophy.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-trophy-dark"
            src="/assets/images/template/icon-trophy-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y rotate-45 ms-n3"
          style={{ top: "35%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-location"
            src="/assets/images/template/icon-location.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-location-dark"
            src="/assets/images/template/icon-location-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y"
          style={{ top: "80%", left: "8%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-globe"
            src="/assets/images/template/icon-globe.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-globe-dark"
            src="/assets/images/template/icon-globe-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y rotate-45"
          style={{ top: "50%", right: "18%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-crown"
            src="/assets/images/template/icon-crown.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-crown-dark"
            src="/assets/images/template/icon-crown-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y -rotate-45"
          style={{ top: "80%", right: "8%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-diamond"
            src="/assets/images/template/icon-diamond.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-diamond-dark"
            src="/assets/images/template/icon-diamond-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y -rotate-12 me-n3"
          style={{ top: "35%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-chat"
            src="/assets/images/template/icon-chat.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-chat-dark"
            src="/assets/images/template/icon-chat-dark.svg"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div className="section-outer panel pb-10 pt-9 lg:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h3 sm:h2 lg:h1 m-0 text-gray-900 dark:text-white">
                Transforma tu estilo con <br className="d-none lg:d-block" />
                inteligencia artificial
              </h1>
              <p className="fs-6 text-gray-600 dark:text-gray-400">
                Crea outfits realistas y modernos al instante.
                <br className="d-none sm:d-block" />
                Sube tus fotos, selecciona prendas y deja que la IA haga el resto.
              </p>
              <div className="hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2">
                <a
                  onClick={openContactModal}
                  className="btn btn-md lg:btn-lg text-white rounded-pill"
                  style={{backgroundColor: '#F57197'}}
                  data-uc-toggle=""
                >
                  Prueba gratis por 14 días
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 sm:mt-1 lg:mt-0">
                Sin tarjeta de crédito.
              </p>
            </div>
            <div
              className="hero-scene panel max-w-950px mx-auto"
              data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
              <div className="panel text-center overflow-hidden rounded-3 border border-5" style={{borderColor: '#F57197'}}>
                <Image
                  alt="Lookah - Cambia tu look con IA"
                  src="/assets/images/template/principalimagen.png"
                  width="1440"
                  height="1024"
                />
              </div>
              <div className="position-absolute bottom-0 ltr:end-0 rtl:start-0 ltr:me-n8 rtl:ms-n8 mb-n8">
                <Image
                  className="w-200px d-block dark:d-none"
                  alt="sitting"
                  src="/assets/images/template/sitting.svg"
                  width="200"
                  height="238"
                />
                <Image
                  className="w-200px d-none dark:d-block"
                  alt="sitting-dark"
                  src="/assets/images/template/sitting-dark.svg"
                  width="200"
                  height="239"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
