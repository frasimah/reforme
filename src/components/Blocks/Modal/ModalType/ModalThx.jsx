import React from 'react';
import BtnBg from "../../../Utilities/BtnBg/BtnBg";
import { useModal } from '../../../../utilities/ModalContext';

function ModalThx() {
   const { closeModal } = useModal();

   return (
      <div className="thx_wrap">
         <div className="modal_wrap__title">
            Thank you! Your message has been sent successfully
         </div>
         <div className="btn_back">
            <BtnBg
               colorBtn=''
               hoverColor='green'
               onClick={closeModal}
            >
               Back to Reforme
            </BtnBg>
         </div>
      </div>

   );
}

export default ModalThx;
