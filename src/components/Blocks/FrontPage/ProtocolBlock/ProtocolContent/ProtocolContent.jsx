import './ProtocolContent.scss'
import ProtocolCards from "./ProtocolCards/ProtocolCards";
import { useEffect, useRef, useState } from 'react';
import ProtocolInCard from './ProtocolInCard/ProtocolInCard';
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin)

function ProtocolContent() {
   const [showBlock, setShowBlock] = useState({
      firstLoad: false,
      otherLoad: false
   })
   const [indexProtocol, setIndexProtocol] = useState(0)

   const dataProtocolInCard = [
      {
         title: 'Running Recovery',
         cost: '$425',
         list: [
            {
               title: 'lyashi Dome Japanese Sauna',
               text: 'Iyashi means wellbeing in Japanese. The Iyashi Dôme is a type of Japanese sauna that uses far infrared rays to heat up the body directly.',
               time: ''
            },
            {
               title: 'BallancerPro Compression Therapy',
               text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system.',
               time: '45 min'
            },
            {
               title: 'Hyperbaric Oxygen Therapy',
               text: 'Hyperbaric Oxygen Therapy delivers pure oxygen in an environment where the air is 2-3 times more pressurized than normal.',
               time: '30 min'
            }
         ],
         link: 'https://square.link/u/HAUSbcjU'
      },
      {
         title: 'Glow & Go',
         cost: '$505',
         list: [
            {
               title: 'Red Light Therapy',
               text: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
               time: ''
            },
            {
               title: 'Endospheres Therapy',
               text: 'Endospheres Compressive Micro Vibration is a non-invasive treatment that reduces cellulite, tightens skin, and tones muscle.',
               time: '60 min'
            }
         ],
         link: 'https://square.link/u/SiLp9ciV'
      },
      {
         title: 'Jet Lag Revival',
         cost: '$425',
         list: [
            {
               title: 'Red Light Therapy',
               text: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
               time: ''
            },
            {
               title: 'Hyperbaric Oxygen Therapy',
               text: 'Hyperbaric Oxygen Therapy delivers pure oxygen in an environment where the air is 2-3 times more pressurized than normal.',
               time: '30 min'
            },
            {
               title: 'BallancerPro Compression Therapy',
               text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system.',
               time: '30 min'
            }
         ],
         link: 'https://square.link/u/1eusptq1'
      },
      {
         title: 'Red Carpet Package',
         cost: '$605',
         list: [
            {
               title: 'Endospheres Therapy',
               text: 'Endospheres Compressive Micro Vibration is a non-invasive treatment that reduces cellulite, tightens skin, and tones muscle.',
               time: 'All variations'
            },
            {
               title: 'Red Light Therapy',
               text: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
               time: ''
            },
            {
               title: 'BallancerPro Compression Therapy',
               text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system.',
               time: '45 min'
            }
         ],
         link: '#'
      },
      {
         title: 'Sculpt & Contour',
         cost: '$605',
         list: [
            {
               title: 'lyashi Dome Japanese Sauna',
               text: 'Iyashi means wellbeing in Japanese. The Iyashi Dôme is a type of Japanese sauna that uses far infrared rays to heat up the body directly.',
               time: ''
            },
            {
               title: 'Endospheres Therapy',
               text: 'Endospheres Compressive Micro Vibration is a non-invasive treatment that reduces cellulite, tightens skin, and tones muscle.',
               time: 'Body - 60 min'
            },
            {
               title: 'BallancerPro Compression Therapy',
               text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system.',
               time: '30 min'
            }
         ],
         link: '#'
      },
      {
         title: 'Weekend Reset Package',
         cost: '$425',
         list: [
            {
               title: 'Red Light Therapy',
               text: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
               time: ''
            },
            {
               title: 'lyashi Dome Japanese Sauna',
               text: 'Iyashi means wellbeing in Japanese. The Iyashi Dôme is a type of Japanese sauna that uses far infrared rays to heat up the body directly.',
               time: ''
            },
            {
               title: 'BallancerPro Compression Therapy',
               text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system.',
               time: '30 min'
            }
         ],
         link: '#'
      },
   ]

   const protocolContentRef = useRef(null)

   useEffect(() => {
      if (!showBlock.firstLoad) return
      if (protocolContentRef.current) {
         const scrollMarginTop = parseInt(
            window.getComputedStyle(protocolContentRef.current)
               .scrollMarginTop
         );

         gsap.to(window, {
            scrollTo: {
               y: protocolContentRef.current,
               offsetY: scrollMarginTop,
               autoKill: false
            }
         });

      }
   }, [showBlock.otherLoad])

   return (
      <div className="protocol_content" id='protocol_content' ref={protocolContentRef}>
         <ProtocolCards
            className={showBlock.otherLoad ? '' : 'active'}
            setShowProtocol={setShowBlock}
            setIndex={setIndexProtocol}

         />
         <ProtocolInCard
            className={showBlock.otherLoad ? 'active' : ''}
            content={dataProtocolInCard[indexProtocol] ? dataProtocolInCard[indexProtocol] : dataProtocolInCard[0]}
            setShowProtocol={setShowBlock}
            index={indexProtocol}
            isAnimate={showBlock}
         />
      </div>
   );
}

export default ProtocolContent;