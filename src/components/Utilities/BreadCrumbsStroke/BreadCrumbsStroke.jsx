import './BreadCrumbsStroke.scss'
import { Link } from "react-router-dom";

function BreadCrumbsStroke() {
   return (
      <div className='breadcrumbs_stroke'>
         <div className="container">
            <ul className="breadcrumbs_stroke__wrap">
               <li><Link to="/">Main page</Link></li>
               <li><span>Services</span></li>
            </ul>
         </div>
      </div>
   );
}

export default BreadCrumbsStroke;