import React, { useState, useEffect, useRef } from "react";
import './Explore.scss';
import { useMediaQuery } from 'react-responsive';
import SwiperEx from "./Utils/SwiperEx";
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Explore() {
   const [showSlider, setShowSlider] = useState(false)

   const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });


   const list = [
      {
         title: 'Endospheres',
         text: 'Endospheres Compressive Micro Vibration is a non-invasive treatment that reduces cellulite, tightens skin, and tones muscle. Using low-frequency vibrations that pulse deep into muscle tissue, Endospheres therapy prompts lymphatic drainage, flushes toxins, and reduces fluid retention.',
         image: {
            link: './img/FrontPage/expo1.jpg',
            alt: ''
         },
         key: '1111',
         imageSmall: {
            link: './img/FrontPage/endo1-1.jpg',
            alt: ''
         },
         meta: {
            duration: '30-60 min',
            cost: '$250'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Lymphatic Compression',
         text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system. Through scientific research, Lymphatic Compression treatments use the same principles of a manual lymphatic massage, but with more effective results.',
         image: {
            link: './img/FrontPage/expo2.jpg',
            alt: ''
         },
         key: '1112',
         imageSmall: {
            link: './img/FrontPage/endo1-1.jpg',
            alt: ''
         },
         meta: {
            duration: '45-60 min',
            cost: '$250'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Iyashi Dôme Japanese Sauna',
         text: 'Iyashi means wellbeing in Japanese. The Iyashi Dôme is a type of Japanese sauna that uses far infrared rays to heat up the body directly. ',
         image: {
            link: './img/FrontPage/expo3.jpg',
            alt: ''
         },
         key: '1113',
         imageSmall: {
            link: './img/FrontPage/endo1-1.jpg',
            alt: ''
         },
         meta: {
            duration: '30 min',
            cost: '$250'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Hyperbaric Oxygen Chamber',
         text: 'Hyperbaric Oxygen Therapy delivers pure oxygen in an environment where the air is 2-3 times more pressurized than normal. This allows the lungs to safely absorb more oxygen than it normally could.',
         image: {
            link: './img/FrontPage/expo1.jpg',
            alt: ''
         },
         key: '1114',
         imageSmall: {
            link: './img/FrontPage/endo1-1.jpg',
            alt: ''
         },
         meta: {
            duration: '60-90 min',
            cost: '$100'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Red Light Therapy & LED Collagen Bed',
         text: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
         image: {
            link: './img/FrontPage/expo2.jpg',
            alt: ''
         },
         key: '1115',
         imageSmall: {
            link: './img/FrontPage/endo1-1.jpg',
            alt: ''
         },
         meta: {
            duration: '40 min',
            cost: '$100'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'IV Therapy',
         text: 'IV Therapy offers a combination of hydration and mixtures of much-needed supplements through an intravenous treatment. ',
         image: {
            link: './img/FrontPage/expo3.jpg',
            alt: ''
         },
         key: '1116',
         imageSmall: {
            link: './img/FrontPage/endo1-1.jpg',
            alt: ''
         },
         meta: {
            duration: '30 min',
            cost: '$100'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      }
   ]

   useEffect(() => {
      if (isMobile) {
         setShowSlider(true);
      } else {
         setShowSlider(false);
      }
   }, [isMobile]);

   // Анимация для скролла

   const itemWrapRef = useRef(null)
   const itemAccordpRef = useRef(null)
   const scrollTriggerRef = useRef([])

   useEffect(() => {
      let allImages = gsap.utils.toArray(itemWrapRef.current.children)
      let allItems = gsap.utils.toArray(itemAccordpRef.current.children)

      if (!showSlider) {
         allImages.forEach((item, index) => {
            let headline = item
            const trigger = ScrollTrigger.create({
               trigger: headline,
               start: "top center",
               end: "top center",
               scrub: true,
               onUpdate: (self) => {
                  if (self.isActive == false && self.direction == 1) {
                     allItems.forEach(element => {
                        element.classList.remove('active')
                        TweenMax.killTweensOf(element.querySelector('.text'));
                        gsap.to(element.querySelector('.text'),
                           {
                              opacity: 0,
                              duration: .3,
                              onComplete: () => {
                                 gsap.to(element.querySelector('.text'), {
                                    height: 0,
                                    duration: .3,
                                 })
                              }
                           });
                     })
                     let elementId = document.querySelectorAll('.explore__wrap_l .list_accord .item[data-id="' + item.dataset.id + '"]');
                     if (elementId.length > 0) {
                        let thisElement = elementId[0]
                        if (thisElement !== null) {
                           thisElement.classList.add('active')
                           const textElement = elementId[0].querySelector('.text');
                           TweenMax.killTweensOf(textElement);
                           gsap.to(textElement,
                              {
                                 height: 'auto',
                                 duration: .3,
                                 delay: .5,
                                 ease: 'none',
                                 onComplete: () => {
                                    gsap.to(textElement, {
                                       opacity: 1,
                                       duration: .3,
                                       ease: 'none'
                                    })
                                 }
                              });
                        }
                     }
                  } else if (self.isActive == false && self.direction == -1) {
                     allItems.forEach(element => {
                        element.classList.remove('active');
                        setTimeout(() => {
                           if (!element.classList.contains('active')) {
                              gsap.to(element.querySelector('.text'), {
                                 opacity: 0,
                                 duration: .3,
                                 onComplete: () => {
                                    gsap.to(element.querySelector('.text'), {
                                       height: 0,
                                       duration: .3,
                                    });
                                 }
                              });
                           }
                        }, 50);
                     });
                     let elementId = document.querySelectorAll('.explore__wrap_l .list_accord .item[data-id="' + item.dataset.id + '"]');
                     if (elementId.length > 0) {
                        let prevElement = elementId[0].previousElementSibling;
                        if (prevElement !== null) {
                           prevElement.classList.add('active');
                           const textElement = elementId[0].previousElementSibling.querySelector('.text');
                           TweenMax.killTweensOf(textElement);
                           gsap.to(textElement,
                              {
                                 height: 'auto',
                                 duration: .3,
                                 delay: .5,
                                 ease: 'none',
                                 onComplete: () => {
                                    gsap.to(textElement, {
                                       opacity: 1,
                                       duration: .9,
                                       ease: 'none'
                                    })
                                 }
                              });
                        }
                     }
                  }
               },
            })

            scrollTriggerRef.current.push(trigger);
         })
      } else {
         allItems.forEach((item, index) => {
            if (item.classList.contains('active')) {
               item.classList.remove('active');
               TweenMax.killTweensOf(item.querySelector('.text'));
               gsap.to(item.querySelector('.text'),
                  {
                     height: 0,
                     opacity: 0,
                     delay: 0,
                  });
            }
            if (index === 0) {
               item.classList.add('active')
               gsap.to(item.querySelector('.text'),
                  {
                     height: 'auto',
                     duration: .3,
                     delay: .5,
                     ease: 'none',
                     onComplete: () => {
                        gsap.to(item.querySelector('.text'), {
                           opacity: 1,
                           duration: .9,
                           ease: 'none'
                        })
                     }
                  });
            }
         })
         // Удаляем все предыдущие ScrollTriggers
         scrollTriggerRef.current.forEach(trigger => trigger.kill());
         // Очищаем массив
         scrollTriggerRef.current = [];
      }

   }, [showSlider])

   return (
      <section className="explore" id="services">
         <div className="container">
            <div className="explore__wrap row">
               <div className="col-12">
                  <div className="title">
                     Explore our Services
                  </div>
                  <div className="text">
                     <p>
                        Take a journey with us through the many services that Reforme offers so that you can align your body, mind, and spiritual outlooks
                     </p>
                  </div>
               </div>
               <div className="col-md-6 left">
                  <div className="explore__wrap_l">
                     <div className="head">
                        <h2>Explore our Services</h2>
                        <div className="text">
                           <p>
                              Take a journey with us through the many services that Reforme offers so that you can align your body, mind, and spiritual outlooks
                           </p>
                        </div>
                     </div>
                     <div className="list_accord" ref={itemAccordpRef}>
                        {list.map((item, index) => (
                           <div className={`item`} key={item.key} data-id={item.key}>
                              <div className="title">
                                 <div className="title_wrap">
                                    <h3>{item.title}</h3>
                                    <div className="icon arrow">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                          <path d="M1.00017 9.00013H15.0545M15.0545 9.00013L8.02734 16.4759M15.0545 9.00013L8.02734 1.52441" stroke="white" strokeWidth="1.4" strokeLinecap="square" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="text">
                                 <p>
                                    {item.text}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="explore__wrap_r" ref={itemWrapRef}>
                     {isMobile && <SwiperEx list={list} />}
                     {isDesktop && (
                        <>
                           {list.map(item => (
                              <div className="item_wrap" key={item.key} data-id={item.key}>
                                 <div className="item">
                                    <div className="head">
                                       <div className="item_head">
                                          Duration: {item.meta.duration}
                                       </div>
                                       <div className="item_head">
                                          Cost: {item.meta.cost}
                                       </div>
                                    </div>
                                    <div className="image">
                                       <img src={item.image.link} alt={item.image.alt} />
                                    </div>
                                    <a href={item.people.link} className="people">
                                       <div className="avatar">
                                          <img src={item.people.avatar} alt={item.people.alt} />
                                       </div>
                                       <div className="name">
                                          {item.people.name}
                                          <div className="icon">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                <path d="M2 21L22 1M22 1V21M22 1H2" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                                             </svg>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           ))}
                        </>
                     )}

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Explore