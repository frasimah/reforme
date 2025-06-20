import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import './SwiperDiscover.scss';

function SwiperDiscover(props) {

   return (
      <Swiper
         className="sw_explore"
         spaceBetween={10}
         slidesPerView={'auto'}
         speed={600}
         breakpoints={{
            1: {
               slidesPerView: 'auto',
               spaceBetween: 15
            },
            767: {
               slidesPerView: 'auto',
               spaceBetween: 10
            }
         }}
      >
         {props.props.map(item => (
            <SwiperSlide className="slider_item" key={uuidv4()}>
               <h3>{item.title}</h3>
               <div className="text">
                  <p>{item.text}</p>
               </div>

            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default SwiperDiscover