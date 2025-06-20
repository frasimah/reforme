import "./BtnServices.scss"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BtnServices({ link }) {
   const btnRef = useRef(null);
   const scrollStartRef = useRef(null);
   const scrollEndRef = useRef(null);

   useEffect(() => {
      if (btnRef.current) {
         scrollStartRef.current = ScrollTrigger.create({
            trigger: ".front_head",
            start: "bottom center",
            end: "top top",
            onEnter: () => {
               if (btnRef.current) {
                  btnRef.current.classList.add('active');
               }
            },
            onEnterBack: () => {
               if (btnRef.current) {
                  btnRef.current.classList.remove('active');
               }
            }
         });

         scrollEndRef.current = ScrollTrigger.create({
            trigger: ".space",
            start: "top bottom",
            end: "top bottom",
            onEnter: () => {
               if (btnRef.current) {
                  btnRef.current.classList.remove('active');
               }
            },
            onEnterBack: () => {
               if (btnRef.current) {
                  btnRef.current.classList.add('active');
               }
            }
         });
      }

      // Cleanup function to kill ScrollTriggers when the component unmounts
      return () => {
         if (scrollStartRef.current) {
            scrollStartRef.current.kill();
         }
         if (scrollEndRef.current) {
            scrollEndRef.current.kill();
         }
      };
   }, []);

   return (
      <div className="btn_services" ref={btnRef}>
         <a href={link} target="_blink" rel="noreferrer nofollow">Reserve your visit</a>
      </div>
   );
}

export default BtnServices;