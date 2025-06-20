import React, { useState, useEffect, useRef } from "react";
import './ExploreSecond.scss';
import { useMediaQuery } from 'react-responsive';
import SwiperEx from "./Utils/SwiperEx";
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ExploreSecond() {
   const [showSlider, setShowSlider] = useState(false)

   const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });


   const list = [
      {
         title: 'Endospheres',
         text: 'At Reforme, the backbone of our treatments is lymphatic drainage. The lymphatic system is a major part of our immune systems, and the system is responsible for draining fluids, waste, toxins, and lactic acid from our bodies. It also absorbs fatty acids, and produces immune cells. Because of these essential functions, Reforme prioritizes the lymphatic system by promoting lymph movement in order to flush waste from the body.',
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
            duration: '45-120 min',
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
         text: 'At Reforme, the backbone of our treatments is lymphatic drainage. The lymphatic system is a major part of our immune systems, and the system is responsible for draining fluids, waste, toxins, and lactic acid from our bodies. It also absorbs fatty acids, and produces immune cells. Because of these essential functions, Reforme prioritizes the lymphatic system by promoting lymph movement in order to flush waste from the body.',
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
            duration: '45-120 min',
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
         text: 'At Reforme, the backbone of our treatments is lymphatic drainage. The lymphatic system is a major part of our immune systems, and the system is responsible for draining fluids, waste, toxins, and lactic acid from our bodies. It also absorbs fatty acids, and produces immune cells. Because of these essential functions, Reforme prioritizes the lymphatic system by promoting lymph movement in order to flush waste from the body.',
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
            duration: '45-120 min',
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
         text: 'At Reforme, the backbone of our treatments is lymphatic drainage. The lymphatic system is a major part of our immune systems, and the system is responsible for draining fluids, waste, toxins, and lactic acid from our bodies. It also absorbs fatty acids, and produces immune cells. Because of these essential functions, Reforme prioritizes the lymphatic system by promoting lymph movement in order to flush waste from the body.',
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
            duration: '45-120 min',
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
         title: 'Red Light Therapy & LED Collagen Bed',
         text: 'At Reforme, the backbone of our treatments is lymphatic drainage. The lymphatic system is a major part of our immune systems, and the system is responsible for draining fluids, waste, toxins, and lactic acid from our bodies. It also absorbs fatty acids, and produces immune cells. Because of these essential functions, Reforme prioritizes the lymphatic system by promoting lymph movement in order to flush waste from the body.',
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
            duration: '45-120 min',
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
         title: 'IV Therapy',
         text: 'At Reforme, the backbone of our treatments is lymphatic drainage. The lymphatic system is a major part of our immune systems, and the system is responsible for draining fluids, waste, toxins, and lactic acid from our bodies. It also absorbs fatty acids, and produces immune cells. Because of these essential functions, Reforme prioritizes the lymphatic system by promoting lymph movement in order to flush waste from the body.',
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
            duration: '45-120 min',
            cost: '$250'
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
   const swiperRef = useRef(null);

   useEffect(() => {
      let allImages = gsap.utils.toArray(itemWrapRef.current.children)
      let allItems = gsap.utils.toArray(itemAccordpRef.current.children)

      gsap.set(allImages, { opacity: 0 })
      gsap.set(allImages[0], { opacity: 1 })

      allImages.forEach((item, index) => {
         if (index === 0) {
            item.classList.add('active')
         }
      })

      allItems.forEach((item, index) => {
         // Очищаем классы при ререндере
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

         // Добавляем класс первому элементу при рендере и ререндере
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
                        duration: .3,
                        ease: 'none'
                     })
                  }
               });
         }
      })

      const handleClickDesktop = (event) => {
         let item = event.currentTarget;
         // Удаляем все клссы active у заголовков
         allItems.forEach(otherItem => {
            if (otherItem.classList.contains('active')) {
               otherItem.classList.remove('active');
               TweenMax.killTweensOf(otherItem.querySelector('.text'));
               gsap.to(otherItem.querySelector('.text'),
                  {
                     height: 0,
                     opacity: 0,
                     delay: 0,
                  });
            }
         })

         // Добавляем класс active к заголовку на котороый кликнули
         item.classList.add('active')
         TweenMax.killTweensOf(item.querySelector('.text'));
         gsap.to(item.querySelector('.text'),
            {
               height: 'auto',
               duration: .3,
               delay: .5,
               ease: 'none',
               onComplete: () => {
                  gsap.to(item.querySelector('.text'), {
                     opacity: 1,
                     duration: .3,
                     ease: 'none'
                  })
               }
            });

         // Получаем айди заголовка на который кликнули
         let thisId = item.dataset.id

         // Перебираем все изображения и ищем нужный data-id, после выполянем анимацию смещения изображения
         allImages.forEach(element => {
            let thisImage = element.dataset.id

            // Смещаем картинкe у которой есть класс active и удаляем класс active
            if (element.classList.contains('active')) {
               element.classList.remove('active');
               gsap.to(element, {
                  duration: .8,
                  opacity: 0,
                  onComplete: () => {
                     gsap.to(element, {
                        duration: 0,
                        opacity: 0,
                     })
                  }
               })
            }
            // Добавляем к активной картинке класс active и смещаем её
            if (thisImage === thisId) {
               element.classList.add('active')
               gsap.to(element, {
                  opacity: 1,
                  duration: .8,
               })
            }
         })
      }

      const handleClickTablet = (event) => {
         let item = event.currentTarget;
         // Удаляем все клссы active у заголовков
         allItems.forEach(otherItem => {
            if (otherItem.classList.contains('active')) {
               otherItem.classList.remove('active');
               TweenMax.killTweensOf(otherItem.querySelector('.text'));
               gsap.to(otherItem.querySelector('.text'),
                  {
                     height: 0,
                     opacity: 0,
                     delay: 0,
                  });
            }
         })

         // Добавляем класс active к заголовку на котороый кликнули
         item.classList.add('active')
         TweenMax.killTweensOf(item.querySelector('.text'));
         gsap.to(item.querySelector('.text'),
            {
               height: 'auto',
               duration: .3,
               delay: .5,
               ease: 'none',
               onComplete: () => {
                  gsap.to(item.querySelector('.text'), {
                     opacity: 1,
                     duration: .3,
                     ease: 'none'
                  })
               }
            });

         // Получаем айди заголовка на который кликнули
         let slideId = item.dataset.slide
         swiperRef.current.swiper.slideTo(slideId, 1000)
      }

      if (!showSlider) {
         allItems.forEach(item => {
            item.addEventListener('click', handleClickDesktop);
         });
      } else {
         allItems.forEach(item => {
            item.addEventListener('click', handleClickTablet);
         });
      }

      return () => {
         allItems.forEach(item => {
            item.removeEventListener('click', handleClickDesktop);
            item.removeEventListener('click', handleClickTablet);
         });
      };
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
                           <div className="item" key={item.key} data-id={item.key} data-slide={index}>
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
                     {isMobile && <SwiperEx list={list} ref={swiperRef} />}
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

export default ExploreSecond