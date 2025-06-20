import React from "react";
import FrontHead from "../components/Blocks/FrontPage/FrontHead/FrontHead";
import FrontSecond from "../components/Blocks/FrontPage/FrontSecond/FrontSecond";
import FrontDiscover from "../components/Blocks/FrontPage/FrontDiscover/FrontDiscover";
import Expect from "../components/Blocks/FrontPage/Expect/Expect";
import Space from "../components/Blocks/FrontPage/Space/Space";
import FrontAbout from "../components/Blocks/FrontPage/FrontAbout/FrontAbout";
import Seriveces from "../components/Blocks/FrontPage/Seriveces/Seriveces";
import ProtocolBlock from "../components/Blocks/FrontPage/ProtocolBlock/ProtocolBlock";
import ServicePageResult from "../components/Blocks/ServicePage/ServicePageResult/ServicePageResult";

function FrontPage() {
   const contentSpace = {
      image: '../img/FrontPage/space.jpg', alt: 'Immersive beauty space'
   }

   const contentResult = {
      title: 'Effortless Wellness, Maximum Impact',
      resultText: `There’s no wrong way to Reforme. Whether 
                  you choose our Core Protocols or À la Carte Services, our technology-driven approach works with your body’s natural systems to deliver maximum results helping you recover faster, perform better, and look and feel 
                  your best every day.`,
      videoLink: "./img/Services/Endo/video-new.jpg",
      showIcon: true,
      isIndex: true,
   }

   const headerContent = {
      title: 'Exclusive therapies, <br/> Unmatched Results',
      text:
         `
         <p>
            At Reforme, our cutting-edge therapies are built for modern lifestyles, designed to keep you in balance and thriving.
         </p>
         <p>
            Whether you're pushing your limits in training, preparing for a big event, recovering from travel, or refining your look, every session
            is an investment in your vitality. Train harder, show up stronger, shine brighter, and keep moving, we’re here to keep you balanced and unstoppable.
         </p>
         `,
   }

   return (
      <>
         <FrontHead />
         <FrontSecond />
         {/* <Seriveces />
         <FrontDiscover /> */}
         <ServicePageResult content={contentResult} isHeader={true} headerContent={headerContent} />
         <ProtocolBlock />
         <FrontAbout />
         {/* 
         <Expect /> */}
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/ajrcmyfzqm6qio/LVMDQHE5HPTQR'} />
      </>
   )
}

export default FrontPage