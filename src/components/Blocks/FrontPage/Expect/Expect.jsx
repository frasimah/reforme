import React, { useRef, useEffect } from "react";
import './Expect.scss';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);


function Expect() {
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });

   const exceptRefList = useRef(null)
   const exceptScrollListRef = useRef(null)

   const exceptTextRef = useRef(null)
   const exceptScrollTextRef = useRef(null)

   useEffect(() => {
      if (!isMobile) {
         const arrayItems = gsap.utils.toArray(exceptRefList.current.children)
         gsap.set([arrayItems, exceptTextRef.current], { opacity: 0, y: 50, })

         exceptScrollListRef.current = ScrollTrigger.batch(arrayItems, {
            start: 'top bottom-=50',
            onEnter: batch => {
               gsap.to(batch, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0,
                  ease: 'power1.out',
               });
            },
         });

         exceptScrollTextRef.current = ScrollTrigger.create({
            trigger: exceptTextRef.current,
            start: 'top bottom-=50',
            once: true,
            animation: gsap.to(exceptTextRef.current, {
               opacity: 1,
               y: 0,
               duration: 0.7,
               stagger: 0,
               ease: 'power1.out',
            })
         });
      } else {
         const arrayItems = gsap.utils.toArray(exceptRefList.current.children)
         gsap.set([arrayItems, exceptTextRef.current], { opacity: 1, y: 0, })
         if (exceptScrollListRef.current) {
            exceptScrollListRef.current.forEach(trigger => trigger.kill());
         }
         if (exceptScrollTextRef.current) {
            exceptScrollTextRef.current.kill();
         }
      }
      return () => {
         if (exceptScrollListRef.current) {
            exceptScrollListRef.current.forEach(trigger => trigger.kill());
         }
         if (exceptScrollTextRef.current) {
            exceptScrollTextRef.current.kill();
         }
      }
   }, [isMobile])


   return (
      <section className="except">
         <div className="container">
            <div className="except__wrap row">
               <div className="col-12">
                  <div className="head">
                     <h2>What to Expect at Reforme</h2>
                     <div className="text">
                        <p>There is no right or wrong way to Reforme</p>
                     </div>
                  </div>
               </div>
               <div className="offset-xl-1 col-xl-10">
                  <div className="list" ref={exceptRefList}>
                     <div className="list__col">
                        <div className="list__item">
                           <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                 <path d="M16 8.22222V16L19.8889 13.6667M30 16C30 23.732 23.732 30 16 30C8.26802 30 2 23.732 2 16C2 8.26802 8.26802 2 16 2C23.732 2 30 8.26802 30 16Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </div>
                           <div className="text">
                              <p>
                                 Choose a single treatment for a quick recharge or immerse yourself in a fewhour journey with multiple therapies designed to work synergistically for
                                 optimal results.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="list__col">
                        <div className="list__item">
                           <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M2.59229 0C1.00777 0 -0.20584 1.38405 0.0292054 2.92305L3.36252 24.7482C3.64799 26.6173 5.28278 28 7.20713 28H15.7019C17.6263 28 19.261 26.6173 19.5465 24.7482L22.8799 2.92305C23.115 1.38405 21.9012 0 20.3168 0H2.59229ZM2.59229 2.54545H20.3168L19.5392 7.63636H3.36981L2.59229 2.54545ZM3.75858 10.1818L5.9256 24.3706C6.02076 24.9937 6.56569 25.4545 7.20713 25.4545H15.7019C16.3434 25.4545 16.8883 24.9937 16.9835 24.3706L19.1505 10.1818H3.75858Z" fill="white" />
                              </svg>
                           </div>
                           <div className="text">
                              <p>
                                 Upon arrival, enjoy a complimentary oxygen cocktail ensuring you start your
                                 session feeling hydrated. Short on time? Skip the coffee break and visit
                                 Reforme instead. Experience a quick, energy-boosting treatment that leaves
                                 you feeling sharper, more balanced, and ready to tackle your day
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="list__col">
                        <div className="list__item">
                           <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M3.78892 24.0969C3.7912 23.1786 4.31302 22.2808 5.16297 21.2759L0.247858 18.1678C-0.0620424 18.0334 -0.0552063 17.8442 0.124809 17.6209L1.16616 16.7323C1.3553 16.616 1.55582 16.5659 1.77229 16.6252L7.83813 17.6506L12.8922 12.1772L1.09325 4.19497C0.79474 4.01951 0.769675 3.82127 1.0773 3.59112L2.77947 2.23303L18.1605 6.55568L22.7042 1.69754C24.2287 0.378186 25.7098 -0.211991 26.8469 0.0682862C27.4735 0.223236 27.6945 0.410088 27.8882 0.997987C28.2642 2.151 27.6809 3.7005 26.3023 5.29557L21.4441 9.83926L25.7668 25.2203L24.4087 26.9225C24.1785 27.2278 23.9803 27.2028 23.8048 26.9065L15.8203 15.1098L10.347 20.1617L11.3724 26.2275C11.4316 26.4417 11.3838 26.6422 11.2653 26.8336L10.3766 27.875C10.1555 28.055 9.96414 28.0618 9.8297 27.7519L6.72158 22.8368C5.71213 23.6891 4.81433 24.2109 3.89146 24.2109C3.80715 24.2086 3.78892 24.179 3.78892 24.0969Z" fill="white" />
                              </svg>
                           </div>
                           <div className="text">
                              <p>
                                 Recently landed after a long flight? Reforme is your destination to restore
                                 energy and combat jet lag with treatments that leave you feeling refreshed
                                 and revitalized.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="list__col">
                        <div className="list__item">
                           <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34" fill="none">
                                 <path d="M4.14255e-06 19.021C-0.00199741 21.6343 0.721354 24.1965 2.08887 26.4198C3.45638 28.6432 5.41392 30.4398 7.74175 31.608C10.0696 32.7762 12.6756 33.2697 15.2672 33.0332C17.8589 32.7966 20.3335 31.8394 22.4135 30.2689C24.4935 28.6984 26.0964 26.5768 27.0423 24.1423C27.9883 21.7078 28.2398 19.0566 27.7686 16.4865C27.2975 13.9164 26.1224 11.5291 24.3751 9.5924C22.6279 7.65574 20.3777 6.24645 17.8772 5.52272L19.7647 2.57363L18.3235 0H9.67647L8.2353 2.57363L10.1228 5.52272C7.20781 6.36893 4.64502 8.14235 2.8196 10.5765C0.994182 13.0106 0.00475096 15.9739 4.14255e-06 19.021ZM14 8.27002C16.1174 8.27002 18.1873 8.90056 19.9479 10.0819C21.7084 11.2632 23.0806 12.9423 23.8909 14.9068C24.7013 16.8713 24.9133 19.033 24.5002 21.1185C24.0871 23.204 23.0674 25.1196 21.5702 26.6232C20.073 28.1267 18.1654 29.1507 16.0886 29.5655C14.0119 29.9803 11.8593 29.7674 9.90304 28.9537C7.9468 28.14 6.27477 26.762 5.09839 24.994C3.92201 23.226 3.29412 21.1474 3.29412 19.021C3.29761 16.1708 4.42667 13.4382 6.43365 11.4228C8.44064 9.40734 11.1617 8.27352 14 8.27002Z" fill="white" />
                              </svg>
                           </div>
                           <div className="text">
                              <p>
                                 Whether preparing for a wedding, a milestone event, or simply wanting to look
                                 and feel your best, schedule a refreshing suite of treatments for you or your
                                 group. Transform every celebration into a moment of luxury and rejuvenation.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12">
                  <div className="bottom" ref={exceptTextRef}>
                     Elevate your wellness with a curated experience at Reforme, where every
                     detail is designed to restore and empower you.
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Expect