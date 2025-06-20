import { nanoid } from 'nanoid';
import BtnBg from '../../../../../../Utilities/BtnBg/BtnBg';
import './ProtocolInCardHead.scss'

function ProtocolInCardHead({ content, setShowProtocol, index }) {

   return (
      <div className="protocol_in_card_head">
         <div className="protocol_in_card_head_content">
            <div className="protocol_in_card_head_content-title">
               {content.title}
            </div>
            <div className="protocol_in_card_head_content-text">
               <p>
                  What's included
               </p>
            </div>
         </div>
      </div>
   );
}

export default ProtocolInCardHead;