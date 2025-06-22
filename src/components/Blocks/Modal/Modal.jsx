import React from "react";
import './Modal.scss';

function Modal({ isOpen, title, content, onClose }) {

   const handleBackgroundClick = (e) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   const handleHover = (e) => {
      const item = e.currentTarget;
      const rect = item.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const thisCircle = item.querySelector('.circle')
      console.log();
      thisCircle.style.left = mouseX + 'px'
      thisCircle.style.top = mouseY + 'px'
   };


   return (
      <div className={`modal_block ${isOpen ? "active" : ''}`} onClick={handleBackgroundClick}>
         <div className="modal_wrap" onMouseMove={handleHover}>
            <button className="modal_wrap__close close-modal" onClick={onClose}>
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 15L15 1.00005" stroke="#848685" strokeWidth="2" strokeLinecap="round" />
                  <path d="M1 1L15 15" stroke="#848685" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </button>
            {title.length > 1 ? (
               <div className="modal_wrap__title">
                  {title}
               </div>
            ) : <></>}
            {content}
            <div className="circle"></div>
         </div>
      </div>
   )
}

export default Modal