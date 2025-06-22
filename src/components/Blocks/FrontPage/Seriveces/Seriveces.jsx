import React from "react";
import './Seriveces.scss';
import { useMediaQuery } from 'react-responsive';
import SerivecesDesktop from "./SerivecesDesktop.jsx";
import SerivecesMobile from "./SerivecesMobile.jsx";


function Seriveces() {
   const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });

   const list = [
      {
         title: 'The Assessment Stage',
         text: `
            <p>
               The first step of the Biologique Recherche methodology is to start with a deep analysis of your Skin Instant©.
            </p>
            <p>
               This ensures that you will thoroughly benefit from the most tailored and personalized home skin, body, and scalp care routine. Our Skin Experts are ready to diagnose your Skin Instant and help create your regimen at any time.
            </p>
               `,
         image: {
            link: './img/Services/Bio/service1.jpg',
            alt: ''
         },
         key: '1111',
      },
      {
         title: 'The Tnitialization Stage',
         text: `
            <p>
               The Initialization Stage is a crucial part of the Biologique Recherche methodology.
            </p>
            <p>
               During this stage the epidermis is thoroughly cleansed, its pH is balanced, gently exfoliated, and is proteo-lipidic film is restored. Impurities and dead cells are gradually brought to the surface and eliminated. After your gentle exfoliation and mask application, the skin is ready to receive the Treatment Stage products.
            </p>
               `,
         image: {
            link: './img/Services/Bio/service2.jpg',
            alt: ''
         },
         key: '1112',
      },
      {
         title: 'The Treatment',
         text: `
            <p>
               The Treatment Stage is the most active of the Biologique Recherche skin care program.
            </p>
            <p>
               The products used during this stage are applied to “re-condition” the epidermis and help with skin auto-regeneration while balancing, hydrating, and revitalizing the epidermis. This stage starts with our quintessential and targeted serums, followed by our creams, and lastly our finishing serums protect your skin and provide a radiant complexion.
            </p>
               `,
         image: {
            link: './img/Services/Bio/service3.jpg',
            alt: ''
         },
         key: '1113',
      },
   ]

   return (
      <section className="explore" id="services">

         <div className="container">
            <div className="explore__wrap row">
               {isDesktop ? (
                  <SerivecesDesktop list={list} />
               ) : (
                  <SerivecesMobile list={list} />
               )}
            </div>
         </div>
      </section>
   );
}

export default Seriveces;