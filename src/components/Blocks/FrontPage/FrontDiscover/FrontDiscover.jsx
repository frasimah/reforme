import React, { useState, useEffect } from "react";
import './FrontDiscover.scss';
import { useMediaQuery } from 'react-responsive';
import SwiperDiscover from "./SwiperDiscover";
import { v4 as uuidv4 } from 'uuid';
import { gsap, TweenMax } from 'gsap';
import BtnBg from "../../../Utilities/BtnBg/BtnBg";
import { useModal } from '../../../../utilities/ModalContext';
import ModalReserve from "../../Modal/ModalType/ModalReserve";


function FrontDiscover() {
   const { openModal } = useModal();
   const [showSlider, setShowSlider] = useState(false);
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });

   useEffect(() => {
      if (isMobile) {
         setShowSlider(true);
      } else {
         setShowSlider(false);
      }
   }, [isMobile]);

   const list = [
      {
         title: 'Inclusive Wellness',
         text: `At Reforme , wellness is for everyone. Our treatments are designed to cater
               to diverse needs, backgrounds, and health goals. We celebrate individuality
               and provide a welcoming space where your unique wellness journey is
               supported and valued.` },
      {
         title: 'Tailored Care',
         text: `Your wellness needs are as unique as you are. At Reforme , every service is
               customized to address your specific goals, ensuring that each experience is
               meaningful, effective, and aligned with your personal path to balance and
               rejuvenation.
               `     },
      {
         title: 'Innovative Solutions',
         text: `We combine advanced technology with practical wellness treatments to
               deliver results you can see and feel. From cutting-edge infrared therapies to
               restorative spa experiences, our accessible innovations make achieving
               optimal well-being attainable for all.
               `
      },
      {
         title: 'Wellness Education',
         text: `Knowledge is empowerment. Reforme provides guidance on nutrition,
               fitness, and stress management, giving you the tools to make informed
               choices that enhance your overall health—inside and out.
               `
      },
      {
         title: 'Your Urban Oasis',
         text: `In the heart of New York City, Reforme is your sanctuary. Escape the fastpaced city life in our tranquil space, thoughtfully designed to help you relax,
               recharge, and renew.
               `
      },
      {
         title: 'Excellence You Can Trust',
         text: `From the expertise of our team to the precision of our treatments, Reforme is
               committed to delivering the highest quality care. Every visit is an opportunity
               to feel your best with services that reflect our dedication to your well-being.`
      }
   ];

   const groupList = (items, groupSize) => {
      const groups = [];
      for (let i = 0; i < items.length; i += groupSize) {
         groups.push(items.slice(i, i + groupSize));
      }
      return groups;
   };

   const groupedList = groupList(list, 3);

   const handleHover = (e) => {
      const item = e.currentTarget;
      const rect = item.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const thisCircle = item.querySelector('.item__circle');
      thisCircle.style.left = mouseX + 'px';
      thisCircle.style.top = mouseY + 'px';
   };

   const handleMouseEnter = (e) => {
      const textElement = e.currentTarget.querySelector('.item__text');
      TweenMax.killTweensOf(textElement);
      gsap.fromTo(textElement,
         {
            height: 0,
            opacity: 0
         },
         {
            height: 'auto',
            opacity: 1,
            duration: .35,
            delay: .55,
            ease: 'none'
         });
   };

   const handleMouseLeave = (e) => {
      const textElement = e.currentTarget.querySelector('.item__text');
      TweenMax.killTweensOf(textElement);
      gsap.fromTo(textElement, {
         height: 'auto',
         opacity: 1
      }, {
         height: 0,
         opacity: 0,
         duration: .4,
         delay: 0,
         ease: 'none'
      });
   };

   return (
      <section className="discover">
         <div className="container">
            <div className="discover__head">
               <h2>Discover the Power <br /> of Reforme
               </h2>
               <BtnBg
                  colorBtn='green'
                  hoverColor='white'
                  typeBtn={'link'}
                  link={'https://app.squareup.com/appointments/buyer/widget/ajrcmyfzqm6qio/LVMDQHE5HPTQR'}
               >
                  Reserve your visit
               </BtnBg>
            </div>
            <div className="discover__wrap row">
               {showSlider ? (
                  <SwiperDiscover props={list} />
               ) : (
                  groupedList.map(group => (
                     <div className="wrap_item" key={uuidv4()}>
                        {group.map(item => (
                           <div
                              className="item"
                              onMouseMove={handleHover}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              key={uuidv4()}
                           >
                              <div className="item__title">
                                 <h3>{item.title}</h3>
                              </div>
                              <div className="item__text">
                                 <p>{item.text}</p>
                              </div>
                              <div className="item__circle"></div>
                           </div>
                        ))}
                     </div>
                  ))
               )}
            </div>
         </div>
      </section>
   );
}

export default FrontDiscover;
