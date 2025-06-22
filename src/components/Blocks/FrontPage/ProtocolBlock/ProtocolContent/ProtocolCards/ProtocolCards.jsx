import './ProtocolCards.scss'
import { nanoid } from "nanoid";
import ProtocolCard from "./ProtocolCard/ProtocolCard";

function ProtocolCards({ setShowProtocol, setIndex, className }) {

   const dataCardContent = [
      {
         title: 'Runner’s Recovery',
         subtitle: 'Recharge fully for lasting strength',
         imgBgLink: './img/FrontPage/protocol/card1.jpg',
         link: '#'
      },
      {
         title: 'Glow & Go',
         subtitle: 'Radiate confidence with a touch of brilliance',
         imgBgLink: './img/FrontPage/protocol/card2.jpg',
         link: '#'
      },
      {
         title: 'Jet Lag Revival',
         subtitle: 'Restore your rhythm, revive your glow',
         imgBgLink: './img/FrontPage/protocol/card3.jpg',
         link: '#'
      },
      {
         title: 'Red Carpet Package',
         subtitle: 'Unlock your power for peak performance.',
         imgBgLink: './img/FrontPage/protocol/card4.jpg',
         link: '#'
      },
      {
         title: 'Sculpt & Contour',
         subtitle: 'Rejuvenate deeply for vibrant beauty that lasts',
         imgBgLink: './img/FrontPage/protocol/card4.jpg',
         link: '#'
      },
      {
         title: 'Weekend Reset Package',
         subtitle: 'Balance your body and mind for daily vitality',
         imgBgLink: './img/FrontPage/protocol/card4.jpg',
         link: '#'
      }
   ]
   return (
      <div className={`protocol_cards ${className ? className : ''}`}>
         <div className="row">
            {dataCardContent.map((item, index) => (
               <div className="col-md-4 col-6" key={nanoid(4)}>
                  <ProtocolCard content={item} num={index} setShowProtocol={setShowProtocol} setIndex={setIndex} />
               </div>
            ))}
         </div>
      </div>
   );
}

export default ProtocolCards;