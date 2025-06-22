import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const SwiperEx = ({ list }) => {

   return (
      <Swiper
         className="sw_explore"
         modules={[Pagination]}
         pagination={{
            type: 'fraction',
         }}
         spaceBetween={10}
         slidesPerView={'auto'}
         speed={600}
      >
         {
            list.map(item => (
               <SwiperSlide className="item_wrap" key={item.key} data-slideid={item.key}>
                  <div className="meta_slide">
                     <h3>{item.title}</h3>
                     <div className="text" dangerouslySetInnerHTML={{ __html: item.text }}>
                     </div>
                  </div>
                  <div className="item">
                     <div className="image">
                        <img src={item.image.link} alt={item.image.alt} />
                     </div>
                  </div>
               </SwiperSlide>
            ))
         }
      </Swiper >
   )
};

export default SwiperEx;
