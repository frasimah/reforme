import BtnBg from '../../../../../Utilities/BtnBg/BtnBg';
import './ProtocolInCard.scss'
import ProtocolInCardBody from './ProtocolInCardBody/ProtocolInCardBody';
import ProtocolInCardHead from './ProtocolInCardHead/ProtocolInCardHead';

function ProtocolInCard({ content, setShowProtocol, index, className, isAnimate }) {

   return (
      <div className={`protocol_in_card ${className ? className : ''}`}>
         <div className="protocol_in_card_head-num">(0{index + 1} Package)</div>
         <button type='button' className='protocol_in_card_head-back'
            onClick={() => setShowProtocol({
               firstLoad: true,
               otherLoad: false
            })}>
            <div className="icon">
               <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                  <path d="M13 7L1 7M1 7L6.64706 13M1 7L6.64706 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            <span>Back</span>
         </button>
         <div className="protocol_in_card_wrap">
            <ProtocolInCardHead
               content={content}
               setShowProtocol={setShowProtocol}
               index={index}
            />
            <ProtocolInCardBody
               contentBody={content}
               isAnimate={isAnimate}
            />
         </div>
         <div className="protocol_in_card-btn">
            <BtnBg
               colorBtn='white'
               hoverColor='green'
               typeBtn={'link'}
               customClass="protocol_in_card-btn-el"
               link={content?.link}
            >
               Select package
               <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                     <path d="M1 7L13 7M13 7L7.35294 1M13 7L7.35294 13" stroke="#2E2D2D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
            </BtnBg>
         </div>
         <div className="protocol_in_card-bg">
         </div>
      </div>
   );
}

export default ProtocolInCard;