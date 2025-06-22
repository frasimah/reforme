import React, { useEffect, useRef, useState } from "react";
import './ServiceFit.scss';
import BtnBg from "../../../Utilities/BtnBg/BtnBg";
import { useMediaQuery } from 'react-responsive';
import { nanoid } from "nanoid";

function ServiceFit({ content, contentAlso }) {
   const isTablet = useMediaQuery({ query: `(max-width: 1199px)` });
   const listRef = useRef(null)
   const wrapRef = useRef(null)
   const [showList, setShowList] = useState(false)

   // const handleClick = () => {
   //    setShowList(!showList);
   // };

   // useEffect(() => {
   //    const list = listRef.current;
   //    const listItems = Array.from(list.children);
   //    const wrap = wrapRef.current
   //    const btn = wrap.querySelector('.btn');
   //    const btnSpan = wrap.querySelector('.btn span');

   //    if (isTablet) {
   //       if (listItems.length > 3) {
   //          btn.style.display = 'inline-flex'
   //          listItems.forEach((item, index) => {
   //             if (index > 2) {
   //                item.style.display = showList ? 'flex' : 'none';
   //             }
   //          });
   //          showList ? btnSpan.innerHTML = 'Less' : btnSpan.innerHTML = 'More'
   //       } else {
   //          btn.style.display = 'none'
   //       }
   //    } else {
   //       listItems.forEach((item, index) => {
   //          if (index > 2) {
   //             item.style.display = 'flex';
   //          }
   //       });
   //       btn.style.display = 'none'
   //    }



   // }, [showList, isTablet]); // useEffect реагирует на изменения showList

   return (
      <section className="service_fit">
         <div className="container">
            <h2 className='about_wrap__title service_fit-title'>
               Choose the perfect fit
            </h2>
            <div className="service_fit_wrap row" ref={wrapRef}>
               <div className="col-xl-1">
                  <div className="service_fit_wrap-icon_left"></div>
               </div>
               <div className="col-xl-10">
                  <div className="service_fit_wrap_list" ref={listRef}>
                     {content?.map(item => (
                        <a href={item?.link} target="_blnak" className="service_fit_wrap_list_item" rel="nofollow noopener" key={nanoid(4)}>
                           <div className="service_fit_wrap_list_item_content">
                              <div className="service_fit_wrap_list_item_content-title">
                                 {item?.title}
                              </div>
                              <div className="service_fit_wrap_list_item_content-text">
                                 {
                                    item?.textList?.map(text => (
                                       <div className="menu_page_wrap_content_item_left_text-item" key={nanoid(4)} dangerouslySetInnerHTML={{ __html: text?.text }} />
                                    ))
                                 }
                              </div>
                           </div>
                           <div className="service_fit_wrap_list_item-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                 <g filter="url(#filter0_b_2013_4975)">
                                    <rect width="34" height="34" rx="17" fill="white" fillOpacity="0.2" />
                                    <path d="M14.3708 19.9885L20 14M20 14L20.3708 19.9885M20 14H14" stroke="white" strokeWidth="1.4" strokeLinecap="square" />
                                 </g>
                                 <defs>
                                    <filter id="filter0_b_2013_4975" x="-50" y="-50" width="134" height="134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                       <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                       <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
                                       <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2013_4975" />
                                       <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2013_4975" result="shape" />
                                    </filter>
                                 </defs>
                              </svg>
                           </div>
                        </a>
                     ))}
                  </div>
                  <div className="service_fit_wrap_list_also">
                     <div className="service_fit_wrap_list_also-title">Also available in packages:</div>
                     {contentAlso?.map(item => (
                        <div className="service_fit_wrap_list_also_item" key={nanoid(4)}>
                           <a href={item?.link} target="_blank" rel="nofollow noopener" className="service_fit_wrap_list_also_item-title">{item?.title}</a>
                           <p>
                              &nbsp;{item?.text}
                           </p>
                        </div>

                     ))}
                  </div>
                  {/* <BtnBg
                     onClick={handleClick}
                     customClass={'btn'}
                     colorBtn='white'
                     hoverColor='green'
                  >
                     More
                  </BtnBg> */}
               </div>
               <div className="col-xl-1">
                  <div className="service_fit_wrap-icon_right"></div>
               </div>
            </div>
         </div>
      </section >
   )
}

export default ServiceFit