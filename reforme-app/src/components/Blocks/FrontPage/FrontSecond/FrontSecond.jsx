import React from "react";
import 'swiper/css/pagination';
import './FrontSecond.scss';
import FrontSecondHead from "./FrontSecondHead";
import FrontSecondSlider from "./FrontSecondSlider";


function FrontSecond() {

   return (
      <section className="front_second">
         <div className="container">
            <div className="front_second_wrap row">
               <FrontSecondHead />
               <FrontSecondSlider />
            </div>
         </div>
      </section>
   );
}

export default FrontSecond;
