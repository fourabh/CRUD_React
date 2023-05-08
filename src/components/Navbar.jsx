import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container' >
        <ul>
            <li>
                {/* <NavLink to="/" > */}
                    Home
                {/* </NavLink> */}
            </li>
            <li>
                {/* <NavLink to="/about" > */}
                    About
                {/* </NavLink> */}
            </li>
            <li>
                {/* <NavLink to="/contact" > */}
                    Contact
                {/* </NavLink> */}
            </li>
           <li>
                {/* <NavLink to="Services" > */}
                    Services
                {/* </NavLink> */}
           </li>
            
        </ul>
    </div>
  )
}

export default Navbar
