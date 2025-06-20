import React, { useState } from 'react';
import BtnBg from "../../../Utilities/BtnBg/BtnBg";
import { useModal } from '../../../../utilities/ModalContext';
import ModalThx from './ModalThx';
import { PatternFormat } from 'react-number-format';

function ModalGet() {
   const { openModal } = useModal();
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      message: '',
      consent: false
   });

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
         ...formData,
         [name]: type === 'checkbox' ? checked : value,
      });
   };

   function submitHandler(event) {
      event.preventDefault();

      fetch("mail.php", {
         method: "POST",
         body: new FormData(event.target)
      })
         .then(response => response.json())
         .then(json => {
            if (json.Result === "Success") {
               openModal('', <ModalThx />)
            } else {
               console.error('Submission failed:', json.Message);
            }
         })
         .catch(error => {
            console.error('Error:', error);
         });
   }

   return (
      <form action='#' onSubmit={submitHandler} id="get_touch" method="post">
         <div className="modal_wrap__form">
            <div className="modal_input">
               <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
               />
               <div className="icon"></div>
            </div>
            <div className="modal_input">
               <PatternFormat
                  name='phone'
                  format="1-###-#######"
                  mask="_"
                  placeholder="Telephone"
                  required
                  customInput={(props) => (
                     <input
                        {...props}
                        pattern="\d{1}-\d{3}-\d{7}"
                     />
                  )}
               />
               <div className="icon"></div>
            </div>
            <div className="modal_area">
               <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
               ></textarea>
            </div>
            <div className="modal_check">
               <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="get_touch-check"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
               />
               <label htmlFor="get_touch-check">Consent for personal data processing</label>
            </div>
            <div className="modal_btn">
               <BtnBg
                  openModal={false}
                  colorBtn=""
                  hoverColor="green"
                  btnSub={true}
               >
                  Send
               </BtnBg>
            </div>
         </div>
      </form >
   );
}

export default ModalGet;
