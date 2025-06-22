import React from "react";
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';
import AnimateText from "../../../../utilities/AnimateText";

function FrontSecondHead() {
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });

   return (
      <>
         <div className="col-xl-7 col-md-8">
            {isMobile
               && <div className="front_second_wrap__title">
                  <h2>
                     Stay mentally sharp, effortlessly toned,
                     and fully recharged with performance wellness designed to keep you at your peak, every day
                  </h2>
               </div>
            }
            {!isMobile
               && <AnimateText
                  containerClass={'front_second_wrap__title'}
                  textClass={'.front_second_wrap__title h2'}
                  trigger={'.front_second_wrap__title'}
                  colorStart={'#252323'}
                  colorEnd={'#FFF'}
               >
                  <div className="icon">

                  </div>
                  <h2>
                     Stay mentally sharp, effortlessly toned,
                     and fully recharged with performance wellness designed to keep you at your peak, every day
                  </h2>
               </AnimateText>
            }
         </div>
         <div className="offset-xl-7 col-xl-5 offset-md-6 col-md-6">
            <div className="front_second_wrap__text">
               <p>
                  Reforme is for those who want to feel their best, function at their peak, and see the difference inside and out. We redefine wellness as a results-driven experience that enhances both performance and beauty. Our scientifically advanced therapies work with the body’s natural regenerative processes to restore energy, strength, and radiance effortlessly.
               </p>
            </div>
         </div>
      </>
   );
}

export default FrontSecondHead;
