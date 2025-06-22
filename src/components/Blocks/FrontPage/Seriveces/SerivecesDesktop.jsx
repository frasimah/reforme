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
                           <div className="item__title_block">
                              <h3 className="title">{(index + 1 + '. ') + item.title}</h3>
                           </div>
                           <div className="item__text" dangerouslySetInnerHTML={{ __html: item.text }} />
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