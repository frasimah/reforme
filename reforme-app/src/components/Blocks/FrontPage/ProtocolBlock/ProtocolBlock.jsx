import './ProtocolBlock.scss'
import ProtocolContent from './ProtocolContent/ProtocolContent';
import ProtocolHead from './ProtocolHead/ProtocolHead';

function ProtocolBlock() {
   return (
      <section className='protocol_block'>
         <div className="container">
            <div className="protocol_block_wrap">
               <ProtocolHead />
               <ProtocolContent />
            </div>
         </div>
      </section>
   );
}

export default ProtocolBlock;