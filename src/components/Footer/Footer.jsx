import React from "react";
import './Footer.scss';
import Navigation from "../Navigation/Navigation";
import BtnBg from "../Utilities/BtnBg/BtnBg";
import FooterSocial from "./FooterSocial";
import { useMediaQuery } from 'react-responsive';
import { useModal } from '../../utilities/ModalContext';
import ModalGet from "../Blocks/Modal/ModalType/ModalGet";
import ModalReserve from "../Blocks/Modal/ModalType/ModalReserve";

function Footer() {
   const { openModal } = useModal();
   const isTablet = useMediaQuery({ query: `(max-width: 1199px)` });
   const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

   return (
      <footer className="footer" id="contacts">
         <div className="container">
            <div className="footer__wrap row">
               <div className="col-xl-9 col-md-6 order-md-1 order-2">
                  <div className="footer_nav">
                     <Navigation />
                  </div>
                  <div className="footer_contancts">
                     <div className="item">
                        <a href="https://maps.app.goo.gl/3j56iAsHeL8Kr53e8" target="_blank" rel="noreferrer" className="item">
                           105 Madison Ave, 3rd Floor, New York, NY, 10016
                        </a>
                     </div>
                     <div className="item">
                        <a href="tel:+16468613426">+1 646-861-3426</a>
                        {isTablet ? (
                           isMobile ? (
                              <FooterSocial />
                           ) : (
                              <></>
                           )
                        ) : (
                           <FooterSocial />
                        )}
                     </div>
                  </div>
               </div>
               <div className="offset-xl-0 col-xl-3 offset-md-1 col-md-5 order-md-2 order-1">
                  <div className="footer_today">
                     <div className="title">
                        <div className="icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                              <circle cx="18" cy="18" r="15" stroke="#40DAC5" strokeWidth="6" />
                           </svg>
                        </div>
                        Reforme yourself today
                     </div>
                     <div className="btns_footer">
                        <BtnBg
                           colorBtn=''
                           hoverColor='green'
                           onClick={() => openModal('Get in Touch', <ModalGet />)}
                        >
                           Get in touch
                        </BtnBg>
                        <BtnBg
                           colorBtn='white'
                           hoverColor='green'
                           typeBtn={'link'}
                           link={'https://app.squareup.com/appointments/buyer/widget/ajrcmyfzqm6qio/LVMDQHE5HPTQR'}
                        >
                           Reservation
                        </BtnBg>
                     </div>
                     {isTablet ? (
                        !isMobile ? (
                           <FooterSocial />
                        ) : (
                           <></>
                        )
                     ) : (
                        <></>
                     )}
                  </div>
               </div>
               <div className="col-xl-6 col-md-6 order-md-3 order-3">
                  <a href="#top" className="logo icon">
                     <svg width="900" height="131" viewBox="0 0 900 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.2064 116.945L38.0553 76.907H13.7119V116.945H0V12.3584H41.2846C50.1278 12.3584 57.6543 15.504 63.9885 21.9211C70.3228 28.1872 73.4279 35.8123 73.4279 44.7711C73.4279 51.4902 71.3662 57.7814 67.3669 63.2926C63.3925 68.8289 58.3746 72.8554 52.0404 75.095L76.3838 116.919H61.2064V116.945ZM13.7119 25.3435V57.404C13.7119 61.2291 16.7672 64.3495 20.5678 64.3495H41.3094C46.5755 64.3495 50.9225 62.3363 54.4995 58.4357C57.8033 54.8623 59.6664 50.0306 59.7409 45.1234C59.8154 39.5871 58.0518 34.8308 54.276 31.0057C50.7487 27.2561 46.4513 25.3185 41.3094 25.3185H13.7119V25.3435Z" fill="white" />
                        <path d="M139.26 103.784H187.201V116.92H125.548V12.334H186.456V25.4703H139.26V57.606H182.78V70.6165H146.637C142.563 70.6165 139.26 73.9634 139.26 78.0905V103.784Z" fill="white" />
                        <path d="M788.805 103.784H836.746V116.92H775.093V12.334H836.001V25.4703H788.805V57.606H832.325V70.6165H796.182C792.108 70.6165 788.805 73.9634 788.805 78.0905V103.784Z" fill="white" />
                        <path d="M298.558 25.4953H252.827V59.418H296.645V72.5541H260.006C256.056 72.5541 252.852 75.8004 252.852 79.8017V116.92H239.14V12.334H298.582V25.4953H298.558Z" fill="white" />
                        <path d="M556.648 116.948L533.497 76.9099H509.153V116.948H495.441V12.3613H536.726C545.569 12.3613 553.096 15.5069 559.43 21.924C565.764 28.1902 568.869 35.8152 568.869 44.774C568.869 51.4931 566.807 57.7844 562.833 63.2955C558.859 68.8319 553.841 72.8583 547.482 75.098L571.825 116.922H556.648V116.948ZM509.153 25.3465V57.407C509.153 61.2321 512.209 64.3524 516.009 64.3524H536.751C542.017 64.3524 546.364 62.3393 549.941 58.4387C553.245 54.8652 555.108 50.0336 555.182 45.1264C555.257 39.59 553.493 34.8337 549.717 31.0338C546.19 27.2842 541.893 25.3465 536.751 25.3465H509.153Z" fill="white" />
                        <path d="M717.558 12.334V116.92H703.995V35.184L670.212 92.1075H668.449L634.666 35.3349V116.92H620.954V12.334H636.43L663.928 58.5623C666.362 62.6642 672.274 62.6642 674.708 58.5623L702.082 12.3592H717.558V12.334Z" fill="white" />
                        <path d="M875.214 12.334V16.4568H867.974V38.5158H863.693V16.4568H856.399V12.334H875.214Z" fill="white" />
                        <path d="M900 12.334V38.5158H895.72V19.8835L887.845 33.0544H887.369L879.494 19.8299V38.5158H875.214V12.334H879.812L887.634 25.4517L895.455 12.334H900Z" fill="white" />
                        <path d="M442.326 18.8235C430.179 6.39189 414.654 0.0251651 395.726 0C376.822 0.0251651 361.322 6.39189 349.175 18.8235C337.028 31.2802 331.091 46.6309 331.091 65.4544C331.091 84.2779 337.028 99.6287 349.175 112.085C361.322 124.517 376.847 130.884 395.75 130.909C414.654 130.884 430.154 124.517 442.301 112.085C454.448 99.6287 460.41 84.2779 460.41 65.4544C460.41 46.6309 454.473 31.2802 442.326 18.8235ZM432.44 101.793C422.876 111.481 410.655 116.439 395.775 116.464C380.871 116.439 368.65 111.481 359.061 101.793C349.473 92.0791 344.803 80.1256 344.803 65.4544C344.803 50.7831 349.473 38.8297 359.061 29.1159C368.625 19.4273 380.846 14.4699 395.726 14.4448C410.63 14.4699 422.851 19.4273 432.44 29.1159C442.003 38.8297 446.698 50.7831 446.698 65.4544C446.698 80.1508 442.028 92.1043 432.44 101.793Z" fill="#56DAB0" />
                     </svg>
                  </a>
               </div>
               <div className="offset-xl-3 col-xl-3 offset-md-1 col-md-5 order-md-4 order-4">
                  <div className="develop">
                     <div className="item">
                        Design: <a href="https://wearefields.ru/" target="_blank" rel="nofollow noindex noreferrer">Fields</a>
                     </div>
                     <div className="item">
                        Development: <a href="https://kata.agency/" target="_blank" rel="nofollow noindex noreferrer" >kata.agency</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer >
   )
}

export default Footer