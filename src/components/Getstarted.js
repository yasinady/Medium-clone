import React from 'react'
import { Link } from "react-router-dom";
import './styles/Getstarted.css'


function Getstarted() {
  return (
    <div className='container'>
       <div className='logo'>
            <li>
                 <Link to="/">Medium</Link>
            </li>
       </div>

       <nav className='navbar'>
            <ul className='ul'>
                
                <li>
                    <Link to="/ourstory">Our story</Link>
                </li>
                <li>
                    <Link to="/membership">Membership</Link>
                </li>
                <li>
                    <Link to="/write">Write</Link>
                </li>
                <li>
                    <Link to="/signin">Signin</Link>
                </li>
                <li>
                    <Link className='nav-btn' to="/getstarted">Get started</Link>
                </li>
            </ul>
       </nav>
    </div>
  )
}

export default Getstarted
