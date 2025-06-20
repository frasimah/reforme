import React, { useEffect, useRef } from "react";
import 'swiper/css/pagination';
import './FrontSecond.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

function FrontSecondSlider() {
   const swiperRef = useRef(null);
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });

   useEffect(() => {
      if (!isMobile) {
         gsap.to(swiperRef.current,
            {
               maxWidth: '100%',
               maxHeight: '100%',
               ease: 'none',
               scrollTrigger: {
                  trigger: '.sw_second_wrap',
                  start: "top bottom",
                  end: "bottom bottom+=50",
                  scrub: true,
                  once: true,
               },
               onComplete: () => {
                  if (swiperRef.current.swiper) {
                     swiperRef.current.swiper.autoplay.start()
                  }

               }
            }
         );
      } else {
         gsap.set(swiperRef.current, {
            maxWidth: '100%',
            maxHeight: '100%',
         })
      }

   }, [isMobile]);

   const listSw = [
      { image: '../img/FrontPage/slide1.jpg', alt: '', title: 'Reforme is a wellness spa that offers non-invasive treatments to reduce your body of lymphatic swelling, replenish your hydration and vitamin levels, and detoxify.' },
      { image: '../img/FrontPage/slide2.jpg', alt: '', title: 'Reforme is a wellness spa that offers non-invasive treatments to reduce your body of lymphatic swelling, replenish your hydration and vitamin levels, and detoxify.' },
      { image: '../img/FrontPage/slide3.jpg', alt: '', title: 'Reforme is a wellness spa that offers non-invasive treatments to reduce your body of lymphatic swelling, replenish your hydration and vitamin levels, and detoxify.' },
      { image: '../img/FrontPage/slide4.jpg', alt: '', title: 'Reforme is a wellness spa that offers non-invasive treatments to reduce your body of lymphatic swelling, replenish your hydration and vitamin levels, and detoxify.' }
   ];

   return (
      <div className="col-12" id="space">
         <div className="sw_second_wrap">
            <Swiper
               className="sw_second"
               modules={[Pagination, Autoplay]}
               spaceBetween={20}
               slidesPerView={1}
               speed={1200}
               parallax={true}
               loop={true}
               mousewheel={{
                  forceToAxis: true,
               }}
               // autoplay={{
               //    delay: 3000,
               // }}
               pagination={{ clickable: true }}
               breakpoints={{
                  1: {
                     slidesPerView: 'auto',
                     spaceBetween: 15,
                     speed: 600,
                     allowTouchMove: true,
                     simulateTouch: true,
                     loop: false,
                  },
                  767: {
                     slidesPerView: '1',
                     spaceBetween: 10,
                     speed: 600,
                     allowTouchMove: true,
                     simulateTouch: true,
                     loop: false,
                  },
                  1200: {
                     slidesPerView: 1,
                     spaceBetween: 0,
                     speed: 1200,
                     loop: true,
                  },
               }}
               onSwiper={(swiper) => {
                  swiper.autoplay.stop();
               }}
               ref={swiperRef}
            >
               {listSw.map(item => (
                  <SwiperSlide className="item" key={uuidv4()}>
                     <div className="image">
                        <img src={item.image} alt={item.alt} />
                     </div>
                     {!isMobile &&
                        <div className="slide_title">{item.title}</div>
                     }
                  </SwiperSlide>
               ))}
            </Swiper>
            {isMobile &&
               <div className="sw_second_wrap-title">
                  Reforme is a wellness spa that offers non-invasive treatments to reduce your body of lymphatic swelling, replenish your hydration and vitamin levels, and detoxify.
               </div>
            }
         </div>
      </div>
   );
}

export default FrontSecondSlider;
