import React from "react";
import './Seriveces.scss';
import { useMediaQuery } from 'react-responsive';
import SerivecesDesktop from "./SerivecesDesktop.jsx";
import SerivecesMobile from "./SerivecesMobile.jsx";


function Seriveces() {
   const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });

   const list = [
      {
         title: 'Endospheres',
         text: `Endospheres is a non-invasive treatment designed to sculpt, tone, and
               rejuvenate your body. By delivering low-frequency vibrations deep into
               muscle tissue, it effectively reduces cellulite, tightens skin, and enhances
               muscle tone. This innovative therapy stimulates lymphatic drainage,
               eliminates toxins, and minimizes fluid retention. 
               `,
         url: '/endospheres',
         cost: 'Cost: from $180/session',
         image: {
            link: './img/Services/Endo/endo-head-new.jpg',
            alt: ''
         },
         key: '1111',
         meta: {
            duration: '30-60 min',
            cost: 'Cost: from $180/session'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Lymphatic Compression',
         text: `Lymphatic Compression Therapy at Reforme uses advanced BallancerPro
               technology to improve lymphatic drainage and circulation. It helps reduce
               swelling, eliminate toxins, and boost blood flow, leaving your body feeling
               lighter, revitalized, and refreshed. `,
         url: '/lymphatic-compression',
         cost: 'Cost: from $200/session',
         image: {
            link: './img/Services/lymphatic/head-new.jpg',
            alt: ''
         },
         key: '1112',
         meta: {
            duration: '45-60 min',
            cost: 'Cost: from $200/session'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Iyashi Dôme Sauna',
         text: `Iyashi Dôme Therapy is a high-tech Japanese infrared sauna treatment
               designed to detoxify the body, burn up to 600 calories in just 30 minutes, and
               promote cell repair and regeneration. Inspired by traditional Japanese sand
               baths, this therapy improves blood circulation, relieves muscle tension, and
               supports post-exercise recovery. It also helps deep relaxation, boost
               endorphin production, and enhance overall well-being.
               `,
         url: '/iyashi-dôme-japanese-sauna',
         cost: 'Cost: from $150/session',
         image: {
            link: './img/Services/iyashi/head-new.jpg',
            alt: ''
         },
         key: '1113',
         meta: {
            duration: '30 min',
            cost: 'Cost: from $150/session'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Hyperbaric Oxygen Chamber',
         text: `Hyperbaric Oxygen Therapy at Reforme delivers pure oxygen in a
               pressurized environment, allowing your body to absorb up to 15x more
               oxygen. This revolutionary treatment accelerates healing, reduces
               inflammation, boosts energy, enhances immune function, and promotes
               restful sleep.
               `,
         url: '/hyperbaric-oxygen-chamber',
         cost: 'Cost: from $150/session 30 minutes',
         image: {
            link: './img/Services/oxygen/head-new.jpg',
            alt: ''
         },
         key: '1114',
         meta: {
            duration: '60-90 min',
            cost: 'Cost: from $150/session 30 minutes'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'Red Light Therapy NovoTHOR Full Body Bed',
         text: `At Reforme we proudly offer NovoTHOR Red Light Full Body Bed, the most
               advanced device of its kind and one of the few available in NYC. Using red
               and near-infrared light, it boosts collagen, reduces pain and inflammation,
               accelerates muscle recovery, pain relief, and enhances circulation for fullbody rejuvenation.
               `,
         url: '/red-light-therapy-led-collagen-bed',
         cost: 'Cost: from $150/session 10 minutes',
         image: {
            link: './img/Services/red/head-new.jpg',
            alt: ''
         },
         key: '1115',
         meta: {
            duration: '40 min',
            cost: 'Cost: from $150/session 10 minutes'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'IV Therapy',
         text: `IV Therapy at Reforme delivers hydration and essential nutrients directly into
               your bloodstream for instant rejuvenation. This powerful treatment boosts
               energy, enhances immunity, and restores balance.
               `,
         url: '/iv-therapy',
         cost: 'Cost: from $150/session',
         image: {
            link: './img/Services/therapy/head-new.jpg',
            alt: ''
         },
         key: '1116',
         meta: {
            duration: '30 min',
            cost: 'Cost: from $150/session'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      },
      {
         title: 'The BTL EmSella chair',
         text: `BTL Emsella at Reforme is a non-invasive treatment to deliver thousands of
               kegel-like contractions in a single session. It strengthens pelvic floor muscles,
               improves bladder control, and enhances sexual health for both men and
               women.`,
         url: '/the-btl-emsella-chair',
         cost: 'Cost: from $150/session',
         image: {
            link: './img/Services/emsella/head-new.jpg',
            alt: ''
         },
         key: '1116',
         meta: {
            duration: '30 min',
            cost: 'Cost: from $150/session'
         },
         people: {
            avatar: './img/FrontPage/people.jpg',
            alt: '',
            name: 'Name of a cosmetologist',
            link: '#',
         }
      }
   ]

   return (
      <section className="explore" id="services">
         <div className="container">
            <div className="explore__wrap row">
               {isDesktop ? (
                  <SerivecesDesktop list={list} />
               ) : (
                  <>
                     <div className="col-12 col_head">
                        <div className="title">
                           Explore our Services
                        </div>
                        <div className="text">
                           <p>
                              Discover Reforme's advanced wellness treatments designed to align your
                              body, mind, and spirit.
                           </p>
                        </div>
                     </div>
                     <SerivecesMobile list={list} />
                  </>
               )}
            </div>
         </div>
      </section>
   );
}

export default Seriveces;