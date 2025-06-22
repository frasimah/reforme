import './ProtocolCard.scss'

function ProtocolCard({ content, num, setShowProtocol, setIndex }) {
   return (
      <article className="protocol_card">
         <div className="protocol_card-num">
            (0{num + 1} Package)
         </div>
         <div className="protocol_card_content">
            <h3 className="protocol_card_content-title">{content.title}</h3>
            <div className="protocol_card_content-subtitle">
               {content.subtitle}
            </div>
         </div>
         <div className="protocol_card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
               <rect width={30} height={30} rx={15} fill="white" />
               <path d="M11.0276 15.4967L19.2426 15.2426M19.2426 15.2426L15.2703 19.7394M19.2426 15.2426L15 11" stroke="#2E2D2D" strokeWidth="1.4" strokeLinecap="square" />
            </svg>
         </div>
         <div className="protocol_card-bg">
            <img src='./img/FrontPage/packages/card-bg.jpg' alt="#" />
         </div>
         <button
            type='button'
            className='protocol_card-btn'
            onClick={() => {
               setShowProtocol({
                  firstLoad: true,
                  otherLoad: true
               });
               setIndex(num);
            }}></button>
      </article>
   );
}

export default ProtocolCard;