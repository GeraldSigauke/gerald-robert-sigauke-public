/** 
This CSS is created only for this particular demo 
body {
    background-color: hsl(0, 0%, 98%);
  }
*/

import React from "react";
import { images } from '../constants';
import Marquee from 'react-fast-marquee';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import FiveStars from "../components/rating/FiveStars";

SwiperCore.use([Autoplay]);

const TestimonialsPage = () => {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="mt-12 px-6 mx-auto">

        <section class="mb-0 text-gray-700 text-center">

          <h2 class="text-3xl font-bold mb-12">Testimonials</h2>
          
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >

            <SwiperSlide id="swiper-slide" className="swiper-slide">
              <div
                className="pb-7"
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle mb-6">
                  <img
                    src={ images.lhpid }
                    alt="testimonial-avatar"
                    className="testimonial-avatar text-center"
                  />
                </div>
                <h5 class="text-lg font-bold mb-4 text-gray-700">Vivien</h5>
                <h6 class="font-medium text-[#2c5282] mb-4">Liason</h6>
                <p class="mb-4 text-gray-500">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    class="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  We love the Landing Page Gerald made. It is lovely.
                </p>
                <FiveStars />
              </div>
            </SwiperSlide>

            <SwiperSlide id="swiper-slide" className="swiper-slide">
              <div
                className="pb-7"
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle mb-6">
                  <img
                    src={ images.l_oac }
                    alt="testimonial-avatar"
                    className="testimonial-avatar text-center"
                  />
                </div>
                <h5 class="text-lg font-bold mb-4 text-gray-700">Lisa</h5>
                <h6 class="font-medium text-[#2c5282] mb-4">Teacher</h6>
                <p class="mb-4 text-gray-500">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    class="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  Gerald made a beautiful landing page for us.
                </p>
                <FiveStars />
              </div>
            </SwiperSlide>  

            <SwiperSlide id="swiper-slide" className="swiper-slide">
              <div
                className="pb-7"
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle mb-6">
                  <img
                    src={ images.l_of }
                    alt="testimonial-avatar"
                    className="testimonial-avatar text-center"
                  />
                </div>
                <h5 class="text-lg font-bold mb-4 text-gray-700">Stellah</h5>
                <h6 class="font-medium text-[#2c5282] mb-4">CEO</h6>
                <p class="mb-4 text-gray-500">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    class="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  I am pleased with the work Gerald is doing for us.
                </p>
                <FiveStars />
              </div>
            </SwiperSlide>  

          <SwiperSlide id="swiper-slide" className="swiper-slide">
            <div
              className="pb-7"
              style={{
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <div className="testimonials-profile-circle mb-6">
                <img
                  src={ images.lom2 }
                  alt="testimonial-avatar"
                  className="testimonial-avatar text-center"
                />
              </div>
                <h5 class="text-lg font-bold mb-4 text-gray-700">Oliver</h5>
                <h6 class="font-medium text-[#2c5282] mb-4">CEO</h6>
                <p class="mb-4 text-gray-500">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    class="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  We are more than pleased with the work Gerald is doing for us.
                </p>
                <FiveStars />
              </div>
            </SwiperSlide>

          <SwiperSlide id="swiper-slide" className="swiper-slide">
            <div
              className="pb-7"
              style={{
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <div className="testimonials-profile-circle mb-6">
                <img
                  src={ images.grs4 }
                  alt="testimonial-avatar"
                  className="testimonial-avatar text-center"
                />
              </div>
              <h5 class="text-lg font-bold mb-4 text-gray-700">Gerald</h5>
              <h6 class="font-medium text-[#2c5282] mb-4">Front End Web Developer</h6>
              <p class="mb-4 text-gray-500">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  class="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Not bad! If I do say so myself.
              </p>
              <FiveStars />
            </div>
          </SwiperSlide>
            
          </Swiper>

          <div className="my-12">
            <Marquee 
              className=""
              style={{ display: "flex" }}
              >
                <div style={{ width: "225px" }} className="mx-4 grayscale">
                  <img src={ images.logo_hpid } alt="brand" />
                </div>
                <div style={{ width: "262.5px" }} className="mx-4 grayscale">
                  <img src={ images.logo_oac } alt="brand" />
                </div>
                <div style={{ width: "380px" }} className="mx-4 grayscale">
                  <img src={ images.logo_of } alt="brand" />
                </div>
                <div style={{ width: "170px" }} className="mx-4 grayscale">
                  <img src={ images.logo_om2 } alt="brand" />
                </div>
                <div style={{ width: "225px" }} className="mx-4 grayscale">
                  <img src={ images.logo_hpid } alt="brand" />
                </div>
                <div style={{ width: "262.5px" }} className="mx-4 grayscale">
                  <img src={ images.logo_oac } alt="brand" />
                </div>
                <div style={{ width: "380px" }} className="mx-4 grayscale">
                  <img src={ images.logo_of } alt="brand" />
                </div>
                <div style={{ width: "170px" }} className="mx-4 grayscale">
                  <img src={ images.logo_om2 } alt="brand" />
                </div>
            </Marquee>
          </div>
        </section>

      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  )
}

export default TestimonialsPage

