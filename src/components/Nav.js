import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css';


function Nav() {

    const [ navbar, setNavbar ] = useState(false)


    function setFixed(){
        if (window.scrollY >= 392){
            setNavbar(true)
        }else{
            setNavbar(false)

        }
        
    }

    window.addEventListener('scroll', setFixed)
  return (
    <div>
    
        <div className={navbar ? 'navbar fixed' : 'navbar'}>
                <div className='logo'>
                    <li>
                        <Link to='/'>Joyce</Link>
                    </li>
                </div>
                <div className='menu'>
                    <ul className='item'>
                        <li>
                            <Link to='/ourstory'>Our story</Link>
                        </li>
                        <li>
                            <Link to='/membership'>Membership</Link>
                        </li>
                        <li>
                            <Link to='/write'>Write</Link>
                        </li>
                        <li>
                            <Link to='/signin'>Sign in</Link>
                        </li>
                        <li>
                            <Link className='button' to='/getstarted'>Getstarted</Link>
                        </li>
                    </ul>
                </div>
        </div>



    </div>
    
  )
}

export default Nav
