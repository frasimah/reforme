

import { useEffect, useRef } from 'react'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ServicePageAbout.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicePageAbout({ content, isHeader = true, isBenefit = true, className }) {
   const listRef = useRef()

   useEffect(() => {
      if (!listRef.current) return
      const listItems = gsap.utils.toArray(listRef.current.children)
      if (listItems.length === 0) return
      gsap.set(listItems, { opacity: 0, y: 20, })
      ScrollTrigger.create({
         trigger: listRef.current,
         start: "top bottom-=50px",
         end: "top top",
         scrub: false,
         once: true,
         onEnter: () => {
            gsap.to(listItems, {
               opacity: 1,
               y: 0,
               stagger: 0.1,
            })
         },
      });
   }, []);

   return (
      <section className={`service_page_about ${className ? className : ''}`}>
         <div className="container">
            <div className="about_wrap row">
               {isHeader && (
                  <>
                     <div className="col-xl-6 col-md-6">
                        <h2 className='about_wrap__title'>
                           How the procedure works, <br />
                           how it affects your health
                        </h2>
                     </div>

                     {content.headText.length > 1 ? (
                        <div className="offset-xl-2 col-xl-4 col-md-6">
                           <div className="about_wrap__text">
                              <p>{content.headText}</p>
                           </div>
                        </div>
                     ) : null}
                  </>
               )}
               {isBenefit && (
                  <div className="col-12">
                     <div className="about_list" ref={listRef}>
                        {content.listWorks.map((item, index) => (
                           item.workText.length > 1 ?
                              (
                                 <div className="list_col" key={index}>
                                    <div className="about_list__item">
                                       <div className="about_list__item-head">
                                          <div className="circle"></div>
                                          <div className="line"></div>
                                       </div>
                                       <div className={`about_list__item-text ${content.listWorks.length === 2 ? 'half' : ''}`}>
                                          <p>
                                             {item.workText}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              ) : <></>
                        ))}
                     </div>
                  </div>
               )}

               <div className="col-12">
                  <Swiper
                     className="sw_page_about"
                     modules={[Pagination, Autoplay, Navigation]}
                     spaceBetween={40}
                     slidesPerView={2}
                     speed={1200}
                     navigation={{
                        nextEl: '.sw_ab_next',
                        prevEl: '.sw_ab_prev',
                     }}
                     loop={true}
                     mousewheel={{
                        forceToAxis: true,
                     }}
                     autoplay={{
                        delay: 3000,
                     }}
                     pagination={{
                        clickable: true,
                        el: '.pagination_custom',
                     }}
                     breakpoints={{
                        1: {
                           slidesPerView: 'auto',
                           spaceBetween: 15,
                           speed: 600,
                        },
                        767: {
                           slidesPerView: 2,
                           spaceBetween: 10,
                           speed: 600,
                        },
                        1200: {
                           slidesPerView: 2,
                           spaceBetween: 40,
                           speed: 1200,
                        },
                     }}
                  >
                     {content.listImages.map((item, index) => (
                        <SwiperSlide className="item" key={index}>
                           <div className="image">
                              <img src={item.image} alt={item.alt} />
                           </div>
                        </SwiperSlide>
                     ))}
                     <div className="sw_controls">
                        <div className="swiper-pagination pagination_custom"></div>
                        <div className="swiper_btns">
                           <div className="swiper-button-prev sw_ab_prev">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="transparent">
                                 <circle cx="16" cy="16" r="15" transform="rotate(-180 16 16)" stroke="#848685" strokeWidth="2" />
                                 <path d="M20 22.6667L9.33333 17.4185L9.33333 14.5816L20 9.33341V12.5675L12.3953 16.0001L20 19.4327V22.6667Z" fill="#848685" />
                              </svg>
                           </div>
                           <div className="swiper-button-next sw_ab_next">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="transparent">
                                 <circle cx="16" cy="16" r="15" stroke="#848685" strokeWidth="2" />
                                 <path d="M12 9.33325L22.6667 14.5815V17.4184L12 22.6666V19.4325L19.6047 15.9999L12 12.5673V9.33325Z" fill="#848685" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ServicePageAbout;