import React from "react";
import FrontHead from "../components/Blocks/FrontPage/FrontHead/FrontHead";
import FrontSecond from "../components/Blocks/FrontPage/FrontSecond/FrontSecond";
import FrontDiscover from "../components/Blocks/FrontPage/FrontDiscover/FrontDiscover";
import Expect from "../components/Blocks/FrontPage/Expect/Expect";
import Space from "../components/Blocks/FrontPage/Space/Space";
import FrontAbout from "../components/Blocks/FrontPage/FrontAbout/FrontAbout";
import Seriveces from "../components/Blocks/FrontPage/Seriveces/Seriveces";

function FrontPage() {
   const contentSpace = {
      image: '../img/FrontPage/space.jpg', alt: 'Immersive beauty space'
   }

   return (
      <>
         <FrontHead />
         <FrontSecond />
         <Seriveces />
         <FrontDiscover />
         <FrontAbout />
         <Expect />
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/ajrcmyfzqm6qio/LVMDQHE5HPTQR'} />
      </>
   )
}

export default FrontPage