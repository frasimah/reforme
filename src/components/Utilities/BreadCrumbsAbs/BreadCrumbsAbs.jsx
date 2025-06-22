import './BreadCrumbsAbs.scss'
import { Link } from "react-router-dom";

function BreadCrumbsAbs({ link }) {
   return (
      <div className='breadcrumbs_abs'>
         <div className="container">
            <ul className='breadcrumbs_abs__list'>
               <li><Link to='/'>Main page</Link></li>
               <li><span>{link ? link : 'Contacts'}</span></li>
            </ul>
         </div>
      </div>
   );
}

export default BreadCrumbsAbs;