import { Link, useLocation } from 'react-router-dom';
import './ModalBanner.scss'
import { useEffect, useState } from 'react';

function ModalBanner() {

   const location = useLocation();
   const [isShowModal, setIsShowModal] = useState(false)

   // Отобразить модалку
   const showModal = () => {
      setIsShowModal(true)
   }

   // Закрыть модалку
   const handleCloseModal = () => {
      setIsShowModal(false)
   }
   const handleCloseModalTimeout = () => {
      setTimeout(() => {
         setIsShowModal(false)
      }, 500);
   }

   const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal_banner')) {
         handleCloseModal();
      }
   }

   useEffect(() => {
      if (location.pathname != '/iyashi-d%C3%B4me-japanese-sauna')
         setTimeout(() => {
            showModal()
         }, 10000);
   }, []);

   // useEffect(() => {
   //    const html = document.querySelector('html')
   //    if (isShowModal) {
   //       html.classList.add('overflow-hidden')
   //    } else {
   //       html.classList.remove('overflow-hidden')
   //    }
   // }, [isShowModal]);

   return (
      <div className={`modal_banner ${isShowModal ? 'active' : ''}`} onClick={handleClickOutside}>
         <div className="modal_banner_wrap">
            <button type='button' aria-label='Закрыть модальное окно' className="modal_banner-close" onClick={handleCloseModal}>
               <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1.00004" stroke="#848685" strokeWidth={2} strokeLinecap="round" />
                  <path d="M1 1L13 13" stroke="#848685" strokeWidth={2} strokeLinecap="round" />
               </svg>
            </button>
            <div className="modal_banner_wrap-left">
               <div className="modal_banner_wrap-img">
                  <img src="./img/modal-img.jpg" alt="" />
               </div>
            </div>
            <div className="modal_banner_wrap-right">
               <div className="modal_banner_wrap_content">
                  <div className="modal_banner_wrap_content-message">
                     DID YOU KNOW
                  </div>
                  <div className="modal_banner_wrap_content-title">
                     Iyashi Dome <br /> Japanese Sauna
                  </div>
                  <div className="modal_banner_wrap_content-text">
                     <p>
                        Reforme is the only destination
                        in the country where you can unlock the ancient, healing power of the Iyashi Dôme Japanese Sauna
                     </p>
                  </div>
                  <div className="modal_banner_wrap_content-subtext">
                     <p>
                        Deep detoxification / Сellular regeneration / Anti-aging and skin rejuvenation / Improved sleep /  Relaxation
                     </p>
                  </div>
                  <div className="modal_banner_wrap_content_btn">
                     <Link to={'/iyashi-dôme-japanese-sauna'} className="modal_banner_wrap_content-btn" onClick={handleCloseModalTimeout}>
                        <div className="icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width={31} height={30} viewBox="0 0 31 30" fill="none">
                              <rect x="0.641602" width={30} height={30} rx={15} fill="#56DAB0" />
                              <path d="M11.6693 15.4967L19.8842 15.2426M19.8842 15.2426L15.9119 19.7394M19.8842 15.2426L15.6416 11" stroke="#2E2D2D" strokeWidth="1.4" strokeLinecap="square" />
                           </svg>
                        </div>
                        <span>
                           Learn more
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}

export default ModalBanner;