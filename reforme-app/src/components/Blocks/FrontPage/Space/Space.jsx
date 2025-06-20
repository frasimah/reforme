import React, { useEffect, useRef } from "react";
import "./Space.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from 'react-responsive';
import BtnBorder from "../../../Utilities/BtnBorder/BtnBorder";
import ModalReserve from "../../Modal/ModalType/ModalReserve";
import { useModal } from '../../../../utilities/ModalContext';

gsap.registerPlugin(ScrollTrigger);

function Space({ content, link }) {
   const { openModal } = useModal();
   const bgRef = useRef(null);
   const spaceRef = useRef(null);
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });


   // Создаем переменные для триггеров
   const bgTrigger = useRef(null);
   const spaceTrigger = useRef(null);

   useEffect(() => {
      if (!isMobile) {
         bgTrigger.current = ScrollTrigger.create({
            trigger: spaceRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            animation: gsap.to(bgRef.current, {
               y: "-250px",
               ease: 'none',
            })
         });

         spaceTrigger.current = ScrollTrigger.create({
            trigger: spaceRef.current,
            start: "bottom bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            animation: gsap.to(spaceRef.current, {
               marginLeft: '40px',
               marginRight: '40px',
               borderRadius: '0px 0px 4px 4px',
               duration: 0.3,
               ease: 'none',
            })
         });

      } else {
         if (bgTrigger.current) {
            bgTrigger.current.kill();
         }
         if (spaceTrigger.current) {
            spaceTrigger.current.kill();
         }

         gsap.set(spaceRef.current, {
            clearProps: "all",
         });
         gsap.set(bgRef.current, { clearProps: "all" });
      }

      return () => {
         if (bgTrigger.current) {
            bgTrigger.current.kill();
         }
         if (spaceTrigger.current) {
            spaceTrigger.current.kill();
         }
      };
   }, [isMobile]);

   return (
      <section className="space" ref={spaceRef}>
         <div className="container">
            <div className="space__wrap">
               <div className="text">
                  <p>IMMERSIVE BEAUTY AND WELLNESS CENTER</p>
               </div>
               {content?.title ? (

                  <h2>
                     {content?.title}
                  </h2>
               ) : (
                  <h2>
                     Reforme offers you the chance
                     to escape, recharge, and emerge
                     as your optimal self
                  </h2>
               )}

               <BtnBorder
                  colorBtn='greenBlack'
                  hoverColor='black'
                  typeBtn={'link'}
                  link={link}
               >
                  Reservation
               </BtnBorder>
            </div>
         </div>
         <div className="space__bg" ref={bgRef}>
            {content ? (
               <img src={content.image} alt={content.alt} />
            ) : (
               <img src="../img/FrontPage/space.jpg" alt="IMMERSIVE BEAUTY SPACE" />
            )}
         </div>
      </section>
   );
}

export default Space;
