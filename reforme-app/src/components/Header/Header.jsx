import React, { useState, useEffect } from "react";
import './Header.scss';
import Navigation from "../Navigation/Navigation";
import { useMediaQuery } from 'react-responsive';
import ModalGet from "../Blocks/Modal/ModalType/ModalGet";
import ModalReserve from "../Blocks/Modal/ModalType/ModalReserve";
import { useModal } from '../../utilities/ModalContext';
import { Link } from "react-router-dom";

function Header() {
   const { openModal } = useModal();
   const [activeBurger, setActiveBurger] = useState(false)
   const [scrollHeader, setScrollHeader] = useState(false)
   const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });

   const toggleBurger = (e) => {
      e.preventDefault();
      setActiveBurger(!activeBurger);
   };

   const closeBurger = () => {
      setActiveBurger(false);
   };

   const handleScroll = () => {
      if (window.scrollY > 150) {
         setScrollHeader(true)
      } else {
         setScrollHeader(false)
      }
   }

   useEffect(() => {
      if (!isMobile) {
         window.addEventListener('scroll', handleScroll);
      } else {
         setScrollHeader(false)
      }
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [isMobile])

   return (
      <header className={`header${scrollHeader ? ' active' : ''}`}>
         <div className="container">
            <div className="header__wrap">
               <Link to="/" className="logo icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="207" height="30" viewBox="0 0 207 30" fill="none">
                     <path d="M14.0775 26.7998L8.75272 17.6244H3.15373V26.7998H0V2.83203H9.49547C11.5294 2.83203 13.2605 3.5529 14.7174 5.02349C16.1742 6.45948 16.8884 8.20689 16.8884 10.26C16.8884 11.7997 16.4142 13.2415 15.4944 14.5045C14.5803 15.7732 13.4262 16.6959 11.9693 17.2092L17.5683 26.794H14.0775V26.7998ZM3.15373 5.8078V13.155C3.15373 14.0316 3.85647 14.7467 4.73059 14.7467H9.50115C10.7124 14.7467 11.7122 14.2853 12.5349 13.3914C13.2948 12.5725 13.7233 11.4653 13.7404 10.3407C13.7576 9.07196 13.3519 7.98196 12.4835 7.10538C11.6722 6.24609 10.6838 5.80206 9.50115 5.80206H3.15373V5.8078Z" fill="white" />
                     <path d="M32.0287 23.7835H43.0553V26.7939H28.875V2.82617H42.8839V5.83657H32.0287V13.201H42.0383V16.1826H33.7256C32.7886 16.1826 32.0287 16.9496 32.0287 17.8954V23.7835Z" fill="white" />
                     <path d="M181.425 23.7835H192.452V26.7939H178.271V2.82617H192.28V5.83657H181.425V13.201H191.435V16.1826H183.122C182.185 16.1826 181.425 16.9496 181.425 17.8954V23.7835Z" fill="white" />
                     <path d="M68.6681 5.84231H58.15V13.6163H68.2282V16.6266H59.8011C58.8927 16.6266 58.1557 17.3706 58.1557 18.2875V26.7939H55.002V2.82617H68.6738V5.84231H68.6681Z" fill="white" />
                     <path d="M128.031 26.7998L122.706 17.6244H117.107V26.7998H113.953V2.83203H123.449C125.482 2.83203 127.214 3.5529 128.67 5.02349C130.127 6.45948 130.842 8.20689 130.842 10.26C130.842 11.7997 130.367 13.2415 129.453 14.5045C128.539 15.7732 127.385 16.6959 125.922 17.2092L131.521 26.794H128.031V26.7998ZM117.107 5.8078V13.155C117.107 14.0316 117.81 14.7467 118.684 14.7467H123.454C124.665 14.7467 125.665 14.2853 126.488 13.3914C127.248 12.5725 127.676 11.4653 127.694 10.3407C127.711 9.07196 127.305 7.98197 126.437 7.11115C125.625 6.25186 124.637 5.8078 123.454 5.8078H117.107Z" fill="white" />
                     <path d="M165.039 2.82617V26.7939H161.919V8.06263L154.149 21.1076H153.744L145.974 8.09723V26.7939H142.82V2.82617H146.379L152.704 13.4202C153.264 14.3602 154.623 14.3602 155.183 13.4202L161.479 2.83194H165.039V2.82617Z" fill="white" />
                     <path d="M201.3 2.82617V3.77098H199.634V8.82617H198.65V3.77098H196.972V2.82617H201.3Z" fill="white" />
                     <path d="M207 2.82617V8.82617H206.015V4.55627L204.204 7.57462H204.095L202.283 4.54399V8.82617H201.299V2.82617H202.356L204.155 5.83231L205.954 2.82617H207Z" fill="white" />
                     <path d="M101.735 4.31372C98.9415 1.46481 95.3708 0.00576702 91.0173 0C86.6695 0.00576702 83.1044 1.46481 80.3106 4.31372C77.5168 7.16839 76.1514 10.6863 76.1514 15C76.1514 19.3137 77.5168 22.8316 80.3106 25.6863C83.1044 28.5352 86.6752 29.9942 91.023 30C95.3708 29.9942 98.9359 28.5352 101.73 25.6863C104.523 22.8316 105.895 19.3137 105.895 15C105.895 10.6863 104.529 7.16839 101.735 4.31372ZM99.4615 23.3276C97.2619 25.5479 94.4509 26.684 91.0287 26.6897C87.6007 26.684 84.7898 25.5479 82.5845 23.3276C80.3792 21.1015 79.3051 18.3622 79.3051 15C79.3051 11.6378 80.3792 8.89848 82.5845 6.67241C84.7841 4.45211 87.595 3.31603 91.0173 3.31026C94.4452 3.31603 97.2561 4.45211 99.4615 6.67241C101.661 8.89848 102.741 11.6378 102.741 15C102.741 18.3679 101.667 21.1073 99.4615 23.3276Z" fill="#56DAB0" />
                  </svg>
               </Link>
               <div className={`header_r ${activeBurger ? 'active' : ''}`}>
                  <Navigation closeBurger={closeBurger} />
                  <div className="header_btns">
                     <a href="https://app.squareup.com/appointments/buyer/widget/ajrcmyfzqm6qio/LVMDQHE5HPTQR" target="_blank" rel="nofollow norefferer" type="button" className="header_sign white">
                        <span>Reservation</span>
                        <div className="btn_bg"></div>
                     </a>
                     <button type="button" className="header_sign" onClick={() => openModal('Get in Touch', <ModalGet />)}>
                        <span>Get in touch</span>
                        <div className="btn_bg"></div>
                     </button>
                  </div>
               </div>
               <button className={`burger_btn ${activeBurger ? 'active' : ''}`} onClick={toggleBurger} aria-label="Кнопка меню">
                  <span></span>
               </button>
            </div>
         </div>
      </header >
   )
}

export default Header