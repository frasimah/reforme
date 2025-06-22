import React from "react";
import './Navigation.scss';
import { Link } from "react-router-dom";

const Navigation = ({ closeBurger }) => {

   const handleLinkClick = () => {
      if (typeof closeBurger === "function") {
         setTimeout(() => {
            closeBurger();
         }, 600);
      }
   };

   return (
      <nav>
         <ul>
            <li>
               <Link to="/services" onClick={handleLinkClick}>
                  Services
               </Link>
            </li>
            <li>
               <Link to="/menu" onClick={handleLinkClick}>
                  Menu
               </Link>
            </li>
            <li>
               <Link to="/contacts" onClick={handleLinkClick}>
                  Contacts
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
