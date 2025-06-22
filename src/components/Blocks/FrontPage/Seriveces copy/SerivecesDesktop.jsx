import React, { useEffect, useRef } from "react";
import './Seriveces.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function SerivecesDesktop({ list }) {

   // Анимация для скролла
   const itemAccordpRef = useRef(null)
   const servicePhotoRef = useRef(null)
   const paginationItemRef = useRef(null)

   useEffect(() => {
      const details = gsap.utils.toArray(itemAccordpRef.current.children)
      const detailsNotFirst = details.slice(1)
      const photos = gsap.utils.toArray(servicePhotoRef.current.children)
      const photosNotFirst = photos.slice(1)
      const paginationItem = gsap.utils.toArray(paginationItemRef.current.children)
      const paginationItemNotFirst = paginationItem.slice(1)

      gsap.set(photosNotFirst, { yPercent: 101 })
      gsap.set(paginationItemNotFirst, { background: '#DCDCDC' })

      detailsNotFirst.forEach((detail, index) => {
         let headline = detail
         let animation = gsap.timeline()
            .to(photosNotFirst[index], { yPercent: 0 })
            .set(photos[index], { autoAlpha: 0 })
         let animationPagination = gsap.timeline()
            .to(paginationItemNotFirst[index], { background: '#56DAB0' })
            .set(paginationItem[index], { background: '#DCDCDC' })
         ScrollTrigger.create({
            trigger: headline,
            start: "bottom bottom",
            end: "bottom bottom-=20",
            animation: animationPagination,
            scrub: true,
         })
         ScrollTrigger.create({
            trigger: headline,
            start: "bottom bottom+=100",
            end: "bottom bottom-=320",
            animation: animation,
            scrub: true,
         })
      })
   }, []);
   return (
      <>
         <div className="col-md-7 left">
            <div className="explore__wrap_l">
               <div className="head">
                  <h2>Explore our Services</h2>
                  <div className="text">
                     <p>
                        Discover Reforme's advanced wellness treatments designed to align your
                        body, mind, and spirit.
                     </p>
                  </div>
               </div>
               <div className="list_wrap">
                  <div className="list_pagination">
                     <div className="list_pagination__wrap" ref={paginationItemRef}>
                        {list.map((__, index) => (
                           <div className="list_pagination__wrap-item" key={index}></div>
                        ))}
                     </div>
                  </div>
                  <div className="list_accord" ref={itemAccordpRef}>
                     {list.map((item, index) => (
                        <div className={`item`} key={item.key} data-id={item.key}>
                           <Link to={`${item.url}`} className="item__title_block">
                              <h3 className="title">{(index + 1 + '. ') + item.title}</h3>
                              <div className="icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" rx="15" fill="#56DAB0" />
                                    <path d="M11.0276 15.4967L19.2426 15.2426M19.2426 15.2426L15.2703 19.7394M19.2426 15.2426L15 11" stroke="white" strokeWidth="1.4" strokeLinecap="square" />
                                 </svg>
                              </div>
                           </Link>
                           <div className="item__meta">
                              {/* <div className="meta_item">
                                 duration: {item.meta.duration}
                              </div> */}
                              <div className="meta_item">
                                 {item.meta.cost}
                              </div>
                           </div>
                           <div className="item__text">
                              {item.text}
                           </div>
                           <Link to={`${item.url}`} className="item__btn">
                              Read more
                           </Link>
                           <a href={item.people.link} className="item__author">
                              <div className="author_avatar">
                                 <img src={item.people.avatar} alt={item.people.alt} />
                              </div>
                              <div className="author_name">
                                 {item.people.name}
                              </div>
                           </a>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="col-xl-5 col-md-6">
            <div className="explore__wrap_r">
               <div className="service_photos" ref={servicePhotoRef}>
                  {list.map(item => (
                     <div className="item_wrap" key={item.key} data-id={item.key}>
                        <div className="item">
                           <div className="image">
                              <img src={item.image.link} alt={item.image.alt} />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div >
      </>
   );
}

export default SerivecesDesktop;