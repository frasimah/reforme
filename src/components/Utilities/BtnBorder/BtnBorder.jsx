import '../BtnBg/BtnBg.scss';
import { Link } from "react-router-dom";

function BtnBorder({ children, openModal, hoverColor, colorBtn, typeBtn, customClass, onClick, link }) {
   return (
      typeBtn === 'link' ? (
         <Link to={`${link}`} className={`btn_big border ${openModal ? 'open-modal' : ''} ${colorBtn} ${customClass}`} aria-label={children} target='_blank' rel='nofollow noreferrer'>
            <span>{children}</span>
            <div className={`btn_bg ${hoverColor}`}></div>
         </Link>
      ) : (
         <button onClick={onClick} type='button' className={`btn_big border ${openModal ? 'open-modal' : ''} ${colorBtn} ${customClass}`} aria-label={children}>
            <span>{children}</span>
            <div className={`btn_bg ${hoverColor}`}></div>
         </button>
      )
   );
}

export default BtnBorder;