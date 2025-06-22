import React from "react";
import './Seriveces.scss';
import SwiperEx from "../Explore/Utils/SwiperEx.jsx";

function SerivecesMobile({ list }) {

   return (
      <>
         <div className="col-12">
            <div className="explore__wrap_r">
               <SwiperEx list={list} />
            </div>
         </div>
      </>
   );
}

export default SerivecesMobile;