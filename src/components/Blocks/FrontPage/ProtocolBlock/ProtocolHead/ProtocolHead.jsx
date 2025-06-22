import './ProtocolHead.scss'

function ProtocolHead() {
   return (
      <>
         <div className="protocol_head">
            <div className="protocol_head-subtitle">REFORME CORE PROTOCOLS</div>
            <h2 className="protocol_head-title">
               The Power of Protocols
            </h2>
            <div className="protocol_head-text">
               <p>
                  At&nbsp;Reforme, we&nbsp;believe high-performing individuals deserve a&nbsp;smarter,
                  more effective way to&nbsp;elevate their well-being. That&rsquo;s why our Core Protocols are designed to&nbsp;help you perform at&nbsp;your best, recover faster, stay balanced, and look and feel your best.
               </p>
               <p>
                  Each protocol integrates targeted high-impact therapies that work together
                  to&nbsp;deliver precise, visible results, because reaching your goals should
                  be&nbsp;seamless and about how you function and feel.
               </p>
            </div>
            <div className="protocol_head_message">
               <div className="protocol_head_message-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                     <rect x={30} width={30} height={30} rx={15} transform="rotate(90 30 0)" fill="#56DAB0" style={{ mixBlendMode: 'plus-darker' }} />
                     <path d="M14.5033 11.0276L14.7574 19.2426M14.7574 19.2426L10.2606 15.2703M14.7574 19.2426L19 15" stroke="white" strokeWidth="1.4" strokeLinecap="square" />
                  </svg>
               </div>
               <div className="protocol_head_message-text">
                  Find the protocol that fits your goals <br />
                  and start your transformation today
               </div>
            </div>
         </div>
      </>
   );
}

export default ProtocolHead;