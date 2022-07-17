import './Menu.css'
import logo from '../../assests/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import { useState } from "react"
import { CDropdown } from '@coreui/react'
import { CDropdownItem } from '@coreui/react'
import { CDropdownToggle } from '@coreui/react'

import { CDropdownMenu } from '@coreui/react'
import { CDropdownDivider } from '@coreui/react'
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";






export default function Navbar() {
   const [isNavExpanded, setIsNavExpanded] = useState(false)
   const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
 
   return (
    <aside className='menu-area'>
     <nav className=" navigation navbar navbar-expand-lg fixed-top navbar-dark menu">
       
       <Link to="/" className="logo navbar-brand">
            <img src = {logo} alt="logo"  />
            </Link>
       <button
         className="hamburger"
         onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}
       >
         {/* hamburger svg code... */}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
       </button>
       <div
         className={
           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
         }
       >
         <ul>
           <li>
             <Link to="/" className="menuStyle" onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}>
           <i className="fa fa-home" ></i> Home </Link>
           </li>
           <li>
           <Link to="/quem-somos" className="menuStyle" onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}>    
            <i className="fa fa-building"></i> Quem somos
           </Link>
           </li>
           <li onClick={toggleSubmenu} className="sub__menus__arrows" >           <Link to="/servicos" className="menuStyle" onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}>
            <i className="fa fa-briefcase"  onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}></i> Serviços <FiChevronDown /> 
          </Link>  
          {/* <ul className={boxClassSubMenu.join('')} > 
                            <li> <NavLink onClick={toggleClass}   to={`/Online`}> Mármore </NavLink> </li>
                            <li><NavLink onClick={toggleClass}  to={`/Offline`}>  Granito </NavLink> </li>
                        </ul> */}
          </li>
          <li>
          <a href="https://vagas.ersservicos.com.br/jobs" className="menuStyle" onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}>
          <i class="fa fa-users" aria-hidden="true"></i> Trabalhe conosco
            </a>
          </li>
          <li>
          


          <Link to="/orcamento" className="menuStyle" onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}>
          <i className="fa fa-handshake-o" ></i>  Orçamento
            </Link>        
                      
          </li>
          <li>
          <Link to="/contato" className="menuStyle" onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}>
           <i className="fa fa-envelope" ></i> Contato
            </Link>           
                      
          </li>
         </ul>
       </div>
     </nav>
     </aside>
   );
 }
        