import { nanoid } from 'nanoid';
import './ProtocolInCardBody.scss'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function ProtocolInCardBody({ contentBody, isAnimate }) {
   const bodyRef = useRef(null);
   useEffect(() => {
      if (!bodyRef) return
      const bodyCurrent = bodyRef.current

      if (!bodyCurrent) return
      const arrayBodyItems = Array.from(bodyCurrent.querySelectorAll('.protocol_in_card_body_item'))

      if (arrayBodyItems.length === 0) return

      if (isAnimate) {
         gsap.set(arrayBodyItems, {
            opacity: 0,
            y: -20
         })

         gsap.to(arrayBodyItems, {
            opacity: 1,
            y: 0,
            delay: .2,
            duration: .4,
            stagger: .1
         })
      } else {
         gsap.to(arrayBodyItems, {
            opacity: 1,
            y: 0,
         })
      }

   }, [isAnimate]);
   return (
      <div className="protocol_in_card_body" ref={bodyRef}>
         {contentBody.list.map(item => (
            <div className="protocol_in_card_body_item" key={nanoid(4)}>
               <div className="protocol_in_card_body_item_left">
                  <div className="protocol_in_card_body_item-title">
                     {item.title}
                  </div>
                  <div className="protocol_in_card_body_item-text">
                     {item.text}
                  </div>
               </div>
               <div className="protocol_in_card_body_item-time">
                  {item.time}
               </div>
            </div>
         ))}
         {contentBody.cost && contentBody.cost.length > 0 && (
            <div className="protocol_in_card_body-cost">{contentBody.cost}</div>
         )}
      </div>
   );
}

export default ProtocolInCardBody;