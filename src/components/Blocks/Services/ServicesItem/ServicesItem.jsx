import './ServicesItem.scss';
import { Link } from "react-router-dom";

function ServicesItem({ thisItem }) {

   const handleHover = (e) => {
      const item = e.currentTarget;
      const rect = item.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const thisCircle = item.querySelector('.service_page_item__circle');
      thisCircle.style.left = mouseX + 'px';
      thisCircle.style.top = mouseY + 'px';
   };
   return (
      <Link to={`${thisItem.link}`} className='service_page_item' onMouseMove={handleHover}>
         <h3 className='service_page_item__title'>{thisItem.title}</h3>
         <div className="service_page_item__text">
            <p>{thisItem.description}</p>
         </div>
         <div className="service_page_item__cost">{thisItem.cost}</div>
         <div className="service_page_item__btn">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="20" fill="white" />
                  <path d="M13.7358 20.0911L26.6904 19.6904M26.6904 19.6904L20.4262 26.7815M26.6904 19.6904L20 13" stroke="#2E2D2D" strokeWidth="1.4" strokeLinecap="square" />
               </svg>
            </div>
         </div>
         <div className="service_page_item__circle"></div>
      </Link>
   );
}

export default ServicesItem;