"use client";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

const swiperThumbOptions = {
  slidesPerView: 1,
  spaceBetween: 11,
  loop: true,
  effect: "fade",
  modules: [EffectFade, Thumbs],
  slideToClickedSlide: true,
};
const swiperOptions2 = {
  slidesPerView: 1,
  loop: true,

  modules: [Thumbs, Autoplay, Pagination],
  loopedslides: 4,
};
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div
      id="clients_feedback"
      className="clients-feedback section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div
            className="section-inner panel swiper-parent"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <h2 className="h4 sm:h3 lg:h2 m-0 text-center" style={{color: '#1F2A44'}}>
              Lo que dicen nuestros clientes:
            </h2>
            <div className="panel p-3 lg:p-6 rounded-3 mt-4 sm:mt-6" style={{backgroundColor: '#F9FAFB'}}>
              <div className="row child-cols-12 sm:child-cols-6 col-match g-3 lg:g-8">
                <div>
                  <div className="panel rounded-2 overflow-hidden">
                    <Swiper
                      allowTouchMove={false}
                      onSwiper={setThumbsSwiper}
                      {...swiperThumbOptions}
                      className="swiper connect-image"
                    >
                      {testimonials.map((elm, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <figure className="featured-image m-0 rounded ratio ratio-3x4 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              src={elm.imgSrc}
                              width={1000}
                              height={667}
                              alt="Mark Zellers"
                            />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div>
                  <div className="panel">
                    <Swiper
                      thumbs={{ swiper: thumbsSwiper }}
                      {...swiperOptions2}
                      pagination={{
                        clickable:true,
                        el: ".spb1",
                      }}
                      className="swiper h-100 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                    >
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                          className="swiper-slide h-100 pb-6"
                          key={index}
                        >
                          <div className="panel vstack justify-between items-center gap-2 lg:gap-3 h-100 text-center">
                            <div className="panel">
                              <i className="icon icon-4 unicon-quotes" style={{color: '#F57197'}} />
                              <p className="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4" style={{color: '#1F2A44'}}>
                                {testimonial.quote}
                              </p>
                            </div>
                            <div className="panel pt-0">
                              <div className="panel vstack items-center gap-narrow">
                                <h6 className="h5 m-0" style={{color: '#111827'}}>{testimonial.name}</h6>
                                <span className="fs-6" style={{color: '#6B7280'}}>
                                  {testimonial.position}
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="panel pt-0">
                        <div className=" spb1 swiper-pagination m-0 justify-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" style={{color: '#F57197'}} />
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
