import './BtnBg.scss';
import { Link } from "react-router-dom";

function BtnBg({ children, hoverColor, colorBtn, typeBtn, customClass, btnSub, onClick, link, target }) {
   return (
      typeBtn === 'link' ? (
         <Link to={`${link}`} className={`btn_big ${colorBtn} ${customClass}`} target={`${target ? '_self' : '_blank'}`} aria-label={children} rel='nofollow noreferrer'>
            <span>{children}</span>
            <div className={`btn_bg ${hoverColor}`}></div>
         </Link>
      ) : (
         <button onClick={onClick} type={btnSub ? "submit" : "button"} className={`btn_big ${colorBtn} ${customClass}`} aria-label={children}>
            <span>{children}</span>
            <div className={`btn_bg ${hoverColor}`}></div>
         </button>
      )
   );
}

export default BtnBg;